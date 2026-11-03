---
title: "Scythe"
link: "https://github.com/Goldziher/scythe"
description: "A SQL-first code generator that compiles annotated .sql files into type-safe database access code for MySQL, MariaDB, and other engines without needing a live database connection, with built-in formatting, linting, security auditing, and schema-drift detection."
subcategories:
  - Schema Management & Migration
  - Testing & Benchmarking
compatibility:
  - MySQL
  - MariaDB
pricing:
  - Open Source
images:
  - logo.png
---

Scythe reads annotated `.sql` files and generates row types and type-safe query functions for client code, so a project's SQL stays the source of truth without hand-written ORM mappings and without connecting to a live database to generate code.

Beyond code generation, it bundles a `scythe fmt` formatter, more than 20 lint rules, a `scythe audit` command with around 35 security and migration-safety checks, `scythe check` for schema-drift detection, and `scythe inspect` for live health checks against a running MySQL/MariaDB instance.

It's released under the MIT license and supports ten target languages across MySQL, MariaDB, PostgreSQL, SQLite, DuckDB, CockroachDB, SQL Server, Oracle, Redshift, and Snowflake.

Submitted by the community.
