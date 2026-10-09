---
title: VillageSQL
link: https://www.villagesql.com/
github: villagesql/villagesql-server
description: An open-source, drop-in replacement tracking fork of MySQL that adds an extension framework for custom data types and functions — currently in alpha.
subcategories:
- Database Software
compatibility:
- MySQL
- Percona Server
deployment:
- Self-Hosted
- Docker
pricing:
- Open Source
images:
- logo.png
---

VillageSQL Server is an open-source tracking fork of MySQL, positioned by its makers as an innovation platform for MySQL. It aims to stay a drop-in replacement — no application code changes, with the same clients, drivers, tools, and ORMs, and a move from MySQL that amounts to dumping and importing your data. It currently tracks MySQL 8.4 and 9.7, and a Percona Server 8.4 build is published alongside the MySQL ones.

What it adds is the VillageSQL Extension Framework: extensions are packaged as bundles that you enable with standard SQL, such as `INSTALL EXTENSION vsql_uuid`, and they can add custom data types and functions without touching the server's core — an idea inspired by PostgreSQL's extension system but designed to fit MySQL. Custom index types are planned but not available yet. VillageSQL publishes a growing set of its own extensions: AI functions that call models from SQL and create embeddings, UUID, IPv6 and MAC address types, cryptographic and HTTP functions, a real `BOOLEAN`, geometric cube types, trigram and fuzzy string matching, a currency type, OAuth2/JWT account authentication, a REST endpoint generator, ClickHouse query telemetry, an MCP server that lets AI agents query the database, and a DuckDB extension that reads Parquet, CSV, and JSON in object storage. It also offers Agent Skills that help AI coding agents such as Claude Code, Codex, and Cursor set up VillageSQL and build extensions, and a hosted cloud service is listed as coming soon.

VillageSQL is **in alpha**: its README says it is meant for development and testing and is not yet recommended for production use, and to expect breaking changes. Known limitations include no custom index types yet, no built-in `SUM` or `AVG` over custom types, and no Windows build. The latest release is 0.0.6 (August 2026), and the roadmap is public on GitHub.

You can install it with a shell installer, a Docker image (`villagesql/server`, for both Intel and ARM, with tags for the Percona 8.4 build and for MySQL 9.7), or by building from source on Debian, Ubuntu, or macOS.

The server is released under the GPL-2.0 license, the same as MySQL, and is free for any use. It is developed by VillageSQL Inc., founded in 2025. Tomas Ulin, who is Village Oracle at VillageSQL, is the [Treasurer of the OurSQL Foundation](/resources/member-directory/people/tomas-ulin/), and the project lists the Foundation on its own site as one it supports.
