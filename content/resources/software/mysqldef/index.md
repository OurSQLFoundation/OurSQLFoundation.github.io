---
title: "mysqldef (sqldef)"
link: "https://github.com/sqldef/sqldef"
github: "sqldef/sqldef"
description: "An idempotent schema management tool for MySQL, MariaDB, and TiDB — describe the desired schema as plain SQL and sqldef diffs it against the live database, generating and applying only the DDL needed to converge."
subcategories:
  - Schema Management & Migration
compatibility:
  - MySQL
  - MariaDB
  - TiDB
pricing:
  - Open Source
images:
  - logo.png
---

sqldef inverts the usual migration-file workflow: instead of accumulating a sequence of up/down migration scripts, you maintain a single SQL file describing the schema as it should look. Running `mysqldef` compares that file against the live database and generates (and, with `--apply`, runs) exactly the `CREATE TABLE`, `ALTER TABLE`, and index statements needed to get there — whatever the database's starting state. Because the operation is idempotent, running it again against an already-converged database is a no-op, which makes it safe to wire into deploy pipelines. An `@renamed` annotation lets a table, column, index, or ENUM value rename be expressed explicitly, so sqldef doesn't mistake a rename for a drop-and-add.

`mysqldef` is the MySQL, MariaDB, and TiDB variant of the broader sqldef project, which also ships `psqldef` (PostgreSQL), `sqlite3def` (SQLite3), and `mssqldef` (SQL Server) as separate binaries sharing the same approach — an idea originally inspired by Ridgepole's Ruby-DSL-based schema management, reworked around plain SQL instead. It also supports an offline mode that diffs two SQL files directly without a database connection, useful for CI validation, plus `--export` and `--dry-run` workflows. The project is released under the MIT License, with its SQL parser component under the Apache License 2.0.
