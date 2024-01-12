"""
Utilities to back up a container.
"""

import datetime
import logging
import random
import shutil
import sqlite3
import string
import subprocess
import tempfile
from pathlib import Path
from typing import Callable, Optional

from disk_objectstore.container import Container

logging.basicConfig(format="%(levelname)s:%(message)s")
backup_logger = logging.getLogger(__name__)


class BackupError(Exception):
    "Raised when backup fails."


def split_remote_and_path(dest: str):
    """extract remote and path from <remote>:<path>"""
    split_dest = dest.split(":")
    if len(split_dest) == 1:
        return None, Path(dest)
    if len(split_dest) == 2:
        return split_dest[0], Path(split_dest[1])
    # more than 1 colon:
    raise ValueError("Invalid destination format: <remote>:<path>")


def is_exe_found(exe: str) -> bool:
    return shutil.which(exe) is not None


class BackupManager:
    """
    Class that contains all configuration and utility functions to create
    backups except for the backup function itself, which is passed in according
    to what is backed up (e.g. the disk-objectstore container in for this repo,
    or the whole aiida storage in aiida-core)
    """

    def __init__(
        self,
        dest: str,
        logger: logging.Logger,
        keep: int = 1,
        exes: Optional[dict] = None,
    ) -> None:
        self.dest = dest
        self.keep = keep
        self.logger = logger
        self.remote, self.path = split_remote_and_path(dest)

        if exes is None:
            self.exes = {}
        else:
            self.exes = exes

        # make sure rsync gets added so it gets validated
        if "rsync" not in self.exes:
            self.exes["rsync"] = "rsync"

        # Validate the backup config inputs

        if self.keep < 0:
            raise ValueError(
                "Input validation failed: keep variable can't be negative!"
            )

        if self.remote:
            self.check_if_remote_accessible()

        if self.exes:
            for _, path in self.exes.items():
                if not is_exe_found(path):
                    raise ValueError(f"Input validation failed: {path} not accessible.")

        if not self.check_path_exists(self.path):
            success = self.run_cmd(["mkdir", str(self.path)])[0]
            if not success:
                raise ValueError(
                    f"Input validation failed: Couldn't access/create '{str(self.path)}'!"
                )

    def check_if_remote_accessible(self):
        """Check if remote host is accessible via ssh"""
        self.logger.info(f"Checking if '{self.remote}' is accessible...")
        success = self.run_cmd(["exit"])[0]
        if not success:
            raise BackupError(f"Remote '{self.remote}' is not accessible!")
        self.logger.info("Success! '%s' is accessible!", self.remote)

    def check_path_exists(self, path: Path) -> bool:
        cmd = ["[", "-e", str(path), "]"]
        return self.run_cmd(cmd)[0]

    def run_cmd(
        self,
        args: list,
    ):
        """
        Run a command locally or remotely.
        """
        all_args = args[:]
        if self.remote:
            all_args = ["ssh", self.remote] + all_args

        res = subprocess.run(all_args, capture_output=True, text=True, check=False)

        self.logger.debug(
            f"Command: {all_args}\n"
            f"  Exit Code: {res.returncode}\n"
            f"  stdout/stderr: {res.stdout}\n{res.stderr}"
        )

        success = res.returncode == 0

        return success, res.stdout

    def call_rsync(  # pylint: disable=too-many-arguments
        self,
        src: Path,
        dest: Path,
        link_dest: Optional[Path] = None,
        src_trailing_slash: bool = False,
        dest_trailing_slash: bool = False,
        extra_args: Optional[list] = None,
    ):
        """Call rsync with specified arguments and handle possible errors & stdout/stderr

        :param link_dest:
            Path to the hardlinked files location (previous backup).

        :param src_trailing_slash:
            Add a trailing slash to the source path. This makes rsync copy the contents
            of the folder instead of the folder itself.

        :param dest_trailing_slash:
            Add a trailing slash to the destination path. This makes rsync interpret the
            destination as a folder and create it if it doesn't exists.

        """

        assert "rsync" in self.exes

        all_args = [self.exes["rsync"], "-azh", "-vv", "--no-whole-file"]
        if extra_args:
            all_args += extra_args
        if link_dest:
            if not self.remote:
                # for local paths, use resolve() to get absolute path
                link_dest = link_dest.resolve()
            all_args += [f"--link-dest={link_dest}"]

        if src_trailing_slash:
            all_args += [str(src) + "/"]
        else:
            all_args += [str(src)]

        dest_str = str(dest)
        if dest_trailing_slash:
            dest_str += "/"

        if not self.remote:
            all_args += [dest_str]
        else:
            all_args += [f"{self.remote}:{dest_str}"]

        res = subprocess.run(all_args, capture_output=True, text=True, check=False)

        self.logger.debug(
            "Command: %s\n  Exit Code: %s\n  stdout/stderr: %s\n%s",
            str(all_args),
            res.returncode,
            res.stdout,
            res.stderr,
        )

        if res.returncode != 0:
            raise BackupError(f"rsync failed for: {str(src)} to {str(dest)}")

    # ----
    # Utilities to manage multiple folders of backups, e.g. hard-linking to previous backup;
    # deleting old backups.
    # ----

    def get_existing_backup_folders(self):
        """Get all folders matching the backup folder name pattern."""
        success, stdout = self.run_cmd(
            [
                "find",
                str(self.path),
                "-maxdepth",
                "1",
                "-type",
                "d",
                "-name",
                "backup_*_*",
                "-print",
            ]
        )

        if not success:
            raise BackupError("Existing backups determination failed.")

        return stdout.splitlines()

    def get_last_backup_folder(self):
        """Get the latest backup folder, if it exists."""
        existing_backups = self.get_existing_backup_folders()
        return Path(sorted(existing_backups)[-1]) if existing_backups else None

    def delete_old_backups(self):
        """Get all folders matching the backup pattern, and delete oldest ones."""
        sorted_folders = sorted(self.get_existing_backup_folders())
        to_delete = sorted_folders[: -(self.keep + 1)]
        for folder in to_delete:
            success = self.run_cmd(["rm", "-rf", folder])[0]
            if success:
                self.logger.info(f"Deleted old backup: {folder}")
            else:
                self.logger.warning("Warning: couldn't delete old backup: %s", folder)

    def backup_auto_folders(self, backup_func: Callable) -> None:
        """Create a backup, managing live and previous backup folders automatically

        The running backup is done to `<path>/live-backup`. When it completes, it is moved to
        the final path: `<path>/backup_<timestamp>_<randstr>`. If the filesystem supports it,
        the symlink `<path>/last-backup` is added to point to the last backup.
        Rsync `link-dest` is used to keep the backups incremental and performant.

        :param backup_func:
            Function that is used to make a single backup. Needs to have two arguments: path and
            previous_backup location (which can be None).

        """

        live_folder = self.path / "live-backup"

        last_folder = self.get_last_backup_folder()

        if last_folder:
            self.logger.info(
                f"Last backup is '{str(last_folder)}', using it for rsync --link-dest."
            )
        else:
            self.logger.info("Couldn't find a previous backup to increment from.")

        backup_func(
            live_folder,
            last_folder,
        )

        # move live-backup -> backup_<timestamp>_<randstr>
        timestamp = datetime.datetime.now(datetime.timezone.utc).strftime(
            "%Y%m%d%H%M%S"
        )
        randstr = "".join(random.choices(string.ascii_lowercase + string.digits, k=4))
        folder_name = f"backup_{timestamp}_{randstr}"

        success = self.run_cmd(["mv", str(live_folder), str(self.path / folder_name)])[
            0
        ]
        if not success:
            raise BackupError(
                f"Failed to move '{str(live_folder)}' to '{str(self.path / folder_name)}'"
            )

        self.logger.info(
            f"Backup moved from '{str(live_folder)}' to '{str(self.path / folder_name)}'."
        )

        symlink_name = "last-backup"
        success = self.run_cmd(
            ["ln", "-sfn", str(folder_name), str(self.path / symlink_name)]
        )[0]
        if not success:
            self.logger.warning(
                f"Couldn't create symlink '{symlink_name}'. Perhaps the filesystem doesn't support it."
            )
        else:
            self.logger.info(f"Added symlink '{symlink_name}' to '{folder_name}'.")

        self.delete_old_backups()


def _sqlite_backup(src: Path, dst: Path):
    """
    Safe way to make a backup of the sqlite db, while it might potentially be accessed
    https://docs.python.org/3/library/sqlite3.html#sqlite3.Connection.backup
    """
    src_connect = sqlite3.connect(str(src))
    dst_connect = sqlite3.connect(str(dst))
    with dst_connect:
        src_connect.backup(dst_connect)
    dst_connect.close()
    src_connect.close()


def backup_container(
    manager: BackupManager,
    container: Container,
    path: Path,
    prev_backup: Optional[Path] = None,
) -> None:
    """Create a backup of the disk-objectstore container

    This is safe to perform when the container is being used.

    It should be done in the following order:
        1) loose files;
        2) sqlite database;
        3) packed files.

    """

    container_root_path = container.get_folder()
    loose_path = container._get_loose_folder()  # pylint: disable=protected-access
    packs_path = container._get_pack_folder()  # pylint: disable=protected-access
    sqlite_path = container._get_pack_index_path()  # pylint: disable=protected-access

    # step 1: back up loose files
    loose_path_rel = loose_path.relative_to(container_root_path)
    prev_backup_loose = prev_backup / loose_path_rel if prev_backup else None

    manager.call_rsync(loose_path, path, link_dest=prev_backup_loose)
    manager.logger.info(f"Transferred {str(loose_path)} to {str(path)}")

    # step 2: back up sqlite db

    # make a temporary directory to dump sqlite db locally
    with tempfile.TemporaryDirectory() as temp_dir_name:
        sqlite_temp_loc = Path(temp_dir_name) / "packs.idx"
        _sqlite_backup(sqlite_path, sqlite_temp_loc)

        if sqlite_temp_loc.is_file():
            manager.logger.info(f"Dumped the SQLite database to {str(sqlite_temp_loc)}")
        else:
            raise BackupError(f"'{str(sqlite_temp_loc)}' failed to be created.")

        # step 3: transfer the SQLITE database file
        manager.call_rsync(sqlite_temp_loc, path, link_dest=prev_backup)
        manager.logger.info(f"Transferred SQLite database to {str(path)}")

    # step 4: transfer the packed files
    packs_path_rel = packs_path.relative_to(container_root_path)
    manager.call_rsync(packs_path, path, link_dest=prev_backup)
    manager.logger.info(f"Transferred {str(packs_path)} to {str(path)}")

    # step 5: transfer anything else in the container folder
    manager.call_rsync(
        container_root_path,
        path,
        link_dest=prev_backup,
        src_trailing_slash=True,
        extra_args=[
            "--exclude",
            str(loose_path_rel),
            "--exclude",
            "packs.idx",
            "--exclude",
            str(packs_path_rel),
        ],
    )
