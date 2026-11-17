---
title: "sql-splitter"
link: "https://sql-splitter.dev/"
github: "HelgeSverre/sql-splitter"
description: "A fast, streaming tool that splits large SQL dump files into per-table files and converts dumps between MySQL, PostgreSQL, SQLite, and SQL Server."
subcategories:
  - Backup & Recovery
compatibility:
  - MySQL
  - MariaDB
pricing:
  - Open Source
---

sql-splitter processes dumps as a stream, so it handles files larger than memory, at around 1 GB/s on large dumps according to its README. It supports MySQL and MariaDB dumps, PostgreSQL, SQLite, and SQL Server, detects compressed files automatically, and can convert a dump from one dialect to another.

It's written in Rust and released under the MIT license.
