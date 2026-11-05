---
title: "SQLancer"
link: "https://github.com/sqlancer/sqlancer"
description: "An automated testing tool that finds logic and performance bugs in database engines, with dedicated support for MySQL, MariaDB, and TiDB."
subcategories:
  - Testing & Benchmarking
compatibility:
  - MySQL
  - MariaDB
  - TiDB
pricing:
  - Open Source
images:
  - logo.png
---

SQLancer targets the database implementation itself rather than applications. It generates SQL statements automatically and applies test oracles to detect logic bugs, where the database returns an incorrect result set, and it needs DBMS-specific code for each engine it supports.

It's written in Java and released under the MIT license.
