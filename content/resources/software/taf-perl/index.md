---
title: "TAF-Perl"
author: "MariaDB Foundation"
link: "https://github.com/MariaDB/TAF"
github: "MariaDB/TAF"
description: "A deterministic, extensible database benchmarking framework in Perl, maintained under the MariaDB Foundation, with repeatable test lifecycles, sysbench and HammerDB clients, and a results backend for baselines and regression detection."
subcategories:
  - Testing & Benchmarking
compatibility:
  - MySQL
  - MariaDB
deployment:
  - Self-Hosted
pricing:
  - Open Source
---

TAF-Perl, the Test Automation Framework, gives database benchmarking a clean, repeatable lifecycle: install the database, run the workload, collect results, and tear it all down in the same way every time. It is written in Perl, which the project picked because it is already on every Linux system used for database development and testing, with nothing extra to install. It supports MariaDB and MySQL, and any other database for which a TAF database plugin, SQL dialect, and test client exist; initial PostgreSQL support was added too.

Test suites are modular and driven by properties files. Client code for sysbench (Lua), HammerDB, and a BMK client ships in the repository. By default TAF keeps every component, including the database installs, inside its own directory, so several database versions can sit side by side without touching the host. Profiler plugins cover perf and flamegraphs, and the TAF Results Backend stores run metadata and workload parameters, with automated comparison diffs, baselines, and regression detection. Since TAF 4.0 each run archives the exact database configuration and a standalone properties file, so a test can be rerun without the original inputs, and runs can carry a free-form tag such as an MDEV number.

TAF-Perl is maintained as part of the MariaDB Foundation's work on open, vendor-neutral tooling, and is released under the GNU GPL, version 2. TAF 4.0 was released on September 27, 2026.
