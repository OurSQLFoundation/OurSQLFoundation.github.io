---
title: "go-sqlmock"
link: "https://github.com/DATA-DOG/go-sqlmock"
description: "A mock library implementing Go's `sql/driver`, used to simulate database behavior in tests without a real MySQL connection."
subcategories:
  - Testing & Benchmarking
compatibility:
  - MySQL
pricing:
  - Open Source
---

go-sqlmock simulates any `sql` driver in tests, so code written against `database/sql` and a driver such as go-sql-driver/mysql can be tested without a running server. It's not MySQL-specific, and its maintainers describe it as complete and stable, so new changes are infrequent.

It's released under the 3-clause BSD license.
