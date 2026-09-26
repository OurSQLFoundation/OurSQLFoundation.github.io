---
title: "goose"
link: "https://github.com/pressly/goose"
description: "A Go database migration tool — manage schema changes as ordered SQL scripts or Go functions, run from the command line or embedded directly in a Go application as a library."
subcategories:
  - Schema Management & Migration
compatibility:
  - MySQL
  - MariaDB
deployment:
  - Self-Hosted
pricing:
  - Open Source
images:
  - logo.png
---

goose tracks schema changes as sequentially numbered "up"/"down" migration files, written either as plain SQL or as Go functions, and applies or rolls them back in order while recording progress in a version table. Migrations can be embedded into a Go binary with `go:embed` and run programmatically, which makes it a common choice for shipping schema changes alongside a Go application rather than as a separate deployment step.

Maintained by Pressly and released under the MIT License, it supports MySQL, MariaDB, PostgreSQL, SQLite, ClickHouse, YDB, Vertica, and several other SQL databases through pluggable drivers.
