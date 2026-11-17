---
title: "DBPilot"
link: "https://github.com/SkyChenSky/DBPilot"
description: "A self-hosted autonomous diagnostics platform that continuously samples MySQL, SQL Server, and PostgreSQL instances and surfaces performance trends, fingerprinted Top SQL, slow query logs, blocking analysis, and index-usage advice in one web console."
subcategories:
  - Monitoring & Observability
  - AI & Ecosystem Skills
compatibility:
  - MySQL
deployment:
  - Self-Hosted
pricing:
  - Open Source
---

DBPilot runs as a single .NET 8+ process with one metadata database (SQL Server, MySQL, PostgreSQL, or SQLite), auto-creating its schema on startup, and monitors MySQL 8.0+ alongside SQL Server and PostgreSQL independently of where its own metadata is stored. For MySQL it reads `performance_schema` for fingerprinted Top SQL and the `mysql.slow_log` table for slow queries, with collectors designed to stay under 1% CPU overhead on monitored instances by reading only in-memory metadata views.

A built-in, read-only MCP server exposes 11 diagnostic tools so AI agents such as Claude Code or Codex CLI can be asked things like "did any SQL slow down in the last hour?" against the collected data. The project is released under the Apache-2.0 license and can also be embedded as a library via its NuGet package.
