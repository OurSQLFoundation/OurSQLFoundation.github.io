---
title: "Faucet"
link: "https://faucetdb.ai"
github: "faucetdb/faucet"
description: "An open-source single-binary server that introspects a SQL database and generates a REST API, OpenAPI docs, and an MCP server for AI agents — MySQL is one of its supported databases."
subcategories:
  - AI & Ecosystem Skills
  - Security
compatibility:
  - MySQL
  - MariaDB
deployment:
  - Self-Hosted
  - Docker
pricing:
  - Open Source
images:
  - logo.png
---

Faucet is a single Go binary that connects to a SQL database, introspects its schema, and generates a full CRUD REST API, OpenAPI 3.1 documentation, and an MCP server at runtime — without code generation or an ORM. Alongside PostgreSQL, SQL Server, Oracle, Snowflake, and SQLite, it supports MySQL (5.7–9.x, including Amazon RDS/Aurora MySQL and PlanetScale) and MariaDB (10.2–11.x, via the MySQL driver).

Access is governed by role-based access control (RBAC) and API keys, and the project ships a built-in admin UI for browsing connected databases, schema, and the generated API. Its MCP server lets AI agents and app builders — Claude, Cursor, VS Code, Windsurf, and ChatGPT — query a database through those same roles. Faucet is released under the MIT license and is also distributed as a Docker image.
