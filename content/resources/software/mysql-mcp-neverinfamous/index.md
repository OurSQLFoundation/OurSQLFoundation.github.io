---
title: "mysql-mcp"
link: "https://github.com/neverinfamous/mysql-mcp"
github: "neverinfamous/mysql-mcp"
description: "An MCP server that gives AI agents MySQL tools for CRUD, JSON, spatial, and document-store operations, plus a token-saving \"Code Mode\" that runs agent-written JavaScript in a sandboxed V8 isolate instead of chaining dozens of narrow tool calls."
subcategories:
  - Database Management & GUI
  - AI & Ecosystem Skills
compatibility:
  - MySQL
pricing:
  - Open Source
---

mysql-mcp exposes MySQL databases to AI coding assistants over the Model Context Protocol, with specialized tools for CRUD, JSON, spatial, and MySQL Document Store operations, and resources for monitoring schema, performance, replication, and InnoDB diagnostics. Its "Code Mode" lets an agent write JavaScript that runs in a sandboxed V8 isolate against the available tools in one call, which the project reports as a large reduction in token usage compared to calling each tool individually.

It supports stdio and HTTP transports (including stateless HTTP and SSE), bearer-token or OAuth 2.1 authentication, per-client tool filtering, and Prometheus metrics. Beyond a local MySQL server, it documents connecting to MySQL on Docker and on cloud services such as AWS RDS, Google Cloud SQL, Azure Database for MySQL, PlanetScale, and DigitalOcean, as well as ecosystem components including InnoDB Cluster, Group Replication, MySQL Router, ProxySQL, and MySQL Shell. The project is MIT-licensed, requires Node.js 24+, and can be installed via npm/pnpm, run with `npx`, or used through Docker.
