---
title: "OpenHare"
link: "https://github.com/sjjian/openhare"
description: "An open-source, AI-assisted desktop SQL client built with Flutter, covering MySQL, PostgreSQL, SQL Server, SQLite, DuckDB, ClickHouse, Oracle, MongoDB, and Redis from one cross-platform app."
subcategories:
  - Database Management & GUI
  - AI & Ecosystem Skills
compatibility:
  - MySQL
  - DuckDB
pricing:
  - Open Source
images:
  - logo.png
---

OpenHare is a native desktop SQL client for Windows, macOS, and Linux, built with Flutter for the UI and Go for its database drivers (called through Dart FFI), with ObjectBox for local storage. For MySQL it connects via the go-sql-driver/mysql library, alongside drivers for PostgreSQL, SQL Server, SQLite, DuckDB, ClickHouse, Oracle, MongoDB, and Redis.

Its built-in AI assistant helps write, optimize, and understand SQL queries; high-risk statements (such as destructive writes) are flagged and require explicit confirmation before they run. The project is fully open source under the Apache License 2.0.
