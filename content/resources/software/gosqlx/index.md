---
title: "GoSQLX"
link: "https://github.com/ajitpratap0/GoSQLX"
github: "ajitpratap0/GoSQLX"
description: "A pure-Go SQL parser, formatter, linter, and SQL-injection security scanner with a dedicated MySQL and MariaDB dialect, available as a CLI, Go SDK, VS Code extension, and MCP server."
subcategories:
  - Security
  - Testing & Benchmarking
compatibility:
  - MySQL
  - MariaDB
pricing:
  - Open Source
images:
  - logo.png
---

GoSQLX tokenizes, parses, and generates ASTs from SQL with zero-copy optimizations and object pooling, claiming roughly 2.8M parses/sec for simple queries. It supports 8 dialects with dedicated grammar — PostgreSQL, MySQL, MariaDB, SQL Server, Oracle, SQLite, Snowflake, and ClickHouse — covering CTEs, window functions, and set operations.

Beyond parsing, it includes a SQL-injection scanner, 30 lint rules, 20 query-optimizer rules, and a formatter/highlighter, exposed through a CLI, a Go SDK, a VS Code extension, a GitHub Action, Python bindings, and an MCP server with 7 tools for AI-agent integration. It's released under the Apache License 2.0.
