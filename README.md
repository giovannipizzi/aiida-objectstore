# disk-objectstore

An implementation of an efficient object store that writes directly on disk
and does not require a server running.

|    | |
|-----|----------------------------------------------------------------------------|
|Latest release| [![PyPI version](https://badge.fury.io/py/disk-objectstore.svg)](https://badge.fury.io/py/disk-objectstore) [![PyPI pyversions](https://img.shields.io/pypi/pyversions/disk-objectstore.svg)](https://pypi.python.org/pypi/disk-objectstore/) |
|Build status| [![Build Status](https://github.com/giovannipizzi/disk-objectstore/workflows/Continuous%20integration/badge.svg)](https://github.com/giovannipizzi/disk-objectstore/actions) [![Supported platforms](https://img.shields.io/badge/Supported%20platforms-windows%20%7c%20macos%20%7c%20linux-1f425f.svg)](https://github.com/giovannipizzi/disk-objectstore/actions) [![Coverage Status](https://codecov.io/gh/giovannipizzi/disk-objectstore/branch/develop/graph/badge.svg)](https://codecov.io/gh/giovannipizzi/disk-objectstore) [Performance benchmarks](https://giovannipizzi.github.io/disk-objectstore/dev/bench/) |


## Goal

The goal of this project is to have a very efficient implementation of an "object store"
that works directly on a disk folder, does not require a server to run, and addresses
a number of performance issues, discussed also below.

This project targets objects that range from very few bytes up to tens of GB each, with
performance tuned to support tens of millions of objects or more.

This project originated from the requirements needed by an efficient repository
implementation in [AiiDA](http://www.aiida.net) (note, however, that this
package is completely independent of AiiDA).

## How to install
To install, run:
```
pip install disk-objectstore
```

To install in development mode, run, after checking out, in a (python 3) virtual environment:
```
pip install -e .[dev]
```

## Basic usage

Let us run a quick demo of how to store and retrieve objects in a container:

```python
from disk_objectstore import Container

# Let's create a new container in the local folder `temp_container`, and initialise it
container = Container('temp_container')
container.init_container(clear=True)

# Let's add two objects
hash1 = container.add_object(b'some_content')
hash2 = container.add_object(b'some_other_content')

# Let's look at the hashes
print(hash1)
# Output: 6a96df63699b6fdc947177979dfd37a099c705bc509a715060dbfd3b7b605dbe
print(hash2)
# Output: cfb487fe419250aa790bf7189962581651305fc8c42d6c16b72384f96299199d

# Let's retrieve the objects from the hash
container.get_object_content(hash1)
# Output: b'some_content'
container.get_object_content(hash2)
# Output: b'some_other_content'

# Let's add a new object with the same content of an existing one: it will get the same
# hash and will not be stored twice
hash1bis = container.add_object(b'some_content')
assert hash1bis == hash1

# Let's pack all objects: instead of having a lot of files, one per object, all objects
# are written in a few big files (great for performance, e.g. when using rsync) +
# internally a SQLite database is used to know where each object is in the pack files
container.pack_all_loose()

# After packing, everthing works as before
container.get_object_content(hash2)
# Output: b'some_other_content'

# This third object will be stored as loose
hash3 = container.add_object(b'third_content')
```


## Advanced usage
This repository is designed both for performance and for having a low memory footprint.
Therefore, it provides bulk operations and the possibility to access objects as streams.
We **strongly suggest** to use these methods if you use the `disk-objecstore` as a library,
unless you are absolutely sure that objects always fit in memory, and you never have to
access tens of thousands of objects or more.

### Bulk access
We continue from the commands of the basic usage. We can get the content of more objects at once:
```python
container.get_objects_content([hash1, hash2])
# Output: {'6a96df63699b6fdc947177979dfd37a099c705bc509a715060dbfd3b7b605dbe': b'some_content',  'cfb487fe419250aa790bf7189962581651305fc8c42d6c16b72384f96299199d': b'some_other_content'}
```
For many objects (especially if they are packed), retrieving in bulk can give orders-of-magnitude speed-up.

### Using streams
#### Interface
First, let's look at the interface:
```python
with container.get_object_stream(hash1) as stream:
    print(stream.read())
# Output: b'some_content'
```
For bulk access, the syntax is a bit more convoluted (the reason is efficiency, as discussed below):
```python
with container.get_objects_stream_and_meta([hash3, hash1, hash2]) as triplets:
    for hashkey, stream, meta in triplets:
        print("Meta for hashkey {}: {}".format(hashkey, meta))
        print("  Content: {}".format(stream.read()))
```
whose output is:
```
Meta for hashkey 6a96df63699b6fdc947177979dfd37a099c705bc509a715060dbfd3b7b605dbe: {'type': 'packed', 'size': 12, 'pack_id': 0, 'pack_compressed': False, 'pack_offset': 0, 'pack_length': 12}
  Content: b'some_content'
Meta for hashkey cfb487fe419250aa790bf7189962581651305fc8c42d6c16b72384f96299199d: {'type': 'packed', 'size': 18, 'pack_id': 0, 'pack_compressed': False, 'pack_offset': 12, 'pack_length': 18}
  Content: b'some_other_content'
Meta for hashkey d1e4103ce093e26c63ce25366a9a131d60d3555073b8424d3322accefc36bf08: {'type': 'loose', 'size': 13, 'pack_id': None, 'pack_compressed': None, 'pack_offset': None, 'pack_length': None}
  Content: b'third_content'
```

**IMPORTANT NOTE**: As you see above, the order of the triplets **IS NOT** the order in which you passed the hash keys to
`get_objects_stream_and_meta`. The reason is efficiency: the library will try to keep a (pack) file open as long as possible, and read it in order, to exploit efficiently disk caches.

#### Memory-savvy approach
If you don't know the size of the object, you don't want to just call `stream.read()` (you could have just called `get_object_content()` in that case!) because if the object does not fit in memory, your application will crash.
You will need to read it in chunks and process it chunk by chunk.

A very simple pattern:
```python
# The optimal chunk size depends on your application and needs some benchmarking
CHUNK_SIZE = 100000
with container.get_object_stream(hash1) as stream:
    chunk = stream.read(CHUNK_SIZE)
    while chunk:
        # process chunk here
        # E.g. write to a different file, pass to a method to compress it, ...
        chunk = stream.read(CHUNK_SIZE)
```
You can find various examples of this pattern in the utility wrapper classes in `disk_objectstore.utils`.

Note also that if you use `get_objects_stream_and_meta`, you can use `meta['size']` to know the size
of the object before starting to read, so you can e.g. simply do a `.read()` if you know the size is small.

## Packing
As said above, from the user point of view, accessing a `Container` where objects are all loose, all packed, or partially loose and partially packed, does not change anything from the user-interface point of view, but performance might improve a lot after packing.

Note that only one process can pack (or write in packs in general) at a given time, while any number of
processes can write concurrently loose objects, and read objects (both loose and packed).

The continuous integration tests check also that any number of processes can continue to write concurrently loose objects and read from packs even while a *single process* is performing the packing operation.

Finally, in specific applications (for which you have to write a lot of objects, and you know that there
are no concurrent processes accessing the packs) you can directly write to the packs for performance reasons.

The interface is the following:
```python
container.add_objects_to_pack([b'obj1', b'obj2'])
# Output: ['7e485fc048df85f62cb1ec17174072380519e3064a0510ec00daaa381a680942', '71d00f404e92546cba0e69b27b13394af4592e4da22bf24c58a95ec3f4f45584']
```
or, better, for big objects using streams, you can use `add_streamed_objects_to_pack`.

As an example, let's create two files:
```python
with open('file1.txt', 'wb') as fhandle:
    fhandle.write(b'file1content')
with open('file2.txt', 'wb') as fhandle:
    fhandle.write(b'file2content')
```

Now you can exploit the `LazyOpener` wrapper to lazily create handles to files, that are actually open only when accessed.
Let's now add their content to the `Container`, in a way that works even for TB files without filling up all your RAM:
```python
from disk_objectstore.utils import LazyOpener

container.add_streamed_objects_to_pack([LazyOpener('file1.txt'), LazyOpener('file2.txt')], open_streams=True)
```
Output:
```
['ce3e75d02effb66eda58779e3b0f9e454aad218b9d5a38903a105f177f2dde23' 'eeeb27c2f0348e327ec8e66e7f5667798df601e6d1c62209dde749d370732a48']
```
Note that we use the `LazyOpener` here, because there is an operating-system limit on the number of
open files you can have at the same time (and this limit is quite low e.g. on Mac OS). The snippet above works with any number of files thanks to the use of the `LazyOpener` and the fact that `add_streamed_objects_to_pack()` will open the files only when needed (thanks to the `open_streams=True` parameter) and close them as soon as not needed anymore.

If you instead don't need to "open" the streams, but you can just call `.read(SIZE)` on them,
you can simply do:
```python
from io import BytesIO
stream1 = BytesIO(b'file1content')
stream2 = BytesIO(b'file2content')
container.add_streamed_objects_to_pack([stream1, stream2])
```
which has the same output as before.
Note that this is just to demonstrate the interface: the `BytesIO` object will store the whole data in memory!

## Implementation considerations

This implementation, in particular, addresses the following aspects:

- objects are written, by default, in loose format. They are also uncompressed.
  This gives maximum performance when writing a file, and ensures that many writers
  can write at the same time without data corruption.

- the key of the object is its hash key. While support for multiple types of cryptographically
  strong hash keys is trivial, in the current version only `sha256` is used.
  The package assumes that there will never be hash collision.
  At a small cost for computing the hash (that is anyway small, see performance tests)
  one gets automatic de-duplication of objects written in the object store (git does something very
  similar).
  In addition, it automatically provides a way to check for corrupted data.

- loose objects are stored in a one-level sharding format: `aa/bbccddeeff00...`
  where `aabbccddeeff00...` is the hash key of the file.
  Current experience (with AiiDA) shows that it's actually not so good to use two
  levels of nesting.
  And anyway when there are too many loose objects, the idea
  is that we will pack them in few files (see below).
  The number of characters in the first part can be chosen, but a good compromise is
  2 (default, also used by git).

- for maximum performance, loose objects are simply written as they are,
  without compression.
  They are actually written first to a sandbox folder (in the same filesystem),
  and then moved in place with the correct key (being the hash key) only when the file is closed.
  This should prevent having leftover objects if the process dies, and
  the move operation should be hopefully a fast atomic operation on most filesystems.

- When the user wants, loose objects are repacked in a few pack files. Indeed,
  just the fact of storing too many files is quite expensive
  (e.g. storing 65536 empty files in the same folder took over 3 minutes to write
  and over 4 minutes to delete on a Mac SSD). This is the main reason for implementing
  this package, and not just storing each object as a file.

- packing can be triggered by the user periodically.

  **Note**: only one process can act on packs at a given time.

  **Note**: while the goal is to make it possible to pack while the object store
  is in use (possibly only with a temporary impact read performance), this is not
  yet supported (see discussion in [#4](https://github.com/giovannipizzi/disk-objectstore/issues/4)).

  This packing operation takes all loose objects and puts them together in packs.
  Pack files are just concatenation of bytes of the packed objects. Any new object
  is appended to the pack (thanks to the efficiency of opening a file for appending).
  The information for the offset and length of each pack is kept in a single SQLite
  database.

- The name of the packs is a sequential integer. A new pack is generated when the
  pack size becomes larger than a per-container configurable target size.
  (`pack_size_target`, default: 4GB).
  This means that (except for the "last" pack), packs will always have a dimension
  larger or equal than this target size (typically around the target size, but
  it could be much larger if the last object that is added to the pack is very big).

- For each packed object, the SQLite database contains: the `uuid`, the `offset` (starting
  position of the bytestream in the file), the `length` (number of bytes to read),
  a boolean `compressed` flag, meaning if the bytestream has been zlib-compressed,
  and the `size` of the actual data (equal to `length` if `compressed` is false,
  otherwise the size of the uncompressed stream, useful for statistics), and an integer
  specifying in which pack it is stored. **Note** that the SQLite DB tracks only packed
  objects. Instead, loose objects are not tracked, and their sole presence in the
  loose folder marks their existence in the container.

- Note that compression is on a per-object level. This allows much greater flexibility
  (the API still does not allow for this, but this is very easy to implement).
  The current implementation only supports zlib compression with a default hardcoded
  level of 1 (good compression at affordable computational cost).
  Future extensions envision the possibility to choose the compression algorithm.

- the repository configuration is kept in a top-level json (number of nesting levels
  for loose objects, hashing algorithm, target pack size, ...)

- API exists both to get and write a single object, but also to write directly
  to pack files (this **cannot** be done by multiple processes at the same time, though),
  and to read in bulk a given number of objects.
  This is particularly convenient when using the object store for bulk import and
  export, and very fast. Also, it is useful when getting all files of a given node.

  In normal operation, however, we expect the client to write loose objects,
  to be repacked periodically (e.g. once a week).

- **PERFORMANCE**: Some reference results for bulk operations, performed on a
  Ubuntu 16.04 machine, 16 cores, 64GBs of RAM, with two SSD disks in RAID1 configuration),
  using the `examples/example_objectstore.py` script.
  - Storing 100'000 small objects (with random size between 0 and 1000 bytes, so a total size of around
    50 MB) directly to the packs takes about 21s.
  - The time to retrieve all of them is ~3.1s when using a single bulk call,
    compared to ~54s when using 100'000 independent calls (still probably acceptable).
    Moreover, even getting, in 10 bulk calls, 10 random chunks of the objects (eventually
    covering the whole set of 100'000 objects) is equally efficient as getting them
    all in one shot (note that for this size, only one pack file is created with the default
    configuration settings). This should demonstrate that exporting a subset of the graph should
    be efficient (and the object store format could be used also inside the export file).

    **Note**: these times are measured without flushing any disk cache.
    In any case, there is only a single pack file of about 50MB, so the additional time to
    fetch it back from disk is small. Anyway, for completeness, if we instead flush the caches
    after writing and before reading, so data needs to be read back from disk:
    - the time to retrieve 100000 packed objects in random order with a single bulk call is
      of about 3.8s, and in 10 bulk calls (by just doing this operation
      right after flushing the cache) is ~3.5s.
    - the time to retrieve 100000 packed objects in random order, one by one (right after
      flushing the cache, without doing other reads that would put the data in the cache already)
      is of about 56s.

- All operations internally (storing to a loose object, storing to a pack, reading
  from a loose object or from a pack, compression) are all happening via streaming.
  So, even when dealing with huge files, these never fill the RAM (e.g. when reading
  or writing a multi-GB file, the memory usage has been tested to be capped at ~150MB).
  Convenience methods are available, anyway, to get directly an object content, if
  the user wants.

- A number of streamins APIs are exposed to the users, who are encouraged to use this if they
  are not sure of the size of the objects and want to avoid out-of-memory crashes.

## Further design choices

In addition, the following design choices have been made:

- Each given object is tracked with its hash key.
  It's up to the caller to track this into a filename or a folder structure.
  To guarantee correctness, the hash is computed by the implementation
  and cannot be passed from the outside.

- Pack naming and strategy is not determined by the user, except for the specification
  of a `pack_size_target`. Pack are stored consecutively, so that when a pack file
  is "full", new ones will be used. In this way, once a pack it's full, it's not changed
  anymore (unless a full repack is performed), meaning that when performing backups using
  rsync, those full packs don't need to be checked every time.

- A single index file is used. Having one pack index per file turns out not
  to be very effective, mostly because for efficiency one would need to keep all
  indexes open (but then one quickly hits the maximum number of open files for a big repo with
  many pack files; this limit is small e.g. on Mac OS, where it is of the order of ~256).
  Otherwise, one would need to open the correct index at every request, that risks to
  be quite inefficient (not only to open, but also to load the DB, perform the query,
  return the results, and close again the file).

- Deletion (not implemented yet), can just occur as a deletion of the loose object or
  a removal from the index file. Later repacking of the packs can be used to recover
  the disk space still occupied in the pack files (care needs to be taken if concurrent
  processes are using the container, though).

- The current packing format is `rsync`-friendly. `rsync` has an algorithm to just
  send the new part of a file, when appending. Actually, `rsync` has a clever rolling
  algorithm that can also detect if the same block is in the file, even if at a
  different position. Therefore, even if a pack is "repacked" (e.g. reordering
  objects inside it, or removing deleted objects) does not prevent efficient
  rsync transfer.

  Some results: Let's considering a 1GB file that took ~4.5 mins to transfer fully
  the first time  over my network.
  After transferring this 1GB file, `rsync` only takes 14 seconds
  to check the difference and transfer the additional 10MB appended to the 1GB file
  (and it indeed transfers only ~10MB).

  In addition,  if the contents are randomly reshuffled, the second time the `rsync`
  process took only 14 seconds, transferring only ~32MB, with a speedup of ~30x
  (in this test, I divided the file in 1021 chunks of random size, uniformly
  distributed between 0 bytes and 2MB, so with a total size of ~1GB, and in the
  second `rsync` run I randomly reshuffled the chunks).

- Appending files to a single file does not prevent the Linux disk cache to work.
  To test this, I created a ~3GB file, composed of a ~1GB file (of which I know the MD5)
  and of a ~2GB file (of which I know the MD5).
  They are concatenated on a single file on disk.
  File sizes are not multiples of a power of 2 to avoid alignment with block size.

  After flushing the caches, if one reads only the second half, 2GB are added to the
  kernel memory cache.

  After re-flushing the caches, if one reads only the first half, only 1GB is added
  to the memory cache.
  Without further flushing the caches, if one reads also the first half,
  2 more GBs are added to the memory cache (totalling 3GB more).

  Therefore, caches are per blocks/pages in linux, not per file.
  Concatenating files does not impact performance on cache efficiency.



