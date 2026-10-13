---
title: "mysql_random_data_load"
link: "https://github.com/Percona-Lab/mysql_random_data_load"
github: "Percona-Lab/mysql_random_data_load"
description: "A command-line tool from Percona Lab that reads a MySQL table's structure and fills it with random rows — for reproducing bugs, seeding test environments, and generating data to benchmark against."
subcategories:
  - Testing & Benchmarking
compatibility:
  - MySQL
deployment:
  - Self-Hosted
pricing:
  - Open Source
images:
  - logo.png
---

mysql_random_data_load inspects an existing table's column definitions and generates matching random rows — integers, floats, decimals, dates and times, text, blobs, enums, and sets — rather than requiring a hand-written data model. Strings are drawn from random first names, full names, or lorem ipsum text depending on column size, nullable columns get roughly 10% NULLs, and foreign-key columns are populated by sampling real values already present in the referenced table, so generated rows satisfy existing constraints instead of failing on insert.

It's run as `mysql_random_data_load <database> <table> <rows> [options]`, with flags to control bulk-insert batch size, connection details, retry behavior for duplicate keys, and a print-only mode that writes the generated `INSERT` statements to stdout instead of running them. It ships as precompiled Linux and macOS binaries from the project's GitHub Releases. The project is maintained under Percona Lab, Percona's incubator organization for experimental and community tools, and released under the Apache License 2.0. Its own README describes it as an early-stage project that doesn't yet cover every MySQL column type.
