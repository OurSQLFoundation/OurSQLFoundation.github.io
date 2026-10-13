---
description: VillageSQL is the Innovation Platform for MySQL. It is a drop-in replacement for MySQL that adds an extension framework (similar to PostgreSQL's extension framework).
link: https://www.villagesql.com/
github: villagesql/villagesql-server
subcategories:
- Database Software
compatibility:
- MySQL
- Percona Server
deployment:
- Self-Hosted
- Docker
- Cloud (coming soon)
pricing:
- Open Source
title: VillageSQL Server
images:
  - logo.png
---

VillageSQL Server is an open-source tracking fork that is a drop-in replacement for MySQL. It introduces an extension framework (similar to PostgreSQL's extension framework), to enable permissionless innovation. Instead of waiting for a feature to be implemented in a few years in a future version of MySQL, new functionality can be dynamically added to a version of MySQL you run today.

While MySQL supports, and has benefited from, a plugin architecture and a component framework, we believe extensions offer a more holistic and structured approach to extending the database.

What it adds is the VillageSQL Extension Framework: extensions are packaged as bundles that you enable with standard SQL, such as `INSTALL EXTENSION vsql_uuid`, and they can add custom data types and functions without touching the server's core — an idea inspired by PostgreSQL's extension system but designed to fit MySQL. Custom index types are planned but not available yet. VillageSQL publishes a growing set of its own extensions: AI functions that call models from SQL and create embeddings, UUID, IPv6 and MAC address types, cryptographic and HTTP functions, a real `BOOLEAN`, geometric cube types, trigram and fuzzy string matching, a currency type, OAuth2/JWT account authentication, a REST endpoint generator, ClickHouse query telemetry, an MCP server that lets AI agents query the database, and a DuckDB extension that reads Parquet, CSV, and JSON in object storage. It also offers Agent Skills that help AI coding agents such as Claude Code, Codex, and Cursor set up VillageSQL and build extensions, and a hosted cloud service is listed as coming soon.

VillageSQL is **in alpha**: its README says it is meant for development and testing and is not yet recommended for production use, and to expect breaking changes. Known limitations include no custom index types yet, no built-in `SUM` or `AVG` over custom types, and no Windows build. The latest release is 0.0.6 (August 2026), and the roadmap is public on GitHub.

It currently tracks MySQL 8.4 and 9.7, and a Percona Server 8.4 build is published alongside the MySQL ones. You can install it with a shell installer, a Docker image (`villagesql/server`, for both Intel and ARM, with tags for the Percona 8.4 build and for MySQL 9.7), or by building from source on Debian, Ubuntu, or macOS.

The server is released under the GPL-2.0 license, the same as MySQL, and is free for any use. It is developed by VillageSQL Inc., founded in 2025. The project lists the OurSQL Foundation on its own site as one it supports.
