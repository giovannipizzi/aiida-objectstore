window.BENCHMARK_DATA = {
  "lastUpdate": 1688765238861,
  "repoUrl": "https://github.com/aiidateam/disk-objectstore",
  "entries": {
    "Benchmark on ubuntu-latest": [
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37e4914e091106642af3975663590f013d0813b3",
          "message": "Merge pull request #40 from giovannipizzi/move_benchmarks_new_workflow\n\nMoving benchmarks to a different workflow",
          "timestamp": "2020-06-29T09:05:10+02:00",
          "tree_id": "21cfdf2eed33a3725bbd4cbbf25afc1b0bedfa02",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/37e4914e091106642af3975663590f013d0813b3"
        },
        "date": 1593414371696,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.36360785435652976,
            "unit": "iter/sec",
            "range": "stddev: 0.0005547910503580832",
            "extra": "mean: 2.7502156183333333 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.0819366804792083,
            "unit": "iter/sec",
            "range": "stddev: 0.01126805757191704",
            "extra": "mean: 324.4712996000004 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1080bfabe7608f846b4d91278f963d24c18c72a1",
          "message": "Merge pull request #41 from giovannipizzi/increase_coverage\n\nAdding a test that covers one missing line",
          "timestamp": "2020-06-29T09:29:13+02:00",
          "tree_id": "760b3d95f1595f870ea05a2ec9a502b9ca6c3884",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/1080bfabe7608f846b4d91278f963d24c18c72a1"
        },
        "date": 1593415809165,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.38715282348175206,
            "unit": "iter/sec",
            "range": "stddev: 0.11247699156919953",
            "extra": "mean: 2.5829593363333267 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.2800522498678366,
            "unit": "iter/sec",
            "range": "stddev: 0.017329640462180707",
            "extra": "mean: 304.8731922000002 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7eda99b2f330e4fee334381a9800d6aca1974d12",
          "message": "Merge pull request #42 from giovannipizzi/increase_coverage\n\nTrying to see if standard github token works",
          "timestamp": "2020-06-29T09:58:18+02:00",
          "tree_id": "5079e5290b4c4795ef6426c38f1a5f9fdd801159",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/7eda99b2f330e4fee334381a9800d6aca1974d12"
        },
        "date": 1593417599672,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.33870499222791906,
            "unit": "iter/sec",
            "range": "stddev: 0.08115503595088375",
            "extra": "mean: 2.952421791666675 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.5570282980666783,
            "unit": "iter/sec",
            "range": "stddev: 0.008791575078151398",
            "extra": "mean: 281.133552 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "8f93a1e9914e96e2a8892402c1faf6df2e5febb4",
          "message": "Returning more metadata when iterating over objects\n\nWe now don't return only the size, but a set of metadata.\nNote that this a backward-incompatible change (for those who\nwere using the internal get_objects_stream_and_meta (that anyway\nused to be called get_objects_stream_and_size, and does not exist anymore).\nTherefore, I upped the version to 0.4.0.\n\nI also added a get_object_stream_and_meta (at the singular) for a single object.",
          "timestamp": "2020-06-29T12:08:47+02:00",
          "tree_id": "3dfddd917f5aa1bec1e88f60b058390b416a8997",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/8f93a1e9914e96e2a8892402c1faf6df2e5febb4"
        },
        "date": 1593430098116,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.3656987779239515,
            "unit": "iter/sec",
            "range": "stddev: 0.026774611001445348",
            "extra": "mean: 2.734490953666665 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.9783977650012465,
            "unit": "iter/sec",
            "range": "stddev: 0.017253188551274584",
            "extra": "mean: 335.75099060000184 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0f55bed73ac1f06b7aaac5a3fc28ac2359530ac4",
          "message": "Merge pull request #44 from giovannipizzi/object_meta\n\nReadme change for the previous change and fix in test",
          "timestamp": "2020-06-29T14:54:11+02:00",
          "tree_id": "f596f20d7180d9d03843fdd7bbebd22e028348ea",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/0f55bed73ac1f06b7aaac5a3fc28ac2359530ac4"
        },
        "date": 1593435310365,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.4247731487034907,
            "unit": "iter/sec",
            "range": "stddev: 0.047830669424205184",
            "extra": "mean: 2.3541977713333324 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.491925872271792,
            "unit": "iter/sec",
            "range": "stddev: 0.009009785899389264",
            "extra": "mean: 286.37492219999956 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d76727c1cfc2bd09a1dc0623fdaaafe1a37e9361",
          "message": "Merge pull request #47 from giovannipizzi/fix_45\n\nAdd `has_object` and `has_objects` methods",
          "timestamp": "2020-07-08T23:37:07+02:00",
          "tree_id": "bb2c71eb780474decfeed149f228b7cb2d4f5c60",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/d76727c1cfc2bd09a1dc0623fdaaafe1a37e9361"
        },
        "date": 1594244303359,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.29268846615123645,
            "unit": "iter/sec",
            "range": "stddev: 0.07790088733686087",
            "extra": "mean: 3.416602003999998 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.7735530001510016,
            "unit": "iter/sec",
            "range": "stddev: 0.011556316957077262",
            "extra": "mean: 360.5483652000004 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.5303802486219373,
            "unit": "iter/sec",
            "range": "stddev: 0.017569426908008064",
            "extra": "mean: 653.4323746666691 msec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fb506418941ce59f8978c2ae47968d4e484ea37",
          "message": "Merge pull request #49 from giovannipizzi/add_simple_docs\n\nAdding a simple how-to guide to go through the API interface",
          "timestamp": "2020-07-10T18:41:52+02:00",
          "tree_id": "556717932b6d1de938efe63b0b81b21a4fc73b49",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/2fb506418941ce59f8978c2ae47968d4e484ea37"
        },
        "date": 1594399377416,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.41916164198429673,
            "unit": "iter/sec",
            "range": "stddev: 0.024293885879337937",
            "extra": "mean: 2.385714483000006 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.612533278159796,
            "unit": "iter/sec",
            "range": "stddev: 0.006616387697415076",
            "extra": "mean: 276.814059000003 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.025261272881027,
            "unit": "iter/sec",
            "range": "stddev: 0.015197485654280522",
            "extra": "mean: 493.7634533333342 msec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d493174c1354603b21ed8d623f487660a050d24",
          "message": "Merge pull request #50 from giovannipizzi/better_debugging_concurrency\n\nSlightly more detailed debugging in case of problems with the concurrent tests",
          "timestamp": "2020-07-10T19:48:46+02:00",
          "tree_id": "36d0accdc00b7f7b1eb3e3b01401bfb7c227471f",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/4d493174c1354603b21ed8d623f487660a050d24"
        },
        "date": 1594403398450,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.3706970036280086,
            "unit": "iter/sec",
            "range": "stddev: 0.008086401829544837",
            "extra": "mean: 2.6976209416666657 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.1316609822332797,
            "unit": "iter/sec",
            "range": "stddev: 0.0106559717396749",
            "extra": "mean: 319.3193661999999 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.7661317220481936,
            "unit": "iter/sec",
            "range": "stddev: 0.00906977484509298",
            "extra": "mean: 566.2091833333326 msec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "91ea646558962736530f212654fd83927f650c87",
          "message": "Merge pull request #53 from giovannipizzi/further_multiprocess_basic_tests\n\nFurther multiprocess basic tests",
          "timestamp": "2020-07-12T09:02:23+02:00",
          "tree_id": "e0d576ca01ebee5c8b61e515d997482d318529fb",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/91ea646558962736530f212654fd83927f650c87"
        },
        "date": 1594537426136,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.29105527835823686,
            "unit": "iter/sec",
            "range": "stddev: 0.05261663366183249",
            "extra": "mean: 3.4357734573333496 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.9816576827633745,
            "unit": "iter/sec",
            "range": "stddev: 0.007333146547935133",
            "extra": "mean: 335.38390599997 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.6591294728280859,
            "unit": "iter/sec",
            "range": "stddev: 0.011307301149092125",
            "extra": "mean: 602.725716333301 msec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6fae5f875c73bf4b5f2eb69e28467efa731c2aa3",
          "message": "Merge pull request #58 from sphuber/feature/057/packed-object-reader-mode\n\nAdd the `mode` property to the `PackedObjectReader`",
          "timestamp": "2020-07-12T21:53:29+02:00",
          "tree_id": "f32c32f225344579ea82d4787e2e232ead7dfa2c",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/6fae5f875c73bf4b5f2eb69e28467efa731c2aa3"
        },
        "date": 1594583896506,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.3655111536355975,
            "unit": "iter/sec",
            "range": "stddev: 0.055409372745984814",
            "extra": "mean: 2.7358946233333463 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.1215574956684775,
            "unit": "iter/sec",
            "range": "stddev: 0.011043624687423549",
            "extra": "mean: 320.352901199999 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.763192535237077,
            "unit": "iter/sec",
            "range": "stddev: 0.015811573334728418",
            "extra": "mean: 567.1530363333469 msec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6025360bb8a030b1103e7d40da4f7bde7938dd4c",
          "message": "Merge pull request #55 from giovannipizzi/fix_open_files\n\nFix lost open files and implement FULLSYNC for pack files on Mac OS",
          "timestamp": "2020-07-12T22:29:09+02:00",
          "tree_id": "571d031d2c95a14eb9fc9289031f93a62b9693f8",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/6025360bb8a030b1103e7d40da4f7bde7938dd4c"
        },
        "date": 1594585835321,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.3133440497750384,
            "unit": "iter/sec",
            "range": "stddev: 0.015961716686027153",
            "extra": "mean: 3.1913802119999986 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.6367372281748848,
            "unit": "iter/sec",
            "range": "stddev: 0.06683760279796909",
            "extra": "mean: 1.570506569666667 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.1018976459997245,
            "unit": "iter/sec",
            "range": "stddev: 0.017055833441805165",
            "extra": "mean: 322.3833001999992 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.5749282691832691,
            "unit": "iter/sec",
            "range": "stddev: 0.017403865868654386",
            "extra": "mean: 634.9495526666639 msec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09cc7a9539aa68f3417bf4ef2e80b520a1b4ba41",
          "message": "Merge pull request #60 from giovannipizzi/fix_56_seek\n\nAdded seek method to both the PackedObjectReader and the StreamDecompresser",
          "timestamp": "2020-07-13T01:27:47+02:00",
          "tree_id": "cf2de3df905a56e5ca39dbd1155b206012989f9f",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/09cc7a9539aa68f3417bf4ef2e80b520a1b4ba41"
        },
        "date": 1594596737023,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.4111534815372448,
            "unit": "iter/sec",
            "range": "stddev: 0.010808042346792534",
            "extra": "mean: 2.4321817640000063 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.1704957066055501,
            "unit": "iter/sec",
            "range": "stddev: 0.06476093959634442",
            "extra": "mean: 854.3388876666711 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.484589490094764,
            "unit": "iter/sec",
            "range": "stddev: 0.007051620181556978",
            "extra": "mean: 286.9778500000024 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.8883724255349097,
            "unit": "iter/sec",
            "range": "stddev: 0.00878800907560073",
            "extra": "mean: 529.556556999997 msec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "df368df957ecb9cf2a4a308c0b2baccfa7669638",
          "message": "Merge pull request #61 from giovannipizzi/check_concurrency\n\nFix concurrency problems in Mac OS",
          "timestamp": "2020-07-13T10:14:15+02:00",
          "tree_id": "2483876c2ad6de311dce821cd69d08efc5662ed0",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/df368df957ecb9cf2a4a308c0b2baccfa7669638"
        },
        "date": 1594628149633,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.2823745915074549,
            "unit": "iter/sec",
            "range": "stddev: 0.054622876375385286",
            "extra": "mean: 3.541395118666685 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.8379789468566016,
            "unit": "iter/sec",
            "range": "stddev: 0.24300536214787377",
            "extra": "mean: 1.1933474029999995 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.9844027015150587,
            "unit": "iter/sec",
            "range": "stddev: 0.014581573215028752",
            "extra": "mean: 335.0754237999922 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.544362407038266,
            "unit": "iter/sec",
            "range": "stddev: 0.018283385328627492",
            "extra": "mean: 647.5164089999907 msec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cec284e3680abc6105e80d0098da030a6cc3509e",
          "message": "Merge pull request #62 from giovannipizzi/fix_58_performance_has\n\nAdding methods to just fetch metas without opening streams",
          "timestamp": "2020-07-13T20:34:37+02:00",
          "tree_id": "3318cf4caa826238d95afbbb139840cb292a6f0e",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/cec284e3680abc6105e80d0098da030a6cc3509e"
        },
        "date": 1594665358737,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.3123206535409789,
            "unit": "iter/sec",
            "range": "stddev: 0.021892806626957972",
            "extra": "mean: 3.201837562333329 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.8420264612990318,
            "unit": "iter/sec",
            "range": "stddev: 0.0693568905257965",
            "extra": "mean: 1.1876111333333341 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.2769470517835866,
            "unit": "iter/sec",
            "range": "stddev: 0.0086683159448169",
            "extra": "mean: 305.16208660000075 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.944132404173119,
            "unit": "iter/sec",
            "range": "stddev: 0.006174715078857079",
            "extra": "mean: 514.368258999994 msec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dab40d1d73c8515a5900560c656d04bdbae5fdf0",
          "message": "Merge pull request #63 from giovannipizzi/fix_10_performance\n\nAdding performance tests for loose read",
          "timestamp": "2020-07-13T22:09:53+02:00",
          "tree_id": "da463ed266c11b51b86ed097afedaa7a018bec82",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/dab40d1d73c8515a5900560c656d04bdbae5fdf0"
        },
        "date": 1594671180417,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.29552897005092754,
            "unit": "iter/sec",
            "range": "stddev: 0.03821451817159414",
            "extra": "mean: 3.383763019333344 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.12239856274956476,
            "unit": "iter/sec",
            "range": "stddev: 0.40706087658147255",
            "extra": "mean: 8.170030574999998 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.1311498248340435,
            "unit": "iter/sec",
            "range": "stddev: 0.009631709794647007",
            "extra": "mean: 319.3714947999979 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 23.103873852407325,
            "unit": "iter/sec",
            "range": "stddev: 0.0027749201828988802",
            "extra": "mean: 43.282784799995966 msec\nrounds: 20"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.7260069148071961,
            "unit": "iter/sec",
            "range": "stddev: 0.01745986032755727",
            "extra": "mean: 579.3719546666504 msec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "801df0c0b90f09e910c7f822ae87e548446bce7a",
          "message": "Merge pull request #66 from giovannipizzi/fix_65_list_all\n\nAdding a function to list all objects",
          "timestamp": "2020-07-14T00:46:13+02:00",
          "tree_id": "0587cf74d5f99911d7ac55811765a11dfa23aeab",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/801df0c0b90f09e910c7f822ae87e548446bce7a"
        },
        "date": 1594680459226,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.3407282728420675,
            "unit": "iter/sec",
            "range": "stddev: 0.030732608728199103",
            "extra": "mean: 2.9348899980000027 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.887406726923332,
            "unit": "iter/sec",
            "range": "stddev: 0.10328516777558798",
            "extra": "mean: 1.1268789943333342 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.5582405298479753,
            "unit": "iter/sec",
            "range": "stddev: 0.008018733729260234",
            "extra": "mean: 281.03777460000003 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 24.8164169411121,
            "unit": "iter/sec",
            "range": "stddev: 0.0030482376044967544",
            "extra": "mean: 40.29590582608848 msec\nrounds: 23"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.0975351509957254,
            "unit": "iter/sec",
            "range": "stddev: 0.007610195331470287",
            "extra": "mean: 476.7500556666657 msec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a256e013b16d6a7044f7584114e7261dba5d1f6",
          "message": "Merge pull request #71 from giovannipizzi/fix_69_efficient_list_all\n\nImprove performance of list_all_objects for packed objects",
          "timestamp": "2020-07-16T14:37:20+02:00",
          "tree_id": "4038bcb9cafb4dbb2cf25ee20ef0750f1bbf4912",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/5a256e013b16d6a7044f7584114e7261dba5d1f6"
        },
        "date": 1594903177451,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.3004030691224289,
            "unit": "iter/sec",
            "range": "stddev: 0.04269828734374587",
            "extra": "mean: 3.3288607966666652 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.905155688232661,
            "unit": "iter/sec",
            "range": "stddev: 0.08642906821544802",
            "extra": "mean: 1.1047823186666648 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.0316290189021444,
            "unit": "iter/sec",
            "range": "stddev: 0.020103950203245232",
            "extra": "mean: 329.8556629999979 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 22.758189949989365,
            "unit": "iter/sec",
            "range": "stddev: 0.004405397083542302",
            "extra": "mean: 43.9402255714307 msec\nrounds: 21"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.7688762536826594,
            "unit": "iter/sec",
            "range": "stddev: 0.0161023562762177",
            "extra": "mean: 565.3306713333279 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1888878.567270332,
            "unit": "iter/sec",
            "range": "stddev: 0.000003185877479995676",
            "extra": "mean: 529.4146576320818 nsec\nrounds: 129871"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3021298.6020945045,
            "unit": "iter/sec",
            "range": "stddev: 3.832374846231474e-7",
            "extra": "mean: 330.9835046779513 nsec\nrounds: 140846"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "32baa140c5860150a0891937b0e4a69aa88b05e7",
          "message": "Do not fail on benchmark test alert",
          "timestamp": "2020-07-16T23:04:29+02:00",
          "tree_id": "f3721560975ad665334615ba90b19359aacbc87d",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/32baa140c5860150a0891937b0e4a69aa88b05e7"
        },
        "date": 1594933641534,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.3324987206471654,
            "unit": "iter/sec",
            "range": "stddev: 0.0850756822430017",
            "extra": "mean: 3.0075303690000084 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.9204817237025208,
            "unit": "iter/sec",
            "range": "stddev: 0.10098583965718078",
            "extra": "mean: 1.086387675333332 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.4165082074216064,
            "unit": "iter/sec",
            "range": "stddev: 0.015147568213396507",
            "extra": "mean: 292.69650160000253 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 25.190921142513517,
            "unit": "iter/sec",
            "range": "stddev: 0.0036312779449805964",
            "extra": "mean: 39.6968413478278 msec\nrounds: 23"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.0015813039400197,
            "unit": "iter/sec",
            "range": "stddev: 0.029631294207815337",
            "extra": "mean: 499.6049863333288 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3106011.8565648124,
            "unit": "iter/sec",
            "range": "stddev: 2.848960054948048e-7",
            "extra": "mean: 321.9562726029308 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3136138.6991010103,
            "unit": "iter/sec",
            "range": "stddev: 4.4876865171657266e-7",
            "extra": "mean: 318.8634483184056 nsec\nrounds: 142858"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2815887c622e923ab8d6eac4370488df9be8166a",
          "message": "Merge pull request #74 from giovannipizzi/fix_hash_computation\n\nFix to the hash calculation when writing to compressed packs.",
          "timestamp": "2020-07-17T15:50:51+02:00",
          "tree_id": "84fff9b9c58f7df075b9377c35ae3974517e74ea",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/2815887c622e923ab8d6eac4370488df9be8166a"
        },
        "date": 1594993987231,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.3044309692245495,
            "unit": "iter/sec",
            "range": "stddev: 0.01569801639234186",
            "extra": "mean: 3.2848169243333323 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.9724038604205137,
            "unit": "iter/sec",
            "range": "stddev: 0.1765455992507271",
            "extra": "mean: 1.0283792986666593 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.8578715653999978,
            "unit": "iter/sec",
            "range": "stddev: 0.007034528651667674",
            "extra": "mean: 349.9107559999942 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 21.187962014039073,
            "unit": "iter/sec",
            "range": "stddev: 0.006453033772635363",
            "extra": "mean: 47.19661095000092 msec\nrounds: 20"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.6995727201100297,
            "unit": "iter/sec",
            "range": "stddev: 0.013475640157768193",
            "extra": "mean: 588.3831789999903 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1920414.0700124723,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018466373322663988",
            "extra": "mean: 520.721033872401 nsec\nrounds: 144928"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2758058.8943689624,
            "unit": "iter/sec",
            "range": "stddev: 0.000001428815973480844",
            "extra": "mean: 362.57383844901125 nsec\nrounds: 140846"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa85ce1b90b92989c15446fb1125e6c7840ad729",
          "message": "Merge pull request #77 from giovannipizzi/fix_37_concurrency_win\n\nFix concurrency problems on Windows",
          "timestamp": "2020-07-17T16:48:14+02:00",
          "tree_id": "45fabeaefc37015b298754e3beaf07326d2b02f2",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/fa85ce1b90b92989c15446fb1125e6c7840ad729"
        },
        "date": 1594997430559,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.32764758781756287,
            "unit": "iter/sec",
            "range": "stddev: 0.008021331062531329",
            "extra": "mean: 3.052059704333331 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.9202044400781936,
            "unit": "iter/sec",
            "range": "stddev: 0.09738029797087913",
            "extra": "mean: 1.0867150346666723 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.3693513783564844,
            "unit": "iter/sec",
            "range": "stddev: 0.010934759927570868",
            "extra": "mean: 296.79302859999837 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 22.970797360721157,
            "unit": "iter/sec",
            "range": "stddev: 0.003434106571568189",
            "extra": "mean: 43.53353452631762 msec\nrounds: 19"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.8959570333515214,
            "unit": "iter/sec",
            "range": "stddev: 0.01603079203728845",
            "extra": "mean: 527.4381129999975 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2952532.791271145,
            "unit": "iter/sec",
            "range": "stddev: 7.27600730728701e-7",
            "extra": "mean: 338.6922587130616 nsec\nrounds: 161291"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2939654.668750179,
            "unit": "iter/sec",
            "range": "stddev: 7.102616603479263e-7",
            "extra": "mean: 340.1760113629048 nsec\nrounds: 149254"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6dea94015bf141e31781e4ea61f169d2b69e6b81",
          "message": "Merge pull request #75 from giovannipizzi/fix_64_export_to_container\n\nAdding a function to export directly a set of hash keys to a new container",
          "timestamp": "2020-07-17T17:16:12+02:00",
          "tree_id": "9d5cf808e9c4e748164afb805c1fb170f183c957",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/6dea94015bf141e31781e4ea61f169d2b69e6b81"
        },
        "date": 1594999123353,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.2962100674831524,
            "unit": "iter/sec",
            "range": "stddev: 0.04206926976375967",
            "extra": "mean: 3.375982485999998 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.8361011197460857,
            "unit": "iter/sec",
            "range": "stddev: 0.09654336832573297",
            "extra": "mean: 1.19602758133333 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.7192015270505023,
            "unit": "iter/sec",
            "range": "stddev: 0.010750720076129093",
            "extra": "mean: 367.7550155999995 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 19.937392577675045,
            "unit": "iter/sec",
            "range": "stddev: 0.004364324550912649",
            "extra": "mean: 50.157010055555254 msec\nrounds: 18"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.6100770514985345,
            "unit": "iter/sec",
            "range": "stddev: 0.012633436044649558",
            "extra": "mean: 621.0882883333303 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1892539.4053531508,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012762095730779739",
            "extra": "mean: 528.3905831347265 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2717882.3026682297,
            "unit": "iter/sec",
            "range": "stddev: 2.935644933180605e-7",
            "extra": "mean: 367.9335190555617 nsec\nrounds: 144928"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "38bfa5ed21e99016756308569337be1cdeaeb311",
          "message": "Merge pull request #68 from sphuber/feature/067/packed-object-reader-seek-whence\n\nImplement `whence=1` for the `utils.PackedObjectReader.seek`",
          "timestamp": "2020-07-17T18:20:39+02:00",
          "tree_id": "57f4997cbdc791e0a32f9905fa065586842a7ad8",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/38bfa5ed21e99016756308569337be1cdeaeb311"
        },
        "date": 1595002966677,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.3659637112330866,
            "unit": "iter/sec",
            "range": "stddev: 0.05854772526478887",
            "extra": "mean: 2.7325113646666686 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.9916751253249397,
            "unit": "iter/sec",
            "range": "stddev: 0.1366133254576877",
            "extra": "mean: 1.0083947599999874 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.087186928566587,
            "unit": "iter/sec",
            "range": "stddev: 0.015395016436868884",
            "extra": "mean: 323.9194849999933 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 22.974101953461155,
            "unit": "iter/sec",
            "range": "stddev: 0.003693499558448516",
            "extra": "mean: 43.527272666662185 msec\nrounds: 18"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.7947221081451807,
            "unit": "iter/sec",
            "range": "stddev: 0.02104941291950389",
            "extra": "mean: 557.1893250000054 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1921843.764168552,
            "unit": "iter/sec",
            "range": "stddev: 0.000001823556660911301",
            "extra": "mean: 520.333660125921 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2773563.5676719015,
            "unit": "iter/sec",
            "range": "stddev: 4.2554785539450136e-7",
            "extra": "mean: 360.54699147896247 nsec\nrounds: 138889"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "dbefa5af8e4b59d8b7e35f67f4597025e7f2b60d",
          "message": "Avoid seeking back to zero for compressed streams when seeking forward\n\nFixes #81",
          "timestamp": "2020-07-17T18:31:03+02:00",
          "tree_id": "01ba21f85aaef7d3d3d31955b500af91455036bd",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/dbefa5af8e4b59d8b7e35f67f4597025e7f2b60d"
        },
        "date": 1595003635792,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.30813389671835206,
            "unit": "iter/sec",
            "range": "stddev: 0.03310196962054796",
            "extra": "mean: 3.245342400333333 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.9152734400041452,
            "unit": "iter/sec",
            "range": "stddev: 0.024006265406754507",
            "extra": "mean: 1.0925696696666638 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.967130445810851,
            "unit": "iter/sec",
            "range": "stddev: 0.008317495165243263",
            "extra": "mean: 337.02596439999866 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 21.617194244965887,
            "unit": "iter/sec",
            "range": "stddev: 0.0011169625315259",
            "extra": "mean: 46.25947237499961 msec\nrounds: 16"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.7344633658948259,
            "unit": "iter/sec",
            "range": "stddev: 0.00816363271083696",
            "extra": "mean: 576.5472016666612 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2756781.16859352,
            "unit": "iter/sec",
            "range": "stddev: 1.4829619711691907e-7",
            "extra": "mean: 362.7418858601972 nsec\nrounds: 131579"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2717012.492108335,
            "unit": "iter/sec",
            "range": "stddev: 5.008024410255316e-7",
            "extra": "mean: 368.0513074208966 nsec\nrounds: 136987"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ddc612b9ceaf7f67711f7079d0f584ead8147507",
          "message": "Merge pull request #84 from giovannipizzi/fix_13_validation\n\nImplement validation routine",
          "timestamp": "2020-07-19T23:21:12+02:00",
          "tree_id": "d7baf41d8de602432d63610a50939df2fde3d94c",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/ddc612b9ceaf7f67711f7079d0f584ead8147507"
        },
        "date": 1595193992551,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.4088467420254465,
            "unit": "iter/sec",
            "range": "stddev: 0.015989885180497838",
            "extra": "mean: 2.445904289333337 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.11668183567803829,
            "unit": "iter/sec",
            "range": "stddev: 0.6551160511309678",
            "extra": "mean: 8.570314258333346 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.46458993750284,
            "unit": "iter/sec",
            "range": "stddev: 0.01053806547181396",
            "extra": "mean: 288.6344468000061 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 26.112562955101502,
            "unit": "iter/sec",
            "range": "stddev: 0.002099685219693049",
            "extra": "mean: 38.2957430000043 msec\nrounds: 23"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.9787381094370462,
            "unit": "iter/sec",
            "range": "stddev: 0.018132676959752545",
            "extra": "mean: 505.37258833333 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2023619.330062776,
            "unit": "iter/sec",
            "range": "stddev: 7.336666622429737e-7",
            "extra": "mean: 494.1640876542616 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3163516.247183704,
            "unit": "iter/sec",
            "range": "stddev: 2.7008524642077396e-7",
            "extra": "mean: 316.10395580879384 nsec\nrounds: 156226"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "89a6ea1a6c87895d4cbb0c1e2c869225c31fb707",
          "message": "Adding nodes on performance for validation",
          "timestamp": "2020-07-20T14:06:57+02:00",
          "tree_id": "a1c4c31f0e67410babd839471c3349dc89f24c78",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/89a6ea1a6c87895d4cbb0c1e2c869225c31fb707"
        },
        "date": 1595246946927,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.48389120415016074,
            "unit": "iter/sec",
            "range": "stddev: 0.047784300304646",
            "extra": "mean: 2.066580238333245 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.308865730117301,
            "unit": "iter/sec",
            "range": "stddev: 0.06319011784359217",
            "extra": "mean: 764.0203093333184 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 4.167470015968382,
            "unit": "iter/sec",
            "range": "stddev: 0.017472161317222124",
            "extra": "mean: 239.9537360000977 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 31.639042732758426,
            "unit": "iter/sec",
            "range": "stddev: 0.00360216651493449",
            "extra": "mean: 31.606518833283797 msec\nrounds: 30"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.356449451021107,
            "unit": "iter/sec",
            "range": "stddev: 0.018124987252711305",
            "extra": "mean: 424.3672613332213 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3442812.854094228,
            "unit": "iter/sec",
            "range": "stddev: 1.4963995534523907e-7",
            "extra": "mean: 290.460168002237 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3533646.0252480186,
            "unit": "iter/sec",
            "range": "stddev: 2.4888249495753383e-7",
            "extra": "mean: 282.99382361877235 nsec\nrounds: 149254"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d41ef638da9ca6958401ce010332e42cf4f988e4",
          "message": "Merge pull request #87 from giovannipizzi/fix_5_delete\n\nImplement function `delete_objects` for object deletion",
          "timestamp": "2020-07-20T14:40:53+02:00",
          "tree_id": "909ea5614905a444fc80d603a21b439da060a5a4",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/d41ef638da9ca6958401ce010332e42cf4f988e4"
        },
        "date": 1595248994471,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.3131210449982181,
            "unit": "iter/sec",
            "range": "stddev: 0.02243091054102237",
            "extra": "mean: 3.1936531126666714 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.7924330571598133,
            "unit": "iter/sec",
            "range": "stddev: 0.0650547998341542",
            "extra": "mean: 1.2619362493333313 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.1149537659779263,
            "unit": "iter/sec",
            "range": "stddev: 0.015112031829529053",
            "extra": "mean: 321.0320521999961 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 21.910088760661203,
            "unit": "iter/sec",
            "range": "stddev: 0.0017651520242789249",
            "extra": "mean: 45.641074800001036 msec\nrounds: 20"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.779994035429865,
            "unit": "iter/sec",
            "range": "stddev: 0.0019339192569972875",
            "extra": "mean: 561.7996353333297 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1930752.1876717329,
            "unit": "iter/sec",
            "range": "stddev: 0.000008230882427972806",
            "extra": "mean: 517.9328586989126 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2809332.391775082,
            "unit": "iter/sec",
            "range": "stddev: 4.993225461997166e-7",
            "extra": "mean: 355.9564553226574 nsec\nrounds: 120482"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "3f3cd07ea6627bbf6d0637e69e409ef4801b4f90",
          "message": "Adding nightly concurrency extensive tests\n\nThis runs only the main branch of the main fork, at 5AM UTC.\nTests are repeated 5 times to increase the change of seeing random errors.\n\nFixes #76",
          "timestamp": "2020-07-20T14:51:14+02:00",
          "tree_id": "01658224411ac3acb670ee1ef1e9d5081979f9ee",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/3f3cd07ea6627bbf6d0637e69e409ef4801b4f90"
        },
        "date": 1595249695319,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.39735167619081435,
            "unit": "iter/sec",
            "range": "stddev: 0.040590414309501485",
            "extra": "mean: 2.5166623419999987 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.9045676048034105,
            "unit": "iter/sec",
            "range": "stddev: 0.0865927666245492",
            "extra": "mean: 1.1055005669999975 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.3744434079999244,
            "unit": "iter/sec",
            "range": "stddev: 0.006395043410957255",
            "extra": "mean: 296.34516839999776 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 26.298049612198135,
            "unit": "iter/sec",
            "range": "stddev: 0.0033212160472582226",
            "extra": "mean: 38.025633640000365 msec\nrounds: 25"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.9570384615262206,
            "unit": "iter/sec",
            "range": "stddev: 0.013373092381426407",
            "extra": "mean: 510.97616099999266 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1870192.2892243543,
            "unit": "iter/sec",
            "range": "stddev: 5.797218171857238e-7",
            "extra": "mean: 534.7043754600983 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2942638.0178022226,
            "unit": "iter/sec",
            "range": "stddev: 2.549888622902953e-7",
            "extra": "mean: 339.83112905858616 nsec\nrounds: 151516"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5d977ad3ce8d4eba5ba70dfd0919282c2505e3b1",
          "message": "Merge pull request #88 from giovannipizzi/fix_78_loose_streamed\n\nAdding `add_streamed_object` function",
          "timestamp": "2020-07-20T15:47:49+02:00",
          "tree_id": "4864b702ab018ce6fa9ac195aca677f776b5bbff",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/5d977ad3ce8d4eba5ba70dfd0919282c2505e3b1"
        },
        "date": 1595253194415,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.41539147225164735,
            "unit": "iter/sec",
            "range": "stddev: 0.1444008650833028",
            "extra": "mean: 2.407367668333336 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.11462881539131504,
            "unit": "iter/sec",
            "range": "stddev: 0.7380036910894481",
            "extra": "mean: 8.723809947666666 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.6522493885870633,
            "unit": "iter/sec",
            "range": "stddev: 0.011286322672866249",
            "extra": "mean: 273.80386540002064 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 28.187035836118984,
            "unit": "iter/sec",
            "range": "stddev: 0.004061562134861666",
            "extra": "mean: 35.47730260869062 msec\nrounds: 23"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.9391713892729634,
            "unit": "iter/sec",
            "range": "stddev: 0.014968722314377353",
            "extra": "mean: 515.6841759999983 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2025462.9530355337,
            "unit": "iter/sec",
            "range": "stddev: 0.000001410122583904875",
            "extra": "mean: 493.71428813413434 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3162446.0575554245,
            "unit": "iter/sec",
            "range": "stddev: 5.472929627595861e-7",
            "extra": "mean: 316.21092717481645 nsec\nrounds: 153823"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6304d727083b3e119ba6015b89bf05ed396d63e6",
          "message": "Merge pull request #89 from giovannipizzi/fix_85_no_holes\n\nAdding the `no_holes` and `no_holes_read_twice` flags",
          "timestamp": "2020-07-20T16:52:36+02:00",
          "tree_id": "9e910cfbe5f17904d39b416b6b491cf8ba01fad4",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/6304d727083b3e119ba6015b89bf05ed396d63e6"
        },
        "date": 1595256883708,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.3824686507447717,
            "unit": "iter/sec",
            "range": "stddev: 0.0029681522177338214",
            "extra": "mean: 2.6145933739999996 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.242882355577996,
            "unit": "iter/sec",
            "range": "stddev: 0.052509799072824",
            "extra": "mean: 804.5813793333281 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.2846622267033303,
            "unit": "iter/sec",
            "range": "stddev: 0.013556172293187127",
            "extra": "mean: 304.4453070000003 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 26.005814705124532,
            "unit": "iter/sec",
            "range": "stddev: 0.0032154555891742765",
            "extra": "mean: 38.45293874999989 msec\nrounds: 24"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.879291225264264,
            "unit": "iter/sec",
            "range": "stddev: 0.013368420572235692",
            "extra": "mean: 532.1155053333371 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1929282.0957152704,
            "unit": "iter/sec",
            "range": "stddev: 5.639353473862002e-7",
            "extra": "mean: 518.3275178994784 nsec\nrounds: 156251"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2948973.1149135036,
            "unit": "iter/sec",
            "range": "stddev: 2.2372520965806042e-7",
            "extra": "mean: 339.1010907977363 nsec\nrounds: 138889"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "1589096795f049b538222474b724e0d1298a4b49",
          "message": "Complete move to aiidateam organisation\n\nFixes #80",
          "timestamp": "2020-07-20T17:02:04+02:00",
          "tree_id": "e54abe7df4b0f77aefb62e2a5ad6a6b7578e733a",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/1589096795f049b538222474b724e0d1298a4b49"
        },
        "date": 1595257488417,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.39238693541372716,
            "unit": "iter/sec",
            "range": "stddev: 0.06185312968764",
            "extra": "mean: 2.5485048296667023 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.786611693819093,
            "unit": "iter/sec",
            "range": "stddev: 0.1365931059229209",
            "extra": "mean: 1.271275278333178 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.252116580400015,
            "unit": "iter/sec",
            "range": "stddev: 0.009224431329730009",
            "extra": "mean: 307.4920517999999 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 24.075174443309905,
            "unit": "iter/sec",
            "range": "stddev: 0.003839081247817751",
            "extra": "mean: 41.53656299997791 msec\nrounds: 23"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.9383902232365111,
            "unit": "iter/sec",
            "range": "stddev: 0.010184758078945299",
            "extra": "mean: 515.891995333277 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1959777.5547624284,
            "unit": "iter/sec",
            "range": "stddev: 5.679395748444428e-7",
            "extra": "mean: 510.26199252558735 nsec\nrounds: 113637"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2911438.423487024,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015994599268998764",
            "extra": "mean: 343.4728318252462 nsec\nrounds: 138870"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "11cc7cbf88b964e48ac44f5de59ef09bc6bdb745",
          "message": "Adding simple changelog",
          "timestamp": "2020-07-20T17:41:58+02:00",
          "tree_id": "c53c9f1eed85787028f0bcbc6f537bb2915cc518",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/11cc7cbf88b964e48ac44f5de59ef09bc6bdb745"
        },
        "date": 1595259870022,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.30317883692670006,
            "unit": "iter/sec",
            "range": "stddev: 0.053579245154346325",
            "extra": "mean: 3.298383258333336 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.1377225192119143,
            "unit": "iter/sec",
            "range": "stddev: 0.07276362980606248",
            "extra": "mean: 878.948938000003 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.0091191270891304,
            "unit": "iter/sec",
            "range": "stddev: 0.006216686360890359",
            "extra": "mean: 332.32316759999776 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 21.714001744774766,
            "unit": "iter/sec",
            "range": "stddev: 0.0029589397709957827",
            "extra": "mean: 46.05323384210554 msec\nrounds: 19"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.7543636198598684,
            "unit": "iter/sec",
            "range": "stddev: 0.01976510840130681",
            "extra": "mean: 570.007259999997 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1745190.2051298504,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032903057115018528",
            "extra": "mean: 573.0034451606354 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2732666.280205496,
            "unit": "iter/sec",
            "range": "stddev: 5.082158768717026e-7",
            "extra": "mean: 365.94296465821446 nsec\nrounds: 136987"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "1e0ba2e2cec56c81f871ff8d72c15d7688ee8f0a",
          "message": "Change the default value of `compress` for export\n\nFor some reason it was True, but this is unexpected.\nSetting back to False.",
          "timestamp": "2020-07-20T17:51:03+02:00",
          "tree_id": "454bf54a8a996bc894244547a4ebd6dbfa0a7bdb",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/1e0ba2e2cec56c81f871ff8d72c15d7688ee8f0a"
        },
        "date": 1595260628826,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.3909260719178936,
            "unit": "iter/sec",
            "range": "stddev: 0.04347898626726598",
            "extra": "mean: 2.558028414666675 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.11770125828204903,
            "unit": "iter/sec",
            "range": "stddev: 0.48839327157336765",
            "extra": "mean: 8.496085892333346 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.493543822367284,
            "unit": "iter/sec",
            "range": "stddev: 0.0069488207164220255",
            "extra": "mean: 286.24229459998105 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 26.711541314086894,
            "unit": "iter/sec",
            "range": "stddev: 0.004060418721268064",
            "extra": "mean: 37.43700104166692 msec\nrounds: 24"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.0683040564872037,
            "unit": "iter/sec",
            "range": "stddev: 0.0071881592486474025",
            "extra": "mean: 483.4879073333127 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1876975.35163945,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019681347780139926",
            "extra": "mean: 532.7720468606831 nsec\nrounds: 188644"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2969998.6301159235,
            "unit": "iter/sec",
            "range": "stddev: 4.866199082933234e-7",
            "extra": "mean: 336.700492000035 nsec\nrounds: 133334"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "9dd029d81a791f0fa3324209fa7edfd015796aa8",
          "message": "Removing the 'OS-independent' flag\n\nThis is not really true, it actually is OS dependent,\nand I tested the three most common ones",
          "timestamp": "2020-07-20T18:33:16+02:00",
          "tree_id": "da603cd023341129a9ef4d74d860764b02631c3f",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/9dd029d81a791f0fa3324209fa7edfd015796aa8"
        },
        "date": 1595262956592,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.35957972672490224,
            "unit": "iter/sec",
            "range": "stddev: 0.05661195337263754",
            "extra": "mean: 2.7810244173333323 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.9010685183161007,
            "unit": "iter/sec",
            "range": "stddev: 0.029836913040672108",
            "extra": "mean: 1.1097935169999953 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.3620129534539873,
            "unit": "iter/sec",
            "range": "stddev: 0.01741104428852201",
            "extra": "mean: 297.4408527999998 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 24.13795081529808,
            "unit": "iter/sec",
            "range": "stddev: 0.0031982471694550537",
            "extra": "mean: 41.42853747826112 msec\nrounds: 23"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.1402555857549785,
            "unit": "iter/sec",
            "range": "stddev: 0.010797825251563505",
            "extra": "mean: 467.2339166666622 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3597999.7361469315,
            "unit": "iter/sec",
            "range": "stddev: 3.351778634187125e-7",
            "extra": "mean: 277.93220492878726 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3412623.146775091,
            "unit": "iter/sec",
            "range": "stddev: 2.3046929967073238e-7",
            "extra": "mean: 293.02971848664356 nsec\nrounds: 163935"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "51e6a578fc55c3c0eca18bb4351cb5ae1dcdb00f",
          "message": "Explicitly specifying the codecov token",
          "timestamp": "2020-07-20T18:59:40+02:00",
          "tree_id": "b5c97bfa36b46639cdf390220798c072fbc6826a",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/51e6a578fc55c3c0eca18bb4351cb5ae1dcdb00f"
        },
        "date": 1595264532957,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.3911939149914869,
            "unit": "iter/sec",
            "range": "stddev: 0.012880561212777824",
            "extra": "mean: 2.5562769809999772 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.1259191966321591,
            "unit": "iter/sec",
            "range": "stddev: 0.029753587133865517",
            "extra": "mean: 888.1632029999954 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.349612102022457,
            "unit": "iter/sec",
            "range": "stddev: 0.007480156659610367",
            "extra": "mean: 298.54203100001087 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 25.757368458267855,
            "unit": "iter/sec",
            "range": "stddev: 0.0032865367320364784",
            "extra": "mean: 38.823841869568405 msec\nrounds: 23"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.9454830576877868,
            "unit": "iter/sec",
            "range": "stddev: 0.01257078626003894",
            "extra": "mean: 514.0111583333464 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1910119.5145665074,
            "unit": "iter/sec",
            "range": "stddev: 7.867524216509062e-7",
            "extra": "mean: 523.5274507034944 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2970585.8012589635,
            "unit": "iter/sec",
            "range": "stddev: 3.590264621650184e-7",
            "extra": "mean: 336.6339391972255 nsec\nrounds: 140846"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "48fe289e87e457a1390b6d3dd6942d0b16064a32",
          "message": "Moving the env to the right place",
          "timestamp": "2020-07-20T19:06:51+02:00",
          "tree_id": "a629875f497fff991502bc56fb3979d157cf13b4",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/48fe289e87e457a1390b6d3dd6942d0b16064a32"
        },
        "date": 1595264973344,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.30604511462695133,
            "unit": "iter/sec",
            "range": "stddev: 0.027896514583596405",
            "extra": "mean: 3.2674921186666666 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.2267670982614953,
            "unit": "iter/sec",
            "range": "stddev: 0.11469768650557086",
            "extra": "mean: 815.150651999995 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.0364195662735387,
            "unit": "iter/sec",
            "range": "stddev: 0.009359567279677947",
            "extra": "mean: 329.3352509999977 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 22.605360987948426,
            "unit": "iter/sec",
            "range": "stddev: 0.0034253971362175825",
            "extra": "mean: 44.23729399999978 msec\nrounds: 21"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.7702557309127653,
            "unit": "iter/sec",
            "range": "stddev: 0.01763831741477135",
            "extra": "mean: 564.8901356666632 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2754718.0395510173,
            "unit": "iter/sec",
            "range": "stddev: 2.8060669543206526e-7",
            "extra": "mean: 363.01355915276486 nsec\nrounds: 131579"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2764426.3849825556,
            "unit": "iter/sec",
            "range": "stddev: 2.1428229782742814e-7",
            "extra": "mean: 361.7386975583963 nsec\nrounds: 133334"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gio.piz@gmail.com",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9aa52ca307119522cbcb110a505b77c6b7562513",
          "message": "Merge pull request #91 from giovannipizzi/test-codecov\n\nTesting Codecov after moving the repo",
          "timestamp": "2020-07-20T19:40:16+02:00",
          "tree_id": "da603cd023341129a9ef4d74d860764b02631c3f",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/9aa52ca307119522cbcb110a505b77c6b7562513"
        },
        "date": 1595266959671,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.3122085636152521,
            "unit": "iter/sec",
            "range": "stddev: 0.032886993950833006",
            "extra": "mean: 3.202987094333333 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.8395174685297763,
            "unit": "iter/sec",
            "range": "stddev: 0.10884832637939403",
            "extra": "mean: 1.1911604433333263 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.050168429751699,
            "unit": "iter/sec",
            "range": "stddev: 0.0015675377468291848",
            "extra": "mean: 327.8507475999959 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 21.664997663852958,
            "unit": "iter/sec",
            "range": "stddev: 0.002813703700818629",
            "extra": "mean: 46.15740169999896 msec\nrounds: 20"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.8064157271534111,
            "unit": "iter/sec",
            "range": "stddev: 0.012478294186043085",
            "extra": "mean: 553.5824256666663 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1959646.0711556065,
            "unit": "iter/sec",
            "range": "stddev: 0.000001233626353067529",
            "extra": "mean: 510.29622885437584 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2786742.976179966,
            "unit": "iter/sec",
            "range": "stddev: 4.09789258239221e-7",
            "extra": "mean: 358.84184818883494 nsec\nrounds: 140846"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gio.piz@gmail.com",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "c718ffdec3881653acb82beaeed69fadf3cd9e3d",
          "message": "Merge pull request #90 from aiidateam/develop\n\nRelease of version 0.4.0",
          "timestamp": "2020-07-20T19:46:14+02:00",
          "tree_id": "da603cd023341129a9ef4d74d860764b02631c3f",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/c718ffdec3881653acb82beaeed69fadf3cd9e3d"
        },
        "date": 1595267621146,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.37436627496913455,
            "unit": "iter/sec",
            "range": "stddev: 0.05591747392657223",
            "extra": "mean: 2.6711807843333304 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.11891719609371995,
            "unit": "iter/sec",
            "range": "stddev: 0.06503253025899901",
            "extra": "mean: 8.409212736666689 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.2327192149573105,
            "unit": "iter/sec",
            "range": "stddev: 0.010285198752526706",
            "extra": "mean: 309.3371039999852 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 24.31082165975014,
            "unit": "iter/sec",
            "range": "stddev: 0.0032302010688651525",
            "extra": "mean: 41.13394495652262 msec\nrounds: 23"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.9158119700491876,
            "unit": "iter/sec",
            "range": "stddev: 0.004825200382311441",
            "extra": "mean: 521.9718926666511 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1913042.8666475813,
            "unit": "iter/sec",
            "range": "stddev: 4.923694460300847e-7",
            "extra": "mean: 522.7274398468662 nsec\nrounds: 140846"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2911999.485225615,
            "unit": "iter/sec",
            "range": "stddev: 1.1567180202573464e-7",
            "extra": "mean: 343.40665411310647 nsec\nrounds: 117634"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gio.piz@gmail.com",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e7e3627a67e8de2030b231927a127a9fb06ae474",
          "message": "Merge pull request #95 from giovannipizzi/fix_missing_optional_deps\n\nAdding missing optional dev dependencies",
          "timestamp": "2020-08-26T23:34:55+02:00",
          "tree_id": "397da3027d0c56b27a27da2ce3509320aadc032e",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/e7e3627a67e8de2030b231927a127a9fb06ae474"
        },
        "date": 1598477801387,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.45401810302568507,
            "unit": "iter/sec",
            "range": "stddev: 0.005954265844477211",
            "extra": "mean: 2.202555345999997 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.2937085436433728,
            "unit": "iter/sec",
            "range": "stddev: 0.04837953467454012",
            "extra": "mean: 772.9716286666672 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.8888932405603844,
            "unit": "iter/sec",
            "range": "stddev: 0.010948522939552235",
            "extra": "mean: 257.1425694000027 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 30.831203575454328,
            "unit": "iter/sec",
            "range": "stddev: 0.002931028684716154",
            "extra": "mean: 32.43467279999834 msec\nrounds: 25"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.199977337153445,
            "unit": "iter/sec",
            "range": "stddev: 0.022920646747715583",
            "extra": "mean: 454.55013700000296 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3341609.527891311,
            "unit": "iter/sec",
            "range": "stddev: 7.179993723628592e-8",
            "extra": "mean: 299.25698728548775 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3405203.4892165926,
            "unit": "iter/sec",
            "range": "stddev: 3.6573915241994156e-7",
            "extra": "mean: 293.6682060753844 nsec\nrounds: 153847"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "64326c7e9778b6af1cc142a1f48a526a5bf7ee2e",
          "message": "🔀👌 Efficiency improvements  (#96)\n\nThis merge collects a number of important efficiency improvements, and a few features that were tightly bound to these efficiency changes, so they are shipped together.\r\n\r\nIn particular:\r\n\r\n- objects are now sorted and returned in the order in which they are on disk, with an important performance benefit. Fixes #92 \r\n- When there are many objects to list (currently set to 9500 objects, 10x the ones we could fit in a single IN SQL statement), performing many queries is slow, so we just resort to listing all objects and doing an efficient intersection (if the hash keys are sorted, both iterators can be looped over only once - fixes #93)\r\n- Since VACUUMing the DB is very important for efficiency, when the DB does not fit fully in the disk cache, `clean_storage` now provides an option to VACUUM the DB. VACUUM is also called after repacking. Fixes #94 \r\n- We implement now a function to perform a full repack of the repository (fixes #12). This is important and needed to reclaim space after deleting an object\r\n- For efficiency, we have moved the logic from an `export` function (still existing but deprecated) to a `import_objects` function\r\n- Still for efficiency, now functions like `pack_all_loose` and `import_objects` provide an option to perform a fsync to disk or not (see also #54 - there are still however calls that always use - or don't use - fsync and full_fsync on Mac). Also, `add_objects_to_pack` allows now to choose if you want to commit the changes to the SQLite DB, or not (delegating the responsibility to the caller, but this is important e.g. in `import_objects`: calling `commit` only once at the very end gives a factor of 2 speedup for very big repos).\r\n- A number of functions, including (but not exclusively) `import_objects` provide a callback to e.g. show a progress bar.\r\n- a `CallbackStreamWrapper` has been implemented, allowing to provide a callback (e.g. for a progress bar) when streaming a big file.\r\n- a new hash algorithm is now supported (`sha1`) in addition to the default `sha256` (fixes #82). This is faster even if a bit less robust. This was also needed to test completely some feature in `import_objects`, where the logic is optimised if both containers use the same algorithm. By default is still better to use everywhere sha256, also because then all export files that will be generated will use this algorithm and importing will be more efficient.\r\n- tests have been added for all new functionality, achieving again 100% coverage\r\n\r\nAs a reference, with these changes, exporting the full large SDB database (6.8M nodes) takes ~ 50 minutes:\r\n```\r\n6714808it [00:24, 274813.02it/s]\r\nAll hashkeys listed in 24.444787740707397s.\r\nListing objects: 100%|████████| 6714808/6714808 [00:06<00:00, 978896.65it/s]\r\nCopy objects: 100%|███████████| 6714808/6714808 [48:15<00:00, 2319.08it/s]\r\nFinal flush: 100%|████████████| 63236/63236 [00:07<00:00, 8582.35it/s]\r\nEverything re-exported in 2960.980943918228s.\r\n```\r\n\r\nThis can be compared to:\r\n\r\n- ~10 minutes to copy the whole 90GB, or ~15 minutes to read all and validate the packs. We will never be able to be faster than just copying the pack files, and we are only 3x slower.\r\n- ~2 days to just list all files in the old legacy AiiDA repo (or all objects if they are loose), and this does not take into account the time to rewrite everything, probably comparable. So we are almost 2 orders of magnitude faster than before.",
          "timestamp": "2020-10-02T05:02:23+01:00",
          "tree_id": "a1e5eacb37c751b57ede7818ed3ea30ccd868aa0",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/64326c7e9778b6af1cc142a1f48a526a5bf7ee2e"
        },
        "date": 1601611428032,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 3.822519717634209,
            "unit": "iter/sec",
            "range": "stddev: 0.010710444634960353",
            "extra": "mean: 261.60754524999777 msec\nrounds: 4"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.8076198267327124,
            "unit": "iter/sec",
            "range": "stddev: 0.09458099688489016",
            "extra": "mean: 1.2382063526666702 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 8.140907568004227,
            "unit": "iter/sec",
            "range": "stddev: 0.007533513574043765",
            "extra": "mean: 122.83642722222352 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 25.92046508176401,
            "unit": "iter/sec",
            "range": "stddev: 0.003677563848886081",
            "extra": "mean: 38.57955468181535 msec\nrounds: 22"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 4.588693807199888,
            "unit": "iter/sec",
            "range": "stddev: 0.013275166948977731",
            "extra": "mean: 217.92693999999528 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1967759.1996517286,
            "unit": "iter/sec",
            "range": "stddev: 4.337440371164589e-7",
            "extra": "mean: 508.1922626391424 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3105001.1831013225,
            "unit": "iter/sec",
            "range": "stddev: 1.1040241489828784e-7",
            "extra": "mean: 322.0610689110473 nsec\nrounds: 138889"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gio.piz@gmail.com",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d7c389c353185c1923c9addb1b107c283d5f561",
          "message": "✨ Add the concept of a (unique) container ID (#97)\n\nAllows for the association of a container with an existing DB, or to uniquely refer to it.\r\n\r\n🐛 This also fixes a bug, whereby config values were cached, but the cache was not cleared when re-initialising the container.\r\nTo reduce the risk of such a problem, now only the whole configuration dictionary is cached, rather than each single config value.",
          "timestamp": "2020-10-02T05:26:39+01:00",
          "tree_id": "cf46e923be5370049e00e368fe2b9cf6f18ef6d3",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/1d7c389c353185c1923c9addb1b107c283d5f561"
        },
        "date": 1601612904794,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.87975330044751,
            "unit": "iter/sec",
            "range": "stddev: 0.02304322040094718",
            "extra": "mean: 1.1366822943333357 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.8996917203621142,
            "unit": "iter/sec",
            "range": "stddev: 0.1531809922697905",
            "extra": "mean: 1.111491833666662 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 9.467770610108342,
            "unit": "iter/sec",
            "range": "stddev: 0.008140071906912648",
            "extra": "mean: 105.62148590000078 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 6.480621874994417,
            "unit": "iter/sec",
            "range": "stddev: 0.0034471111401594198",
            "extra": "mean: 154.30617914285602 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 0.7065395317925856,
            "unit": "iter/sec",
            "range": "stddev: 0.03119085907244682",
            "extra": "mean: 1.4153489720000039 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2281964.6861013523,
            "unit": "iter/sec",
            "range": "stddev: 4.1473535472676083e-7",
            "extra": "mean: 438.21887608105845 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3409303.1380530843,
            "unit": "iter/sec",
            "range": "stddev: 1.0535229775015154e-7",
            "extra": "mean: 293.31507334705645 nsec\nrounds: 144928"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b84d6b00ad68bf8e58861c712c3cb9b6394abfd",
          "message": "🐛 Fix performance regression (#102)\n\n`Container.is_initialised` is a costly operation, loading the config JSON every time.\r\nIn 1d7c389, the config is now called on every call to `loose_prefix_len`, leading to a large performance degradation.\r\nThis PR makes sure the `is_initialised` test is called only if the config has not already been loaded into memory.",
          "timestamp": "2020-10-02T18:45:30+01:00",
          "tree_id": "3e63fef3df945593819e81391c96d674c2e19225",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/1b84d6b00ad68bf8e58861c712c3cb9b6394abfd"
        },
        "date": 1601660812154,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 4.059525628070446,
            "unit": "iter/sec",
            "range": "stddev: 0.007460296870933156",
            "extra": "mean: 246.33420050000154 msec\nrounds: 4"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.347174144813956,
            "unit": "iter/sec",
            "range": "stddev: 0.07205359971335867",
            "extra": "mean: 742.2945309999989 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 8.52659984282599,
            "unit": "iter/sec",
            "range": "stddev: 0.008656394539269618",
            "extra": "mean: 117.28004344444149 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 26.840867648268052,
            "unit": "iter/sec",
            "range": "stddev: 0.0032305308410799476",
            "extra": "mean: 37.256619759999694 msec\nrounds: 25"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 4.464339294329306,
            "unit": "iter/sec",
            "range": "stddev: 0.013012328530117674",
            "extra": "mean: 223.99731159999874 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2089279.6845127218,
            "unit": "iter/sec",
            "range": "stddev: 9.162402949782724e-7",
            "extra": "mean: 478.63385999142946 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3249136.2856222414,
            "unit": "iter/sec",
            "range": "stddev: 9.708092982684938e-8",
            "extra": "mean: 307.7741012049862 nsec\nrounds: 142858"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gio.piz@gmail.com",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d786296bc67219512f4058265ffbd8c9e6f06b0a",
          "message": "✨ Generalize compression algorithm (#99)\n\nThe container configuration now accepts a variable for the compression algorithm to use.\r\nCurrently, the supported values are zlib, with levels from 1 to 9, but this can be expanded in the future.",
          "timestamp": "2020-10-04T11:31:10+01:00",
          "tree_id": "302c95715972bb03a6d7e329dad5995741db8395",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/d786296bc67219512f4058265ffbd8c9e6f06b0a"
        },
        "date": 1601807552492,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 3.1735518423637896,
            "unit": "iter/sec",
            "range": "stddev: 0.01510237694016485",
            "extra": "mean: 315.104353 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.8836012165697237,
            "unit": "iter/sec",
            "range": "stddev: 0.11676242289486118",
            "extra": "mean: 1.1317322579999995 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 7.622376085642099,
            "unit": "iter/sec",
            "range": "stddev: 0.005219327066593961",
            "extra": "mean: 131.1926870000093 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 22.959844249891994,
            "unit": "iter/sec",
            "range": "stddev: 0.0015250991806245525",
            "extra": "mean: 43.55430242104992 msec\nrounds: 19"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 3.8352401429815157,
            "unit": "iter/sec",
            "range": "stddev: 0.010024381514081335",
            "extra": "mean: 260.7398657499971 msec\nrounds: 4"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1912741.5186453334,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014384784615108434",
            "extra": "mean: 522.8097943459883 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2845755.3870736775,
            "unit": "iter/sec",
            "range": "stddev: 4.414585515802322e-7",
            "extra": "mean: 351.40054712432413 nsec\nrounds: 133334"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@sphuber.net",
            "name": "Sebastiaan Huber",
            "username": "sphuber"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f4357b4e0a0347ffb6f8a66cb1d5da6de675cc7",
          "message": "Dependencies: set up limit for sqlalchemy dependency (#107)\n\nThe code is incompatible with `sqlalchemy==1.4` so for now we put an\r\nupper limit on the requirement `sqlalchemy<1.4`.",
          "timestamp": "2021-04-23T08:50:13+02:00",
          "tree_id": "b3147e700fe9ef371fe44e913d5b67680a93d08a",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/4f4357b4e0a0347ffb6f8a66cb1d5da6de675cc7"
        },
        "date": 1619160715716,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 3.110737753453293,
            "unit": "iter/sec",
            "range": "stddev: 0.006081654291549682",
            "extra": "mean: 321.4671499999895 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.7068612616512694,
            "unit": "iter/sec",
            "range": "stddev: 0.07522698959636813",
            "extra": "mean: 1.414704772000012 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 7.556229902057653,
            "unit": "iter/sec",
            "range": "stddev: 0.006089939119498206",
            "extra": "mean: 132.3411295000021 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 22.63754750796185,
            "unit": "iter/sec",
            "range": "stddev: 0.0012718767616330172",
            "extra": "mean: 44.17439652631497 msec\nrounds: 19"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 3.5702365714440574,
            "unit": "iter/sec",
            "range": "stddev: 0.018421444221210198",
            "extra": "mean: 280.09348400000533 msec\nrounds: 4"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2533586.295796736,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011738966658674193",
            "extra": "mean: 394.69743014441946 nsec\nrounds: 126583"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2581308.588013812,
            "unit": "iter/sec",
            "range": "stddev: 4.5190881894876036e-7",
            "extra": "mean: 387.40040793404114 nsec\nrounds: 128206"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a894a4f8befb5de0fe95979183b1cbb03f4ef13",
          "message": "Merge pull request #106 from aiidateam/fix/update-python-support\n\nPython support: remove 3.5 and add 3.9 support",
          "timestamp": "2021-04-23T15:33:19+02:00",
          "tree_id": "f577efcb13f4ee1f11313641f80fbf03890b9d37",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/7a894a4f8befb5de0fe95979183b1cbb03f4ef13"
        },
        "date": 1619184877952,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 3.6665206520648983,
            "unit": "iter/sec",
            "range": "stddev: 0.010301796345693537",
            "extra": "mean: 272.73813374999634 msec\nrounds: 4"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.0405565142641988,
            "unit": "iter/sec",
            "range": "stddev: 0.12313696028119797",
            "extra": "mean: 961.0242080000072 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 8.123372559099058,
            "unit": "iter/sec",
            "range": "stddev: 0.005351867598176458",
            "extra": "mean: 123.10158037499974 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 24.6966794771186,
            "unit": "iter/sec",
            "range": "stddev: 0.004297786199982911",
            "extra": "mean: 40.49127336840959 msec\nrounds: 19"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 4.1421121567661014,
            "unit": "iter/sec",
            "range": "stddev: 0.00308434579915087",
            "extra": "mean: 241.4227240000031 msec\nrounds: 4"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1872485.1477985224,
            "unit": "iter/sec",
            "range": "stddev: 2.711564371440361e-7",
            "extra": "mean: 534.0496298065159 nsec\nrounds: 128189"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2753054.6296537984,
            "unit": "iter/sec",
            "range": "stddev: 6.381575096710162e-7",
            "extra": "mean: 363.2328938296282 nsec\nrounds: 126583"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a2561a40cf2e9a4d58325387f913ccf08111f5fd",
          "message": "Merge pull request #104 from giovannipizzi/master_in_dev\n\nMerge v0.5.0 in develop",
          "timestamp": "2021-04-23T16:22:25+02:00",
          "tree_id": "4beb6bcd4bfe656b36e0d022e991951f256753fd",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/a2561a40cf2e9a4d58325387f913ccf08111f5fd"
        },
        "date": 1619187839637,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 3.021310840181747,
            "unit": "iter/sec",
            "range": "stddev: 0.016524510831205787",
            "extra": "mean: 330.98216399999575 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.7864234520685982,
            "unit": "iter/sec",
            "range": "stddev: 0.13055107411439965",
            "extra": "mean: 1.2715795763333517 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 6.552048987390683,
            "unit": "iter/sec",
            "range": "stddev: 0.012252439376262927",
            "extra": "mean: 152.62401149998794 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 18.942345549070605,
            "unit": "iter/sec",
            "range": "stddev: 0.007869763538194472",
            "extra": "mean: 52.79177266666769 msec\nrounds: 15"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 3.3672531644685386,
            "unit": "iter/sec",
            "range": "stddev: 0.010122857116211722",
            "extra": "mean: 296.97796725000103 msec\nrounds: 4"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1806370.9374006693,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018334556253608284",
            "extra": "mean: 553.5961519835895 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2290447.767326605,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028004990930402033",
            "extra": "mean: 436.5958544286526 nsec\nrounds: 125001"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2cb284157df3cc9bc5a3ae92da6aebbacbda5623",
          "message": "🔧 MAINTAIN: Improve repo configuration (#112)\n\n- Move config to `setup.cfg` and `pyproject.toml`\r\n- Add `Manifest.in`, `tox.ini`\r\n- Replace `requirements.txt`/`dev-requirements.txt with `requirements.lock`\r\n- Move from yapf to black code formatting\r\n- Add more pre-commit hooks\r\n- Update pylint version and fix new failures\r\n- Drop python 3.6",
          "timestamp": "2021-08-30T16:07:48+02:00",
          "tree_id": "3e95e7e154b9b51de8f0ec0458d0ae1a6a26ba51",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/2cb284157df3cc9bc5a3ae92da6aebbacbda5623"
        },
        "date": 1630332554747,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 3.0995900803484076,
            "unit": "iter/sec",
            "range": "stddev: 0.0158800006050287",
            "extra": "mean: 322.6233063333315 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.6945030463542721,
            "unit": "iter/sec",
            "range": "stddev: 0.09581238490221491",
            "extra": "mean: 1.4398784933333342 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 6.669887097782519,
            "unit": "iter/sec",
            "range": "stddev: 0.009612125424282948",
            "extra": "mean: 149.92757528571386 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 21.226056529175292,
            "unit": "iter/sec",
            "range": "stddev: 0.0013007943038136813",
            "extra": "mean: 47.11190694444333 msec\nrounds: 18"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 3.6128368102115345,
            "unit": "iter/sec",
            "range": "stddev: 0.015889706931156062",
            "extra": "mean: 276.79080250000254 msec\nrounds: 4"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2536580.0988827352,
            "unit": "iter/sec",
            "range": "stddev: 3.650667524048866e-7",
            "extra": "mean: 394.2315878140897 nsec\nrounds: 138889"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2509328.9372560787,
            "unit": "iter/sec",
            "range": "stddev: 3.729874710588882e-7",
            "extra": "mean: 398.5129191924635 nsec\nrounds: 126583"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2d2d32c14fb4f5a0068fbbe49a16daf3285aeda8",
          "message": "🔧 MAINTAIN: Add contex manager methods",
          "timestamp": "2021-09-01T12:47:38+02:00",
          "tree_id": "8262168f13e44bf574c5f55ebddd2a609ade6203",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/2d2d32c14fb4f5a0068fbbe49a16daf3285aeda8"
        },
        "date": 1630493333933,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 3.453398415953227,
            "unit": "iter/sec",
            "range": "stddev: 0.00871208934557737",
            "extra": "mean: 289.56983225000243 msec\nrounds: 4"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.8180543885854358,
            "unit": "iter/sec",
            "range": "stddev: 0.0764334697799494",
            "extra": "mean: 1.2224126096666765 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 7.409140473967565,
            "unit": "iter/sec",
            "range": "stddev: 0.0062622319251307455",
            "extra": "mean: 134.9684222499974 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 23.282805170640245,
            "unit": "iter/sec",
            "range": "stddev: 0.003906636502110669",
            "extra": "mean: 42.95015109523855 msec\nrounds: 21"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 3.852340879702891,
            "unit": "iter/sec",
            "range": "stddev: 0.0017733831569907877",
            "extra": "mean: 259.5824282499955 msec\nrounds: 4"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1671851.1162158677,
            "unit": "iter/sec",
            "range": "stddev: 1.6862554105071818e-7",
            "extra": "mean: 598.1393859181902 nsec\nrounds: 144907"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2615293.321662835,
            "unit": "iter/sec",
            "range": "stddev: 3.556771329350453e-8",
            "extra": "mean: 382.36628821584395 nsec\nrounds: 123442"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c0a67a33dbe0634005ee2d5789214808ee205b02",
          "message": "🔧 MAINTAIN: Add typing (#113)\n\nAdded type annotations to code base and mypy type checking.\r\n\r\nIt was found that there were some inconsistencies with classes\r\nlooking to implement subsets of the `BinaryIO` interface,\r\nwhich were fixed:\r\n\r\n- Remove `@property` from `seekable` method\r\n- Disallow mode in `LazyOpen` (should always be readable binary)\r\n- Added `__enter__`/`__exit__` methods to `PackedObjectReader`, `CallbackStreamWrapper`, `ZlibLikeBaseStreamDecompresser`,\r\n  so they won't fail in `add_streamed_objects_to_pack` with `open_streams=True`",
          "timestamp": "2021-09-01T14:36:15+02:00",
          "tree_id": "d230b7bc0b95dc71a7939d3be0d0590552bb25c9",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/c0a67a33dbe0634005ee2d5789214808ee205b02"
        },
        "date": 1630499871629,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 2.937698975186532,
            "unit": "iter/sec",
            "range": "stddev: 0.006531524222293552",
            "extra": "mean: 340.40247433333565 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.6839837737790634,
            "unit": "iter/sec",
            "range": "stddev: 0.09472232277513425",
            "extra": "mean: 1.462022987000002 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 6.387178653497156,
            "unit": "iter/sec",
            "range": "stddev: 0.0059943896512434005",
            "extra": "mean: 156.56364949999832 msec\nrounds: 6"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 19.059518404136515,
            "unit": "iter/sec",
            "range": "stddev: 0.002271512937490044",
            "extra": "mean: 52.467222875000274 msec\nrounds: 16"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 3.171569407369428,
            "unit": "iter/sec",
            "range": "stddev: 0.017102489204490347",
            "extra": "mean: 315.3013135000009 msec\nrounds: 4"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1609190.404734755,
            "unit": "iter/sec",
            "range": "stddev: 0.000002785550528321602",
            "extra": "mean: 621.4305013612304 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2405353.688518219,
            "unit": "iter/sec",
            "range": "stddev: 0.000001688450558437804",
            "extra": "mean: 415.7392755890471 nsec\nrounds: 126599"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55c40ffa05cd603c0b722953fbf5d043f7015bde",
          "message": "⬆️ UPGRADE: sqlalchemy v1.4 (v2 API) (#114)\n\nFollowing migration guidelines:\r\nhttps://docs.sqlalchemy.org/en/14/changelog/migration_20.html\r\n\r\n- Added `SQLALCHEMY_WARN_20` environmental variable\r\n- Use `future=True` for engine and session creation (V1 -> v2 API)\r\n- `query` -> `select` (V1 -> v2 API)\r\n- Rename `models.py` -> `database.py`\r\n  (models is too generic does not describe the module's purpose)\r\n- Moved `get_session` -> `database.py`\r\n  (this method can be independent of the container)\r\n- Added mypy extension:\r\n  https://docs.sqlalchemy.org/en/14/orm/extensions/mypy.html\r\n\r\nNote, the `count()` method is now a bit more complex,\r\nbut this is explained in: https://github.com/sqlalchemy/sqlalchemy/issues/6794\r\n\r\nAlso, the vacuum code required changing, since it is in a transaction.\r\nThe workaround is discussed in:\r\nhttps://github.com/sqlalchemy/sqlalchemy/discussions/6959#discussioncomment-1251681",
          "timestamp": "2021-09-02T15:44:37+02:00",
          "tree_id": "58708e4c7cbc4eb4609c2d96c9ce5b022ac21ea2",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/55c40ffa05cd603c0b722953fbf5d043f7015bde"
        },
        "date": 1630590366107,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 3.338110522774883,
            "unit": "iter/sec",
            "range": "stddev: 0.008914168100369421",
            "extra": "mean: 299.57066824999146 msec\nrounds: 4"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.2362813984454675,
            "unit": "iter/sec",
            "range": "stddev: 0.05965051528540759",
            "extra": "mean: 808.8773326666777 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 8.610908578555211,
            "unit": "iter/sec",
            "range": "stddev: 0.007013787737481365",
            "extra": "mean: 116.13176366666129 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 39.797669338905585,
            "unit": "iter/sec",
            "range": "stddev: 0.0012421867144232993",
            "extra": "mean: 25.12709956666773 msec\nrounds: 30"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 6.147906154114542,
            "unit": "iter/sec",
            "range": "stddev: 0.001438665398862406",
            "extra": "mean: 162.65700466666053 msec\nrounds: 6"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1743872.1472277404,
            "unit": "iter/sec",
            "range": "stddev: 5.624516238932854e-7",
            "extra": "mean: 573.4365340886458 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2721063.402710281,
            "unit": "iter/sec",
            "range": "stddev: 3.2143539793855784e-8",
            "extra": "mean: 367.50338084859084 nsec\nrounds: 121937"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a053f2a421b3c1dba0f660c64d126ef078bc4432",
          "message": "✨ NEW: Add basic CLI (#116)\n\nAdded basic commands for container creation, inspection and cleaning.\r\nSee `README.md` tutorial section for details.\r\n\r\nAlso added __enter__/__exit__ for Container,\r\nto allow it to be used as a context manager\r\nwhich calls Container.close() on exit (i.e. closes the database).",
          "timestamp": "2021-09-07T20:55:52+02:00",
          "tree_id": "0b64013331471b98e551ba0a715fec848653fc3d",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/a053f2a421b3c1dba0f660c64d126ef078bc4432"
        },
        "date": 1631041024373,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 3.594506474418367,
            "unit": "iter/sec",
            "range": "stddev: 0.013483810349751995",
            "extra": "mean: 278.2023087499965 msec\nrounds: 4"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.0319493720189181,
            "unit": "iter/sec",
            "range": "stddev: 0.0972134427328622",
            "extra": "mean: 969.0397873333533 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 8.83010329381241,
            "unit": "iter/sec",
            "range": "stddev: 0.007125293885622946",
            "extra": "mean: 113.24895833333433 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 41.43340649885179,
            "unit": "iter/sec",
            "range": "stddev: 0.0006135399636658461",
            "extra": "mean: 24.13511425925629 msec\nrounds: 27"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 6.133337658445961,
            "unit": "iter/sec",
            "range": "stddev: 0.004353919542519544",
            "extra": "mean: 163.0433632857213 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1908423.7529743079,
            "unit": "iter/sec",
            "range": "stddev: 7.078144499351969e-7",
            "extra": "mean: 523.9926397067132 nsec\nrounds: 181786"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2779527.94570416,
            "unit": "iter/sec",
            "range": "stddev: 3.066281606223139e-7",
            "extra": "mean: 359.7733210581813 nsec\nrounds: 121952"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc256ea026c71d79b6a3343a494c9eadb487ea34",
          "message": "🔧 MAINTAIN: Add release workflow (#117)",
          "timestamp": "2021-09-07T21:21:28+02:00",
          "tree_id": "0eb30596dedf1f47968ce0369749b43f460090af",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/bc256ea026c71d79b6a3343a494c9eadb487ea34"
        },
        "date": 1631042566385,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 3.6476327889552214,
            "unit": "iter/sec",
            "range": "stddev: 0.014365630747228027",
            "extra": "mean: 274.1504032500011 msec\nrounds: 4"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.8752107531926651,
            "unit": "iter/sec",
            "range": "stddev: 0.10355627098566404",
            "extra": "mean: 1.1425819396666672 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 8.809004649902517,
            "unit": "iter/sec",
            "range": "stddev: 0.006187622812746262",
            "extra": "mean: 113.52020344444549 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 42.13357936253923,
            "unit": "iter/sec",
            "range": "stddev: 0.0004086819358071664",
            "extra": "mean: 23.734038624999787 msec\nrounds: 32"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 6.130514842563331,
            "unit": "iter/sec",
            "range": "stddev: 0.002823238202074474",
            "extra": "mean: 163.118437142854 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1847847.846470031,
            "unit": "iter/sec",
            "range": "stddev: 4.785555598448737e-7",
            "extra": "mean: 541.1700979116401 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2827433.865942558,
            "unit": "iter/sec",
            "range": "stddev: 6.744142914824016e-8",
            "extra": "mean: 353.67759155937404 nsec\nrounds: 120468"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa94e654bd68b346e9252b80c718014982bfcdab",
          "message": "🚀 RELEASE: v0.6.0 (#118)",
          "timestamp": "2021-09-07T21:42:49+02:00",
          "tree_id": "0f874bbb5424bb25b9c5a784eb30f1f7466fd53d",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/fa94e654bd68b346e9252b80c718014982bfcdab"
        },
        "date": 1631043856222,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 2.7116256611621163,
            "unit": "iter/sec",
            "range": "stddev: 0.010180114230798716",
            "extra": "mean: 368.7824666666681 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.7162865947168234,
            "unit": "iter/sec",
            "range": "stddev: 0.1268909314390675",
            "extra": "mean: 1.3960892293333227 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 7.094345507869582,
            "unit": "iter/sec",
            "range": "stddev: 0.008393941167300242",
            "extra": "mean: 140.95732987500043 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 30.73331384142806,
            "unit": "iter/sec",
            "range": "stddev: 0.0008871233300435747",
            "extra": "mean: 32.53798159090851 msec\nrounds: 22"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 5.165789195726741,
            "unit": "iter/sec",
            "range": "stddev: 0.004766094961374036",
            "extra": "mean: 193.581263599998 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1587914.3520054477,
            "unit": "iter/sec",
            "range": "stddev: 0.000008640675937734897",
            "extra": "mean: 629.7568875406004 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2338883.879341227,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018671578485137419",
            "extra": "mean: 427.55435993732095 nsec\nrounds: 113637"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6259e2330ccb44aea06890071c6e83559ef20693",
          "message": "🔀 MERGE: master -> develop #120",
          "timestamp": "2021-09-07T22:36:13+02:00",
          "tree_id": "0f874bbb5424bb25b9c5a784eb30f1f7466fd53d",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/6259e2330ccb44aea06890071c6e83559ef20693"
        },
        "date": 1631047034966,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 4.1761352878069955,
            "unit": "iter/sec",
            "range": "stddev: 0.009662824123685576",
            "extra": "mean: 239.4558439999983 msec\nrounds: 4"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.822085905578083,
            "unit": "iter/sec",
            "range": "stddev: 0.019681477444873165",
            "extra": "mean: 548.821543999999 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 9.720804931563544,
            "unit": "iter/sec",
            "range": "stddev: 0.006402359839831693",
            "extra": "mean: 102.87213939999873 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 47.8925848467814,
            "unit": "iter/sec",
            "range": "stddev: 0.0001186381214515141",
            "extra": "mean: 20.880059057142425 msec\nrounds: 35"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 7.268025270029851,
            "unit": "iter/sec",
            "range": "stddev: 0.007890957060585844",
            "extra": "mean: 137.58895475000088 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3284673.212043047,
            "unit": "iter/sec",
            "range": "stddev: 1.1887820788124953e-8",
            "extra": "mean: 304.4442888056283 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3304638.838497569,
            "unit": "iter/sec",
            "range": "stddev: 3.350742746246811e-8",
            "extra": "mean: 302.6049286687859 nsec\nrounds: 161291"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c0120568a992b41a55b325f3217d4902b5281070",
          "message": "🔧 MAINTAIN: Make types more permissive (#121)\n\nAllow `Container` folder to be a `pathlib.Path`,\r\nand make hashkeys `Sequence[str]` rather than just `List[str]`.",
          "timestamp": "2021-09-08T07:57:10+02:00",
          "tree_id": "39bdfe2a4d7b1f4ed0561acc5c11bd66b08cd220",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/c0120568a992b41a55b325f3217d4902b5281070"
        },
        "date": 1631080727842,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 2.916086814144,
            "unit": "iter/sec",
            "range": "stddev: 0.01139098493556963",
            "extra": "mean: 342.92531866666803 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.1288572725634847,
            "unit": "iter/sec",
            "range": "stddev: 0.02629253002029753",
            "extra": "mean: 885.8515813333364 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 8.13275278153511,
            "unit": "iter/sec",
            "range": "stddev: 0.006097462243942914",
            "extra": "mean: 122.95959644444565 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 34.79975451789229,
            "unit": "iter/sec",
            "range": "stddev: 0.0011776574046584519",
            "extra": "mean: 28.735834888888373 msec\nrounds: 27"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 5.839945126162644,
            "unit": "iter/sec",
            "range": "stddev: 0.003368863247410869",
            "extra": "mean: 171.23448566666374 msec\nrounds: 6"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2548590.0233193208,
            "unit": "iter/sec",
            "range": "stddev: 5.922120717671143e-7",
            "extra": "mean: 392.3738187977706 nsec\nrounds: 121952"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2552148.42131167,
            "unit": "iter/sec",
            "range": "stddev: 9.682292973436194e-7",
            "extra": "mean: 391.82674159918633 nsec\nrounds: 125000"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a09ea2a953f0b0dfa79a6688306c51a501f874b",
          "message": "[pre-commit.ci] pre-commit autoupdate (#115)\n\nupdates:\r\n- [github.com/psf/black: 21.7b0 → 21.8b0](https://github.com/psf/black/compare/21.7b0...21.8b0)\r\n\r\nCo-authored-by: Chris Sewell <chrisj_sewell@hotmail.com>",
          "timestamp": "2021-09-09T02:18:32+02:00",
          "tree_id": "3944bbd36949ddf3afabd456558b72039dece5c9",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/7a09ea2a953f0b0dfa79a6688306c51a501f874b"
        },
        "date": 1631146796338,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 2.9530085882949653,
            "unit": "iter/sec",
            "range": "stddev: 0.013932525042400647",
            "extra": "mean: 338.6376876666617 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.7798393571164037,
            "unit": "iter/sec",
            "range": "stddev: 0.18167629502625898",
            "extra": "mean: 1.2823153780000023 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 7.679856414947098,
            "unit": "iter/sec",
            "range": "stddev: 0.006891761664999057",
            "extra": "mean: 130.21076774999685 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 32.162436452696134,
            "unit": "iter/sec",
            "range": "stddev: 0.00123593799778344",
            "extra": "mean: 31.092171809520085 msec\nrounds: 21"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 5.350247511652251,
            "unit": "iter/sec",
            "range": "stddev: 0.0045432857569262936",
            "extra": "mean: 186.90724080000223 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2378228.840536967,
            "unit": "iter/sec",
            "range": "stddev: 5.114541703447672e-7",
            "extra": "mean: 420.4809827190342 nsec\nrounds: 133334"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2453468.939172888,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010984822086899814",
            "extra": "mean: 407.58616668574604 nsec\nrounds: 121952"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cbda68db1b3f5858e844c9434f288b85447116e6",
          "message": "Merge pull request #127 from giovannipizzi/add-docs\n\nMoving documentation to sphinx+myst",
          "timestamp": "2021-12-09T22:13:09+01:00",
          "tree_id": "ef3255b0dd18701ce5367510b6f14cebbe355393",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/cbda68db1b3f5858e844c9434f288b85447116e6"
        },
        "date": 1639084475239,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 3.3485744891813005,
            "unit": "iter/sec",
            "range": "stddev: 0.009253863695152506",
            "extra": "mean: 298.63453933333045 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.1331307824792158,
            "unit": "iter/sec",
            "range": "stddev: 0.10063001464119402",
            "extra": "mean: 882.510664666673 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 7.985333824469701,
            "unit": "iter/sec",
            "range": "stddev: 0.00863341651843009",
            "extra": "mean: 125.22957987500405 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 35.154259181344884,
            "unit": "iter/sec",
            "range": "stddev: 0.002053881130167251",
            "extra": "mean: 28.44605528000045 msec\nrounds: 25"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 5.667192831517841,
            "unit": "iter/sec",
            "range": "stddev: 0.0056842239538085326",
            "extra": "mean: 176.45420400000233 msec\nrounds: 6"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1740830.2899158387,
            "unit": "iter/sec",
            "range": "stddev: 0.000002268939082071079",
            "extra": "mean: 574.438534182643 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2547179.6784289526,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012250006807706615",
            "extra": "mean: 392.59107179123777 nsec\nrounds: 128206"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "14cb67308370cfb5c620cb90628cf51c175272d5",
          "message": "[pre-commit.ci] pre-commit autoupdate (#122)\n\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>\r\nCo-authored-by: Giovanni Pizzi <giovanni.pizzi@epfl.ch>",
          "timestamp": "2021-12-10T00:41:30+01:00",
          "tree_id": "be9c4a776cc83d3aa15ed3b131cb8a4a00a3bbce",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/14cb67308370cfb5c620cb90628cf51c175272d5"
        },
        "date": 1639093378333,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 3.0885762306926505,
            "unit": "iter/sec",
            "range": "stddev: 0.012908041858489119",
            "extra": "mean: 323.77377966667115 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.7931283983722697,
            "unit": "iter/sec",
            "range": "stddev: 0.11332620597929889",
            "extra": "mean: 1.2608299010000035 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 7.294811279338487,
            "unit": "iter/sec",
            "range": "stddev: 0.009897905191709218",
            "extra": "mean: 137.08373825000209 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 33.177836026529974,
            "unit": "iter/sec",
            "range": "stddev: 0.0012407561851243603",
            "extra": "mean: 30.140603479997026 msec\nrounds: 25"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 5.673807404066976,
            "unit": "iter/sec",
            "range": "stddev: 0.004529659443847198",
            "extra": "mean: 176.24849219999987 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1551359.4503931175,
            "unit": "iter/sec",
            "range": "stddev: 0.000025955645479265078",
            "extra": "mean: 644.5959379346921 nsec\nrounds: 156226"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2489542.1923441635,
            "unit": "iter/sec",
            "range": "stddev: 9.206771436173523e-7",
            "extra": "mean: 401.6802780347329 nsec\nrounds: 126567"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "65a3e5d9b8c95d7f9a7309a01f8be68bc11be1bd",
          "message": "Missing badge from RTD added (#129)\n\n* Missing badge from RTD added\r\n\r\n* [pre-commit.ci] auto fixes from pre-commit.com hooks",
          "timestamp": "2021-12-15T11:18:23+01:00",
          "tree_id": "b0581635f9dbaa13760e30de0b0e5c3aa75ff806",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/65a3e5d9b8c95d7f9a7309a01f8be68bc11be1bd"
        },
        "date": 1639563574546,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 3.98781062674528,
            "unit": "iter/sec",
            "range": "stddev: 0.011524756960093124",
            "extra": "mean: 250.7641644999996 msec\nrounds: 4"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.5881743504493455,
            "unit": "iter/sec",
            "range": "stddev: 0.06890084563867725",
            "extra": "mean: 629.6537906666657 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 9.480333401028142,
            "unit": "iter/sec",
            "range": "stddev: 0.00776904836442887",
            "extra": "mean: 105.48152239999808 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 43.192227677407814,
            "unit": "iter/sec",
            "range": "stddev: 0.0006514311535894132",
            "extra": "mean: 23.15231359375014 msec\nrounds: 32"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 6.614444174729539,
            "unit": "iter/sec",
            "range": "stddev: 0.016939518661683164",
            "extra": "mean: 151.18428299999817 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2179965.6223666873,
            "unit": "iter/sec",
            "range": "stddev: 1.0345958988188959e-7",
            "extra": "mean: 458.7228301858937 nsec\nrounds: 161291"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2194762.0488174395,
            "unit": "iter/sec",
            "range": "stddev: 8.55520083031421e-8",
            "extra": "mean: 455.63025866007223 nsec\nrounds: 181819"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ramirezfranciscof@users.noreply.github.com",
            "name": "Francisco Ramirez",
            "username": "ramirezfranciscof"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9eda5b8e8c6b4aa72a8cb36418382f9ea20cf307",
          "message": "Fix `mypy` CI error due to file `database.py` name (#131)",
          "timestamp": "2022-01-11T18:24:58+01:00",
          "tree_id": "bc7456356aa2981645f679f9b967ccaa13703891",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/9eda5b8e8c6b4aa72a8cb36418382f9ea20cf307"
        },
        "date": 1641921985265,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 2.9172004335152404,
            "unit": "iter/sec",
            "range": "stddev: 0.10827456631696293",
            "extra": "mean: 342.79440949999974 msec\nrounds: 4"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.8363487669746653,
            "unit": "iter/sec",
            "range": "stddev: 0.07694026652156778",
            "extra": "mean: 1.1956734313333328 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 7.8622518614224255,
            "unit": "iter/sec",
            "range": "stddev: 0.011121664889094407",
            "extra": "mean: 127.19002362499765 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 36.38341457028439,
            "unit": "iter/sec",
            "range": "stddev: 0.0017435121397136476",
            "extra": "mean: 27.48505086206876 msec\nrounds: 29"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 5.951561803740054,
            "unit": "iter/sec",
            "range": "stddev: 0.0009809537174341573",
            "extra": "mean: 168.023122833335 msec\nrounds: 6"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1803118.3060745692,
            "unit": "iter/sec",
            "range": "stddev: 1.8549739472306034e-7",
            "extra": "mean: 554.5947798494839 nsec\nrounds: 158731"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2708820.679155994,
            "unit": "iter/sec",
            "range": "stddev: 6.708476744328479e-8",
            "extra": "mean: 369.164340664808 nsec\nrounds: 117634"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "16e6ff98c904ef0ec8b03ba3ce6e1eb00204c328",
          "message": "FIX: mypy dependency problem and revert unnecessary file rename (#132)\n\nUpdated the version of mypy and of the SQLAlchemy dependency\r\n(the latter was needed to avoid some INTERNAL ERRORs when running\r\nmypy):\r\n\r\n- [github.com/pre-commit/pre-commit-hooks: v4.0.1 → v4.1.0](https://github.com/pre-commit/pre-commit-hooks/compare/v4.0.1...v4.1.0)\r\n- [github.com/asottile/pyupgrade: v2.29.1 → v2.31.0](https://github.com/asottile/pyupgrade/compare/v2.29.1...v2.31.0)\r\n- [github.com/pre-commit/mirrors-mypy: v0.910-1 → v0.930](https://github.com/pre-commit/mirrors-mypy/compare/v0.910-1...v0.930)\r\n\r\nThis also reverts commit 9eda5b8e8c6b4aa72a8cb36418382f9ea20cf307.",
          "timestamp": "2022-01-11T19:23:52+01:00",
          "tree_id": "7ff4d7fd420aae0879fce600637e11a137af9ec9",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/16e6ff98c904ef0ec8b03ba3ce6e1eb00204c328"
        },
        "date": 1641925541976,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 3.517706299025546,
            "unit": "iter/sec",
            "range": "stddev: 0.012013915429173986",
            "extra": "mean: 284.276148999993 msec\nrounds: 4"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.0858010971872452,
            "unit": "iter/sec",
            "range": "stddev: 0.0864556868118485",
            "extra": "mean: 920.9789919999972 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 8.509108951496543,
            "unit": "iter/sec",
            "range": "stddev: 0.008468269035685363",
            "extra": "mean: 117.52111833332732 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 38.095833416132756,
            "unit": "iter/sec",
            "range": "stddev: 0.00033073273252633216",
            "extra": "mean: 26.249589793106395 msec\nrounds: 29"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 6.180697707371932,
            "unit": "iter/sec",
            "range": "stddev: 0.0016836609282652971",
            "extra": "mean: 161.7940315714301 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1852426.4389113286,
            "unit": "iter/sec",
            "range": "stddev: 2.388555031881018e-7",
            "extra": "mean: 539.8325023841164 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2809819.9837593557,
            "unit": "iter/sec",
            "range": "stddev: 5.2880375872295246e-8",
            "extra": "mean: 355.89468570226177 nsec\nrounds: 126583"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@sphuber.net",
            "name": "Sebastiaan Huber",
            "username": "sphuber"
          },
          "committer": {
            "email": "mail@sphuber.net",
            "name": "Sebastiaan Huber",
            "username": "sphuber"
          },
          "distinct": true,
          "id": "f1809d416fbb481944c1e89d3e1f59b532b85a46",
          "message": "DevOps: update pre-commit dependency requirements\n\nAlso add a pin for `jinja2`. Versions 3.1 and above break the docs\nbuild.",
          "timestamp": "2022-10-21T20:32:54+02:00",
          "tree_id": "c48810f1f095d25f903884fbb3ef41b430be0327",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/f1809d416fbb481944c1e89d3e1f59b532b85a46"
        },
        "date": 1666377252866,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 3.3312295582290488,
            "unit": "iter/sec",
            "range": "stddev: 0.014088371785747917",
            "extra": "mean: 300.18945933333424 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.0380997508763412,
            "unit": "iter/sec",
            "range": "stddev: 0.0668041054545141",
            "extra": "mean: 963.2985646666631 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 7.847123570595875,
            "unit": "iter/sec",
            "range": "stddev: 0.009237117936698697",
            "extra": "mean: 127.43523037500282 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 36.3028084150804,
            "unit": "iter/sec",
            "range": "stddev: 0.00034326388617862046",
            "extra": "mean: 27.54607821428477 msec\nrounds: 28"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 5.760300973422398,
            "unit": "iter/sec",
            "range": "stddev: 0.0008380539358216068",
            "extra": "mean: 173.6020399999802 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1771142.3549188478,
            "unit": "iter/sec",
            "range": "stddev: 3.5918051128741556e-7",
            "extra": "mean: 564.6073548084842 nsec\nrounds: 147059"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2683451.4589254702,
            "unit": "iter/sec",
            "range": "stddev: 5.221507971417768e-8",
            "extra": "mean: 372.6544024765762 nsec\nrounds: 133334"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "gio.piz@gmail.com",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "10edd6395455d7c59361e608396b672289d8de58",
          "message": "Refactoring the code to enable efficient access to packed compressed objects\n\nI started to work on top of Bonan's work.\nI kept the same core idea: upon certain conditions (now well defined, i.e.\nwhen seeking with the following conditions):\n- whence=0 and seeking in a previous location\n- whence=1 and seeking in a previous location (i.e. negative offset)\n- whence=2\nwe assume that we will need to do random access, so we just uncompress\nthe whole file back into the loose folder and then proxy all requests\n(tell, seek, read) to the loose file.\n\nI now define a LazyLooseStream class that allows to define which loose\nfile to open, delaying the opening to a later point, and in this way\nenabling code that ensures that always closes any open file.\n\nI also added code to ensure that there should not be race conditions\nif a clean_storage is running at the same time.\n\nI also cleaned up a bit the code and added various tests to increased coverage,\nsince it had dropped over time. It didn't go back to 100% but we are close\n(for the core library files).\n\nFurthermore, I used the occasion to a new `validate` CLI command\nthat also uses tqdm (if installed) to show progress.",
          "timestamp": "2023-07-04T18:18:04+02:00",
          "tree_id": "da00366d84a73df7c018aa051c5fe6efd06ec0b3",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/10edd6395455d7c59361e608396b672289d8de58"
        },
        "date": 1688487547764,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 3.602321517903288,
            "unit": "iter/sec",
            "range": "stddev: 0.0177721051980014",
            "extra": "mean: 277.5987637500066 msec\nrounds: 4"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.3274077714724029,
            "unit": "iter/sec",
            "range": "stddev: 0.06280715123724784",
            "extra": "mean: 753.3480076666782 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 8.817111066153412,
            "unit": "iter/sec",
            "range": "stddev: 0.0007619532806745677",
            "extra": "mean: 113.41583342856357 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 38.36239773016407,
            "unit": "iter/sec",
            "range": "stddev: 0.00017389119277411258",
            "extra": "mean: 26.06719233333289 msec\nrounds: 30"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 6.380731014902617,
            "unit": "iter/sec",
            "range": "stddev: 0.0012311736471019086",
            "extra": "mean: 156.72185485713695 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2013648.8538424547,
            "unit": "iter/sec",
            "range": "stddev: 1.5227034940502479e-7",
            "extra": "mean: 496.61091510160526 nsec\nrounds: 125001"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3044757.8293289575,
            "unit": "iter/sec",
            "range": "stddev: 2.3625245466913813e-8",
            "extra": "mean: 328.4333454594014 nsec\nrounds: 147059"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "39116092acc684712060eca2d8a294117a04a8f3",
          "message": "Adding link in docs to AEP#006 (#143)\n\nNow the AEP information is linked from the design documentation page.\r\n\r\nThis closes #128",
          "timestamp": "2023-07-04T22:36:41+02:00",
          "tree_id": "a8c542fbe4b22dfe1083d9ebb2623f320cd056f9",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/39116092acc684712060eca2d8a294117a04a8f3"
        },
        "date": 1688503091081,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 2.548404698276717,
            "unit": "iter/sec",
            "range": "stddev: 0.02467198723277735",
            "extra": "mean: 392.40235299998477 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.7492704507221711,
            "unit": "iter/sec",
            "range": "stddev: 0.09121046398691034",
            "extra": "mean: 1.3346315726666755 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 7.530010196763473,
            "unit": "iter/sec",
            "range": "stddev: 0.009320040853064628",
            "extra": "mean: 132.8019449999971 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 28.5133509842201,
            "unit": "iter/sec",
            "range": "stddev: 0.001572473025278188",
            "extra": "mean: 35.07128995653375 msec\nrounds: 23"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 5.177868499020119,
            "unit": "iter/sec",
            "range": "stddev: 0.007579562080616126",
            "extra": "mean: 193.129663333328 msec\nrounds: 6"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1699478.8186368088,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016268493225723705",
            "extra": "mean: 588.4156889946549 nsec\nrounds: 166639"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2553009.1739704,
            "unit": "iter/sec",
            "range": "stddev: 5.312646710902358e-7",
            "extra": "mean: 391.69463635124197 nsec\nrounds: 138870"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "gio.piz@gmail.com",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "afdae261a5849e994b5920ca07665fc6a19f3852",
          "message": "Adding also 3.11 support",
          "timestamp": "2023-07-07T17:00:13+02:00",
          "tree_id": "21fd8385393ec10cfd04fed00c8e5ae61f5b82cd",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/afdae261a5849e994b5920ca07665fc6a19f3852"
        },
        "date": 1688742119775,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 2.534042673483041,
            "unit": "iter/sec",
            "range": "stddev: 0.0032814943781325186",
            "extra": "mean: 394.62634566666566 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.6918538278943547,
            "unit": "iter/sec",
            "range": "stddev: 0.08788160721623683",
            "extra": "mean: 1.4453920173333188 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 6.6016486512201205,
            "unit": "iter/sec",
            "range": "stddev: 0.01473799313822302",
            "extra": "mean: 151.47731314285855 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 23.7801776413457,
            "unit": "iter/sec",
            "range": "stddev: 0.0036349077495159824",
            "extra": "mean: 42.05183052381147 msec\nrounds: 21"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 5.024171636410321,
            "unit": "iter/sec",
            "range": "stddev: 0.0042993863368853465",
            "extra": "mean: 199.03778620001162 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1548135.3005422268,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036096066972358095",
            "extra": "mean: 645.93837479822 nsec\nrounds: 156251"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2414426.4984659674,
            "unit": "iter/sec",
            "range": "stddev: 4.0297917675312553e-7",
            "extra": "mean: 414.177031537573 nsec\nrounds: 121952"
          }
        ]
      }
    ],
    "Benchmark on macos-latest": [
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37e4914e091106642af3975663590f013d0813b3",
          "message": "Merge pull request #40 from giovannipizzi/move_benchmarks_new_workflow\n\nMoving benchmarks to a different workflow",
          "timestamp": "2020-06-29T09:05:10+02:00",
          "tree_id": "21cfdf2eed33a3725bbd4cbbf25afc1b0bedfa02",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/37e4914e091106642af3975663590f013d0813b3"
        },
        "date": 1593414400104,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.3306547594895717,
            "unit": "iter/sec",
            "range": "stddev: 0.01527932818493315",
            "extra": "mean: 3.0243024523333326 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.7073370080458896,
            "unit": "iter/sec",
            "range": "stddev: 0.00864343419938554",
            "extra": "mean: 369.3666496000006 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1080bfabe7608f846b4d91278f963d24c18c72a1",
          "message": "Merge pull request #41 from giovannipizzi/increase_coverage\n\nAdding a test that covers one missing line",
          "timestamp": "2020-06-29T09:29:13+02:00",
          "tree_id": "760b3d95f1595f870ea05a2ec9a502b9ca6c3884",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/1080bfabe7608f846b4d91278f963d24c18c72a1"
        },
        "date": 1593415917719,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.29642969949814485,
            "unit": "iter/sec",
            "range": "stddev: 0.043688914559747064",
            "extra": "mean: 3.3734811380000007 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.4045279739374847,
            "unit": "iter/sec",
            "range": "stddev: 0.011744473601796923",
            "extra": "mean: 415.8820404000004 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7eda99b2f330e4fee334381a9800d6aca1974d12",
          "message": "Merge pull request #42 from giovannipizzi/increase_coverage\n\nTrying to see if standard github token works",
          "timestamp": "2020-06-29T09:58:18+02:00",
          "tree_id": "5079e5290b4c4795ef6426c38f1a5f9fdd801159",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/7eda99b2f330e4fee334381a9800d6aca1974d12"
        },
        "date": 1593417608866,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.2814645353649651,
            "unit": "iter/sec",
            "range": "stddev: 0.21080038979311236",
            "extra": "mean: 3.5528454720000004 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 1.8242120789034546,
            "unit": "iter/sec",
            "range": "stddev: 0.036399749657266105",
            "extra": "mean: 548.181876200001 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "8f93a1e9914e96e2a8892402c1faf6df2e5febb4",
          "message": "Returning more metadata when iterating over objects\n\nWe now don't return only the size, but a set of metadata.\nNote that this a backward-incompatible change (for those who\nwere using the internal get_objects_stream_and_meta (that anyway\nused to be called get_objects_stream_and_size, and does not exist anymore).\nTherefore, I upped the version to 0.4.0.\n\nI also added a get_object_stream_and_meta (at the singular) for a single object.",
          "timestamp": "2020-06-29T12:08:47+02:00",
          "tree_id": "3dfddd917f5aa1bec1e88f60b058390b416a8997",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/8f93a1e9914e96e2a8892402c1faf6df2e5febb4"
        },
        "date": 1593430124790,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.32093395931193996,
            "unit": "iter/sec",
            "range": "stddev: 0.017890063746770643",
            "extra": "mean: 3.115905846 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.6262218459714695,
            "unit": "iter/sec",
            "range": "stddev: 0.007752487368555455",
            "extra": "mean: 380.77514340000033 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0f55bed73ac1f06b7aaac5a3fc28ac2359530ac4",
          "message": "Merge pull request #44 from giovannipizzi/object_meta\n\nReadme change for the previous change and fix in test",
          "timestamp": "2020-06-29T14:54:11+02:00",
          "tree_id": "f596f20d7180d9d03843fdd7bbebd22e028348ea",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/0f55bed73ac1f06b7aaac5a3fc28ac2359530ac4"
        },
        "date": 1593435391477,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.30489894275518165,
            "unit": "iter/sec",
            "range": "stddev: 0.028810502051465833",
            "extra": "mean: 3.2797752296666673 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.4977782000643662,
            "unit": "iter/sec",
            "range": "stddev: 0.009722049070577457",
            "extra": "mean: 400.3558042000009 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d76727c1cfc2bd09a1dc0623fdaaafe1a37e9361",
          "message": "Merge pull request #47 from giovannipizzi/fix_45\n\nAdd `has_object` and `has_objects` methods",
          "timestamp": "2020-07-08T23:37:07+02:00",
          "tree_id": "bb2c71eb780474decfeed149f228b7cb2d4f5c60",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/d76727c1cfc2bd09a1dc0623fdaaafe1a37e9361"
        },
        "date": 1594244344083,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.2935004652740095,
            "unit": "iter/sec",
            "range": "stddev: 0.07446688481677756",
            "extra": "mean: 3.4071496243333335 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.4519402522458646,
            "unit": "iter/sec",
            "range": "stddev: 0.009572421643208772",
            "extra": "mean: 407.8402804 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 0.8505371359325654,
            "unit": "iter/sec",
            "range": "stddev: 0.2595299084299431",
            "extra": "mean: 1.1757276169999997 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fb506418941ce59f8978c2ae47968d4e484ea37",
          "message": "Merge pull request #49 from giovannipizzi/add_simple_docs\n\nAdding a simple how-to guide to go through the API interface",
          "timestamp": "2020-07-10T18:41:52+02:00",
          "tree_id": "556717932b6d1de938efe63b0b81b21a4fc73b49",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/2fb506418941ce59f8978c2ae47968d4e484ea37"
        },
        "date": 1594399625124,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.2670576307295951,
            "unit": "iter/sec",
            "range": "stddev: 0.20116993756181967",
            "extra": "mean: 3.7445101166666674 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.374189663367292,
            "unit": "iter/sec",
            "range": "stddev: 0.009593851358588696",
            "extra": "mean: 421.1963413999996 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 0.9764185011558881,
            "unit": "iter/sec",
            "range": "stddev: 0.05050397204608055",
            "extra": "mean: 1.024151016 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d493174c1354603b21ed8d623f487660a050d24",
          "message": "Merge pull request #50 from giovannipizzi/better_debugging_concurrency\n\nSlightly more detailed debugging in case of problems with the concurrent tests",
          "timestamp": "2020-07-10T19:48:46+02:00",
          "tree_id": "36d0accdc00b7f7b1eb3e3b01401bfb7c227471f",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/4d493174c1354603b21ed8d623f487660a050d24"
        },
        "date": 1594403525879,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.18641289007693232,
            "unit": "iter/sec",
            "range": "stddev: 0.21101331445653887",
            "extra": "mean: 5.364435901333334 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 1.714726168059773,
            "unit": "iter/sec",
            "range": "stddev: 0.07547337743437044",
            "extra": "mean: 583.1834951999995 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 0.7518890986156279,
            "unit": "iter/sec",
            "range": "stddev: 0.035622849032763304",
            "extra": "mean: 1.3299833736666642 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "91ea646558962736530f212654fd83927f650c87",
          "message": "Merge pull request #53 from giovannipizzi/further_multiprocess_basic_tests\n\nFurther multiprocess basic tests",
          "timestamp": "2020-07-12T09:02:23+02:00",
          "tree_id": "e0d576ca01ebee5c8b61e515d997482d318529fb",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/91ea646558962736530f212654fd83927f650c87"
        },
        "date": 1594537465569,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.28124216237857413,
            "unit": "iter/sec",
            "range": "stddev: 0.18652944042149158",
            "extra": "mean: 3.555654641333333 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.4575564385294855,
            "unit": "iter/sec",
            "range": "stddev: 0.02716535229309906",
            "extra": "mean: 406.90825419999896 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 0.6726741080555227,
            "unit": "iter/sec",
            "range": "stddev: 0.04357975730898271",
            "extra": "mean: 1.4866039706666687 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6fae5f875c73bf4b5f2eb69e28467efa731c2aa3",
          "message": "Merge pull request #58 from sphuber/feature/057/packed-object-reader-mode\n\nAdd the `mode` property to the `PackedObjectReader`",
          "timestamp": "2020-07-12T21:53:29+02:00",
          "tree_id": "f32c32f225344579ea82d4787e2e232ead7dfa2c",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/6fae5f875c73bf4b5f2eb69e28467efa731c2aa3"
        },
        "date": 1594584067920,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.25637096769093004,
            "unit": "iter/sec",
            "range": "stddev: 0.18101048764204516",
            "extra": "mean: 3.9005976729999996 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 1.9572581083069391,
            "unit": "iter/sec",
            "range": "stddev: 0.023496314085722635",
            "extra": "mean: 510.91881839999974 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 0.6366992197621189,
            "unit": "iter/sec",
            "range": "stddev: 0.42621145786798614",
            "extra": "mean: 1.5706003226666685 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6025360bb8a030b1103e7d40da4f7bde7938dd4c",
          "message": "Merge pull request #55 from giovannipizzi/fix_open_files\n\nFix lost open files and implement FULLSYNC for pack files on Mac OS",
          "timestamp": "2020-07-12T22:29:09+02:00",
          "tree_id": "571d031d2c95a14eb9fc9289031f93a62b9693f8",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/6025360bb8a030b1103e7d40da4f7bde7938dd4c"
        },
        "date": 1594585863671,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.3083947741165859,
            "unit": "iter/sec",
            "range": "stddev: 0.15956238467904577",
            "extra": "mean: 3.2425970993333335 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.3875293779687363,
            "unit": "iter/sec",
            "range": "stddev: 0.052000855552047",
            "extra": "mean: 720.7054609999991 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.857148690624174,
            "unit": "iter/sec",
            "range": "stddev: 0.011963336789995798",
            "extra": "mean: 349.9992853999977 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 0.7465320835614179,
            "unit": "iter/sec",
            "range": "stddev: 0.06630423406040951",
            "extra": "mean: 1.3395271576666659 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09cc7a9539aa68f3417bf4ef2e80b520a1b4ba41",
          "message": "Merge pull request #60 from giovannipizzi/fix_56_seek\n\nAdded seek method to both the PackedObjectReader and the StreamDecompresser",
          "timestamp": "2020-07-13T01:27:47+02:00",
          "tree_id": "cf2de3df905a56e5ca39dbd1155b206012989f9f",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/09cc7a9539aa68f3417bf4ef2e80b520a1b4ba41"
        },
        "date": 1594597043470,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.22859100130799295,
            "unit": "iter/sec",
            "range": "stddev: 0.41362199831320695",
            "extra": "mean: 4.374625397666666 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.11820384108833179,
            "unit": "iter/sec",
            "range": "stddev: 0.24532156376351738",
            "extra": "mean: 8.459961967333333 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.0583851470145333,
            "unit": "iter/sec",
            "range": "stddev: 0.05305504257692827",
            "extra": "mean: 485.817730200003 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 0.6375980103068883,
            "unit": "iter/sec",
            "range": "stddev: 0.0788760964002703",
            "extra": "mean: 1.5683863246666665 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "df368df957ecb9cf2a4a308c0b2baccfa7669638",
          "message": "Merge pull request #61 from giovannipizzi/check_concurrency\n\nFix concurrency problems in Mac OS",
          "timestamp": "2020-07-13T10:14:15+02:00",
          "tree_id": "2483876c2ad6de311dce821cd69d08efc5662ed0",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/df368df957ecb9cf2a4a308c0b2baccfa7669638"
        },
        "date": 1594628174810,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.3163073672993095,
            "unit": "iter/sec",
            "range": "stddev: 0.025004027532547535",
            "extra": "mean: 3.161481847666667 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.7058886811916807,
            "unit": "iter/sec",
            "range": "stddev: 0.09042342423381623",
            "extra": "mean: 1.4166539663333328 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.7652036088851477,
            "unit": "iter/sec",
            "range": "stddev: 0.00414246411331762",
            "extra": "mean: 361.6370226000001 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 0.9956526314688173,
            "unit": "iter/sec",
            "range": "stddev: 0.06549834233072008",
            "extra": "mean: 1.0043663506666671 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cec284e3680abc6105e80d0098da030a6cc3509e",
          "message": "Merge pull request #62 from giovannipizzi/fix_58_performance_has\n\nAdding methods to just fetch metas without opening streams",
          "timestamp": "2020-07-13T20:34:37+02:00",
          "tree_id": "3318cf4caa826238d95afbbb139840cb292a6f0e",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/cec284e3680abc6105e80d0098da030a6cc3509e"
        },
        "date": 1594665691530,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.303524917639796,
            "unit": "iter/sec",
            "range": "stddev: 0.07457511451689558",
            "extra": "mean: 3.294622424333333 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.16568739061022653,
            "unit": "iter/sec",
            "range": "stddev: 2.3063478960777486",
            "extra": "mean: 6.0354623023333325 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.581518735238749,
            "unit": "iter/sec",
            "range": "stddev: 0.0064269659203062615",
            "extra": "mean: 387.3688718000011 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.127971807680183,
            "unit": "iter/sec",
            "range": "stddev: 0.11498933715114586",
            "extra": "mean: 886.5469803333355 msec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dab40d1d73c8515a5900560c656d04bdbae5fdf0",
          "message": "Merge pull request #63 from giovannipizzi/fix_10_performance\n\nAdding performance tests for loose read",
          "timestamp": "2020-07-13T22:09:53+02:00",
          "tree_id": "da463ed266c11b51b86ed097afedaa7a018bec82",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/dab40d1d73c8515a5900560c656d04bdbae5fdf0"
        },
        "date": 1594671408363,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.3149834403440924,
            "unit": "iter/sec",
            "range": "stddev: 0.011688672079478334",
            "extra": "mean: 3.1747700733333333 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.0630059112410551,
            "unit": "iter/sec",
            "range": "stddev: 0.30794564182151113",
            "extra": "mean: 15.871526660000002 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.8189986974247114,
            "unit": "iter/sec",
            "range": "stddev: 0.01089774824704289",
            "extra": "mean: 354.73588579999955 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 11.148714163163342,
            "unit": "iter/sec",
            "range": "stddev: 0.0007493945786586733",
            "extra": "mean: 89.69644260000109 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.420793667779523,
            "unit": "iter/sec",
            "range": "stddev: 0.006852459839201409",
            "extra": "mean: 703.8319656666564 msec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "801df0c0b90f09e910c7f822ae87e548446bce7a",
          "message": "Merge pull request #66 from giovannipizzi/fix_65_list_all\n\nAdding a function to list all objects",
          "timestamp": "2020-07-14T00:46:13+02:00",
          "tree_id": "0587cf74d5f99911d7ac55811765a11dfa23aeab",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/801df0c0b90f09e910c7f822ae87e548446bce7a"
        },
        "date": 1594680488088,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.3009759620207616,
            "unit": "iter/sec",
            "range": "stddev: 0.2007963307515031",
            "extra": "mean: 3.3225244743333326 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.2425917286898986,
            "unit": "iter/sec",
            "range": "stddev: 0.0891299200817095",
            "extra": "mean: 804.7695609999993 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.7510770951016874,
            "unit": "iter/sec",
            "range": "stddev: 0.019083054736029424",
            "extra": "mean: 363.49399360000024 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 11.286760018004085,
            "unit": "iter/sec",
            "range": "stddev: 0.0014513196537408732",
            "extra": "mean: 88.59938533333296 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.3973914413262156,
            "unit": "iter/sec",
            "range": "stddev: 0.01971294596466424",
            "extra": "mean: 715.6190959999975 msec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a256e013b16d6a7044f7584114e7261dba5d1f6",
          "message": "Merge pull request #71 from giovannipizzi/fix_69_efficient_list_all\n\nImprove performance of list_all_objects for packed objects",
          "timestamp": "2020-07-16T14:37:20+02:00",
          "tree_id": "4038bcb9cafb4dbb2cf25ee20ef0750f1bbf4912",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/5a256e013b16d6a7044f7584114e7261dba5d1f6"
        },
        "date": 1594903301612,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.2987029221090085,
            "unit": "iter/sec",
            "range": "stddev: 0.1092283337598311",
            "extra": "mean: 3.347807892 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.5053370846036854,
            "unit": "iter/sec",
            "range": "stddev: 0.010148356745714297",
            "extra": "mean: 1.9788771306666675 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.3249799706114285,
            "unit": "iter/sec",
            "range": "stddev: 0.05323003075917984",
            "extra": "mean: 430.11123219999945 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 10.472330276511405,
            "unit": "iter/sec",
            "range": "stddev: 0.007318237771399916",
            "extra": "mean: 95.48973090000032 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.280726225731252,
            "unit": "iter/sec",
            "range": "stddev: 0.03442638761247181",
            "extra": "mean: 780.806998333335 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1904478.4400424503,
            "unit": "iter/sec",
            "range": "stddev: 9.687666114060676e-7",
            "extra": "mean: 525.0781415922515 nsec\nrounds: 166723"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2076633.5269556881,
            "unit": "iter/sec",
            "range": "stddev: 5.669641770384444e-7",
            "extra": "mean: 481.54861559323086 nsec\nrounds: 56597"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "32baa140c5860150a0891937b0e4a69aa88b05e7",
          "message": "Do not fail on benchmark test alert",
          "timestamp": "2020-07-16T23:04:29+02:00",
          "tree_id": "f3721560975ad665334615ba90b19359aacbc87d",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/32baa140c5860150a0891937b0e4a69aa88b05e7"
        },
        "date": 1594933732315,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.2661037970083626,
            "unit": "iter/sec",
            "range": "stddev: 0.04435043795173731",
            "extra": "mean: 3.757932097333334 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.3765195877496201,
            "unit": "iter/sec",
            "range": "stddev: 0.00743804355632289",
            "extra": "mean: 726.4698656666653 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.296213596683823,
            "unit": "iter/sec",
            "range": "stddev: 0.018693333996654724",
            "extra": "mean: 435.4995552000013 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 8.195900021831573,
            "unit": "iter/sec",
            "range": "stddev: 0.017758514695843552",
            "extra": "mean: 122.01222530000138 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 0.9698201640519553,
            "unit": "iter/sec",
            "range": "stddev: 0.04861285142245104",
            "extra": "mean: 1.0311190023333314 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2019888.819315753,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011942843426629838",
            "extra": "mean: 495.0767539466626 nsec\nrounds: 157829"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3188963.4603771023,
            "unit": "iter/sec",
            "range": "stddev: 2.5831137878518007e-7",
            "extra": "mean: 313.5815171371805 nsec\nrounds: 192013"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2815887c622e923ab8d6eac4370488df9be8166a",
          "message": "Merge pull request #74 from giovannipizzi/fix_hash_computation\n\nFix to the hash calculation when writing to compressed packs.",
          "timestamp": "2020-07-17T15:50:51+02:00",
          "tree_id": "84fff9b9c58f7df075b9377c35ae3974517e74ea",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/2815887c622e923ab8d6eac4370488df9be8166a"
        },
        "date": 1594994111874,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.32044457417199157,
            "unit": "iter/sec",
            "range": "stddev: 0.046848527276737634",
            "extra": "mean: 3.1206644786666664 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.25861635426411633,
            "unit": "iter/sec",
            "range": "stddev: 2.2248446227363368",
            "extra": "mean: 3.866731486666667 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.7100307929633725,
            "unit": "iter/sec",
            "range": "stddev: 0.01432394338022498",
            "extra": "mean: 368.9994971999994 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 10.554319019748116,
            "unit": "iter/sec",
            "range": "stddev: 0.005465780449663768",
            "extra": "mean: 94.7479414 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.4269876896816194,
            "unit": "iter/sec",
            "range": "stddev: 0.01820396846360475",
            "extra": "mean: 700.7768933333361 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2269976.1171215037,
            "unit": "iter/sec",
            "range": "stddev: 4.803406253331213e-7",
            "extra": "mean: 440.53326925222166 nsec\nrounds: 171645"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3984768.2450144477,
            "unit": "iter/sec",
            "range": "stddev: 4.150161903802594e-7",
            "extra": "mean: 250.95562364287485 nsec\nrounds: 193051"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa85ce1b90b92989c15446fb1125e6c7840ad729",
          "message": "Merge pull request #77 from giovannipizzi/fix_37_concurrency_win\n\nFix concurrency problems on Windows",
          "timestamp": "2020-07-17T16:48:14+02:00",
          "tree_id": "45fabeaefc37015b298754e3beaf07326d2b02f2",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/fa85ce1b90b92989c15446fb1125e6c7840ad729"
        },
        "date": 1594997504739,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.30395784978238904,
            "unit": "iter/sec",
            "range": "stddev: 0.043926858467984824",
            "extra": "mean: 3.289929839666667 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.482076644671825,
            "unit": "iter/sec",
            "range": "stddev: 0.007015396081951773",
            "extra": "mean: 674.7289376666679 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 1.9472916073064812,
            "unit": "iter/sec",
            "range": "stddev: 0.09827728488596534",
            "extra": "mean: 513.5337698000008 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 7.9517134708688655,
            "unit": "iter/sec",
            "range": "stddev: 0.029379930615738643",
            "extra": "mean: 125.75905855555585 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.0992647964976083,
            "unit": "iter/sec",
            "range": "stddev: 0.028512313709140036",
            "extra": "mean: 909.6989216666648 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1994490.299588943,
            "unit": "iter/sec",
            "range": "stddev: 7.330958229344038e-7",
            "extra": "mean: 501.3812301850234 nsec\nrounds: 172266"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3940152.5606793985,
            "unit": "iter/sec",
            "range": "stddev: 6.41209067269086e-7",
            "extra": "mean: 253.7972793184501 nsec\nrounds: 189934"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6dea94015bf141e31781e4ea61f169d2b69e6b81",
          "message": "Merge pull request #75 from giovannipizzi/fix_64_export_to_container\n\nAdding a function to export directly a set of hash keys to a new container",
          "timestamp": "2020-07-17T17:16:12+02:00",
          "tree_id": "9d5cf808e9c4e748164afb805c1fb170f183c957",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/6dea94015bf141e31781e4ea61f169d2b69e6b81"
        },
        "date": 1594999261726,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.31633276645317104,
            "unit": "iter/sec",
            "range": "stddev: 0.053873437414981115",
            "extra": "mean: 3.1612280043333327 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.2641629734677538,
            "unit": "iter/sec",
            "range": "stddev: 1.692054100221177",
            "extra": "mean: 3.7855418830000005 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.610266894386695,
            "unit": "iter/sec",
            "range": "stddev: 0.02814479248148882",
            "extra": "mean: 383.1025870000005 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 10.43944142820755,
            "unit": "iter/sec",
            "range": "stddev: 0.007286173219964011",
            "extra": "mean: 95.79056569999835 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.3625095521343629,
            "unit": "iter/sec",
            "range": "stddev: 0.01553288587307526",
            "extra": "mean: 733.9398086666667 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1884806.181366991,
            "unit": "iter/sec",
            "range": "stddev: 3.4849378929895864e-7",
            "extra": "mean: 530.5585316335981 nsec\nrounds: 132014"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3496408.4624881167,
            "unit": "iter/sec",
            "range": "stddev: 2.2506547534941204e-7",
            "extra": "mean: 286.0077736136304 nsec\nrounds: 190259"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "38bfa5ed21e99016756308569337be1cdeaeb311",
          "message": "Merge pull request #68 from sphuber/feature/067/packed-object-reader-seek-whence\n\nImplement `whence=1` for the `utils.PackedObjectReader.seek`",
          "timestamp": "2020-07-17T18:20:39+02:00",
          "tree_id": "57f4997cbdc791e0a32f9905fa065586842a7ad8",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/38bfa5ed21e99016756308569337be1cdeaeb311"
        },
        "date": 1595003075982,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.2854989387862171,
            "unit": "iter/sec",
            "range": "stddev: 0.26317012913211",
            "extra": "mean: 3.502639989666667 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.2768271128169904,
            "unit": "iter/sec",
            "range": "stddev: 0.09564362558713246",
            "extra": "mean: 783.1913890000012 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.495803629403732,
            "unit": "iter/sec",
            "range": "stddev: 0.02025806426707192",
            "extra": "mean: 400.6725481999993 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 10.08995762258151,
            "unit": "iter/sec",
            "range": "stddev: 0.00804615603345699",
            "extra": "mean: 99.10844400000072 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.3044657361776877,
            "unit": "iter/sec",
            "range": "stddev: 0.014100190145361582",
            "extra": "mean: 766.5973680000017 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2208384.7753375396,
            "unit": "iter/sec",
            "range": "stddev: 4.2752793263056895e-7",
            "extra": "mean: 452.81964047553964 nsec\nrounds: 189466"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3566859.5110401055,
            "unit": "iter/sec",
            "range": "stddev: 1.2092035521485646e-7",
            "extra": "mean: 280.3586731983017 nsec\nrounds: 191792"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "dbefa5af8e4b59d8b7e35f67f4597025e7f2b60d",
          "message": "Avoid seeking back to zero for compressed streams when seeking forward\n\nFixes #81",
          "timestamp": "2020-07-17T18:31:03+02:00",
          "tree_id": "01ba21f85aaef7d3d3d31955b500af91455036bd",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/dbefa5af8e4b59d8b7e35f67f4597025e7f2b60d"
        },
        "date": 1595003709801,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.31237191072661186,
            "unit": "iter/sec",
            "range": "stddev: 0.023383692993602108",
            "extra": "mean: 3.201312172 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.1825453967460735,
            "unit": "iter/sec",
            "range": "stddev: 0.04180903174411803",
            "extra": "mean: 845.6334976666682 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.631695235055338,
            "unit": "iter/sec",
            "range": "stddev: 0.021666429010139678",
            "extra": "mean: 379.9832088000009 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 9.152882704984385,
            "unit": "iter/sec",
            "range": "stddev: 0.0219725815281887",
            "extra": "mean: 109.25519666666655 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.0968604009731597,
            "unit": "iter/sec",
            "range": "stddev: 0.1057317313060235",
            "extra": "mean: 911.6930459999987 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2092301.3229305292,
            "unit": "iter/sec",
            "range": "stddev: 7.031707704255674e-7",
            "extra": "mean: 477.94263141762735 nsec\nrounds: 161395"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3250995.7910992145,
            "unit": "iter/sec",
            "range": "stddev: 2.389340679003734e-7",
            "extra": "mean: 307.598060488994 nsec\nrounds: 108120"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ddc612b9ceaf7f67711f7079d0f584ead8147507",
          "message": "Merge pull request #84 from giovannipizzi/fix_13_validation\n\nImplement validation routine",
          "timestamp": "2020-07-19T23:21:12+02:00",
          "tree_id": "d7baf41d8de602432d63610a50939df2fde3d94c",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/ddc612b9ceaf7f67711f7079d0f584ead8147507"
        },
        "date": 1595193966028,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.3018797930033967,
            "unit": "iter/sec",
            "range": "stddev: 0.05970476292803879",
            "extra": "mean: 3.3125768043333337 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.22791211589385182,
            "unit": "iter/sec",
            "range": "stddev: 4.03883148268026",
            "extra": "mean: 4.387656163333333 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.430051653294592,
            "unit": "iter/sec",
            "range": "stddev: 0.04371850336197779",
            "extra": "mean: 411.5138863999988 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 10.31641471444086,
            "unit": "iter/sec",
            "range": "stddev: 0.007632399868678327",
            "extra": "mean: 96.93290040000093 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.321561665526325,
            "unit": "iter/sec",
            "range": "stddev: 0.015578507791108183",
            "extra": "mean: 756.6805439999958 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2172723.9516294203,
            "unit": "iter/sec",
            "range": "stddev: 9.10811330911536e-7",
            "extra": "mean: 460.25174953774336 nsec\nrounds: 185049"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 4060535.889642517,
            "unit": "iter/sec",
            "range": "stddev: 2.502596001275903e-7",
            "extra": "mean: 246.27291253616744 nsec\nrounds: 198099"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "89a6ea1a6c87895d4cbb0c1e2c869225c31fb707",
          "message": "Adding nodes on performance for validation",
          "timestamp": "2020-07-20T14:06:57+02:00",
          "tree_id": "a1c4c31f0e67410babd839471c3349dc89f24c78",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/89a6ea1a6c87895d4cbb0c1e2c869225c31fb707"
        },
        "date": 1595247075267,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.3311522277745718,
            "unit": "iter/sec",
            "range": "stddev: 0.006199139454093782",
            "extra": "mean: 3.0197592409999996 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.29555558993917935,
            "unit": "iter/sec",
            "range": "stddev: 0.43232283225321433",
            "extra": "mean: 3.3834582529999992 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.7029814180747493,
            "unit": "iter/sec",
            "range": "stddev: 0.010020524702626142",
            "extra": "mean: 369.9618478000005 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 10.358269033308016,
            "unit": "iter/sec",
            "range": "stddev: 0.0026847528044138032",
            "extra": "mean: 96.54122679999944 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.3245678864281307,
            "unit": "iter/sec",
            "range": "stddev: 0.017991244645278508",
            "extra": "mean: 754.9631923333351 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2297233.832719461,
            "unit": "iter/sec",
            "range": "stddev: 2.8350929731417825e-7",
            "extra": "mean: 435.3061433089734 nsec\nrounds: 147689"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 4205266.662517182,
            "unit": "iter/sec",
            "range": "stddev: 3.0077312562060227e-7",
            "extra": "mean: 237.7970483806175 nsec\nrounds: 197434"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d41ef638da9ca6958401ce010332e42cf4f988e4",
          "message": "Merge pull request #87 from giovannipizzi/fix_5_delete\n\nImplement function `delete_objects` for object deletion",
          "timestamp": "2020-07-20T14:40:53+02:00",
          "tree_id": "909ea5614905a444fc80d603a21b439da060a5a4",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/d41ef638da9ca6958401ce010332e42cf4f988e4"
        },
        "date": 1595249021983,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.3144942963258858,
            "unit": "iter/sec",
            "range": "stddev: 0.08833733453726322",
            "extra": "mean: 3.1797079046666665 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.9537844380061834,
            "unit": "iter/sec",
            "range": "stddev: 0.00859628305398457",
            "extra": "mean: 1.0484549339999998 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.6305195097892997,
            "unit": "iter/sec",
            "range": "stddev: 0.009556959749825041",
            "extra": "mean: 380.1530444000008 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 10.374682724824682,
            "unit": "iter/sec",
            "range": "stddev: 0.008831191269334958",
            "extra": "mean: 96.38848979999999 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.3114618130586355,
            "unit": "iter/sec",
            "range": "stddev: 0.008005991081098852",
            "extra": "mean: 762.5079053333366 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2261366.354536393,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012403436617743096",
            "extra": "mean: 442.21052373666004 nsec\nrounds: 161787"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 4143949.0178476307,
            "unit": "iter/sec",
            "range": "stddev: 1.819022147170017e-7",
            "extra": "mean: 241.31571013375708 nsec\nrounds: 188929"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "3f3cd07ea6627bbf6d0637e69e409ef4801b4f90",
          "message": "Adding nightly concurrency extensive tests\n\nThis runs only the main branch of the main fork, at 5AM UTC.\nTests are repeated 5 times to increase the change of seeing random errors.\n\nFixes #76",
          "timestamp": "2020-07-20T14:51:14+02:00",
          "tree_id": "01658224411ac3acb670ee1ef1e9d5081979f9ee",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/3f3cd07ea6627bbf6d0637e69e409ef4801b4f90"
        },
        "date": 1595250288318,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.3205090683994477,
            "unit": "iter/sec",
            "range": "stddev: 0.14992188406241427",
            "extra": "mean: 3.1200365249999997 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.2792789424409095,
            "unit": "iter/sec",
            "range": "stddev: 0.0681536621589124",
            "extra": "mean: 781.6903466666657 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.757163123166226,
            "unit": "iter/sec",
            "range": "stddev: 0.01618033073065509",
            "extra": "mean: 362.69163460000016 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 11.128045894999035,
            "unit": "iter/sec",
            "range": "stddev: 0.0019055506462867622",
            "extra": "mean: 89.86303700000033 msec\nrounds: 11"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.4202018981268167,
            "unit": "iter/sec",
            "range": "stddev: 0.009754030370389973",
            "extra": "mean: 704.1252383333353 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2181832.04885187,
            "unit": "iter/sec",
            "range": "stddev: 4.357846997758716e-7",
            "extra": "mean: 458.3304203117848 nsec\nrounds: 162947"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 4136979.1900180317,
            "unit": "iter/sec",
            "range": "stddev: 1.5404481110491218e-7",
            "extra": "mean: 241.72226981777106 nsec\nrounds: 194932"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5d977ad3ce8d4eba5ba70dfd0919282c2505e3b1",
          "message": "Merge pull request #88 from giovannipizzi/fix_78_loose_streamed\n\nAdding `add_streamed_object` function",
          "timestamp": "2020-07-20T15:47:49+02:00",
          "tree_id": "4864b702ab018ce6fa9ac195aca677f776b5bbff",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/5d977ad3ce8d4eba5ba70dfd0919282c2505e3b1"
        },
        "date": 1595253148368,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.3009431720015124,
            "unit": "iter/sec",
            "range": "stddev: 0.07019418512425264",
            "extra": "mean: 3.3228864883333338 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.8065765648392418,
            "unit": "iter/sec",
            "range": "stddev: 0.5928226056012846",
            "extra": "mean: 1.2398079036666647 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.600559951424497,
            "unit": "iter/sec",
            "range": "stddev: 0.01323996011421978",
            "extra": "mean: 384.5325693999996 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 10.24404827596052,
            "unit": "iter/sec",
            "range": "stddev: 0.004444866278973513",
            "extra": "mean: 97.61765788889123 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.2209696044977036,
            "unit": "iter/sec",
            "range": "stddev: 0.04859635388799997",
            "extra": "mean: 819.0212076666654 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2322441.0949071827,
            "unit": "iter/sec",
            "range": "stddev: 4.122731144511924e-7",
            "extra": "mean: 430.58142666906497 nsec\nrounds: 195237"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2086959.7163431766,
            "unit": "iter/sec",
            "range": "stddev: 3.9063989470252764e-7",
            "extra": "mean: 479.16593318448196 nsec\nrounds: 192234"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "1589096795f049b538222474b724e0d1298a4b49",
          "message": "Complete move to aiidateam organisation\n\nFixes #80",
          "timestamp": "2020-07-20T17:02:04+02:00",
          "tree_id": "e54abe7df4b0f77aefb62e2a5ad6a6b7578e733a",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/1589096795f049b538222474b724e0d1298a4b49"
        },
        "date": 1595257696329,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.31450741400645243,
            "unit": "iter/sec",
            "range": "stddev: 0.08076926907081057",
            "extra": "mean: 3.1795752833333335 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.24658235848373294,
            "unit": "iter/sec",
            "range": "stddev: 0.18277960753764133",
            "extra": "mean: 4.055440162666666 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.7182517654668685,
            "unit": "iter/sec",
            "range": "stddev: 0.01154082809237057",
            "extra": "mean: 367.88350980000075 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 10.604638636492863,
            "unit": "iter/sec",
            "range": "stddev: 0.0017793896483055778",
            "extra": "mean: 94.29835700000027 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.360838300089584,
            "unit": "iter/sec",
            "range": "stddev: 0.007829908360836751",
            "extra": "mean: 734.8411636666677 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2173559.751023432,
            "unit": "iter/sec",
            "range": "stddev: 7.384947501600906e-7",
            "extra": "mean: 460.0747688344637 nsec\nrounds: 164935"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 4140875.7785321185,
            "unit": "iter/sec",
            "range": "stddev: 1.0263212397863012e-7",
            "extra": "mean: 241.49480773712813 nsec\nrounds: 196735"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "11cc7cbf88b964e48ac44f5de59ef09bc6bdb745",
          "message": "Adding simple changelog",
          "timestamp": "2020-07-20T17:41:58+02:00",
          "tree_id": "c53c9f1eed85787028f0bcbc6f537bb2915cc518",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/11cc7cbf88b964e48ac44f5de59ef09bc6bdb745"
        },
        "date": 1595260190612,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.32364941316461804,
            "unit": "iter/sec",
            "range": "stddev: 0.06936257852725737",
            "extra": "mean: 3.0897630563333336 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.08244706242705191,
            "unit": "iter/sec",
            "range": "stddev: 0.49775177141471866",
            "extra": "mean: 12.128994903666666 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.011486535932645,
            "unit": "iter/sec",
            "range": "stddev: 0.035899706782408426",
            "extra": "mean: 497.1447643999966 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 9.398167304745824,
            "unit": "iter/sec",
            "range": "stddev: 0.009847736692161222",
            "extra": "mean: 106.40372400000014 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.2834392250410054,
            "unit": "iter/sec",
            "range": "stddev: 0.010236417628992883",
            "extra": "mean: 779.156488666653 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1652648.1741244192,
            "unit": "iter/sec",
            "range": "stddev: 0.000003026982354180032",
            "extra": "mean: 605.0894652939696 nsec\nrounds: 160308"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3679027.7908399645,
            "unit": "iter/sec",
            "range": "stddev: 1.1051919600240443e-7",
            "extra": "mean: 271.81093942528656 nsec\nrounds: 188360"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "1e0ba2e2cec56c81f871ff8d72c15d7688ee8f0a",
          "message": "Change the default value of `compress` for export\n\nFor some reason it was True, but this is unexpected.\nSetting back to False.",
          "timestamp": "2020-07-20T17:51:03+02:00",
          "tree_id": "454bf54a8a996bc894244547a4ebd6dbfa0a7bdb",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/1e0ba2e2cec56c81f871ff8d72c15d7688ee8f0a"
        },
        "date": 1595260957196,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.31461296743137124,
            "unit": "iter/sec",
            "range": "stddev: 0.08941155394064772",
            "extra": "mean: 3.1785085280000005 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.067263420414875,
            "unit": "iter/sec",
            "range": "stddev: 0.08834293201291962",
            "extra": "mean: 936.9758026666672 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.5085872893940993,
            "unit": "iter/sec",
            "range": "stddev: 0.022888031826893022",
            "extra": "mean: 398.63073699999916 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 11.194681072077842,
            "unit": "iter/sec",
            "range": "stddev: 0.001619280828312287",
            "extra": "mean: 89.32813659999965 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.2979880587582124,
            "unit": "iter/sec",
            "range": "stddev: 0.022868270888776045",
            "extra": "mean: 770.4231123333306 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1843298.5187936095,
            "unit": "iter/sec",
            "range": "stddev: 7.362532851924884e-7",
            "extra": "mean: 542.5057253637212 nsec\nrounds: 160514"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3898259.640292446,
            "unit": "iter/sec",
            "range": "stddev: 1.0571456852732272e-7",
            "extra": "mean: 256.52472956494495 nsec\nrounds: 195887"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "9dd029d81a791f0fa3324209fa7edfd015796aa8",
          "message": "Removing the 'OS-independent' flag\n\nThis is not really true, it actually is OS dependent,\nand I tested the three most common ones",
          "timestamp": "2020-07-20T18:33:16+02:00",
          "tree_id": "da603cd023341129a9ef4d74d860764b02631c3f",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/9dd029d81a791f0fa3324209fa7edfd015796aa8"
        },
        "date": 1595263126874,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.17657860403683648,
            "unit": "iter/sec",
            "range": "stddev: 0.14664611724631565",
            "extra": "mean: 5.663200280999999 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.9636260594894672,
            "unit": "iter/sec",
            "range": "stddev: 0.29652134217176324",
            "extra": "mean: 1.0377469456666664 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 1.7095565104743151,
            "unit": "iter/sec",
            "range": "stddev: 0.3065385964964499",
            "extra": "mean: 584.9470279999991 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 9.001465926532273,
            "unit": "iter/sec",
            "range": "stddev: 0.009739435621046894",
            "extra": "mean: 111.09301620000025 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 0.8357302536660131,
            "unit": "iter/sec",
            "range": "stddev: 0.24153632540348696",
            "extra": "mean: 1.1965583339999977 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 493428.83096222597,
            "unit": "iter/sec",
            "range": "stddev: 0.000012676840372241037",
            "extra": "mean: 2.02663471862785 usec\nrounds: 98368"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2783224.2868899438,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016647977110268007",
            "extra": "mean: 359.295513735773 nsec\nrounds: 188609"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "51e6a578fc55c3c0eca18bb4351cb5ae1dcdb00f",
          "message": "Explicitly specifying the codecov token",
          "timestamp": "2020-07-20T18:59:40+02:00",
          "tree_id": "b5c97bfa36b46639cdf390220798c072fbc6826a",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/51e6a578fc55c3c0eca18bb4351cb5ae1dcdb00f"
        },
        "date": 1595264630890,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.31899101620624803,
            "unit": "iter/sec",
            "range": "stddev: 0.03592903736012034",
            "extra": "mean: 3.134884524 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.3863508636295612,
            "unit": "iter/sec",
            "range": "stddev: 0.04337755079373706",
            "extra": "mean: 721.3181209999983 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.6274072828379453,
            "unit": "iter/sec",
            "range": "stddev: 0.013197827507614437",
            "extra": "mean: 380.6033447999994 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 10.576511313760832,
            "unit": "iter/sec",
            "range": "stddev: 0.0018707502118853942",
            "extra": "mean: 94.54913537500076 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.3046715292745819,
            "unit": "iter/sec",
            "range": "stddev: 0.013188490405268297",
            "extra": "mean: 766.4764483333333 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 4040746.5204071193,
            "unit": "iter/sec",
            "range": "stddev: 5.4858460767271986e-8",
            "extra": "mean: 247.47902273742275 nsec\nrounds: 191095"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3754954.401965313,
            "unit": "iter/sec",
            "range": "stddev: 9.875187874546916e-8",
            "extra": "mean: 266.31481849065443 nsec\nrounds: 191315"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "48fe289e87e457a1390b6d3dd6942d0b16064a32",
          "message": "Moving the env to the right place",
          "timestamp": "2020-07-20T19:06:51+02:00",
          "tree_id": "a629875f497fff991502bc56fb3979d157cf13b4",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/48fe289e87e457a1390b6d3dd6942d0b16064a32"
        },
        "date": 1595265103660,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.29701962841739576,
            "unit": "iter/sec",
            "range": "stddev: 0.06107874993325296",
            "extra": "mean: 3.366780859999999 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.42958677003548906,
            "unit": "iter/sec",
            "range": "stddev: 0.09155595756757338",
            "extra": "mean: 2.327818428666665 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.5326576619397865,
            "unit": "iter/sec",
            "range": "stddev: 0.016189826409575583",
            "extra": "mean: 394.8421514000003 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 9.95868821434138,
            "unit": "iter/sec",
            "range": "stddev: 0.0045031989594245935",
            "extra": "mean: 100.41483160000055 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.2405698070609177,
            "unit": "iter/sec",
            "range": "stddev: 0.01603835943153407",
            "extra": "mean: 806.0812009999978 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2072603.37585791,
            "unit": "iter/sec",
            "range": "stddev: 4.908003240891821e-7",
            "extra": "mean: 482.48498079671003 nsec\nrounds: 169982"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3591910.3617953067,
            "unit": "iter/sec",
            "range": "stddev: 1.6032965614073199e-7",
            "extra": "mean: 278.40338407001923 nsec\nrounds: 197942"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gio.piz@gmail.com",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9aa52ca307119522cbcb110a505b77c6b7562513",
          "message": "Merge pull request #91 from giovannipizzi/test-codecov\n\nTesting Codecov after moving the repo",
          "timestamp": "2020-07-20T19:40:16+02:00",
          "tree_id": "da603cd023341129a9ef4d74d860764b02631c3f",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/9aa52ca307119522cbcb110a505b77c6b7562513"
        },
        "date": 1595266977442,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.3119371985522486,
            "unit": "iter/sec",
            "range": "stddev: 0.00841070656361201",
            "extra": "mean: 3.205773484666667 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.4070857464939854,
            "unit": "iter/sec",
            "range": "stddev: 0.04458331166522662",
            "extra": "mean: 710.6887426666676 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.6857531382182245,
            "unit": "iter/sec",
            "range": "stddev: 0.017480276455072725",
            "extra": "mean: 372.3350391999979 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 10.402523341751452,
            "unit": "iter/sec",
            "range": "stddev: 0.013140213441354106",
            "extra": "mean: 96.13052209999964 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.3556570910883956,
            "unit": "iter/sec",
            "range": "stddev: 0.018980681282411056",
            "extra": "mean: 737.649665666666 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2359968.4117571902,
            "unit": "iter/sec",
            "range": "stddev: 2.351569242364889e-7",
            "extra": "mean: 423.7344851812732 nsec\nrounds: 185323"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 4001441.3809666643,
            "unit": "iter/sec",
            "range": "stddev: 1.040881353911888e-7",
            "extra": "mean: 249.9099461400665 nsec\nrounds: 196619"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gio.piz@gmail.com",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "c718ffdec3881653acb82beaeed69fadf3cd9e3d",
          "message": "Merge pull request #90 from aiidateam/develop\n\nRelease of version 0.4.0",
          "timestamp": "2020-07-20T19:46:14+02:00",
          "tree_id": "da603cd023341129a9ef4d74d860764b02631c3f",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/c718ffdec3881653acb82beaeed69fadf3cd9e3d"
        },
        "date": 1595268289411,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.2933902723423896,
            "unit": "iter/sec",
            "range": "stddev: 0.08886215908766418",
            "extra": "mean: 3.4084292980000006 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.1425431132502617,
            "unit": "iter/sec",
            "range": "stddev: 0.0281677011949281",
            "extra": "mean: 875.2404949999999 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.206081368083322,
            "unit": "iter/sec",
            "range": "stddev: 0.04389032937740458",
            "extra": "mean: 453.29243720000034 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 10.214382256457634,
            "unit": "iter/sec",
            "range": "stddev: 0.007923759685980799",
            "extra": "mean: 97.90117257142887 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 0.978740999366861,
            "unit": "iter/sec",
            "range": "stddev: 0.07549545966545536",
            "extra": "mean: 1.0217207623333355 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1993570.127933406,
            "unit": "iter/sec",
            "range": "stddev: 4.6054135601775875e-7",
            "extra": "mean: 501.6126525915743 nsec\nrounds: 174004"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 1778739.473984469,
            "unit": "iter/sec",
            "range": "stddev: 7.581084868945942e-7",
            "extra": "mean: 562.1958778257437 nsec\nrounds: 143370"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gio.piz@gmail.com",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e7e3627a67e8de2030b231927a127a9fb06ae474",
          "message": "Merge pull request #95 from giovannipizzi/fix_missing_optional_deps\n\nAdding missing optional dev dependencies",
          "timestamp": "2020-08-26T23:34:55+02:00",
          "tree_id": "397da3027d0c56b27a27da2ce3509320aadc032e",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/e7e3627a67e8de2030b231927a127a9fb06ae474"
        },
        "date": 1598477927050,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.28714462303552524,
            "unit": "iter/sec",
            "range": "stddev: 0.17055276303948838",
            "extra": "mean: 3.4825656473333337 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.0072675099578978,
            "unit": "iter/sec",
            "range": "stddev: 0.034945295047732444",
            "extra": "mean: 992.7849256666666 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.1134733049055154,
            "unit": "iter/sec",
            "range": "stddev: 0.06513217198238055",
            "extra": "mean: 473.15478160000026 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 7.948679944969446,
            "unit": "iter/sec",
            "range": "stddev: 0.024045345717839624",
            "extra": "mean: 125.80705311111176 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.1267729572480092,
            "unit": "iter/sec",
            "range": "stddev: 0.016954657008986487",
            "extra": "mean: 887.4902380000004 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1480110.3392642369,
            "unit": "iter/sec",
            "range": "stddev: 0.000019675598311862305",
            "extra": "mean: 675.6253054060146 nsec\nrounds: 139978"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3128764.1048506605,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029066838718159275",
            "extra": "mean: 319.6150193776881 nsec\nrounds: 197395"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "64326c7e9778b6af1cc142a1f48a526a5bf7ee2e",
          "message": "🔀👌 Efficiency improvements  (#96)\n\nThis merge collects a number of important efficiency improvements, and a few features that were tightly bound to these efficiency changes, so they are shipped together.\r\n\r\nIn particular:\r\n\r\n- objects are now sorted and returned in the order in which they are on disk, with an important performance benefit. Fixes #92 \r\n- When there are many objects to list (currently set to 9500 objects, 10x the ones we could fit in a single IN SQL statement), performing many queries is slow, so we just resort to listing all objects and doing an efficient intersection (if the hash keys are sorted, both iterators can be looped over only once - fixes #93)\r\n- Since VACUUMing the DB is very important for efficiency, when the DB does not fit fully in the disk cache, `clean_storage` now provides an option to VACUUM the DB. VACUUM is also called after repacking. Fixes #94 \r\n- We implement now a function to perform a full repack of the repository (fixes #12). This is important and needed to reclaim space after deleting an object\r\n- For efficiency, we have moved the logic from an `export` function (still existing but deprecated) to a `import_objects` function\r\n- Still for efficiency, now functions like `pack_all_loose` and `import_objects` provide an option to perform a fsync to disk or not (see also #54 - there are still however calls that always use - or don't use - fsync and full_fsync on Mac). Also, `add_objects_to_pack` allows now to choose if you want to commit the changes to the SQLite DB, or not (delegating the responsibility to the caller, but this is important e.g. in `import_objects`: calling `commit` only once at the very end gives a factor of 2 speedup for very big repos).\r\n- A number of functions, including (but not exclusively) `import_objects` provide a callback to e.g. show a progress bar.\r\n- a `CallbackStreamWrapper` has been implemented, allowing to provide a callback (e.g. for a progress bar) when streaming a big file.\r\n- a new hash algorithm is now supported (`sha1`) in addition to the default `sha256` (fixes #82). This is faster even if a bit less robust. This was also needed to test completely some feature in `import_objects`, where the logic is optimised if both containers use the same algorithm. By default is still better to use everywhere sha256, also because then all export files that will be generated will use this algorithm and importing will be more efficient.\r\n- tests have been added for all new functionality, achieving again 100% coverage\r\n\r\nAs a reference, with these changes, exporting the full large SDB database (6.8M nodes) takes ~ 50 minutes:\r\n```\r\n6714808it [00:24, 274813.02it/s]\r\nAll hashkeys listed in 24.444787740707397s.\r\nListing objects: 100%|████████| 6714808/6714808 [00:06<00:00, 978896.65it/s]\r\nCopy objects: 100%|███████████| 6714808/6714808 [48:15<00:00, 2319.08it/s]\r\nFinal flush: 100%|████████████| 63236/63236 [00:07<00:00, 8582.35it/s]\r\nEverything re-exported in 2960.980943918228s.\r\n```\r\n\r\nThis can be compared to:\r\n\r\n- ~10 minutes to copy the whole 90GB, or ~15 minutes to read all and validate the packs. We will never be able to be faster than just copying the pack files, and we are only 3x slower.\r\n- ~2 days to just list all files in the old legacy AiiDA repo (or all objects if they are loose), and this does not take into account the time to rewrite everything, probably comparable. So we are almost 2 orders of magnitude faster than before.",
          "timestamp": "2020-10-02T05:02:23+01:00",
          "tree_id": "a1e5eacb37c751b57ede7818ed3ea30ccd868aa0",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/64326c7e9778b6af1cc142a1f48a526a5bf7ee2e"
        },
        "date": 1601611460708,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.512404081133887,
            "unit": "iter/sec",
            "range": "stddev: 0.02549491783516054",
            "extra": "mean: 661.1989563333333 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.3540876495871286,
            "unit": "iter/sec",
            "range": "stddev: 0.09933748808996601",
            "extra": "mean: 738.5046310000002 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 6.137232658744322,
            "unit": "iter/sec",
            "range": "stddev: 0.00447010639160744",
            "extra": "mean: 162.939887666667 msec\nrounds: 6"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 10.183354142678084,
            "unit": "iter/sec",
            "range": "stddev: 0.015937691941777285",
            "extra": "mean: 98.19947199999994 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.277394369789959,
            "unit": "iter/sec",
            "range": "stddev: 0.0248022110226073",
            "extra": "mean: 439.0983016666669 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2241969.705377868,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022880517228306473",
            "extra": "mean: 446.03635704857 nsec\nrounds: 173914"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 4070204.737165233,
            "unit": "iter/sec",
            "range": "stddev: 0.000002314160899730941",
            "extra": "mean: 245.68788662373345 nsec\nrounds: 198966"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gio.piz@gmail.com",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d7c389c353185c1923c9addb1b107c283d5f561",
          "message": "✨ Add the concept of a (unique) container ID (#97)\n\nAllows for the association of a container with an existing DB, or to uniquely refer to it.\r\n\r\n🐛 This also fixes a bug, whereby config values were cached, but the cache was not cleared when re-initialising the container.\r\nTo reduce the risk of such a problem, now only the whole configuration dictionary is cached, rather than each single config value.",
          "timestamp": "2020-10-02T05:26:39+01:00",
          "tree_id": "cf46e923be5370049e00e368fe2b9cf6f18ef6d3",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/1d7c389c353185c1923c9addb1b107c283d5f561"
        },
        "date": 1601613161055,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.28047039227962817,
            "unit": "iter/sec",
            "range": "stddev: 0.046374240714326935",
            "extra": "mean: 3.5654387326666654 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.0417301897821079,
            "unit": "iter/sec",
            "range": "stddev: 0.014345831939742126",
            "extra": "mean: 959.9414606666663 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 6.0728959615616525,
            "unit": "iter/sec",
            "range": "stddev: 0.016181849309259883",
            "extra": "mean: 164.66608457142888 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 1.912954627406993,
            "unit": "iter/sec",
            "range": "stddev: 0.009569052110930574",
            "extra": "mean: 522.7515518000018 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 0.21009001345493122,
            "unit": "iter/sec",
            "range": "stddev: 0.0602672347399442",
            "extra": "mean: 4.759864515000001 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2141426.571931177,
            "unit": "iter/sec",
            "range": "stddev: 0.000001903343931825153",
            "extra": "mean: 466.9784213512313 nsec\nrounds: 177305"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 4015990.0877207923,
            "unit": "iter/sec",
            "range": "stddev: 4.515991115904188e-7",
            "extra": "mean: 249.00459865618384 nsec\nrounds: 196851"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b84d6b00ad68bf8e58861c712c3cb9b6394abfd",
          "message": "🐛 Fix performance regression (#102)\n\n`Container.is_initialised` is a costly operation, loading the config JSON every time.\r\nIn 1d7c389, the config is now called on every call to `loose_prefix_len`, leading to a large performance degradation.\r\nThis PR makes sure the `is_initialised` test is called only if the config has not already been loaded into memory.",
          "timestamp": "2020-10-02T18:45:30+01:00",
          "tree_id": "3e63fef3df945593819e81391c96d674c2e19225",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/1b84d6b00ad68bf8e58861c712c3cb9b6394abfd"
        },
        "date": 1601660977125,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.4702850264852585,
            "unit": "iter/sec",
            "range": "stddev: 0.054008944249848416",
            "extra": "mean: 680.1402326666666 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.35105874122439196,
            "unit": "iter/sec",
            "range": "stddev: 1.343691361953062",
            "extra": "mean: 2.8485261370000003 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 6.281526668271752,
            "unit": "iter/sec",
            "range": "stddev: 0.0025241769794354645",
            "extra": "mean: 159.19696799999923 msec\nrounds: 6"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 9.37442046453831,
            "unit": "iter/sec",
            "range": "stddev: 0.03531990255982771",
            "extra": "mean: 106.6732609000006 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.189047813914228,
            "unit": "iter/sec",
            "range": "stddev: 0.019897162088600123",
            "extra": "mean: 456.8196243333323 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2205239.326971461,
            "unit": "iter/sec",
            "range": "stddev: 5.196045071724152e-7",
            "extra": "mean: 453.46552084817847 nsec\nrounds: 186533"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3967031.590200745,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010402571488015606",
            "extra": "mean: 252.07764981510442 nsec\nrounds: 188466"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gio.piz@gmail.com",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d786296bc67219512f4058265ffbd8c9e6f06b0a",
          "message": "✨ Generalize compression algorithm (#99)\n\nThe container configuration now accepts a variable for the compression algorithm to use.\r\nCurrently, the supported values are zlib, with levels from 1 to 9, but this can be expanded in the future.",
          "timestamp": "2020-10-04T11:31:10+01:00",
          "tree_id": "302c95715972bb03a6d7e329dad5995741db8395",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/d786296bc67219512f4058265ffbd8c9e6f06b0a"
        },
        "date": 1601807577953,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.4348671885017164,
            "unit": "iter/sec",
            "range": "stddev: 0.00519126450802047",
            "extra": "mean: 696.9286133333336 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.3881915000401441,
            "unit": "iter/sec",
            "range": "stddev: 0.014199678836680838",
            "extra": "mean: 720.3617079999999 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 5.599974535795809,
            "unit": "iter/sec",
            "range": "stddev: 0.015602399518311324",
            "extra": "mean: 178.572240571428 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 10.380897543218532,
            "unit": "iter/sec",
            "range": "stddev: 0.002795179945967988",
            "extra": "mean: 96.33078409999953 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.259168765270037,
            "unit": "iter/sec",
            "range": "stddev: 0.027865600193569",
            "extra": "mean: 442.6406806666658 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2173600.6680393238,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014121339338479238",
            "extra": "mean: 460.0661081421366 nsec\nrounds: 152069"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 4106077.2499678265,
            "unit": "iter/sec",
            "range": "stddev: 3.1326508754713804e-7",
            "extra": "mean: 243.5414482296474 nsec\nrounds: 194591"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@sphuber.net",
            "name": "Sebastiaan Huber",
            "username": "sphuber"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f4357b4e0a0347ffb6f8a66cb1d5da6de675cc7",
          "message": "Dependencies: set up limit for sqlalchemy dependency (#107)\n\nThe code is incompatible with `sqlalchemy==1.4` so for now we put an\r\nupper limit on the requirement `sqlalchemy<1.4`.",
          "timestamp": "2021-04-23T08:50:13+02:00",
          "tree_id": "b3147e700fe9ef371fe44e913d5b67680a93d08a",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/4f4357b4e0a0347ffb6f8a66cb1d5da6de675cc7"
        },
        "date": 1619160727586,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.4529740579943098,
            "unit": "iter/sec",
            "range": "stddev: 0.04729099824337318",
            "extra": "mean: 688.2435336666667 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.215695179612072,
            "unit": "iter/sec",
            "range": "stddev: 0.09690181897092259",
            "extra": "mean: 822.5746196666664 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 6.119904985047978,
            "unit": "iter/sec",
            "range": "stddev: 0.004617292081824878",
            "extra": "mean: 163.40122966666618 msec\nrounds: 6"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 10.3253249581395,
            "unit": "iter/sec",
            "range": "stddev: 0.00559478366321411",
            "extra": "mean: 96.84925211111108 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.280026788855554,
            "unit": "iter/sec",
            "range": "stddev: 0.005838092083479731",
            "extra": "mean: 438.59133799999955 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1953059.1534258116,
            "unit": "iter/sec",
            "range": "stddev: 5.140460440633976e-7",
            "extra": "mean: 512.017261866301 nsec\nrounds: 167421"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 4178304.77848948,
            "unit": "iter/sec",
            "range": "stddev: 7.135277363738962e-8",
            "extra": "mean: 239.33151194430138 nsec\nrounds: 195199"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a894a4f8befb5de0fe95979183b1cbb03f4ef13",
          "message": "Merge pull request #106 from aiidateam/fix/update-python-support\n\nPython support: remove 3.5 and add 3.9 support",
          "timestamp": "2021-04-23T15:33:19+02:00",
          "tree_id": "f577efcb13f4ee1f11313641f80fbf03890b9d37",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/7a894a4f8befb5de0fe95979183b1cbb03f4ef13"
        },
        "date": 1619185012673,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.4087671146420866,
            "unit": "iter/sec",
            "range": "stddev: 0.07496746486130741",
            "extra": "mean: 709.8405333333334 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.19087595264863766,
            "unit": "iter/sec",
            "range": "stddev: 2.205762170911617",
            "extra": "mean: 5.239004631666666 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 5.608891355172454,
            "unit": "iter/sec",
            "range": "stddev: 0.007474632918793218",
            "extra": "mean: 178.28835266666587 msec\nrounds: 6"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 10.00156939070453,
            "unit": "iter/sec",
            "range": "stddev: 0.0026151869990055114",
            "extra": "mean: 99.9843085555554 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.188666605581953,
            "unit": "iter/sec",
            "range": "stddev: 0.010835003278742433",
            "extra": "mean: 456.89919033333365 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2271625.7689415426,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011547104356649543",
            "extra": "mean: 440.213354537683 nsec\nrounds: 151424"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3874823.9785803133,
            "unit": "iter/sec",
            "range": "stddev: 0.000003633259470869228",
            "extra": "mean: 258.0762392118884 nsec\nrounds: 199522"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a2561a40cf2e9a4d58325387f913ccf08111f5fd",
          "message": "Merge pull request #104 from giovannipizzi/master_in_dev\n\nMerge v0.5.0 in develop",
          "timestamp": "2021-04-23T16:22:25+02:00",
          "tree_id": "4beb6bcd4bfe656b36e0d022e991951f256753fd",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/a2561a40cf2e9a4d58325387f913ccf08111f5fd"
        },
        "date": 1619187856161,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.5078080755570913,
            "unit": "iter/sec",
            "range": "stddev: 0.020469492215575365",
            "extra": "mean: 663.2143813333332 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.242527638621194,
            "unit": "iter/sec",
            "range": "stddev: 0.0794438716760416",
            "extra": "mean: 804.8110713333333 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 6.213573022468953,
            "unit": "iter/sec",
            "range": "stddev: 0.007908860628052346",
            "extra": "mean: 160.93799757142818 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 9.733500352023212,
            "unit": "iter/sec",
            "range": "stddev: 0.012209304011589574",
            "extra": "mean: 102.73796310000023 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.0425982781522913,
            "unit": "iter/sec",
            "range": "stddev: 0.0422642467225076",
            "extra": "mean: 489.5725266666666 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2268670.3987707132,
            "unit": "iter/sec",
            "range": "stddev: 2.586221929023684e-7",
            "extra": "mean: 440.78681528257846 nsec\nrounds: 162840"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 4289949.006688217,
            "unit": "iter/sec",
            "range": "stddev: 1.6343968561679802e-7",
            "extra": "mean: 233.10300389139823 nsec\nrounds: 199641"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2cb284157df3cc9bc5a3ae92da6aebbacbda5623",
          "message": "🔧 MAINTAIN: Improve repo configuration (#112)\n\n- Move config to `setup.cfg` and `pyproject.toml`\r\n- Add `Manifest.in`, `tox.ini`\r\n- Replace `requirements.txt`/`dev-requirements.txt with `requirements.lock`\r\n- Move from yapf to black code formatting\r\n- Add more pre-commit hooks\r\n- Update pylint version and fix new failures\r\n- Drop python 3.6",
          "timestamp": "2021-08-30T16:07:48+02:00",
          "tree_id": "3e95e7e154b9b51de8f0ec0458d0ae1a6a26ba51",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/2cb284157df3cc9bc5a3ae92da6aebbacbda5623"
        },
        "date": 1630332587949,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.6039146003711988,
            "unit": "iter/sec",
            "range": "stddev: 0.008949926538299261",
            "extra": "mean: 623.4745913333334 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.46916064825171605,
            "unit": "iter/sec",
            "range": "stddev: 0.3550621606602441",
            "extra": "mean: 2.1314660633333333 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 6.409446759785378,
            "unit": "iter/sec",
            "range": "stddev: 0.0021586996127789145",
            "extra": "mean: 156.01970614285676 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 11.117778529366806,
            "unit": "iter/sec",
            "range": "stddev: 0.0014042056749261134",
            "extra": "mean: 89.94602629999982 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.479738790002749,
            "unit": "iter/sec",
            "range": "stddev: 0.003078272066467048",
            "extra": "mean: 403.26828133333 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 4294439.06776578,
            "unit": "iter/sec",
            "range": "stddev: 1.0978949843148724e-7",
            "extra": "mean: 232.85928248603832 nsec\nrounds: 191829"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 4263174.368051062,
            "unit": "iter/sec",
            "range": "stddev: 5.8343516934378344e-8",
            "extra": "mean: 234.5669948417554 nsec\nrounds: 190549"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2d2d32c14fb4f5a0068fbbe49a16daf3285aeda8",
          "message": "🔧 MAINTAIN: Add contex manager methods",
          "timestamp": "2021-09-01T12:47:38+02:00",
          "tree_id": "8262168f13e44bf574c5f55ebddd2a609ade6203",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/2d2d32c14fb4f5a0068fbbe49a16daf3285aeda8"
        },
        "date": 1630493351687,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.571994812643485,
            "unit": "iter/sec",
            "range": "stddev: 0.06662734676764895",
            "extra": "mean: 636.1344146666669 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.45378677730195227,
            "unit": "iter/sec",
            "range": "stddev: 1.6583158474246302",
            "extra": "mean: 2.203678137 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 6.819123485999199,
            "unit": "iter/sec",
            "range": "stddev: 0.002577100949123556",
            "extra": "mean: 146.6464131428573 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 11.521876361447111,
            "unit": "iter/sec",
            "range": "stddev: 0.002196823899717724",
            "extra": "mean: 86.79141909090954 msec\nrounds: 11"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.5675093681441803,
            "unit": "iter/sec",
            "range": "stddev: 0.0009386390700272623",
            "extra": "mean: 389.48251266666625 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2464304.521457305,
            "unit": "iter/sec",
            "range": "stddev: 3.5577320763926286e-7",
            "extra": "mean: 405.7940044717502 nsec\nrounds: 185805"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 4242342.4932792615,
            "unit": "iter/sec",
            "range": "stddev: 2.6505076373923707e-7",
            "extra": "mean: 235.71882788420837 nsec\nrounds: 187618"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c0a67a33dbe0634005ee2d5789214808ee205b02",
          "message": "🔧 MAINTAIN: Add typing (#113)\n\nAdded type annotations to code base and mypy type checking.\r\n\r\nIt was found that there were some inconsistencies with classes\r\nlooking to implement subsets of the `BinaryIO` interface,\r\nwhich were fixed:\r\n\r\n- Remove `@property` from `seekable` method\r\n- Disallow mode in `LazyOpen` (should always be readable binary)\r\n- Added `__enter__`/`__exit__` methods to `PackedObjectReader`, `CallbackStreamWrapper`, `ZlibLikeBaseStreamDecompresser`,\r\n  so they won't fail in `add_streamed_objects_to_pack` with `open_streams=True`",
          "timestamp": "2021-09-01T14:36:15+02:00",
          "tree_id": "d230b7bc0b95dc71a7939d3be0d0590552bb25c9",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/c0a67a33dbe0634005ee2d5789214808ee205b02"
        },
        "date": 1630499860436,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.635388380234011,
            "unit": "iter/sec",
            "range": "stddev: 0.01489754667220024",
            "extra": "mean: 611.4755443333332 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.383030457031722,
            "unit": "iter/sec",
            "range": "stddev: 0.03489907942040024",
            "extra": "mean: 723.0498756666668 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 6.2066908583201315,
            "unit": "iter/sec",
            "range": "stddev: 0.00782473676973535",
            "extra": "mean: 161.11645042857094 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 10.642468044191133,
            "unit": "iter/sec",
            "range": "stddev: 0.007640428846907961",
            "extra": "mean: 93.96316679999987 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.484359600270013,
            "unit": "iter/sec",
            "range": "stddev: 0.007348780387735305",
            "extra": "mean: 402.51821833333423 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2494519.58488032,
            "unit": "iter/sec",
            "range": "stddev: 3.013414542532825e-7",
            "extra": "mean: 400.8787928790614 nsec\nrounds: 193949"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 4257264.12146475,
            "unit": "iter/sec",
            "range": "stddev: 1.4158712393802936e-7",
            "extra": "mean: 234.89263796366365 nsec\nrounds: 196773"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55c40ffa05cd603c0b722953fbf5d043f7015bde",
          "message": "⬆️ UPGRADE: sqlalchemy v1.4 (v2 API) (#114)\n\nFollowing migration guidelines:\r\nhttps://docs.sqlalchemy.org/en/14/changelog/migration_20.html\r\n\r\n- Added `SQLALCHEMY_WARN_20` environmental variable\r\n- Use `future=True` for engine and session creation (V1 -> v2 API)\r\n- `query` -> `select` (V1 -> v2 API)\r\n- Rename `models.py` -> `database.py`\r\n  (models is too generic does not describe the module's purpose)\r\n- Moved `get_session` -> `database.py`\r\n  (this method can be independent of the container)\r\n- Added mypy extension:\r\n  https://docs.sqlalchemy.org/en/14/orm/extensions/mypy.html\r\n\r\nNote, the `count()` method is now a bit more complex,\r\nbut this is explained in: https://github.com/sqlalchemy/sqlalchemy/issues/6794\r\n\r\nAlso, the vacuum code required changing, since it is in a transaction.\r\nThe workaround is discussed in:\r\nhttps://github.com/sqlalchemy/sqlalchemy/discussions/6959#discussioncomment-1251681",
          "timestamp": "2021-09-02T15:44:37+02:00",
          "tree_id": "58708e4c7cbc4eb4609c2d96c9ce5b022ac21ea2",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/55c40ffa05cd603c0b722953fbf5d043f7015bde"
        },
        "date": 1630590459639,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.207646214908041,
            "unit": "iter/sec",
            "range": "stddev: 0.30242061587965097",
            "extra": "mean: 828.0570813333336 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.2165154868402094,
            "unit": "iter/sec",
            "range": "stddev: 1.4888100016843575",
            "extra": "mean: 4.618607262666665 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 6.528596805014074,
            "unit": "iter/sec",
            "range": "stddev: 0.0076838992498781174",
            "extra": "mean: 153.17227114285612 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 14.218075751078281,
            "unit": "iter/sec",
            "range": "stddev: 0.0012622449584336621",
            "extra": "mean: 70.33300549999962 msec\nrounds: 12"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 3.3800361348002026,
            "unit": "iter/sec",
            "range": "stddev: 0.011577593639190671",
            "extra": "mean: 295.8548252500002 msec\nrounds: 4"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2308111.0737333735,
            "unit": "iter/sec",
            "range": "stddev: 5.52188975728416e-7",
            "extra": "mean: 433.25471264365905 nsec\nrounds: 181852"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 4271189.762116543,
            "unit": "iter/sec",
            "range": "stddev: 6.891789090093281e-8",
            "extra": "mean: 234.1268020609786 nsec\nrounds: 193237"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a053f2a421b3c1dba0f660c64d126ef078bc4432",
          "message": "✨ NEW: Add basic CLI (#116)\n\nAdded basic commands for container creation, inspection and cleaning.\r\nSee `README.md` tutorial section for details.\r\n\r\nAlso added __enter__/__exit__ for Container,\r\nto allow it to be used as a context manager\r\nwhich calls Container.close() on exit (i.e. closes the database).",
          "timestamp": "2021-09-07T20:55:52+02:00",
          "tree_id": "0b64013331471b98e551ba0a715fec848653fc3d",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/a053f2a421b3c1dba0f660c64d126ef078bc4432"
        },
        "date": 1631041053392,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.2663517639865975,
            "unit": "iter/sec",
            "range": "stddev: 0.13908858820711184",
            "extra": "mean: 789.670002 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.3275878247072823,
            "unit": "iter/sec",
            "range": "stddev: 0.02122633192129847",
            "extra": "mean: 753.2458353333335 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 5.0249681724043445,
            "unit": "iter/sec",
            "range": "stddev: 0.0478103717395739",
            "extra": "mean: 199.0062355999999 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 11.48556084534865,
            "unit": "iter/sec",
            "range": "stddev: 0.024881420652227197",
            "extra": "mean: 87.06583975 msec\nrounds: 12"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.921150449222882,
            "unit": "iter/sec",
            "range": "stddev: 0.030178365048075494",
            "extra": "mean: 342.3308786666676 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1537592.6757181226,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015383690687205766",
            "extra": "mean: 650.3673019468284 nsec\nrounds: 161031"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3367741.613866393,
            "unit": "iter/sec",
            "range": "stddev: 0.000007385126638928479",
            "extra": "mean: 296.93489425748936 nsec\nrounds: 197981"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc256ea026c71d79b6a3343a494c9eadb487ea34",
          "message": "🔧 MAINTAIN: Add release workflow (#117)",
          "timestamp": "2021-09-07T21:21:28+02:00",
          "tree_id": "0eb30596dedf1f47968ce0369749b43f460090af",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/bc256ea026c71d79b6a3343a494c9eadb487ea34"
        },
        "date": 1631042573130,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.5715770961658515,
            "unit": "iter/sec",
            "range": "stddev: 0.01657494546948715",
            "extra": "mean: 636.3034956666663 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.4190779733011645,
            "unit": "iter/sec",
            "range": "stddev: 0.02056579305962193",
            "extra": "mean: 704.6829129999995 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 6.719601659863332,
            "unit": "iter/sec",
            "range": "stddev: 0.00898204014390411",
            "extra": "mean: 148.8183452857143 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 14.484187945713053,
            "unit": "iter/sec",
            "range": "stddev: 0.0010556159551343312",
            "extra": "mean: 69.0408053076924 msec\nrounds: 13"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 3.3358988730796484,
            "unit": "iter/sec",
            "range": "stddev: 0.009739713907156741",
            "extra": "mean: 299.7692790000004 msec\nrounds: 4"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2388407.7559111547,
            "unit": "iter/sec",
            "range": "stddev: 5.603786423939154e-7",
            "extra": "mean: 418.6889770078265 nsec\nrounds: 187372"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 4204691.073390878,
            "unit": "iter/sec",
            "range": "stddev: 1.7602940062648914e-7",
            "extra": "mean: 237.8296009257252 nsec\nrounds: 196580"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa94e654bd68b346e9252b80c718014982bfcdab",
          "message": "🚀 RELEASE: v0.6.0 (#118)",
          "timestamp": "2021-09-07T21:42:49+02:00",
          "tree_id": "0f874bbb5424bb25b9c5a784eb30f1f7466fd53d",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/fa94e654bd68b346e9252b80c718014982bfcdab"
        },
        "date": 1631044019275,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.1962290234168038,
            "unit": "iter/sec",
            "range": "stddev: 0.01729463094754043",
            "extra": "mean: 835.9603223333334 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.17627786973745066,
            "unit": "iter/sec",
            "range": "stddev: 1.170929461398301",
            "extra": "mean: 5.672861837333332 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 4.992885342263435,
            "unit": "iter/sec",
            "range": "stddev: 0.038393372723777346",
            "extra": "mean: 200.284991833333 msec\nrounds: 6"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 10.234691485286005,
            "unit": "iter/sec",
            "range": "stddev: 0.018038363801871238",
            "extra": "mean: 97.70690219999878 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.634008411163296,
            "unit": "iter/sec",
            "range": "stddev: 0.014872707163188776",
            "extra": "mean: 379.6495089999941 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1968237.1289365357,
            "unit": "iter/sec",
            "range": "stddev: 7.102027694960885e-7",
            "extra": "mean: 508.06886289169483 nsec\nrounds: 184468"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2016554.3878585831,
            "unit": "iter/sec",
            "range": "stddev: 6.965128396973116e-7",
            "extra": "mean: 495.8953777893978 nsec\nrounds: 187723"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6259e2330ccb44aea06890071c6e83559ef20693",
          "message": "🔀 MERGE: master -> develop #120",
          "timestamp": "2021-09-07T22:36:13+02:00",
          "tree_id": "0f874bbb5424bb25b9c5a784eb30f1f7466fd53d",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/6259e2330ccb44aea06890071c6e83559ef20693"
        },
        "date": 1631047071790,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.1100698261450375,
            "unit": "iter/sec",
            "range": "stddev: 0.03530845417322709",
            "extra": "mean: 900.8442320000001 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.2684147121357487,
            "unit": "iter/sec",
            "range": "stddev: 0.036539681567324005",
            "extra": "mean: 788.3856836666663 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 4.797529659865577,
            "unit": "iter/sec",
            "range": "stddev: 0.058120466089462995",
            "extra": "mean: 208.44060816666618 msec\nrounds: 6"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 10.930071957254315,
            "unit": "iter/sec",
            "range": "stddev: 0.002124325581782241",
            "extra": "mean: 91.49070600000009 msec\nrounds: 6"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.6513435998760357,
            "unit": "iter/sec",
            "range": "stddev: 0.017243733470319447",
            "extra": "mean: 377.16725966666684 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1880208.8205605582,
            "unit": "iter/sec",
            "range": "stddev: 0.000005911904955582218",
            "extra": "mean: 531.8558178563719 nsec\nrounds: 180376"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3559584.312125909,
            "unit": "iter/sec",
            "range": "stddev: 1.0537906652710508e-7",
            "extra": "mean: 280.9316797451629 nsec\nrounds: 162233"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c0120568a992b41a55b325f3217d4902b5281070",
          "message": "🔧 MAINTAIN: Make types more permissive (#121)\n\nAllow `Container` folder to be a `pathlib.Path`,\r\nand make hashkeys `Sequence[str]` rather than just `List[str]`.",
          "timestamp": "2021-09-08T07:57:10+02:00",
          "tree_id": "39bdfe2a4d7b1f4ed0561acc5c11bd66b08cd220",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/c0120568a992b41a55b325f3217d4902b5281070"
        },
        "date": 1631080727375,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.5531170560505512,
            "unit": "iter/sec",
            "range": "stddev: 0.02676479727295796",
            "extra": "mean: 643.866472333333 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.3743345448083195,
            "unit": "iter/sec",
            "range": "stddev: 0.06297481188281169",
            "extra": "mean: 727.6248739999994 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 6.911410302991384,
            "unit": "iter/sec",
            "range": "stddev: 0.006947374492901404",
            "extra": "mean: 144.68827000000013 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 13.99948296463387,
            "unit": "iter/sec",
            "range": "stddev: 0.004051529337487231",
            "extra": "mean: 71.43120946153836 msec\nrounds: 13"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 3.042062331965175,
            "unit": "iter/sec",
            "range": "stddev: 0.01958128899452198",
            "extra": "mean: 328.72436225 msec\nrounds: 4"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2435005.6824427275,
            "unit": "iter/sec",
            "range": "stddev: 2.737767980105879e-7",
            "extra": "mean: 410.67665969338884 nsec\nrounds: 181193"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 4299886.584935576,
            "unit": "iter/sec",
            "range": "stddev: 1.114143461085102e-7",
            "extra": "mean: 232.56427355617976 nsec\nrounds: 195046"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a09ea2a953f0b0dfa79a6688306c51a501f874b",
          "message": "[pre-commit.ci] pre-commit autoupdate (#115)\n\nupdates:\r\n- [github.com/psf/black: 21.7b0 → 21.8b0](https://github.com/psf/black/compare/21.7b0...21.8b0)\r\n\r\nCo-authored-by: Chris Sewell <chrisj_sewell@hotmail.com>",
          "timestamp": "2021-09-09T02:18:32+02:00",
          "tree_id": "3944bbd36949ddf3afabd456558b72039dece5c9",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/7a09ea2a953f0b0dfa79a6688306c51a501f874b"
        },
        "date": 1631146960539,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.3591462922697777,
            "unit": "iter/sec",
            "range": "stddev: 0.07426307767746257",
            "extra": "mean: 735.755971 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.16686005417860864,
            "unit": "iter/sec",
            "range": "stddev: 1.5689445806470643",
            "extra": "mean: 5.993046118333333 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 6.1064037983122565,
            "unit": "iter/sec",
            "range": "stddev: 0.0111794166539821",
            "extra": "mean: 163.7625078571432 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 13.069215438421216,
            "unit": "iter/sec",
            "range": "stddev: 0.0032746605999551107",
            "extra": "mean: 76.51568716666605 msec\nrounds: 12"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 3.0510086240549494,
            "unit": "iter/sec",
            "range": "stddev: 0.011908587558125103",
            "extra": "mean: 327.7604632500015 msec\nrounds: 4"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2163038.6270779283,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013866102169774025",
            "extra": "mean: 462.3125946441884 nsec\nrounds: 176305"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3732560.2398254187,
            "unit": "iter/sec",
            "range": "stddev: 0.000004495240276848779",
            "extra": "mean: 267.91262183267173 nsec\nrounds: 199761"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cbda68db1b3f5858e844c9434f288b85447116e6",
          "message": "Merge pull request #127 from giovannipizzi/add-docs\n\nMoving documentation to sphinx+myst",
          "timestamp": "2021-12-09T22:13:09+01:00",
          "tree_id": "ef3255b0dd18701ce5367510b6f14cebbe355393",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/cbda68db1b3f5858e844c9434f288b85447116e6"
        },
        "date": 1639084494040,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.2925828699964834,
            "unit": "iter/sec",
            "range": "stddev: 0.06040224539525317",
            "extra": "mean: 773.6447876666666 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.1901887754727192,
            "unit": "iter/sec",
            "range": "stddev: 0.04956632720625094",
            "extra": "mean: 840.2028490000001 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 6.30777600106651,
            "unit": "iter/sec",
            "range": "stddev: 0.010850908706132081",
            "extra": "mean: 158.53448185714288 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 10.853088612710748,
            "unit": "iter/sec",
            "range": "stddev: 0.016110233032644243",
            "extra": "mean: 92.13966970000006 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.6410409468511435,
            "unit": "iter/sec",
            "range": "stddev: 0.02721762056796901",
            "extra": "mean: 378.63858233333286 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2561018.923522326,
            "unit": "iter/sec",
            "range": "stddev: 2.6343772360362335e-7",
            "extra": "mean: 390.46958646624864 nsec\nrounds: 191132"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 4276361.767737927,
            "unit": "iter/sec",
            "range": "stddev: 1.4766537384857322e-7",
            "extra": "mean: 233.8436395967101 nsec\nrounds: 194288"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "14cb67308370cfb5c620cb90628cf51c175272d5",
          "message": "[pre-commit.ci] pre-commit autoupdate (#122)\n\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>\r\nCo-authored-by: Giovanni Pizzi <giovanni.pizzi@epfl.ch>",
          "timestamp": "2021-12-10T00:41:30+01:00",
          "tree_id": "be9c4a776cc83d3aa15ed3b131cb8a4a00a3bbce",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/14cb67308370cfb5c620cb90628cf51c175272d5"
        },
        "date": 1639093386714,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.349608692228921,
            "unit": "iter/sec",
            "range": "stddev: 0.013486562327452474",
            "extra": "mean: 740.9555123333332 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.3454884255380761,
            "unit": "iter/sec",
            "range": "stddev: 0.025073269778264864",
            "extra": "mean: 743.2245280000002 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 6.735485709302199,
            "unit": "iter/sec",
            "range": "stddev: 0.009225173212787792",
            "extra": "mean: 148.4673924285708 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 12.477082817384689,
            "unit": "iter/sec",
            "range": "stddev: 0.00044019762298835456",
            "extra": "mean: 80.14693936363639 msec\nrounds: 11"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.9648701167636746,
            "unit": "iter/sec",
            "range": "stddev: 0.012383582016638044",
            "extra": "mean: 337.2829029999996 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2495167.7592416857,
            "unit": "iter/sec",
            "range": "stddev: 3.0473732671814985e-7",
            "extra": "mean: 400.77465585076055 nsec\nrounds: 182117"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 4212428.269607958,
            "unit": "iter/sec",
            "range": "stddev: 5.833775378357459e-8",
            "extra": "mean: 237.39276635640712 nsec\nrounds: 196851"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "65a3e5d9b8c95d7f9a7309a01f8be68bc11be1bd",
          "message": "Missing badge from RTD added (#129)\n\n* Missing badge from RTD added\r\n\r\n* [pre-commit.ci] auto fixes from pre-commit.com hooks",
          "timestamp": "2021-12-15T11:18:23+01:00",
          "tree_id": "b0581635f9dbaa13760e30de0b0e5c3aa75ff806",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/65a3e5d9b8c95d7f9a7309a01f8be68bc11be1bd"
        },
        "date": 1639563643680,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.1408034957833186,
            "unit": "iter/sec",
            "range": "stddev: 0.07383149435380851",
            "extra": "mean: 876.5751539999993 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.7427744434117199,
            "unit": "iter/sec",
            "range": "stddev: 0.19341640767848745",
            "extra": "mean: 1.3463037249999996 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 6.156889570665875,
            "unit": "iter/sec",
            "range": "stddev: 0.010338211463896348",
            "extra": "mean: 162.4196745000006 msec\nrounds: 6"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 10.476520324721161,
            "unit": "iter/sec",
            "range": "stddev: 0.0073361328971240855",
            "extra": "mean: 95.45154011111181 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.7119723463434267,
            "unit": "iter/sec",
            "range": "stddev: 0.015289126456510205",
            "extra": "mean: 368.7353233333326 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2013702.2788610468,
            "unit": "iter/sec",
            "range": "stddev: 0.000012879840017410604",
            "extra": "mean: 496.5977396448107 nsec\nrounds: 152277"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 4297328.960778254,
            "unit": "iter/sec",
            "range": "stddev: 2.854086952504659e-7",
            "extra": "mean: 232.70268790855636 nsec\nrounds: 197942"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ramirezfranciscof@users.noreply.github.com",
            "name": "Francisco Ramirez",
            "username": "ramirezfranciscof"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9eda5b8e8c6b4aa72a8cb36418382f9ea20cf307",
          "message": "Fix `mypy` CI error due to file `database.py` name (#131)",
          "timestamp": "2022-01-11T18:24:58+01:00",
          "tree_id": "bc7456356aa2981645f679f9b967ccaa13703891",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/9eda5b8e8c6b4aa72a8cb36418382f9ea20cf307"
        },
        "date": 1641922038923,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.3513742735809218,
            "unit": "iter/sec",
            "range": "stddev: 0.007701050988668366",
            "extra": "mean: 739.987448 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.2312218622737363,
            "unit": "iter/sec",
            "range": "stddev: 0.06191222529481837",
            "extra": "mean: 812.2013023333328 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 6.6894549959103,
            "unit": "iter/sec",
            "range": "stddev: 0.009664826067554129",
            "extra": "mean: 149.4890092857139 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 11.804378352745925,
            "unit": "iter/sec",
            "range": "stddev: 0.0015362883874796983",
            "extra": "mean: 84.71432972727283 msec\nrounds: 11"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.9333001312439646,
            "unit": "iter/sec",
            "range": "stddev: 0.014137400880398445",
            "extra": "mean: 340.9129496666665 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2212672.9454336534,
            "unit": "iter/sec",
            "range": "stddev: 6.350608283889606e-7",
            "extra": "mean: 451.94207398057813 nsec\nrounds: 64099"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 4165241.1413264195,
            "unit": "iter/sec",
            "range": "stddev: 7.35270573291745e-7",
            "extra": "mean: 240.08213836127723 nsec\nrounds: 198610"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "16e6ff98c904ef0ec8b03ba3ce6e1eb00204c328",
          "message": "FIX: mypy dependency problem and revert unnecessary file rename (#132)\n\nUpdated the version of mypy and of the SQLAlchemy dependency\r\n(the latter was needed to avoid some INTERNAL ERRORs when running\r\nmypy):\r\n\r\n- [github.com/pre-commit/pre-commit-hooks: v4.0.1 → v4.1.0](https://github.com/pre-commit/pre-commit-hooks/compare/v4.0.1...v4.1.0)\r\n- [github.com/asottile/pyupgrade: v2.29.1 → v2.31.0](https://github.com/asottile/pyupgrade/compare/v2.29.1...v2.31.0)\r\n- [github.com/pre-commit/mirrors-mypy: v0.910-1 → v0.930](https://github.com/pre-commit/mirrors-mypy/compare/v0.910-1...v0.930)\r\n\r\nThis also reverts commit 9eda5b8e8c6b4aa72a8cb36418382f9ea20cf307.",
          "timestamp": "2022-01-11T19:23:52+01:00",
          "tree_id": "7ff4d7fd420aae0879fce600637e11a137af9ec9",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/16e6ff98c904ef0ec8b03ba3ce6e1eb00204c328"
        },
        "date": 1641925567282,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.1573278790682173,
            "unit": "iter/sec",
            "range": "stddev: 0.026958224756663766",
            "extra": "mean: 864.0593716666668 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.1575748341724668,
            "unit": "iter/sec",
            "range": "stddev: 0.0699555960656259",
            "extra": "mean: 863.8750346666661 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 5.585906710002182,
            "unit": "iter/sec",
            "range": "stddev: 0.01507878309025103",
            "extra": "mean: 179.0219657999998 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 11.014586881757621,
            "unit": "iter/sec",
            "range": "stddev: 0.015644628636461978",
            "extra": "mean: 90.7886978181816 msec\nrounds: 11"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.809588068515615,
            "unit": "iter/sec",
            "range": "stddev: 0.007517039000366398",
            "extra": "mean: 355.9240627499989 msec\nrounds: 4"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2206825.7651490425,
            "unit": "iter/sec",
            "range": "stddev: 5.903647448767031e-7",
            "extra": "mean: 453.13953452617176 nsec\nrounds: 189394"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3346843.106682331,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028085510218716623",
            "extra": "mean: 298.789028384284 nsec\nrounds: 198453"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@sphuber.net",
            "name": "Sebastiaan Huber",
            "username": "sphuber"
          },
          "committer": {
            "email": "mail@sphuber.net",
            "name": "Sebastiaan Huber",
            "username": "sphuber"
          },
          "distinct": true,
          "id": "f1809d416fbb481944c1e89d3e1f59b532b85a46",
          "message": "DevOps: update pre-commit dependency requirements\n\nAlso add a pin for `jinja2`. Versions 3.1 and above break the docs\nbuild.",
          "timestamp": "2022-10-21T20:32:54+02:00",
          "tree_id": "c48810f1f095d25f903884fbb3ef41b430be0327",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/f1809d416fbb481944c1e89d3e1f59b532b85a46"
        },
        "date": 1666377474433,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.4041699484244112,
            "unit": "iter/sec",
            "range": "stddev: 0.022094400205411747",
            "extra": "mean: 712.164507666667 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.0303390373636279,
            "unit": "iter/sec",
            "range": "stddev: 0.18196012551303292",
            "extra": "mean: 970.5543163333327 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 6.49418674450725,
            "unit": "iter/sec",
            "range": "stddev: 0.018021666341064908",
            "extra": "mean: 153.98386885714288 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 10.563108542003425,
            "unit": "iter/sec",
            "range": "stddev: 0.004978623105737764",
            "extra": "mean: 94.66910200000062 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.782510965479199,
            "unit": "iter/sec",
            "range": "stddev: 0.025377489766592782",
            "extra": "mean: 359.3876223333344 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2478345.2165967566,
            "unit": "iter/sec",
            "range": "stddev: 9.16667970969344e-7",
            "extra": "mean: 403.49503907013883 nsec\nrounds: 171439"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2193850.530925014,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012533518571739345",
            "extra": "mean: 455.81956742438626 nsec\nrounds: 132997"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "gio.piz@gmail.com",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "10edd6395455d7c59361e608396b672289d8de58",
          "message": "Refactoring the code to enable efficient access to packed compressed objects\n\nI started to work on top of Bonan's work.\nI kept the same core idea: upon certain conditions (now well defined, i.e.\nwhen seeking with the following conditions):\n- whence=0 and seeking in a previous location\n- whence=1 and seeking in a previous location (i.e. negative offset)\n- whence=2\nwe assume that we will need to do random access, so we just uncompress\nthe whole file back into the loose folder and then proxy all requests\n(tell, seek, read) to the loose file.\n\nI now define a LazyLooseStream class that allows to define which loose\nfile to open, delaying the opening to a later point, and in this way\nenabling code that ensures that always closes any open file.\n\nI also added code to ensure that there should not be race conditions\nif a clean_storage is running at the same time.\n\nI also cleaned up a bit the code and added various tests to increased coverage,\nsince it had dropped over time. It didn't go back to 100% but we are close\n(for the core library files).\n\nFurthermore, I used the occasion to a new `validate` CLI command\nthat also uses tqdm (if installed) to show progress.",
          "timestamp": "2023-07-04T18:18:04+02:00",
          "tree_id": "da00366d84a73df7c018aa051c5fe6efd06ec0b3",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/10edd6395455d7c59361e608396b672289d8de58"
        },
        "date": 1688487568832,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.8637376373040753,
            "unit": "iter/sec",
            "range": "stddev: 0.010441736392451053",
            "extra": "mean: 536.5562083333334 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.5780004410858393,
            "unit": "iter/sec",
            "range": "stddev: 0.004477975933724952",
            "extra": "mean: 633.7133843333334 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 7.129704690153842,
            "unit": "iter/sec",
            "range": "stddev: 0.007951353341033291",
            "extra": "mean: 140.2582636250005 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 14.068417665144509,
            "unit": "iter/sec",
            "range": "stddev: 0.004727787327840146",
            "extra": "mean: 71.08119930769259 msec\nrounds: 13"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 4.2459619386685805,
            "unit": "iter/sec",
            "range": "stddev: 0.001412637707590061",
            "extra": "mean: 235.51789074999886 msec\nrounds: 4"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2715897.6983025596,
            "unit": "iter/sec",
            "range": "stddev: 2.2214000930297978e-7",
            "extra": "mean: 368.2023813433774 nsec\nrounds: 153023"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 4442609.66251884,
            "unit": "iter/sec",
            "range": "stddev: 3.52248238691652e-8",
            "extra": "mean: 225.09292419650168 nsec\nrounds: 192419"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "39116092acc684712060eca2d8a294117a04a8f3",
          "message": "Adding link in docs to AEP#006 (#143)\n\nNow the AEP information is linked from the design documentation page.\r\n\r\nThis closes #128",
          "timestamp": "2023-07-04T22:36:41+02:00",
          "tree_id": "a8c542fbe4b22dfe1083d9ebb2623f320cd056f9",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/39116092acc684712060eca2d8a294117a04a8f3"
        },
        "date": 1688503239873,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.4116852243504476,
            "unit": "iter/sec",
            "range": "stddev: 0.03885426140656585",
            "extra": "mean: 708.3732143333337 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.048904075393100856,
            "unit": "iter/sec",
            "range": "stddev: 17.957067346936785",
            "extra": "mean: 20.448193569999997 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 6.783471166231791,
            "unit": "iter/sec",
            "range": "stddev: 0.00925035950405587",
            "extra": "mean: 147.41715199999865 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 13.73800520455147,
            "unit": "iter/sec",
            "range": "stddev: 0.0017824997973886448",
            "extra": "mean: 72.79077166666781 msec\nrounds: 12"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 3.90385966748794,
            "unit": "iter/sec",
            "range": "stddev: 0.010425530678594372",
            "extra": "mean: 256.1567487500085 msec\nrounds: 4"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2621055.4142617546,
            "unit": "iter/sec",
            "range": "stddev: 3.383314539979579e-7",
            "extra": "mean: 381.52569936475743 nsec\nrounds: 151035"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 4188288.245936077,
            "unit": "iter/sec",
            "range": "stddev: 1.0435555922840803e-7",
            "extra": "mean: 238.7610262904422 nsec\nrounds: 199641"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "gio.piz@gmail.com",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "afdae261a5849e994b5920ca07665fc6a19f3852",
          "message": "Adding also 3.11 support",
          "timestamp": "2023-07-07T17:00:13+02:00",
          "tree_id": "21fd8385393ec10cfd04fed00c8e5ae61f5b82cd",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/afdae261a5849e994b5920ca07665fc6a19f3852"
        },
        "date": 1688742545163,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.22299713579899436,
            "unit": "iter/sec",
            "range": "stddev: 3.19344635682812",
            "extra": "mean: 4.484362529666669 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.07799973526889853,
            "unit": "iter/sec",
            "range": "stddev: 12.635879798544078",
            "extra": "mean: 12.820556333333329 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 0.6183148311340453,
            "unit": "iter/sec",
            "range": "stddev: 1.4365872273117377",
            "extra": "mean: 1.6172990677999906 sec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 9.968427012200818,
            "unit": "iter/sec",
            "range": "stddev: 0.03397081696782714",
            "extra": "mean: 100.31672988888356 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.980031623871998,
            "unit": "iter/sec",
            "range": "stddev: 0.013086060404290575",
            "extra": "mean: 335.5669087500104 msec\nrounds: 4"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2076334.6995783753,
            "unit": "iter/sec",
            "range": "stddev: 0.00000860590282909146",
            "extra": "mean: 481.61792036855235 nsec\nrounds: 146671"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3029325.953862963,
            "unit": "iter/sec",
            "range": "stddev: 0.000014701262569005558",
            "extra": "mean: 330.10643794366814 nsec\nrounds: 197239"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5ba93162cd49d9b1ca7149c502349bfb06833255",
          "message": "Various improvements to docs and code (#151)\n\nFirst a number of sections have been added to the docs:\r\n- `clean_storage` is now mentioned in the basic usage\r\n- we also add basic examples of the new CompressMode.AUTO\r\n  functionality\r\n- Maintenance operations are documented and explained\r\n- We discuss the long-term support of data even without this\r\n  library (fixes #100)\r\n- Links to the original performance tests\r\n- Document the new compression modes\r\n- Explain that nowadays `clean_storage` is safe to use concurrently\r\n  on all platforms\r\n- Explain how to reclaim space with `repacking` of packs after deletion\r\n\r\nIn addition, some changes to the code have been performed:\r\n- `utf8` is explicitly specified for the config.json file\r\n- `get_hash` is renamed to `get_hash_cls` (and `get_hash` is\r\n  deprecated`)\r\n-\r\n\r\nSome of these changes address the remaining comments and\r\nthus fix #101, as well as the remaining comments and thus\r\nfix #3.\r\n\r\nExtending the documentation",
          "timestamp": "2023-07-07T23:24:33+02:00",
          "tree_id": "ec47eb950892c1e3c8cf09f3e28706830b901384",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/5ba93162cd49d9b1ca7149c502349bfb06833255"
        },
        "date": 1688765237966,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.8110554335924403,
            "unit": "iter/sec",
            "range": "stddev: 0.032829600988166445",
            "extra": "mean: 552.1642140000006 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 1.2793717685529262,
            "unit": "iter/sec",
            "range": "stddev: 0.0956481500358172",
            "extra": "mean: 781.6336303333328 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 6.795818404630622,
            "unit": "iter/sec",
            "range": "stddev: 0.010010493098587762",
            "extra": "mean: 147.14931159999907 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 14.566151943190393,
            "unit": "iter/sec",
            "range": "stddev: 0.0018315752013673364",
            "extra": "mean: 68.65231146153843 msec\nrounds: 13"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 4.170829623849606,
            "unit": "iter/sec",
            "range": "stddev: 0.003707588560062722",
            "extra": "mean: 239.7604529999997 msec\nrounds: 4"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2530924.846451138,
            "unit": "iter/sec",
            "range": "stddev: 4.978528814462394e-7",
            "extra": "mean: 395.112482854716 nsec\nrounds: 175040"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 4331351.3404671885,
            "unit": "iter/sec",
            "range": "stddev: 1.6830191149513739e-7",
            "extra": "mean: 230.87482898399853 nsec\nrounds: 195122"
          }
        ]
      }
    ],
    "Benchmark on windows-latest": [
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37e4914e091106642af3975663590f013d0813b3",
          "message": "Merge pull request #40 from giovannipizzi/move_benchmarks_new_workflow\n\nMoving benchmarks to a different workflow",
          "timestamp": "2020-06-29T09:05:10+02:00",
          "tree_id": "21cfdf2eed33a3725bbd4cbbf25afc1b0bedfa02",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/37e4914e091106642af3975663590f013d0813b3"
        },
        "date": 1593414468681,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.20892516900757802,
            "unit": "iter/sec",
            "range": "stddev: 0.06363246228713358",
            "extra": "mean: 4.786402733333333 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.5096157181046976,
            "unit": "iter/sec",
            "range": "stddev: 0.012587767155336948",
            "extra": "mean: 398.467380000001 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1080bfabe7608f846b4d91278f963d24c18c72a1",
          "message": "Merge pull request #41 from giovannipizzi/increase_coverage\n\nAdding a test that covers one missing line",
          "timestamp": "2020-06-29T09:29:13+02:00",
          "tree_id": "760b3d95f1595f870ea05a2ec9a502b9ca6c3884",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/1080bfabe7608f846b4d91278f963d24c18c72a1"
        },
        "date": 1593415877973,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.3193383105828205,
            "unit": "iter/sec",
            "range": "stddev: 0.03538082068847401",
            "extra": "mean: 3.1314752 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.548726606882923,
            "unit": "iter/sec",
            "range": "stddev: 0.007091604610876532",
            "extra": "mean: 281.79122000000024 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7eda99b2f330e4fee334381a9800d6aca1974d12",
          "message": "Merge pull request #42 from giovannipizzi/increase_coverage\n\nTrying to see if standard github token works",
          "timestamp": "2020-06-29T09:58:18+02:00",
          "tree_id": "5079e5290b4c4795ef6426c38f1a5f9fdd801159",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/7eda99b2f330e4fee334381a9800d6aca1974d12"
        },
        "date": 1593417638613,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.22383829491805599,
            "unit": "iter/sec",
            "range": "stddev: 0.07376585107548231",
            "extra": "mean: 4.467510799999999 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.818104222963003,
            "unit": "iter/sec",
            "range": "stddev: 0.02194321447513948",
            "extra": "mean: 354.84847999999903 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "8f93a1e9914e96e2a8892402c1faf6df2e5febb4",
          "message": "Returning more metadata when iterating over objects\n\nWe now don't return only the size, but a set of metadata.\nNote that this a backward-incompatible change (for those who\nwere using the internal get_objects_stream_and_meta (that anyway\nused to be called get_objects_stream_and_size, and does not exist anymore).\nTherefore, I upped the version to 0.4.0.\n\nI also added a get_object_stream_and_meta (at the singular) for a single object.",
          "timestamp": "2020-06-29T12:08:47+02:00",
          "tree_id": "3dfddd917f5aa1bec1e88f60b058390b416a8997",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/8f93a1e9914e96e2a8892402c1faf6df2e5febb4"
        },
        "date": 1593430151603,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.2780251351959775,
            "unit": "iter/sec",
            "range": "stddev: 0.06017952623102008",
            "extra": "mean: 3.596797100000001 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.1901276523199797,
            "unit": "iter/sec",
            "range": "stddev: 0.017390113964031704",
            "extra": "mean: 313.46708000000024 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0f55bed73ac1f06b7aaac5a3fc28ac2359530ac4",
          "message": "Merge pull request #44 from giovannipizzi/object_meta\n\nReadme change for the previous change and fix in test",
          "timestamp": "2020-06-29T14:54:11+02:00",
          "tree_id": "f596f20d7180d9d03843fdd7bbebd22e028348ea",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/0f55bed73ac1f06b7aaac5a3fc28ac2359530ac4"
        },
        "date": 1593435390689,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.2262943778172613,
            "unit": "iter/sec",
            "range": "stddev: 0.068860451548065",
            "extra": "mean: 4.419022733333333 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.880688784211059,
            "unit": "iter/sec",
            "range": "stddev: 0.009673027892805412",
            "extra": "mean: 347.13920000000013 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d76727c1cfc2bd09a1dc0623fdaaafe1a37e9361",
          "message": "Merge pull request #47 from giovannipizzi/fix_45\n\nAdd `has_object` and `has_objects` methods",
          "timestamp": "2020-07-08T23:37:07+02:00",
          "tree_id": "bb2c71eb780474decfeed149f228b7cb2d4f5c60",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/d76727c1cfc2bd09a1dc0623fdaaafe1a37e9361"
        },
        "date": 1594244413896,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.2549701804724832,
            "unit": "iter/sec",
            "range": "stddev: 0.017174190526873023",
            "extra": "mean: 3.922027266666666 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.7889255781345126,
            "unit": "iter/sec",
            "range": "stddev: 0.013955256260348915",
            "extra": "mean: 358.56101999999976 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.1605989650087893,
            "unit": "iter/sec",
            "range": "stddev: 0.033294229418964975",
            "extra": "mean: 861.6240666666689 msec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fb506418941ce59f8978c2ae47968d4e484ea37",
          "message": "Merge pull request #49 from giovannipizzi/add_simple_docs\n\nAdding a simple how-to guide to go through the API interface",
          "timestamp": "2020-07-10T18:41:52+02:00",
          "tree_id": "556717932b6d1de938efe63b0b81b21a4fc73b49",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/2fb506418941ce59f8978c2ae47968d4e484ea37"
        },
        "date": 1594399512821,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.2628689441205554,
            "unit": "iter/sec",
            "range": "stddev: 0.04695523819174394",
            "extra": "mean: 3.804177033333333 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.8611206322847647,
            "unit": "iter/sec",
            "range": "stddev: 0.01129436793207183",
            "extra": "mean: 349.51340000000073 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.154641879738505,
            "unit": "iter/sec",
            "range": "stddev: 0.016538264184912627",
            "extra": "mean: 866.0694000000007 msec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d493174c1354603b21ed8d623f487660a050d24",
          "message": "Merge pull request #50 from giovannipizzi/better_debugging_concurrency\n\nSlightly more detailed debugging in case of problems with the concurrent tests",
          "timestamp": "2020-07-10T19:48:46+02:00",
          "tree_id": "36d0accdc00b7f7b1eb3e3b01401bfb7c227471f",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/4d493174c1354603b21ed8d623f487660a050d24"
        },
        "date": 1594403532655,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.22193811348919368,
            "unit": "iter/sec",
            "range": "stddev: 0.07340034947616736",
            "extra": "mean: 4.505760566666665 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.7750278793175984,
            "unit": "iter/sec",
            "range": "stddev: 0.006867972564957476",
            "extra": "mean: 360.35673999999887 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 0.9529941965830053,
            "unit": "iter/sec",
            "range": "stddev: 0.018008616832593055",
            "extra": "mean: 1.0493243333333357 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "91ea646558962736530f212654fd83927f650c87",
          "message": "Merge pull request #53 from giovannipizzi/further_multiprocess_basic_tests\n\nFurther multiprocess basic tests",
          "timestamp": "2020-07-12T09:02:23+02:00",
          "tree_id": "e0d576ca01ebee5c8b61e515d997482d318529fb",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/91ea646558962736530f212654fd83927f650c87"
        },
        "date": 1594537520016,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.2179552224218151,
            "unit": "iter/sec",
            "range": "stddev: 0.1935370516350103",
            "extra": "mean: 4.588098366666667 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.435047304689967,
            "unit": "iter/sec",
            "range": "stddev: 0.006447934661812005",
            "extra": "mean: 410.6696400000004 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 0.9348948861841893,
            "unit": "iter/sec",
            "range": "stddev: 0.035769179036896616",
            "extra": "mean: 1.069638966666659 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6fae5f875c73bf4b5f2eb69e28467efa731c2aa3",
          "message": "Merge pull request #58 from sphuber/feature/057/packed-object-reader-mode\n\nAdd the `mode` property to the `PackedObjectReader`",
          "timestamp": "2020-07-12T21:53:29+02:00",
          "tree_id": "f32c32f225344579ea82d4787e2e232ead7dfa2c",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/6fae5f875c73bf4b5f2eb69e28467efa731c2aa3"
        },
        "date": 1594583935626,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.22814713573819176,
            "unit": "iter/sec",
            "range": "stddev: 0.03360645577628413",
            "extra": "mean: 4.383136333333333 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.763966849644962,
            "unit": "iter/sec",
            "range": "stddev: 0.014914493080658",
            "extra": "mean: 361.7988399999995 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 0.8973516460869042,
            "unit": "iter/sec",
            "range": "stddev: 0.044588873551189845",
            "extra": "mean: 1.1143903333333327 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6025360bb8a030b1103e7d40da4f7bde7938dd4c",
          "message": "Merge pull request #55 from giovannipizzi/fix_open_files\n\nFix lost open files and implement FULLSYNC for pack files on Mac OS",
          "timestamp": "2020-07-12T22:29:09+02:00",
          "tree_id": "571d031d2c95a14eb9fc9289031f93a62b9693f8",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/6025360bb8a030b1103e7d40da4f7bde7938dd4c"
        },
        "date": 1594585990191,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.24840519517606055,
            "unit": "iter/sec",
            "range": "stddev: 0.06309042944512261",
            "extra": "mean: 4.0256807 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.1330237055825699,
            "unit": "iter/sec",
            "range": "stddev: 0.06914862014328126",
            "extra": "mean: 7.5174571000000014 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.5293541324289897,
            "unit": "iter/sec",
            "range": "stddev: 0.01084899018701773",
            "extra": "mean: 283.33796000000007 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.0594159298723203,
            "unit": "iter/sec",
            "range": "stddev: 0.006010708672305684",
            "extra": "mean: 943.9163333333292 msec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09cc7a9539aa68f3417bf4ef2e80b520a1b4ba41",
          "message": "Merge pull request #60 from giovannipizzi/fix_56_seek\n\nAdded seek method to both the PackedObjectReader and the StreamDecompresser",
          "timestamp": "2020-07-13T01:27:47+02:00",
          "tree_id": "cf2de3df905a56e5ca39dbd1155b206012989f9f",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/09cc7a9539aa68f3417bf4ef2e80b520a1b4ba41"
        },
        "date": 1594596910198,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.2764139105927044,
            "unit": "iter/sec",
            "range": "stddev: 0.03513732425702619",
            "extra": "mean: 3.6177629333333328 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.14567610167721848,
            "unit": "iter/sec",
            "range": "stddev: 0.5683789936726585",
            "extra": "mean: 6.864543933333334 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.330319394281483,
            "unit": "iter/sec",
            "range": "stddev: 0.005715752986264874",
            "extra": "mean: 300.27150000000233 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.2257619867673333,
            "unit": "iter/sec",
            "range": "stddev: 0.017234574850089626",
            "extra": "mean: 815.8190666666627 msec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "df368df957ecb9cf2a4a308c0b2baccfa7669638",
          "message": "Merge pull request #61 from giovannipizzi/check_concurrency\n\nFix concurrency problems in Mac OS",
          "timestamp": "2020-07-13T10:14:15+02:00",
          "tree_id": "2483876c2ad6de311dce821cd69d08efc5662ed0",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/df368df957ecb9cf2a4a308c0b2baccfa7669638"
        },
        "date": 1594628258687,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.2143607512666952,
            "unit": "iter/sec",
            "range": "stddev: 0.05432047441591353",
            "extra": "mean: 4.6650331 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.18556104136534773,
            "unit": "iter/sec",
            "range": "stddev: 0.10860015857642057",
            "extra": "mean: 5.389062233333334 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.8420098853061146,
            "unit": "iter/sec",
            "range": "stddev: 0.013786052165613528",
            "extra": "mean: 351.8636600000036 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 0.9175084653918549,
            "unit": "iter/sec",
            "range": "stddev: 0.034969238413356654",
            "extra": "mean: 1.089908200000001 sec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cec284e3680abc6105e80d0098da030a6cc3509e",
          "message": "Merge pull request #62 from giovannipizzi/fix_58_performance_has\n\nAdding methods to just fetch metas without opening streams",
          "timestamp": "2020-07-13T20:34:37+02:00",
          "tree_id": "3318cf4caa826238d95afbbb139840cb292a6f0e",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/cec284e3680abc6105e80d0098da030a6cc3509e"
        },
        "date": 1594665499455,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.3151538183847542,
            "unit": "iter/sec",
            "range": "stddev: 0.024390539718779258",
            "extra": "mean: 3.1730537333333344 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.14557116825205396,
            "unit": "iter/sec",
            "range": "stddev: 0.2112290070891358",
            "extra": "mean: 6.869492166666666 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.7542086556133825,
            "unit": "iter/sec",
            "range": "stddev: 0.010274225468958958",
            "extra": "mean: 266.3677199999995 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.559570525468692,
            "unit": "iter/sec",
            "range": "stddev: 0.015076867289436302",
            "extra": "mean: 641.2021666666684 msec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dab40d1d73c8515a5900560c656d04bdbae5fdf0",
          "message": "Merge pull request #63 from giovannipizzi/fix_10_performance\n\nAdding performance tests for loose read",
          "timestamp": "2020-07-13T22:09:53+02:00",
          "tree_id": "da463ed266c11b51b86ed097afedaa7a018bec82",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/dab40d1d73c8515a5900560c656d04bdbae5fdf0"
        },
        "date": 1594671241093,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.2877065108184792,
            "unit": "iter/sec",
            "range": "stddev: 0.052508391337225555",
            "extra": "mean: 3.475764233333334 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.15071001295623845,
            "unit": "iter/sec",
            "range": "stddev: 0.03305972559656238",
            "extra": "mean: 6.6352591999999975 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.3235700140600293,
            "unit": "iter/sec",
            "range": "stddev: 0.01378793649416427",
            "extra": "mean: 300.8812800000001 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 12.65114524492339,
            "unit": "iter/sec",
            "range": "stddev: 0.008319989570557927",
            "extra": "mean: 79.0442272727267 msec\nrounds: 11"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.424740775539588,
            "unit": "iter/sec",
            "range": "stddev: 0.051104846568333154",
            "extra": "mean: 701.8820666666699 msec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "801df0c0b90f09e910c7f822ae87e548446bce7a",
          "message": "Merge pull request #66 from giovannipizzi/fix_65_list_all\n\nAdding a function to list all objects",
          "timestamp": "2020-07-14T00:46:13+02:00",
          "tree_id": "0587cf74d5f99911d7ac55811765a11dfa23aeab",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/801df0c0b90f09e910c7f822ae87e548446bce7a"
        },
        "date": 1594680587709,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.2925971601787554,
            "unit": "iter/sec",
            "range": "stddev: 0.0683886346139719",
            "extra": "mean: 3.417668166666666 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.1606542337354805,
            "unit": "iter/sec",
            "range": "stddev: 0.03049931292362869",
            "extra": "mean: 6.224548066666667 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.607657700819507,
            "unit": "iter/sec",
            "range": "stddev: 0.00899931198720287",
            "extra": "mean: 277.1881600000029 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 12.125694953892173,
            "unit": "iter/sec",
            "range": "stddev: 0.005430917298002992",
            "extra": "mean: 82.46949999999913 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.4629776676946602,
            "unit": "iter/sec",
            "range": "stddev: 0.01431458986640771",
            "extra": "mean: 683.5374333333372 msec\nrounds: 3"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a256e013b16d6a7044f7584114e7261dba5d1f6",
          "message": "Merge pull request #71 from giovannipizzi/fix_69_efficient_list_all\n\nImprove performance of list_all_objects for packed objects",
          "timestamp": "2020-07-16T14:37:20+02:00",
          "tree_id": "4038bcb9cafb4dbb2cf25ee20ef0750f1bbf4912",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/5a256e013b16d6a7044f7584114e7261dba5d1f6"
        },
        "date": 1594903482045,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.23650757401315325,
            "unit": "iter/sec",
            "range": "stddev: 0.1539634472038429",
            "extra": "mean: 4.2281944 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.12422955058506593,
            "unit": "iter/sec",
            "range": "stddev: 0.2611997400619716",
            "extra": "mean: 8.049614566666664 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.0359281451669022,
            "unit": "iter/sec",
            "range": "stddev: 0.018146148049600387",
            "extra": "mean: 329.388560000001 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 8.530176940393774,
            "unit": "iter/sec",
            "range": "stddev: 0.007900130212115991",
            "extra": "mean: 117.23086250000314 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.2035996777722944,
            "unit": "iter/sec",
            "range": "stddev: 0.009726701900103309",
            "extra": "mean: 830.8410333333333 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3174785.285921935,
            "unit": "iter/sec",
            "range": "stddev: 6.039175731090999e-7",
            "extra": "mean: 314.9819310408545 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3257555.071848392,
            "unit": "iter/sec",
            "range": "stddev: 2.994646668671088e-7",
            "extra": "mean: 306.9786935121294 nsec\nrounds: 158731"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "32baa140c5860150a0891937b0e4a69aa88b05e7",
          "message": "Do not fail on benchmark test alert",
          "timestamp": "2020-07-16T23:04:29+02:00",
          "tree_id": "f3721560975ad665334615ba90b19359aacbc87d",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/32baa140c5860150a0891937b0e4a69aa88b05e7"
        },
        "date": 1594933827241,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.22533643179940516,
            "unit": "iter/sec",
            "range": "stddev: 0.0551085268916699",
            "extra": "mean: 4.4378088 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.1789242907032572,
            "unit": "iter/sec",
            "range": "stddev: 0.16703559035176724",
            "extra": "mean: 5.588956066666669 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.9684706854614333,
            "unit": "iter/sec",
            "range": "stddev: 0.014869774987703257",
            "extra": "mean: 336.87380000000076 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 8.811530504472318,
            "unit": "iter/sec",
            "range": "stddev: 0.004683711828676767",
            "extra": "mean: 113.48766249999898 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.0946020793061135,
            "unit": "iter/sec",
            "range": "stddev: 0.026272675099235563",
            "extra": "mean: 913.573999999997 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3051224.90517486,
            "unit": "iter/sec",
            "range": "stddev: 5.596392845415392e-7",
            "extra": "mean: 327.7372304820138 nsec\nrounds: 156251"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3058062.5571164875,
            "unit": "iter/sec",
            "range": "stddev: 4.5872185244643646e-7",
            "extra": "mean: 327.0044288899282 nsec\nrounds: 175439"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2815887c622e923ab8d6eac4370488df9be8166a",
          "message": "Merge pull request #74 from giovannipizzi/fix_hash_computation\n\nFix to the hash calculation when writing to compressed packs.",
          "timestamp": "2020-07-17T15:50:51+02:00",
          "tree_id": "84fff9b9c58f7df075b9377c35ae3974517e74ea",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/2815887c622e923ab8d6eac4370488df9be8166a"
        },
        "date": 1594994203616,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.27121225150358264,
            "unit": "iter/sec",
            "range": "stddev: 0.04832099673809808",
            "extra": "mean: 3.6871490666666666 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.15420144187600232,
            "unit": "iter/sec",
            "range": "stddev: 0.45190855995683693",
            "extra": "mean: 6.48502366666667 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.3980531058613477,
            "unit": "iter/sec",
            "range": "stddev: 0.013827746879478159",
            "extra": "mean: 294.2861599999972 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 12.078764414872749,
            "unit": "iter/sec",
            "range": "stddev: 0.006469250795760168",
            "extra": "mean: 82.78992500000133 msec\nrounds: 12"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.282923176379237,
            "unit": "iter/sec",
            "range": "stddev: 0.004742973732798335",
            "extra": "mean: 779.4698999999952 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3299688.437684369,
            "unit": "iter/sec",
            "range": "stddev: 7.726345146359184e-7",
            "extra": "mean: 303.05891567808357 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3383102.3277404504,
            "unit": "iter/sec",
            "range": "stddev: 2.1115328021021875e-7",
            "extra": "mean: 295.5866843873626 nsec\nrounds: 158731"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa85ce1b90b92989c15446fb1125e6c7840ad729",
          "message": "Merge pull request #77 from giovannipizzi/fix_37_concurrency_win\n\nFix concurrency problems on Windows",
          "timestamp": "2020-07-17T16:48:14+02:00",
          "tree_id": "45fabeaefc37015b298754e3beaf07326d2b02f2",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/fa85ce1b90b92989c15446fb1125e6c7840ad729"
        },
        "date": 1594997718877,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.25349135759239994,
            "unit": "iter/sec",
            "range": "stddev: 0.01975135043138482",
            "extra": "mean: 3.944907666666666 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.15126051818374536,
            "unit": "iter/sec",
            "range": "stddev: 0.25935645451079326",
            "extra": "mean: 6.6111105000000014 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.480344476143429,
            "unit": "iter/sec",
            "range": "stddev: 0.017798942334083377",
            "extra": "mean: 287.3278799999994 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 9.298467798475956,
            "unit": "iter/sec",
            "range": "stddev: 0.007157536465853204",
            "extra": "mean: 107.54460000000243 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.2523288097825225,
            "unit": "iter/sec",
            "range": "stddev: 0.00399264637844847",
            "extra": "mean: 798.5123333333348 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3310732.454781473,
            "unit": "iter/sec",
            "range": "stddev: 8.729310952352881e-7",
            "extra": "mean: 302.04796481071025 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3230678.442494244,
            "unit": "iter/sec",
            "range": "stddev: 7.017822297166999e-7",
            "extra": "mean: 309.5325077378457 nsec\nrounds: 58140"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6dea94015bf141e31781e4ea61f169d2b69e6b81",
          "message": "Merge pull request #75 from giovannipizzi/fix_64_export_to_container\n\nAdding a function to export directly a set of hash keys to a new container",
          "timestamp": "2020-07-17T17:16:12+02:00",
          "tree_id": "9d5cf808e9c4e748164afb805c1fb170f183c957",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/6dea94015bf141e31781e4ea61f169d2b69e6b81"
        },
        "date": 1594999336515,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.27824735367984954,
            "unit": "iter/sec",
            "range": "stddev: 0.05755828558394887",
            "extra": "mean: 3.593924566666667 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.16490464586738293,
            "unit": "iter/sec",
            "range": "stddev: 0.2185194851573727",
            "extra": "mean: 6.064110533333333 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 4.030881063533435,
            "unit": "iter/sec",
            "range": "stddev: 0.013215264747893479",
            "extra": "mean: 248.08472000000137 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 10.456143448993625,
            "unit": "iter/sec",
            "range": "stddev: 0.004884443205249964",
            "extra": "mean: 95.63755555555689 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.357739945913072,
            "unit": "iter/sec",
            "range": "stddev: 0.006564129071195798",
            "extra": "mean: 736.5180666666665 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3985254.5863233935,
            "unit": "iter/sec",
            "range": "stddev: 1.8402361111687316e-7",
            "extra": "mean: 250.92499822507173 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 4070469.638424939,
            "unit": "iter/sec",
            "range": "stddev: 0.00000139729764297525",
            "extra": "mean: 245.67189755188338 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "38bfa5ed21e99016756308569337be1cdeaeb311",
          "message": "Merge pull request #68 from sphuber/feature/067/packed-object-reader-seek-whence\n\nImplement `whence=1` for the `utils.PackedObjectReader.seek`",
          "timestamp": "2020-07-17T18:20:39+02:00",
          "tree_id": "57f4997cbdc791e0a32f9905fa065586842a7ad8",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/38bfa5ed21e99016756308569337be1cdeaeb311"
        },
        "date": 1595003273816,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.27035320294198356,
            "unit": "iter/sec",
            "range": "stddev: 0.02458889321482366",
            "extra": "mean: 3.6988649999999996 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.11327974826158727,
            "unit": "iter/sec",
            "range": "stddev: 0.6196784334064309",
            "extra": "mean: 8.827703233333333 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.2430164073929344,
            "unit": "iter/sec",
            "range": "stddev: 0.009846717065353486",
            "extra": "mean: 308.35489999999766 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 11.95029537545074,
            "unit": "iter/sec",
            "range": "stddev: 0.0031882838630742385",
            "extra": "mean: 83.67994000000039 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.3373420309304045,
            "unit": "iter/sec",
            "range": "stddev: 0.01253124203752816",
            "extra": "mean: 747.7518666666659 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3366413.32770417,
            "unit": "iter/sec",
            "range": "stddev: 2.2337903091145484e-7",
            "extra": "mean: 297.0520558989555 nsec\nrounds: 166667"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3323715.298983836,
            "unit": "iter/sec",
            "range": "stddev: 6.221999143679388e-7",
            "extra": "mean: 300.86812799700056 nsec\nrounds: 156250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "dbefa5af8e4b59d8b7e35f67f4597025e7f2b60d",
          "message": "Avoid seeking back to zero for compressed streams when seeking forward\n\nFixes #81",
          "timestamp": "2020-07-17T18:31:03+02:00",
          "tree_id": "01ba21f85aaef7d3d3d31955b500af91455036bd",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/dbefa5af8e4b59d8b7e35f67f4597025e7f2b60d"
        },
        "date": 1595003862183,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.24675193640432735,
            "unit": "iter/sec",
            "range": "stddev: 0.010301920946599381",
            "extra": "mean: 4.0526531 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.14655887671649023,
            "unit": "iter/sec",
            "range": "stddev: 0.04931564490696668",
            "extra": "mean: 6.8231964000000005 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.2964789187865766,
            "unit": "iter/sec",
            "range": "stddev: 0.014811255540195816",
            "extra": "mean: 303.35397999999856 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 9.149680190084617,
            "unit": "iter/sec",
            "range": "stddev: 0.0041276459299075105",
            "extra": "mean: 109.29343749999987 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.1606573375093296,
            "unit": "iter/sec",
            "range": "stddev: 0.020404550937060235",
            "extra": "mean: 861.5807333333313 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3451658.328169231,
            "unit": "iter/sec",
            "range": "stddev: 2.0660264109258976e-7",
            "extra": "mean: 289.71581336398816 nsec\nrounds: 42736"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3399961.6465860917,
            "unit": "iter/sec",
            "range": "stddev: 4.7144450646644154e-7",
            "extra": "mean: 294.1209648657532 nsec\nrounds: 185186"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ddc612b9ceaf7f67711f7079d0f584ead8147507",
          "message": "Merge pull request #84 from giovannipizzi/fix_13_validation\n\nImplement validation routine",
          "timestamp": "2020-07-19T23:21:12+02:00",
          "tree_id": "d7baf41d8de602432d63610a50939df2fde3d94c",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/ddc612b9ceaf7f67711f7079d0f584ead8147507"
        },
        "date": 1595194115918,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.2321869194480499,
            "unit": "iter/sec",
            "range": "stddev: 0.05066040939178553",
            "extra": "mean: 4.3068748333333335 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.13294468520406888,
            "unit": "iter/sec",
            "range": "stddev: 0.877942434225952",
            "extra": "mean: 7.521925366666665 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.885805335346148,
            "unit": "iter/sec",
            "range": "stddev: 0.010685990653753757",
            "extra": "mean: 346.52372000000184 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 8.453902717771333,
            "unit": "iter/sec",
            "range": "stddev: 0.007355660480967192",
            "extra": "mean: 118.2885624999983 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.0353920470570446,
            "unit": "iter/sec",
            "range": "stddev: 0.01619214279344707",
            "extra": "mean: 965.8177333333384 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2920287.5964954454,
            "unit": "iter/sec",
            "range": "stddev: 9.147619440608881e-7",
            "extra": "mean: 342.4320266266912 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2926321.7045649514,
            "unit": "iter/sec",
            "range": "stddev: 7.159989387236381e-7",
            "extra": "mean: 341.72592795962953 nsec\nrounds: 163935"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "89a6ea1a6c87895d4cbb0c1e2c869225c31fb707",
          "message": "Adding nodes on performance for validation",
          "timestamp": "2020-07-20T14:06:57+02:00",
          "tree_id": "a1c4c31f0e67410babd839471c3349dc89f24c78",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/89a6ea1a6c87895d4cbb0c1e2c869225c31fb707"
        },
        "date": 1595247215772,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.2430113421169729,
            "unit": "iter/sec",
            "range": "stddev: 0.04838780588974285",
            "extra": "mean: 4.115034266666666 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.15144460357065484,
            "unit": "iter/sec",
            "range": "stddev: 0.12611220552258304",
            "extra": "mean: 6.603074500000001 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.1791437993502507,
            "unit": "iter/sec",
            "range": "stddev: 0.01964324592563476",
            "extra": "mean: 314.5500999999996 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 8.912223069378445,
            "unit": "iter/sec",
            "range": "stddev: 0.004972688907856601",
            "extra": "mean: 112.20545000000115 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.1559368434639892,
            "unit": "iter/sec",
            "range": "stddev: 0.00218719107608527",
            "extra": "mean: 865.0991666666717 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3491768.5985262,
            "unit": "iter/sec",
            "range": "stddev: 7.717337179248842e-7",
            "extra": "mean: 286.38782089434216 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3566420.566397539,
            "unit": "iter/sec",
            "range": "stddev: 8.574137179234145e-7",
            "extra": "mean: 280.3931789263142 nsec\nrounds: 188680"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d41ef638da9ca6958401ce010332e42cf4f988e4",
          "message": "Merge pull request #87 from giovannipizzi/fix_5_delete\n\nImplement function `delete_objects` for object deletion",
          "timestamp": "2020-07-20T14:40:53+02:00",
          "tree_id": "909ea5614905a444fc80d603a21b439da060a5a4",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/d41ef638da9ca6958401ce010332e42cf4f988e4"
        },
        "date": 1595249213562,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.2541795096865397,
            "unit": "iter/sec",
            "range": "stddev: 0.0770196950404459",
            "extra": "mean: 3.9342274333333327 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.16921944159456973,
            "unit": "iter/sec",
            "range": "stddev: 0.08368936230396185",
            "extra": "mean: 5.909486466666665 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.057297484767473,
            "unit": "iter/sec",
            "range": "stddev: 0.008419230545185157",
            "extra": "mean: 327.0862600000001 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 8.858388473110631,
            "unit": "iter/sec",
            "range": "stddev: 0.004402470283506392",
            "extra": "mean: 112.88734999999939 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.17093431893737,
            "unit": "iter/sec",
            "range": "stddev: 0.004479320870773085",
            "extra": "mean: 854.0188666666685 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3507684.745768682,
            "unit": "iter/sec",
            "range": "stddev: 2.7701174928292844e-7",
            "extra": "mean: 285.0883338948699 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3413328.498228248,
            "unit": "iter/sec",
            "range": "stddev: 3.533597910401256e-7",
            "extra": "mean: 292.9691650006931 nsec\nrounds: 156251"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "3f3cd07ea6627bbf6d0637e69e409ef4801b4f90",
          "message": "Adding nightly concurrency extensive tests\n\nThis runs only the main branch of the main fork, at 5AM UTC.\nTests are repeated 5 times to increase the change of seeing random errors.\n\nFixes #76",
          "timestamp": "2020-07-20T14:51:14+02:00",
          "tree_id": "01658224411ac3acb670ee1ef1e9d5081979f9ee",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/3f3cd07ea6627bbf6d0637e69e409ef4801b4f90"
        },
        "date": 1595249962430,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.26236016334473805,
            "unit": "iter/sec",
            "range": "stddev: 0.015214992708619021",
            "extra": "mean: 3.811554266666667 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.12245047998506495,
            "unit": "iter/sec",
            "range": "stddev: 2.1062737060495547",
            "extra": "mean: 8.166566600000001 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.1508809421991537,
            "unit": "iter/sec",
            "range": "stddev: 0.008894274578793231",
            "extra": "mean: 317.37155999999516 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 11.005342971731432,
            "unit": "iter/sec",
            "range": "stddev: 0.003602992885821137",
            "extra": "mean: 90.86495555555354 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.288737848813014,
            "unit": "iter/sec",
            "range": "stddev: 0.016016180518770486",
            "extra": "mean: 775.9529999999965 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2005744.1118593512,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011899466121932702",
            "extra": "mean: 498.5680845763455 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3284171.268013898,
            "unit": "iter/sec",
            "range": "stddev: 8.710337049285508e-7",
            "extra": "mean: 304.49081926352255 nsec\nrounds: 156251"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5d977ad3ce8d4eba5ba70dfd0919282c2505e3b1",
          "message": "Merge pull request #88 from giovannipizzi/fix_78_loose_streamed\n\nAdding `add_streamed_object` function",
          "timestamp": "2020-07-20T15:47:49+02:00",
          "tree_id": "4864b702ab018ce6fa9ac195aca677f776b5bbff",
          "url": "https://github.com/giovannipizzi/disk-objectstore/commit/5d977ad3ce8d4eba5ba70dfd0919282c2505e3b1"
        },
        "date": 1595253394386,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.27257584445586647,
            "unit": "iter/sec",
            "range": "stddev: 0.010843486243978124",
            "extra": "mean: 3.668703666666666 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.06420825665529815,
            "unit": "iter/sec",
            "range": "stddev: 8.27453224706836",
            "extra": "mean: 15.574321000000003 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.078635366550364,
            "unit": "iter/sec",
            "range": "stddev: 0.008790803537955826",
            "extra": "mean: 324.8192399999965 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 11.005234639856775,
            "unit": "iter/sec",
            "range": "stddev: 0.003335631275673855",
            "extra": "mean: 90.8658499999973 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.2887140438042526,
            "unit": "iter/sec",
            "range": "stddev: 0.0011969267577212762",
            "extra": "mean: 775.9673333333316 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3237478.0073088994,
            "unit": "iter/sec",
            "range": "stddev: 3.3455117602453353e-7",
            "extra": "mean: 308.8824071521331 nsec\nrounds: 156251"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 1959702.6345570963,
            "unit": "iter/sec",
            "range": "stddev: 0.000001970804800381522",
            "extra": "mean: 510.2815000429928 nsec\nrounds: 200000"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "1589096795f049b538222474b724e0d1298a4b49",
          "message": "Complete move to aiidateam organisation\n\nFixes #80",
          "timestamp": "2020-07-20T17:02:04+02:00",
          "tree_id": "e54abe7df4b0f77aefb62e2a5ad6a6b7578e733a",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/1589096795f049b538222474b724e0d1298a4b49"
        },
        "date": 1595257749296,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.2629264687041867,
            "unit": "iter/sec",
            "range": "stddev: 0.017950015157190115",
            "extra": "mean: 3.8033447333333337 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.15033671063417445,
            "unit": "iter/sec",
            "range": "stddev: 0.6143148031497718",
            "extra": "mean: 6.651735266666667 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.988124833337356,
            "unit": "iter/sec",
            "range": "stddev: 0.024224097714220755",
            "extra": "mean: 334.6580399999979 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 11.171092984702819,
            "unit": "iter/sec",
            "range": "stddev: 0.0023490445254988686",
            "extra": "mean: 89.51675555555344 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.283834385364275,
            "unit": "iter/sec",
            "range": "stddev: 0.019267300657159973",
            "extra": "mean: 778.9166666666745 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3214505.1981661976,
            "unit": "iter/sec",
            "range": "stddev: 2.973755896738437e-7",
            "extra": "mean: 311.08986868962256 nsec\nrounds: 147059"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3191673.961511389,
            "unit": "iter/sec",
            "range": "stddev: 2.6017325955302145e-7",
            "extra": "mean: 313.31521078240127 nsec\nrounds: 156251"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "11cc7cbf88b964e48ac44f5de59ef09bc6bdb745",
          "message": "Adding simple changelog",
          "timestamp": "2020-07-20T17:41:58+02:00",
          "tree_id": "c53c9f1eed85787028f0bcbc6f537bb2915cc518",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/11cc7cbf88b964e48ac44f5de59ef09bc6bdb745"
        },
        "date": 1595260120398,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.2694764775375052,
            "unit": "iter/sec",
            "range": "stddev: 0.016824151694018217",
            "extra": "mean: 3.7108990333333343 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.1541563733886882,
            "unit": "iter/sec",
            "range": "stddev: 0.21026475008372209",
            "extra": "mean: 6.4869196 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.0172099847202345,
            "unit": "iter/sec",
            "range": "stddev: 0.009271591526647735",
            "extra": "mean: 331.43202000000116 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 11.050991262865336,
            "unit": "iter/sec",
            "range": "stddev: 0.00489174989385169",
            "extra": "mean: 90.4896199999996 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.2873284484654175,
            "unit": "iter/sec",
            "range": "stddev: 0.015334894740540759",
            "extra": "mean: 776.8025333333289 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1975614.4656019493,
            "unit": "iter/sec",
            "range": "stddev: 0.000002232566830587144",
            "extra": "mean: 506.17163288248673 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3221907.942839907,
            "unit": "iter/sec",
            "range": "stddev: 1.8639822753570729e-7",
            "extra": "mean: 310.37510001561185 nsec\nrounds: 158731"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "1e0ba2e2cec56c81f871ff8d72c15d7688ee8f0a",
          "message": "Change the default value of `compress` for export\n\nFor some reason it was True, but this is unexpected.\nSetting back to False.",
          "timestamp": "2020-07-20T17:51:03+02:00",
          "tree_id": "454bf54a8a996bc894244547a4ebd6dbfa0a7bdb",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/1e0ba2e2cec56c81f871ff8d72c15d7688ee8f0a"
        },
        "date": 1595260707288,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.2275064470587379,
            "unit": "iter/sec",
            "range": "stddev: 0.06963995566270392",
            "extra": "mean: 4.395479833333333 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.17497474458280374,
            "unit": "iter/sec",
            "range": "stddev: 0.24647119155676156",
            "extra": "mean: 5.7151105000000015 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.8868495285688045,
            "unit": "iter/sec",
            "range": "stddev: 0.013223110291155015",
            "extra": "mean: 346.3983800000008 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 8.268639839753623,
            "unit": "iter/sec",
            "range": "stddev: 0.0060562819255827365",
            "extra": "mean: 120.938875000002 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.09223979644146,
            "unit": "iter/sec",
            "range": "stddev: 0.01340348925366441",
            "extra": "mean: 915.5498666666612 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1850549.8108013223,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014308587590534244",
            "extra": "mean: 540.3799423085951 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3276520.7355289217,
            "unit": "iter/sec",
            "range": "stddev: 8.585257540847171e-7",
            "extra": "mean: 305.20179199727863 nsec\nrounds: 156250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "9dd029d81a791f0fa3324209fa7edfd015796aa8",
          "message": "Removing the 'OS-independent' flag\n\nThis is not really true, it actually is OS dependent,\nand I tested the three most common ones",
          "timestamp": "2020-07-20T18:33:16+02:00",
          "tree_id": "da603cd023341129a9ef4d74d860764b02631c3f",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/9dd029d81a791f0fa3324209fa7edfd015796aa8"
        },
        "date": 1595263264865,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.21699777573663234,
            "unit": "iter/sec",
            "range": "stddev: 0.46555264066412905",
            "extra": "mean: 4.6083421666666675 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.13108908986273782,
            "unit": "iter/sec",
            "range": "stddev: 1.4694158377960351",
            "extra": "mean: 7.628399899999998 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.1080958437298984,
            "unit": "iter/sec",
            "range": "stddev: 0.00901436713446768",
            "extra": "mean: 321.7404000000016 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 8.540011394510248,
            "unit": "iter/sec",
            "range": "stddev: 0.004897669049639919",
            "extra": "mean: 117.09586249999937 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.093435802361177,
            "unit": "iter/sec",
            "range": "stddev: 0.02036881786316669",
            "extra": "mean: 914.5484333333419 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3244728.4788469253,
            "unit": "iter/sec",
            "range": "stddev: 6.311317304848863e-7",
            "extra": "mean: 308.19219744242264 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3504962.483172947,
            "unit": "iter/sec",
            "range": "stddev: 2.924390807867104e-7",
            "extra": "mean: 285.3097586067027 nsec\nrounds: 181819"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "51e6a578fc55c3c0eca18bb4351cb5ae1dcdb00f",
          "message": "Explicitly specifying the codecov token",
          "timestamp": "2020-07-20T18:59:40+02:00",
          "tree_id": "b5c97bfa36b46639cdf390220798c072fbc6826a",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/51e6a578fc55c3c0eca18bb4351cb5ae1dcdb00f"
        },
        "date": 1595264818279,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.22617482498233932,
            "unit": "iter/sec",
            "range": "stddev: 0.02143558583858539",
            "extra": "mean: 4.421358566666667 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.0827656878519616,
            "unit": "iter/sec",
            "range": "stddev: 7.892825477577552",
            "extra": "mean: 12.082301566666667 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.947732400843747,
            "unit": "iter/sec",
            "range": "stddev: 0.016473669968685618",
            "extra": "mean: 339.24381999999866 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 8.54791173981969,
            "unit": "iter/sec",
            "range": "stddev: 0.001988129635715914",
            "extra": "mean: 116.98763749999763 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.0781861028280428,
            "unit": "iter/sec",
            "range": "stddev: 0.005320569670943392",
            "extra": "mean: 927.4836666666696 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3038307.70932304,
            "unit": "iter/sec",
            "range": "stddev: 2.4671705676380486e-7",
            "extra": "mean: 329.1305870474523 nsec\nrounds: 147059"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3011642.766221027,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011061345782231247",
            "extra": "mean: 332.0446937520855 nsec\nrounds: 153847"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "48fe289e87e457a1390b6d3dd6942d0b16064a32",
          "message": "Moving the env to the right place",
          "timestamp": "2020-07-20T19:06:51+02:00",
          "tree_id": "a629875f497fff991502bc56fb3979d157cf13b4",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/48fe289e87e457a1390b6d3dd6942d0b16064a32"
        },
        "date": 1595265267689,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.27113375065878725,
            "unit": "iter/sec",
            "range": "stddev: 0.0267530111503356",
            "extra": "mean: 3.6882166 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.11084531185351205,
            "unit": "iter/sec",
            "range": "stddev: 0.22244694916663493",
            "extra": "mean: 9.021581366666664 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.119239738964527,
            "unit": "iter/sec",
            "range": "stddev: 0.012460276953507314",
            "extra": "mean: 320.59094000000243 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 11.516521089309117,
            "unit": "iter/sec",
            "range": "stddev: 0.003319342350817973",
            "extra": "mean: 86.83177777777946 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.3037312745620195,
            "unit": "iter/sec",
            "range": "stddev: 0.008680356380540264",
            "extra": "mean: 767.029233333337 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3185321.569969749,
            "unit": "iter/sec",
            "range": "stddev: 7.979842041227921e-7",
            "extra": "mean: 313.94004593698145 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3050371.6178298513,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014562039908364605",
            "extra": "mean: 327.8289091580143 nsec\nrounds: 151516"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gio.piz@gmail.com",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9aa52ca307119522cbcb110a505b77c6b7562513",
          "message": "Merge pull request #91 from giovannipizzi/test-codecov\n\nTesting Codecov after moving the repo",
          "timestamp": "2020-07-20T19:40:16+02:00",
          "tree_id": "da603cd023341129a9ef4d74d860764b02631c3f",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/9aa52ca307119522cbcb110a505b77c6b7562513"
        },
        "date": 1595267221111,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.28324662225806535,
            "unit": "iter/sec",
            "range": "stddev: 0.016253309212691098",
            "extra": "mean: 3.5304922333333324 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.10892668804723271,
            "unit": "iter/sec",
            "range": "stddev: 0.2473009742963626",
            "extra": "mean: 9.1804866 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.2619952372260523,
            "unit": "iter/sec",
            "range": "stddev: 0.008851564401450983",
            "extra": "mean: 306.5608399999945 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 11.89545229721349,
            "unit": "iter/sec",
            "range": "stddev: 0.003851142659061087",
            "extra": "mean: 84.06574000000404 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.34279574639904,
            "unit": "iter/sec",
            "range": "stddev: 0.011365657899121707",
            "extra": "mean: 744.7149000000101 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3230558.57673033,
            "unit": "iter/sec",
            "range": "stddev: 6.948993874739497e-7",
            "extra": "mean: 309.54399254745016 nsec\nrounds: 147059"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2986697.023272517,
            "unit": "iter/sec",
            "range": "stddev: 0.000004162817008072879",
            "extra": "mean: 334.81802546672736 nsec\nrounds: 158731"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gio.piz@gmail.com",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "c718ffdec3881653acb82beaeed69fadf3cd9e3d",
          "message": "Merge pull request #90 from aiidateam/develop\n\nRelease of version 0.4.0",
          "timestamp": "2020-07-20T19:46:14+02:00",
          "tree_id": "da603cd023341129a9ef4d74d860764b02631c3f",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/c718ffdec3881653acb82beaeed69fadf3cd9e3d"
        },
        "date": 1595267661335,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.2866759689196235,
            "unit": "iter/sec",
            "range": "stddev: 0.0297901905418546",
            "extra": "mean: 3.4882589 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.15622372756281633,
            "unit": "iter/sec",
            "range": "stddev: 0.11093508379755729",
            "extra": "mean: 6.401076299999997 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 3.3663745237085143,
            "unit": "iter/sec",
            "range": "stddev: 0.015179690088140144",
            "extra": "mean: 297.0554799999988 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 11.808685130464019,
            "unit": "iter/sec",
            "range": "stddev: 0.0049940728440355355",
            "extra": "mean: 84.6834333333355 msec\nrounds: 12"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.3298744775809734,
            "unit": "iter/sec",
            "range": "stddev: 0.015599704359487706",
            "extra": "mean: 751.9506666666681 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3306579.140169693,
            "unit": "iter/sec",
            "range": "stddev: 6.882692770805267e-7",
            "extra": "mean: 302.42736000206605 nsec\nrounds: 156250"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3364441.444432534,
            "unit": "iter/sec",
            "range": "stddev: 6.91872185919897e-7",
            "extra": "mean: 297.22615670848666 nsec\nrounds: 163935"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gio.piz@gmail.com",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e7e3627a67e8de2030b231927a127a9fb06ae474",
          "message": "Merge pull request #95 from giovannipizzi/fix_missing_optional_deps\n\nAdding missing optional dev dependencies",
          "timestamp": "2020-08-26T23:34:55+02:00",
          "tree_id": "397da3027d0c56b27a27da2ce3509320aadc032e",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/e7e3627a67e8de2030b231927a127a9fb06ae474"
        },
        "date": 1598478087395,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.22952341650685584,
            "unit": "iter/sec",
            "range": "stddev: 0.029430953074329143",
            "extra": "mean: 4.356853933333334 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.13826753443309825,
            "unit": "iter/sec",
            "range": "stddev: 0.1946169942027011",
            "extra": "mean: 7.232355766666667 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 2.9295310676183965,
            "unit": "iter/sec",
            "range": "stddev: 0.0201026605664022",
            "extra": "mean: 341.35155999999824 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 8.710808981541097,
            "unit": "iter/sec",
            "range": "stddev: 0.003914249332883107",
            "extra": "mean: 114.79989999999773 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.1270875351782779,
            "unit": "iter/sec",
            "range": "stddev: 0.012331810091923882",
            "extra": "mean: 887.2425333333354 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3009310.5063548596,
            "unit": "iter/sec",
            "range": "stddev: 4.3523176534932423e-7",
            "extra": "mean: 332.3020332689822 nsec\nrounds: 156251"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3006159.7936800066,
            "unit": "iter/sec",
            "range": "stddev: 3.4026649937399424e-7",
            "extra": "mean: 332.6503142320557 nsec\nrounds: 149254"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "64326c7e9778b6af1cc142a1f48a526a5bf7ee2e",
          "message": "🔀👌 Efficiency improvements  (#96)\n\nThis merge collects a number of important efficiency improvements, and a few features that were tightly bound to these efficiency changes, so they are shipped together.\r\n\r\nIn particular:\r\n\r\n- objects are now sorted and returned in the order in which they are on disk, with an important performance benefit. Fixes #92 \r\n- When there are many objects to list (currently set to 9500 objects, 10x the ones we could fit in a single IN SQL statement), performing many queries is slow, so we just resort to listing all objects and doing an efficient intersection (if the hash keys are sorted, both iterators can be looped over only once - fixes #93)\r\n- Since VACUUMing the DB is very important for efficiency, when the DB does not fit fully in the disk cache, `clean_storage` now provides an option to VACUUM the DB. VACUUM is also called after repacking. Fixes #94 \r\n- We implement now a function to perform a full repack of the repository (fixes #12). This is important and needed to reclaim space after deleting an object\r\n- For efficiency, we have moved the logic from an `export` function (still existing but deprecated) to a `import_objects` function\r\n- Still for efficiency, now functions like `pack_all_loose` and `import_objects` provide an option to perform a fsync to disk or not (see also #54 - there are still however calls that always use - or don't use - fsync and full_fsync on Mac). Also, `add_objects_to_pack` allows now to choose if you want to commit the changes to the SQLite DB, or not (delegating the responsibility to the caller, but this is important e.g. in `import_objects`: calling `commit` only once at the very end gives a factor of 2 speedup for very big repos).\r\n- A number of functions, including (but not exclusively) `import_objects` provide a callback to e.g. show a progress bar.\r\n- a `CallbackStreamWrapper` has been implemented, allowing to provide a callback (e.g. for a progress bar) when streaming a big file.\r\n- a new hash algorithm is now supported (`sha1`) in addition to the default `sha256` (fixes #82). This is faster even if a bit less robust. This was also needed to test completely some feature in `import_objects`, where the logic is optimised if both containers use the same algorithm. By default is still better to use everywhere sha256, also because then all export files that will be generated will use this algorithm and importing will be more efficient.\r\n- tests have been added for all new functionality, achieving again 100% coverage\r\n\r\nAs a reference, with these changes, exporting the full large SDB database (6.8M nodes) takes ~ 50 minutes:\r\n```\r\n6714808it [00:24, 274813.02it/s]\r\nAll hashkeys listed in 24.444787740707397s.\r\nListing objects: 100%|████████| 6714808/6714808 [00:06<00:00, 978896.65it/s]\r\nCopy objects: 100%|███████████| 6714808/6714808 [48:15<00:00, 2319.08it/s]\r\nFinal flush: 100%|████████████| 63236/63236 [00:07<00:00, 8582.35it/s]\r\nEverything re-exported in 2960.980943918228s.\r\n```\r\n\r\nThis can be compared to:\r\n\r\n- ~10 minutes to copy the whole 90GB, or ~15 minutes to read all and validate the packs. We will never be able to be faster than just copying the pack files, and we are only 3x slower.\r\n- ~2 days to just list all files in the old legacy AiiDA repo (or all objects if they are loose), and this does not take into account the time to rewrite everything, probably comparable. So we are almost 2 orders of magnitude faster than before.",
          "timestamp": "2020-10-02T05:02:23+01:00",
          "tree_id": "a1e5eacb37c751b57ede7818ed3ea30ccd868aa0",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/64326c7e9778b6af1cc142a1f48a526a5bf7ee2e"
        },
        "date": 1601611679662,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.3490521289931268,
            "unit": "iter/sec",
            "range": "stddev: 0.05475541885083089",
            "extra": "mean: 741.2611999999999 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.11850782999008924,
            "unit": "iter/sec",
            "range": "stddev: 0.7265856449270872",
            "extra": "mean: 8.438260999999995 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 8.310240387207243,
            "unit": "iter/sec",
            "range": "stddev: 0.008169291224180832",
            "extra": "mean: 120.33346250000143 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 13.709983984245751,
            "unit": "iter/sec",
            "range": "stddev: 0.005071823164774853",
            "extra": "mean: 72.93954545454669 msec\nrounds: 11"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.352573990412502,
            "unit": "iter/sec",
            "range": "stddev: 0.014945327397664207",
            "extra": "mean: 425.0663333333288 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3685640.4593223464,
            "unit": "iter/sec",
            "range": "stddev: 1.4006334671080455e-7",
            "extra": "mean: 271.3232641755691 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3571243.358787849,
            "unit": "iter/sec",
            "range": "stddev: 1.422503370532878e-7",
            "extra": "mean: 280.01452142413143 nsec\nrounds: 158731"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gio.piz@gmail.com",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d7c389c353185c1923c9addb1b107c283d5f561",
          "message": "✨ Add the concept of a (unique) container ID (#97)\n\nAllows for the association of a container with an existing DB, or to uniquely refer to it.\r\n\r\n🐛 This also fixes a bug, whereby config values were cached, but the cache was not cleared when re-initialising the container.\r\nTo reduce the risk of such a problem, now only the whole configuration dictionary is cached, rather than each single config value.",
          "timestamp": "2020-10-02T05:26:39+01:00",
          "tree_id": "cf46e923be5370049e00e368fe2b9cf6f18ef6d3",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/1d7c389c353185c1923c9addb1b107c283d5f561"
        },
        "date": 1601613265915,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.15813210478322423,
            "unit": "iter/sec",
            "range": "stddev: 0.05826465848362362",
            "extra": "mean: 6.3238265333333326 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.142047397608578,
            "unit": "iter/sec",
            "range": "stddev: 0.00874524408979022",
            "extra": "mean: 7.0399037000000035 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 8.08036406888356,
            "unit": "iter/sec",
            "range": "stddev: 0.00888086926231448",
            "extra": "mean: 123.75679999999889 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 1.0896656674723078,
            "unit": "iter/sec",
            "range": "stddev: 0.00566485253973726",
            "extra": "mean: 917.7126799999996 msec\nrounds: 5"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 0.12159347519684624,
            "unit": "iter/sec",
            "range": "stddev: 0.08396803952273874",
            "extra": "mean: 8.224125499999994 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3365052.5485358736,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011797341456384678",
            "extra": "mean: 297.17217950586013 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2656425.02047959,
            "unit": "iter/sec",
            "range": "stddev: 9.754785788472534e-7",
            "extra": "mean: 376.44578419889314 nsec\nrounds: 59881"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b84d6b00ad68bf8e58861c712c3cb9b6394abfd",
          "message": "🐛 Fix performance regression (#102)\n\n`Container.is_initialised` is a costly operation, loading the config JSON every time.\r\nIn 1d7c389, the config is now called on every call to `loose_prefix_len`, leading to a large performance degradation.\r\nThis PR makes sure the `is_initialised` test is called only if the config has not already been loaded into memory.",
          "timestamp": "2020-10-02T18:45:30+01:00",
          "tree_id": "3e63fef3df945593819e81391c96d674c2e19225",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/1b84d6b00ad68bf8e58861c712c3cb9b6394abfd"
        },
        "date": 1601661143170,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.860640722346086,
            "unit": "iter/sec",
            "range": "stddev: 0.04687555787959597",
            "extra": "mean: 1.1619250333333333 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.11374599970011248,
            "unit": "iter/sec",
            "range": "stddev: 0.2922286089153543",
            "extra": "mean: 8.791517966666666 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 6.8148109206371394,
            "unit": "iter/sec",
            "range": "stddev: 0.007764975348196765",
            "extra": "mean: 146.73921428571444 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 7.286078017137512,
            "unit": "iter/sec",
            "range": "stddev: 0.010808983514786302",
            "extra": "mean: 137.24805000000137 msec\nrounds: 6"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.5009346319953556,
            "unit": "iter/sec",
            "range": "stddev: 0.013042113157113646",
            "extra": "mean: 666.251533333328 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1801464.0572092365,
            "unit": "iter/sec",
            "range": "stddev: 0.000002572829534308776",
            "extra": "mean: 555.1040532827304 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2066525.7138530237,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011011192682512924",
            "extra": "mean: 483.9039714320837 nsec\nrounds: 178572"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gio.piz@gmail.com",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d786296bc67219512f4058265ffbd8c9e6f06b0a",
          "message": "✨ Generalize compression algorithm (#99)\n\nThe container configuration now accepts a variable for the compression algorithm to use.\r\nCurrently, the supported values are zlib, with levels from 1 to 9, but this can be expanded in the future.",
          "timestamp": "2020-10-04T11:31:10+01:00",
          "tree_id": "302c95715972bb03a6d7e329dad5995741db8395",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/d786296bc67219512f4058265ffbd8c9e6f06b0a"
        },
        "date": 1601807855565,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.1520147162967918,
            "unit": "iter/sec",
            "range": "stddev: 0.019804200525730033",
            "extra": "mean: 868.0444666666668 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.10547294172542625,
            "unit": "iter/sec",
            "range": "stddev: 0.12138301980616126",
            "extra": "mean: 9.481104666666665 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 6.897518735877944,
            "unit": "iter/sec",
            "range": "stddev: 0.011034289827127427",
            "extra": "mean: 144.97967142857146 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 9.860361261450842,
            "unit": "iter/sec",
            "range": "stddev: 0.004797606336180165",
            "extra": "mean: 101.41616249999963 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.8229005896961874,
            "unit": "iter/sec",
            "range": "stddev: 0.003117950070682194",
            "extra": "mean: 548.5762666666668 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3094997.280936908,
            "unit": "iter/sec",
            "range": "stddev: 1.9494930098499138e-7",
            "extra": "mean: 323.10206091580307 nsec\nrounds: 149254"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 1911951.429243788,
            "unit": "iter/sec",
            "range": "stddev: 7.36897536691017e-7",
            "extra": "mean: 523.0258387868768 nsec\nrounds: 68966"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@sphuber.net",
            "name": "Sebastiaan Huber",
            "username": "sphuber"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f4357b4e0a0347ffb6f8a66cb1d5da6de675cc7",
          "message": "Dependencies: set up limit for sqlalchemy dependency (#107)\n\nThe code is incompatible with `sqlalchemy==1.4` so for now we put an\r\nupper limit on the requirement `sqlalchemy<1.4`.",
          "timestamp": "2021-04-23T08:50:13+02:00",
          "tree_id": "b3147e700fe9ef371fe44e913d5b67680a93d08a",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/4f4357b4e0a0347ffb6f8a66cb1d5da6de675cc7"
        },
        "date": 1619160877081,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.8855895887962528,
            "unit": "iter/sec",
            "range": "stddev: 0.0202285672298691",
            "extra": "mean: 1.129191233333333 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.19358678722167685,
            "unit": "iter/sec",
            "range": "stddev: 0.15647343898058327",
            "extra": "mean: 5.165641800000001 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 6.653762170206331,
            "unit": "iter/sec",
            "range": "stddev: 0.0135319598654983",
            "extra": "mean: 150.2909142857131 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 8.285607371787755,
            "unit": "iter/sec",
            "range": "stddev: 0.0031228570254256903",
            "extra": "mean: 120.6912124999997 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.4150483505512534,
            "unit": "iter/sec",
            "range": "stddev: 0.020173152892233842",
            "extra": "mean: 706.6896333333309 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2015706.6131355523,
            "unit": "iter/sec",
            "range": "stddev: 0.00000212521909099602",
            "extra": "mean: 496.1039436411037 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3182532.780429039,
            "unit": "iter/sec",
            "range": "stddev: 7.179534674635456e-7",
            "extra": "mean: 314.2151452924051 nsec\nrounds: 161291"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a894a4f8befb5de0fe95979183b1cbb03f4ef13",
          "message": "Merge pull request #106 from aiidateam/fix/update-python-support\n\nPython support: remove 3.5 and add 3.9 support",
          "timestamp": "2021-04-23T15:33:19+02:00",
          "tree_id": "f577efcb13f4ee1f11313641f80fbf03890b9d37",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/7a894a4f8befb5de0fe95979183b1cbb03f4ef13"
        },
        "date": 1619185116222,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.138265790601666,
            "unit": "iter/sec",
            "range": "stddev: 0.008915103375919197",
            "extra": "mean: 878.5294333333331 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.19373665287655625,
            "unit": "iter/sec",
            "range": "stddev: 0.08970776729754142",
            "extra": "mean: 5.161645900000001 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 7.12935973715481,
            "unit": "iter/sec",
            "range": "stddev: 0.0087791078622575",
            "extra": "mean: 140.26504999999912 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 10.049388276986738,
            "unit": "iter/sec",
            "range": "stddev: 0.0036068558593713414",
            "extra": "mean: 99.50854444444307 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.8516130852015504,
            "unit": "iter/sec",
            "range": "stddev: 0.02072844550667635",
            "extra": "mean: 540.0696333333315 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1916680.025899422,
            "unit": "iter/sec",
            "range": "stddev: 5.606063072563075e-7",
            "extra": "mean: 521.7354939204 nsec\nrounds: 147059"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 1885488.7516722006,
            "unit": "iter/sec",
            "range": "stddev: 0.000005667488155037836",
            "extra": "mean: 530.3664628670529 nsec\nrounds: 178572"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a2561a40cf2e9a4d58325387f913ccf08111f5fd",
          "message": "Merge pull request #104 from giovannipizzi/master_in_dev\n\nMerge v0.5.0 in develop",
          "timestamp": "2021-04-23T16:22:25+02:00",
          "tree_id": "4beb6bcd4bfe656b36e0d022e991951f256753fd",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/a2561a40cf2e9a4d58325387f913ccf08111f5fd"
        },
        "date": 1619188037787,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.8404443092885482,
            "unit": "iter/sec",
            "range": "stddev: 0.018453769124310123",
            "extra": "mean: 1.1898468333333339 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.15783860611085418,
            "unit": "iter/sec",
            "range": "stddev: 0.12957922202378683",
            "extra": "mean: 6.335585600000002 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 6.8860347477182815,
            "unit": "iter/sec",
            "range": "stddev: 0.009769413198663144",
            "extra": "mean: 145.22145714285782 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 7.859965948381809,
            "unit": "iter/sec",
            "range": "stddev: 0.00726974383900434",
            "extra": "mean: 127.22701428571423 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.4773262187929028,
            "unit": "iter/sec",
            "range": "stddev: 0.020323205017014682",
            "extra": "mean: 676.8985666666651 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2094334.7980066123,
            "unit": "iter/sec",
            "range": "stddev: 0.000001103722618665446",
            "extra": "mean: 477.4785774231512 nsec\nrounds: 45046"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2004380.4481194394,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014423394522687615",
            "extra": "mean: 498.9072812689953 nsec\nrounds: 172414"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2cb284157df3cc9bc5a3ae92da6aebbacbda5623",
          "message": "🔧 MAINTAIN: Improve repo configuration (#112)\n\n- Move config to `setup.cfg` and `pyproject.toml`\r\n- Add `Manifest.in`, `tox.ini`\r\n- Replace `requirements.txt`/`dev-requirements.txt with `requirements.lock`\r\n- Move from yapf to black code formatting\r\n- Add more pre-commit hooks\r\n- Update pylint version and fix new failures\r\n- Drop python 3.6",
          "timestamp": "2021-08-30T16:07:48+02:00",
          "tree_id": "3e95e7e154b9b51de8f0ec0458d0ae1a6a26ba51",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/2cb284157df3cc9bc5a3ae92da6aebbacbda5623"
        },
        "date": 1630332772105,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.1139734038849822,
            "unit": "iter/sec",
            "range": "stddev: 0.00840065488697127",
            "extra": "mean: 897.6875 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.156828525728739,
            "unit": "iter/sec",
            "range": "stddev: 0.13021993414178143",
            "extra": "mean: 6.376391000000001 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 7.288896126878425,
            "unit": "iter/sec",
            "range": "stddev: 0.00903775994710011",
            "extra": "mean: 137.194985714286 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 10.048331357347486,
            "unit": "iter/sec",
            "range": "stddev: 0.005279700985956113",
            "extra": "mean: 99.51901111111204 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.8507088677640986,
            "unit": "iter/sec",
            "range": "stddev: 0.011789407619129428",
            "extra": "mean: 540.3334999999933 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3066204.095693729,
            "unit": "iter/sec",
            "range": "stddev: 1.658654076057694e-7",
            "extra": "mean: 326.1361503642205 nsec\nrounds: 144928"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3085296.552789979,
            "unit": "iter/sec",
            "range": "stddev: 3.0645837741369406e-7",
            "extra": "mean: 324.11795199912376 nsec\nrounds: 78125"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2d2d32c14fb4f5a0068fbbe49a16daf3285aeda8",
          "message": "🔧 MAINTAIN: Add contex manager methods",
          "timestamp": "2021-09-01T12:47:38+02:00",
          "tree_id": "8262168f13e44bf574c5f55ebddd2a609ade6203",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/2d2d32c14fb4f5a0068fbbe49a16daf3285aeda8"
        },
        "date": 1630493472819,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.3764944485520054,
            "unit": "iter/sec",
            "range": "stddev: 0.01954522700106945",
            "extra": "mean: 726.4831333333336 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.1982137374409298,
            "unit": "iter/sec",
            "range": "stddev: 0.22560382709614868",
            "extra": "mean: 5.045059000000001 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 9.17284296266122,
            "unit": "iter/sec",
            "range": "stddev: 0.006096573763621889",
            "extra": "mean: 109.01745555555446 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 12.820016754596423,
            "unit": "iter/sec",
            "range": "stddev: 0.002518744213221092",
            "extra": "mean: 78.0030181818183 msec\nrounds: 11"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.2651665928096723,
            "unit": "iter/sec",
            "range": "stddev: 0.010695095134846615",
            "extra": "mean: 441.4686333333293 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3858243.672495565,
            "unit": "iter/sec",
            "range": "stddev: 4.054285986708739e-8",
            "extra": "mean: 259.1852886662774 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3823722.114220448,
            "unit": "iter/sec",
            "range": "stddev: 2.7543324329050824e-8",
            "extra": "mean: 261.52528089876967 nsec\nrounds: 188680"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c0a67a33dbe0634005ee2d5789214808ee205b02",
          "message": "🔧 MAINTAIN: Add typing (#113)\n\nAdded type annotations to code base and mypy type checking.\r\n\r\nIt was found that there were some inconsistencies with classes\r\nlooking to implement subsets of the `BinaryIO` interface,\r\nwhich were fixed:\r\n\r\n- Remove `@property` from `seekable` method\r\n- Disallow mode in `LazyOpen` (should always be readable binary)\r\n- Added `__enter__`/`__exit__` methods to `PackedObjectReader`, `CallbackStreamWrapper`, `ZlibLikeBaseStreamDecompresser`,\r\n  so they won't fail in `add_streamed_objects_to_pack` with `open_streams=True`",
          "timestamp": "2021-09-01T14:36:15+02:00",
          "tree_id": "d230b7bc0b95dc71a7939d3be0d0590552bb25c9",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/c0a67a33dbe0634005ee2d5789214808ee205b02"
        },
        "date": 1630500028297,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.9878226492191727,
            "unit": "iter/sec",
            "range": "stddev: 0.019655355465199437",
            "extra": "mean: 1.0123274666666662 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.1693360710836701,
            "unit": "iter/sec",
            "range": "stddev: 0.2920130239531486",
            "extra": "mean: 5.905416333333334 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 8.371791638756706,
            "unit": "iter/sec",
            "range": "stddev: 0.009944387527785443",
            "extra": "mean: 119.44874444444606 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 9.782077326832141,
            "unit": "iter/sec",
            "range": "stddev: 0.006344069659981386",
            "extra": "mean: 102.22777500000024 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.7375569636331112,
            "unit": "iter/sec",
            "range": "stddev: 0.012763176116863227",
            "extra": "mean: 575.5206999999984 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3529143.651149304,
            "unit": "iter/sec",
            "range": "stddev: 1.8528381141409038e-7",
            "extra": "mean: 283.35485852900985 nsec\nrounds: 156251"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3517585.1689584153,
            "unit": "iter/sec",
            "range": "stddev: 6.029868788851762e-7",
            "extra": "mean: 284.28593821244635 nsec\nrounds: 181819"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55c40ffa05cd603c0b722953fbf5d043f7015bde",
          "message": "⬆️ UPGRADE: sqlalchemy v1.4 (v2 API) (#114)\n\nFollowing migration guidelines:\r\nhttps://docs.sqlalchemy.org/en/14/changelog/migration_20.html\r\n\r\n- Added `SQLALCHEMY_WARN_20` environmental variable\r\n- Use `future=True` for engine and session creation (V1 -> v2 API)\r\n- `query` -> `select` (V1 -> v2 API)\r\n- Rename `models.py` -> `database.py`\r\n  (models is too generic does not describe the module's purpose)\r\n- Moved `get_session` -> `database.py`\r\n  (this method can be independent of the container)\r\n- Added mypy extension:\r\n  https://docs.sqlalchemy.org/en/14/orm/extensions/mypy.html\r\n\r\nNote, the `count()` method is now a bit more complex,\r\nbut this is explained in: https://github.com/sqlalchemy/sqlalchemy/issues/6794\r\n\r\nAlso, the vacuum code required changing, since it is in a transaction.\r\nThe workaround is discussed in:\r\nhttps://github.com/sqlalchemy/sqlalchemy/discussions/6959#discussioncomment-1251681",
          "timestamp": "2021-09-02T15:44:37+02:00",
          "tree_id": "58708e4c7cbc4eb4609c2d96c9ce5b022ac21ea2",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/55c40ffa05cd603c0b722953fbf5d043f7015bde"
        },
        "date": 1630590565008,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.4119827160137055,
            "unit": "iter/sec",
            "range": "stddev: 0.003483288339103322",
            "extra": "mean: 708.2239666666667 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.11146813860492318,
            "unit": "iter/sec",
            "range": "stddev: 1.0031866351769858",
            "extra": "mean: 8.971173400000001 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 9.37189819456939,
            "unit": "iter/sec",
            "range": "stddev: 0.007505757194912375",
            "extra": "mean: 106.7019700000003 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 14.888763187005738,
            "unit": "iter/sec",
            "range": "stddev: 0.0011076212030106333",
            "extra": "mean: 67.16474615384818 msec\nrounds: 13"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 3.096238204751576,
            "unit": "iter/sec",
            "range": "stddev: 0.003305119505146153",
            "extra": "mean: 322.97256666666385 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 4348934.37762529,
            "unit": "iter/sec",
            "range": "stddev: 5.397964451450327e-8",
            "extra": "mean: 229.94138636420303 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 4392809.682017894,
            "unit": "iter/sec",
            "range": "stddev: 1.1506276038339838e-7",
            "extra": "mean: 227.64473591844285 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a053f2a421b3c1dba0f660c64d126ef078bc4432",
          "message": "✨ NEW: Add basic CLI (#116)\n\nAdded basic commands for container creation, inspection and cleaning.\r\nSee `README.md` tutorial section for details.\r\n\r\nAlso added __enter__/__exit__ for Container,\r\nto allow it to be used as a context manager\r\nwhich calls Container.close() on exit (i.e. closes the database).",
          "timestamp": "2021-09-07T20:55:52+02:00",
          "tree_id": "0b64013331471b98e551ba0a715fec848653fc3d",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/a053f2a421b3c1dba0f660c64d126ef078bc4432"
        },
        "date": 1631041226745,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.1208603963519281,
            "unit": "iter/sec",
            "range": "stddev: 0.024980543284991465",
            "extra": "mean: 892.1717666666667 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.14783957519658195,
            "unit": "iter/sec",
            "range": "stddev: 0.3184716192437417",
            "extra": "mean: 6.7640886999999985 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 7.783316364082144,
            "unit": "iter/sec",
            "range": "stddev: 0.00786170535824267",
            "extra": "mean: 128.47993749999986 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 11.732781979489634,
            "unit": "iter/sec",
            "range": "stddev: 0.0054773759946659195",
            "extra": "mean: 85.23127777777893 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.239310650609295,
            "unit": "iter/sec",
            "range": "stddev: 0.0028092066869450523",
            "extra": "mean: 446.56600000000424 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3161045.2751085707,
            "unit": "iter/sec",
            "range": "stddev: 3.0590339482692813e-7",
            "extra": "mean: 316.35105256922975 nsec\nrounds: 149254"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 1956103.8531112925,
            "unit": "iter/sec",
            "range": "stddev: 4.556924953373817e-7",
            "extra": "mean: 511.220300706143 nsec\nrounds: 163935"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bc256ea026c71d79b6a3343a494c9eadb487ea34",
          "message": "🔧 MAINTAIN: Add release workflow (#117)",
          "timestamp": "2021-09-07T21:21:28+02:00",
          "tree_id": "0eb30596dedf1f47968ce0369749b43f460090af",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/bc256ea026c71d79b6a3343a494c9eadb487ea34"
        },
        "date": 1631042726317,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.4225831663457786,
            "unit": "iter/sec",
            "range": "stddev: 0.04769871516204684",
            "extra": "mean: 702.9466000000003 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.17714173031900463,
            "unit": "iter/sec",
            "range": "stddev: 0.08908157644210082",
            "extra": "mean: 5.645197199999999 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 9.53572261811943,
            "unit": "iter/sec",
            "range": "stddev: 0.008845671346452385",
            "extra": "mean: 104.86882222222329 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 16.69267544478841,
            "unit": "iter/sec",
            "range": "stddev: 0.002679020757623821",
            "extra": "mean: 59.90651428571375 msec\nrounds: 14"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.702760410289842,
            "unit": "iter/sec",
            "range": "stddev: 0.003801414311798098",
            "extra": "mean: 369.9920999999999 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3995139.730918687,
            "unit": "iter/sec",
            "range": "stddev: 2.128163907848574e-7",
            "extra": "mean: 250.30413636322956 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3798313.1026684893,
            "unit": "iter/sec",
            "range": "stddev: 1.0292910608790399e-7",
            "extra": "mean: 263.2747677639825 nsec\nrounds: 181819"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa94e654bd68b346e9252b80c718014982bfcdab",
          "message": "🚀 RELEASE: v0.6.0 (#118)",
          "timestamp": "2021-09-07T21:42:49+02:00",
          "tree_id": "0f874bbb5424bb25b9c5a784eb30f1f7466fd53d",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/fa94e654bd68b346e9252b80c718014982bfcdab"
        },
        "date": 1631044024547,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.3756697218762663,
            "unit": "iter/sec",
            "range": "stddev: 0.041172627194330416",
            "extra": "mean: 726.9186666666668 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.1493751674091069,
            "unit": "iter/sec",
            "range": "stddev: 0.5458564231215234",
            "extra": "mean: 6.694553166666666 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 9.4637883753071,
            "unit": "iter/sec",
            "range": "stddev: 0.006418147494419159",
            "extra": "mean: 105.66592999999855 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 15.038608155992344,
            "unit": "iter/sec",
            "range": "stddev: 0.0022025186097772045",
            "extra": "mean: 66.49551538461597 msec\nrounds: 13"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.7468530449186797,
            "unit": "iter/sec",
            "range": "stddev: 0.0014490898603388162",
            "extra": "mean: 364.0529666666623 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3838605.8130021957,
            "unit": "iter/sec",
            "range": "stddev: 5.778403876388312e-8",
            "extra": "mean: 260.5112503641029 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3792093.985601293,
            "unit": "iter/sec",
            "range": "stddev: 4.9091186687629604e-8",
            "extra": "mean: 263.70654414079155 nsec\nrounds: 178572"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6259e2330ccb44aea06890071c6e83559ef20693",
          "message": "🔀 MERGE: master -> develop #120",
          "timestamp": "2021-09-07T22:36:13+02:00",
          "tree_id": "0f874bbb5424bb25b9c5a784eb30f1f7466fd53d",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/6259e2330ccb44aea06890071c6e83559ef20693"
        },
        "date": 1631047194477,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.382795434359784,
            "unit": "iter/sec",
            "range": "stddev: 0.026347653217379714",
            "extra": "mean: 723.1727666666667 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.16661844081029017,
            "unit": "iter/sec",
            "range": "stddev: 0.10123480086622051",
            "extra": "mean: 6.001736633333333 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 8.662251869795126,
            "unit": "iter/sec",
            "range": "stddev: 0.012180669564291138",
            "extra": "mean: 115.44342222222308 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 14.702673350338703,
            "unit": "iter/sec",
            "range": "stddev: 0.0010260260863762367",
            "extra": "mean: 68.01484166666623 msec\nrounds: 12"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.6607378332440956,
            "unit": "iter/sec",
            "range": "stddev: 0.0007371250165304688",
            "extra": "mean: 375.83560000000205 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2379107.468136826,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013202646493260713",
            "extra": "mean: 420.32569498978535 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3869366.819677601,
            "unit": "iter/sec",
            "range": "stddev: 1.6496043091494e-7",
            "extra": "mean: 258.4402168631032 nsec\nrounds: 185186"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chrisj_sewell@hotmail.com",
            "name": "Chris Sewell",
            "username": "chrisjsewell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c0120568a992b41a55b325f3217d4902b5281070",
          "message": "🔧 MAINTAIN: Make types more permissive (#121)\n\nAllow `Container` folder to be a `pathlib.Path`,\r\nand make hashkeys `Sequence[str]` rather than just `List[str]`.",
          "timestamp": "2021-09-08T07:57:10+02:00",
          "tree_id": "39bdfe2a4d7b1f4ed0561acc5c11bd66b08cd220",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/c0120568a992b41a55b325f3217d4902b5281070"
        },
        "date": 1631080880843,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.4111007912606575,
            "unit": "iter/sec",
            "range": "stddev: 0.024285571865616033",
            "extra": "mean: 708.6666 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.19302647712659088,
            "unit": "iter/sec",
            "range": "stddev: 0.23124440270748856",
            "extra": "mean: 5.1806364333333335 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 8.966463632720744,
            "unit": "iter/sec",
            "range": "stddev: 0.008819865625316434",
            "extra": "mean: 111.52668888889077 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 14.480990441822305,
            "unit": "iter/sec",
            "range": "stddev: 0.002928350257088106",
            "extra": "mean: 69.05604999999977 msec\nrounds: 12"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.6952894426411116,
            "unit": "iter/sec",
            "range": "stddev: 0.004048074170936502",
            "extra": "mean: 371.0176666666645 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3784398.499614631,
            "unit": "iter/sec",
            "range": "stddev: 7.156827067124568e-8",
            "extra": "mean: 264.24278524086134 nsec\nrounds: 175439"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3819306.403586021,
            "unit": "iter/sec",
            "range": "stddev: 2.6923212374993143e-7",
            "extra": "mean: 261.8276446900047 nsec\nrounds: 188680"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a09ea2a953f0b0dfa79a6688306c51a501f874b",
          "message": "[pre-commit.ci] pre-commit autoupdate (#115)\n\nupdates:\r\n- [github.com/psf/black: 21.7b0 → 21.8b0](https://github.com/psf/black/compare/21.7b0...21.8b0)\r\n\r\nCo-authored-by: Chris Sewell <chrisj_sewell@hotmail.com>",
          "timestamp": "2021-09-09T02:18:32+02:00",
          "tree_id": "3944bbd36949ddf3afabd456558b72039dece5c9",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/7a09ea2a953f0b0dfa79a6688306c51a501f874b"
        },
        "date": 1631147021581,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.3234543641172354,
            "unit": "iter/sec",
            "range": "stddev: 0.035852256032082204",
            "extra": "mean: 755.5983999999996 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.12844171839931595,
            "unit": "iter/sec",
            "range": "stddev: 0.18461194832156252",
            "extra": "mean: 7.785632366666667 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 8.319829787375618,
            "unit": "iter/sec",
            "range": "stddev: 0.00502275518913694",
            "extra": "mean: 120.19476666666723 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 12.903328478097588,
            "unit": "iter/sec",
            "range": "stddev: 0.004264023405366926",
            "extra": "mean: 77.49938333333321 msec\nrounds: 12"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.4185448212384815,
            "unit": "iter/sec",
            "range": "stddev: 0.010364918488019823",
            "extra": "mean: 413.4717666666698 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3491268.473708517,
            "unit": "iter/sec",
            "range": "stddev: 8.527967472934072e-7",
            "extra": "mean: 286.4288459997568 nsec\nrounds: 161291"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2185134.621622631,
            "unit": "iter/sec",
            "range": "stddev: 2.9494018547596846e-7",
            "extra": "mean: 457.6377080408085 nsec\nrounds: 128206"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cbda68db1b3f5858e844c9434f288b85447116e6",
          "message": "Merge pull request #127 from giovannipizzi/add-docs\n\nMoving documentation to sphinx+myst",
          "timestamp": "2021-12-09T22:13:09+01:00",
          "tree_id": "ef3255b0dd18701ce5367510b6f14cebbe355393",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/cbda68db1b3f5858e844c9434f288b85447116e6"
        },
        "date": 1639084768942,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.3204407261420457,
            "unit": "iter/sec",
            "range": "stddev: 0.018382933036106986",
            "extra": "mean: 757.3229000000001 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.11727047848337091,
            "unit": "iter/sec",
            "range": "stddev: 0.6817019313590574",
            "extra": "mean: 8.5272953 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 8.674413689149995,
            "unit": "iter/sec",
            "range": "stddev: 0.009554705201625739",
            "extra": "mean: 115.28156666666769 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 13.935262345248354,
            "unit": "iter/sec",
            "range": "stddev: 0.0012852368801845105",
            "extra": "mean: 71.76040000000287 msec\nrounds: 12"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.502434660388318,
            "unit": "iter/sec",
            "range": "stddev: 0.00601352755820177",
            "extra": "mean: 399.6108333333363 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2261330.7684029574,
            "unit": "iter/sec",
            "range": "stddev: 0.000006410664996451263",
            "extra": "mean: 442.21748271980584 nsec\nrounds: 161291"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2369316.775412007,
            "unit": "iter/sec",
            "range": "stddev: 1.5977326123759e-7",
            "extra": "mean: 422.0626006525055 nsec\nrounds: 181819"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "14cb67308370cfb5c620cb90628cf51c175272d5",
          "message": "[pre-commit.ci] pre-commit autoupdate (#122)\n\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>\r\nCo-authored-by: Giovanni Pizzi <giovanni.pizzi@epfl.ch>",
          "timestamp": "2021-12-10T00:41:30+01:00",
          "tree_id": "be9c4a776cc83d3aa15ed3b131cb8a4a00a3bbce",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/14cb67308370cfb5c620cb90628cf51c175272d5"
        },
        "date": 1639093605643,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.3529259865603942,
            "unit": "iter/sec",
            "range": "stddev: 0.017178368650524706",
            "extra": "mean: 739.1387333333332 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.1219682881312488,
            "unit": "iter/sec",
            "range": "stddev: 0.15622435458309014",
            "extra": "mean: 8.198852466666667 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 9.256796494265998,
            "unit": "iter/sec",
            "range": "stddev: 0.008517174203483815",
            "extra": "mean: 108.02873333333372 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 14.169224703712606,
            "unit": "iter/sec",
            "range": "stddev: 0.0011982538534041952",
            "extra": "mean: 70.57549166666692 msec\nrounds: 12"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.6247357547278867,
            "unit": "iter/sec",
            "range": "stddev: 0.0017198107173005395",
            "extra": "mean: 380.9907333333342 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2377690.459269034,
            "unit": "iter/sec",
            "range": "stddev: 9.622533357913789e-8",
            "extra": "mean: 420.5761923725878 nsec\nrounds: 169492"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2412567.141764034,
            "unit": "iter/sec",
            "range": "stddev: 1.8597175804392736e-7",
            "extra": "mean: 414.49623626591153 nsec\nrounds: 185186"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "65a3e5d9b8c95d7f9a7309a01f8be68bc11be1bd",
          "message": "Missing badge from RTD added (#129)\n\n* Missing badge from RTD added\r\n\r\n* [pre-commit.ci] auto fixes from pre-commit.com hooks",
          "timestamp": "2021-12-15T11:18:23+01:00",
          "tree_id": "b0581635f9dbaa13760e30de0b0e5c3aa75ff806",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/65a3e5d9b8c95d7f9a7309a01f8be68bc11be1bd"
        },
        "date": 1639563874955,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.8820284584718068,
            "unit": "iter/sec",
            "range": "stddev: 0.02422608180171379",
            "extra": "mean: 1.1337502666666668 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.0981648577217531,
            "unit": "iter/sec",
            "range": "stddev: 0.827904409104314",
            "extra": "mean: 10.186944933333331 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 7.624744392357685,
            "unit": "iter/sec",
            "range": "stddev: 0.00721779957168023",
            "extra": "mean: 131.15193750000387 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 8.909529298430417,
            "unit": "iter/sec",
            "range": "stddev: 0.007373595235466047",
            "extra": "mean: 112.23937499999792 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.7390918219033225,
            "unit": "iter/sec",
            "range": "stddev: 0.01250919713864514",
            "extra": "mean: 575.0127666666648 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3317468.138631037,
            "unit": "iter/sec",
            "range": "stddev: 2.8700376024681587e-7",
            "extra": "mean: 301.4346960427757 nsec\nrounds: 181819"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 1783811.1114802998,
            "unit": "iter/sec",
            "range": "stddev: 0.000005347930547886928",
            "extra": "mean: 560.5974722122611 nsec\nrounds: 135136"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ramirezfranciscof@users.noreply.github.com",
            "name": "Francisco Ramirez",
            "username": "ramirezfranciscof"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9eda5b8e8c6b4aa72a8cb36418382f9ea20cf307",
          "message": "Fix `mypy` CI error due to file `database.py` name (#131)",
          "timestamp": "2022-01-11T18:24:58+01:00",
          "tree_id": "bc7456356aa2981645f679f9b967ccaa13703891",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/9eda5b8e8c6b4aa72a8cb36418382f9ea20cf307"
        },
        "date": 1641922293666,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.280283560617094,
            "unit": "iter/sec",
            "range": "stddev: 0.008767330965198812",
            "extra": "mean: 781.0769666666672 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.1387560518105107,
            "unit": "iter/sec",
            "range": "stddev: 0.18310065241288165",
            "extra": "mean: 7.206892866666667 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 9.325835361702689,
            "unit": "iter/sec",
            "range": "stddev: 0.0053395772173473",
            "extra": "mean: 107.22899999999811 msec\nrounds: 10"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 13.428507131600492,
            "unit": "iter/sec",
            "range": "stddev: 0.002693440738148033",
            "extra": "mean: 74.46844166666604 msec\nrounds: 12"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.5870327398478143,
            "unit": "iter/sec",
            "range": "stddev: 0.0019177206530890877",
            "extra": "mean: 386.54323333334634 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3936092.2288519363,
            "unit": "iter/sec",
            "range": "stddev: 5.628314113622379e-8",
            "extra": "mean: 254.05908750554013 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3915252.0615626504,
            "unit": "iter/sec",
            "range": "stddev: 8.073764505469104e-8",
            "extra": "mean: 255.41139734475271 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "16e6ff98c904ef0ec8b03ba3ce6e1eb00204c328",
          "message": "FIX: mypy dependency problem and revert unnecessary file rename (#132)\n\nUpdated the version of mypy and of the SQLAlchemy dependency\r\n(the latter was needed to avoid some INTERNAL ERRORs when running\r\nmypy):\r\n\r\n- [github.com/pre-commit/pre-commit-hooks: v4.0.1 → v4.1.0](https://github.com/pre-commit/pre-commit-hooks/compare/v4.0.1...v4.1.0)\r\n- [github.com/asottile/pyupgrade: v2.29.1 → v2.31.0](https://github.com/asottile/pyupgrade/compare/v2.29.1...v2.31.0)\r\n- [github.com/pre-commit/mirrors-mypy: v0.910-1 → v0.930](https://github.com/pre-commit/mirrors-mypy/compare/v0.910-1...v0.930)\r\n\r\nThis also reverts commit 9eda5b8e8c6b4aa72a8cb36418382f9ea20cf307.",
          "timestamp": "2022-01-11T19:23:52+01:00",
          "tree_id": "7ff4d7fd420aae0879fce600637e11a137af9ec9",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/16e6ff98c904ef0ec8b03ba3ce6e1eb00204c328"
        },
        "date": 1641925760014,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.5554756501953029,
            "unit": "iter/sec",
            "range": "stddev: 0.03219940731695764",
            "extra": "mean: 642.8901666666667 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.13626143904561183,
            "unit": "iter/sec",
            "range": "stddev: 0.009898939358840921",
            "extra": "mean: 7.3388333999999995 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 10.003143209888643,
            "unit": "iter/sec",
            "range": "stddev: 0.00886073976394864",
            "extra": "mean: 99.96857777777753 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 14.77159967930848,
            "unit": "iter/sec",
            "range": "stddev: 0.004674518338070702",
            "extra": "mean: 67.69747500000041 msec\nrounds: 12"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.713927114049684,
            "unit": "iter/sec",
            "range": "stddev: 0.00024515312221846827",
            "extra": "mean: 368.46973333333705 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 4315632.407407504,
            "unit": "iter/sec",
            "range": "stddev: 4.585361724909409e-8",
            "extra": "mean: 231.71574999869904 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2703803.218390792,
            "unit": "iter/sec",
            "range": "stddev: 6.558751842023669e-8",
            "extra": "mean: 369.84940072494055 nsec\nrounds: 133334"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mail@sphuber.net",
            "name": "Sebastiaan Huber",
            "username": "sphuber"
          },
          "committer": {
            "email": "mail@sphuber.net",
            "name": "Sebastiaan Huber",
            "username": "sphuber"
          },
          "distinct": true,
          "id": "f1809d416fbb481944c1e89d3e1f59b532b85a46",
          "message": "DevOps: update pre-commit dependency requirements\n\nAlso add a pin for `jinja2`. Versions 3.1 and above break the docs\nbuild.",
          "timestamp": "2022-10-21T20:32:54+02:00",
          "tree_id": "c48810f1f095d25f903884fbb3ef41b430be0327",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/f1809d416fbb481944c1e89d3e1f59b532b85a46"
        },
        "date": 1666377546856,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 0.8540046341138126,
            "unit": "iter/sec",
            "range": "stddev: 0.02568575336666911",
            "extra": "mean: 1.1709538333333338 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.12335030378589468,
            "unit": "iter/sec",
            "range": "stddev: 0.05146332637218572",
            "extra": "mean: 8.1069926 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 6.747136876563323,
            "unit": "iter/sec",
            "range": "stddev: 0.01290089498360893",
            "extra": "mean: 148.21101428571484 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 8.431678321353811,
            "unit": "iter/sec",
            "range": "stddev: 0.006586959093324061",
            "extra": "mean: 118.60035000000302 msec\nrounds: 8"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 1.5424024954838456,
            "unit": "iter/sec",
            "range": "stddev: 0.023938959353534094",
            "extra": "mean: 648.3392 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 1834177.5135113257,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011294793810635772",
            "extra": "mean: 545.2035000067212 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 1841135.4143173483,
            "unit": "iter/sec",
            "range": "stddev: 0.000003400863615857456",
            "extra": "mean: 543.1431019270126 nsec\nrounds: 119048"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "gio.piz@gmail.com",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "10edd6395455d7c59361e608396b672289d8de58",
          "message": "Refactoring the code to enable efficient access to packed compressed objects\n\nI started to work on top of Bonan's work.\nI kept the same core idea: upon certain conditions (now well defined, i.e.\nwhen seeking with the following conditions):\n- whence=0 and seeking in a previous location\n- whence=1 and seeking in a previous location (i.e. negative offset)\n- whence=2\nwe assume that we will need to do random access, so we just uncompress\nthe whole file back into the loose folder and then proxy all requests\n(tell, seek, read) to the loose file.\n\nI now define a LazyLooseStream class that allows to define which loose\nfile to open, delaying the opening to a later point, and in this way\nenabling code that ensures that always closes any open file.\n\nI also added code to ensure that there should not be race conditions\nif a clean_storage is running at the same time.\n\nI also cleaned up a bit the code and added various tests to increased coverage,\nsince it had dropped over time. It didn't go back to 100% but we are close\n(for the core library files).\n\nFurthermore, I used the occasion to a new `validate` CLI command\nthat also uses tqdm (if installed) to show progress.",
          "timestamp": "2023-07-04T18:18:04+02:00",
          "tree_id": "da00366d84a73df7c018aa051c5fe6efd06ec0b3",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/10edd6395455d7c59361e608396b672289d8de58"
        },
        "date": 1688487741860,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.4429732637255852,
            "unit": "iter/sec",
            "range": "stddev: 0.009369915514204743",
            "extra": "mean: 693.0135333333336 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.23034455337557813,
            "unit": "iter/sec",
            "range": "stddev: 0.2842773409723201",
            "extra": "mean: 4.341322533333333 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 9.021323702836428,
            "unit": "iter/sec",
            "range": "stddev: 0.006073079323904801",
            "extra": "mean: 110.84847777777738 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 14.489103079937442,
            "unit": "iter/sec",
            "range": "stddev: 0.0023635150404467584",
            "extra": "mean: 69.01738461538488 msec\nrounds: 13"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.625236008717181,
            "unit": "iter/sec",
            "range": "stddev: 0.0008456222580614867",
            "extra": "mean: 380.91813333333374 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3916542.98768409,
            "unit": "iter/sec",
            "range": "stddev: 5.555637959506852e-8",
            "extra": "mean: 255.3272115601163 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2379270.2173184687,
            "unit": "iter/sec",
            "range": "stddev: 8.191887589754076e-8",
            "extra": "mean: 420.29694345816654 nsec\nrounds: 149254"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "39116092acc684712060eca2d8a294117a04a8f3",
          "message": "Adding link in docs to AEP#006 (#143)\n\nNow the AEP information is linked from the design documentation page.\r\n\r\nThis closes #128",
          "timestamp": "2023-07-04T22:36:41+02:00",
          "tree_id": "a8c542fbe4b22dfe1083d9ebb2623f320cd056f9",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/39116092acc684712060eca2d8a294117a04a8f3"
        },
        "date": 1688503306131,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.4059552985885841,
            "unit": "iter/sec",
            "range": "stddev: 0.01669065010637164",
            "extra": "mean: 711.260166666667 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.1595828725001097,
            "unit": "iter/sec",
            "range": "stddev: 0.058572911429460375",
            "extra": "mean: 6.266336633333334 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 8.552081320030894,
            "unit": "iter/sec",
            "range": "stddev: 0.008320753812305652",
            "extra": "mean: 116.9305999999995 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 14.583376627732687,
            "unit": "iter/sec",
            "range": "stddev: 0.002943865464479564",
            "extra": "mean: 68.57122500000006 msec\nrounds: 12"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.53665680470877,
            "unit": "iter/sec",
            "range": "stddev: 0.0015159674182912627",
            "extra": "mean: 394.21966666665753 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 2327988.796875366,
            "unit": "iter/sec",
            "range": "stddev: 2.8952032538503177e-7",
            "extra": "mean: 429.5553317705838 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 3640025.89587781,
            "unit": "iter/sec",
            "range": "stddev: 1.7333281963740575e-7",
            "extra": "mean: 274.7233202743208 nsec\nrounds: 169492"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "giovanni.pizzi@epfl.ch",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "committer": {
            "email": "gio.piz@gmail.com",
            "name": "Giovanni Pizzi",
            "username": "giovannipizzi"
          },
          "distinct": true,
          "id": "afdae261a5849e994b5920ca07665fc6a19f3852",
          "message": "Adding also 3.11 support",
          "timestamp": "2023-07-07T17:00:13+02:00",
          "tree_id": "21fd8385393ec10cfd04fed00c8e5ae61f5b82cd",
          "url": "https://github.com/aiidateam/disk-objectstore/commit/afdae261a5849e994b5920ca07665fc6a19f3852"
        },
        "date": 1688742534346,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_pack_write",
            "value": 1.4247695328422916,
            "unit": "iter/sec",
            "range": "stddev: 0.010577043746246111",
            "extra": "mean: 701.8678999999998 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_write",
            "value": 0.14303068948477846,
            "unit": "iter/sec",
            "range": "stddev: 0.14555088173931852",
            "extra": "mean: 6.991506533333333 sec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_pack_read",
            "value": 8.953094736674535,
            "unit": "iter/sec",
            "range": "stddev: 0.0072012759197207545",
            "extra": "mean: 111.69322222222257 msec\nrounds: 9"
          },
          {
            "name": "tests/test_benchmark.py::test_loose_read",
            "value": 14.418412365020412,
            "unit": "iter/sec",
            "range": "stddev: 0.0025160477735008554",
            "extra": "mean: 69.35576363636513 msec\nrounds: 11"
          },
          {
            "name": "tests/test_benchmark.py::test_has_objects",
            "value": 2.5860909683359172,
            "unit": "iter/sec",
            "range": "stddev: 0.0011037318832020028",
            "extra": "mean: 386.68399999999775 msec\nrounds: 3"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_packed",
            "value": 3948030.6207457795,
            "unit": "iter/sec",
            "range": "stddev: 6.99653390226316e-8",
            "extra": "mean: 253.29084195722547 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_benchmark.py::test_list_all_loose",
            "value": 2393305.0331112207,
            "unit": "iter/sec",
            "range": "stddev: 9.602253024758715e-8",
            "extra": "mean: 417.83223875146064 nsec\nrounds: 128206"
          }
        ]
      }
    ]
  }
}