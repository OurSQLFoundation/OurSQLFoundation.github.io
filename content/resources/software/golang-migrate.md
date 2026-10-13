---
title: "golang-migrate"
link: "https://github.com/golang-migrate/migrate"
github: "golang-migrate/migrate"
description: "A Go database-migration tool and library — run versioned migrations from the CLI or embed them directly in a Go application, with drivers for MySQL, MariaDB, PostgreSQL, SQLite, and over twenty other databases."
subcategories:
  - Schema Management & Migration
compatibility:
  - MySQL
  - MariaDB
deployment:
  - Self-Hosted
pricing:
  - Open Source
---

golang-migrate applies numbered, ordered migration files (plain SQL, by default) against a target database and tracks which ones have run in a version table, usable either as a standalone CLI binary or imported as a Go library for migrations embedded in an application's own startup path. Its driver interface covers MySQL and MariaDB (via `database/mysql`) alongside PostgreSQL, SQLite, ClickHouse, CockroachDB, MongoDB, and roughly twenty other backends, plus pluggable sources for reading migration files from the filesystem, Go's `embed.FS`, S3, GitHub, and more.

Released under the MIT license, it's one of the most widely used Go migration tools, with over 1,400 commits and an active CI pipeline. No dedicated project logo was found — the repository ships only CI/coverage badges and a generic GitHub org avatar, consistent with how other driver-style listings in this catalog (e.g. Go-MySQL-Driver) are listed without an `images` field when the project genuinely doesn't have one.
