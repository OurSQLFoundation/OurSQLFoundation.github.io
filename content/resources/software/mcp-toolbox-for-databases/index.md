---
title: "MCP Toolbox for Databases"
link: "https://github.com/googleapis/mcp-toolbox"
github: "googleapis/mcp-toolbox"
description: "Google's open source Model Context Protocol server that connects AI agents and IDEs to databases, with prebuilt tools for Cloud SQL for MySQL, self-hosted MySQL, and MariaDB."
subcategories:
  - AI & Ecosystem Skills
compatibility:
  - MySQL
  - MariaDB
deployment:
  - Self-Hosted
  - Cloud-Native
  - Docker
pricing:
  - Open Source
images:
  - logo.png
---

MCP Toolbox for Databases (formerly "Gen AI Toolbox for Databases") is an MCP server from Google's `googleapis` GitHub organization that gives MCP clients — Gemini CLI, Claude Code, Codex, and others — direct, structured access to a database. Running it with `--prebuilt=mysql` instantly exposes prebuilt tools such as `list_tables` and `execute_sql` for MySQL, Cloud SQL for MySQL, or MariaDB, alongside built-in connection pooling, IAM-based authentication, and OpenTelemetry tracing. A separate `tools.yaml`-driven framework lets teams define their own restricted, structured-query tools instead of handing an agent raw SQL access.

Beyond MySQL and MariaDB, the same server supports PostgreSQL, SQL Server, Oracle, MongoDB, Redis, Elasticsearch, CockroachDB, Snowflake, and several Google Cloud databases (AlloyDB, BigQuery, Spanner, Firestore), with official SDKs for Python, JavaScript/TypeScript, Go, and Java. It's released under the Apache 2.0 license.
