---
title: "Portabase"
link: "https://portabase.io"
github: "Portabase/portabase"
description: "A self-hosted backup and restore platform for MySQL, MariaDB, PostgreSQL, and other databases, with a central dashboard orchestrating lightweight Rust-based agents that run backups and restores next to each database."
subcategories:
  - Backup & Recovery
compatibility:
  - MySQL
  - MariaDB
deployment:
  - Self-Hosted
  - Docker
  - Kubernetes
pricing:
  - Open Source
images:
  - logo.png
---

Portabase pairs a central dashboard server with per-database agents: agents run next to each database instance and pull work from the server rather than accepting inbound connections, so backups and restores happen without exposing database credentials to the server directly. It supports MySQL 5.7, 8, and 9, and MariaDB 10 and 11, with restore supported for both, alongside PostgreSQL, SQLite, MongoDB, Microsoft SQL Server, Firebird, Redis, Valkey, Docker volumes, and file-based archives and snapshots.

The dashboard can be installed via an automated CLI, Docker Run, Docker Compose, Unraid Community Apps, or a Kubernetes Helm chart; agents are distributed as Docker images, a Helm chart, or source. The project is released under the Apache License 2.0, and some features (such as MSSQL backups as DACPAC) have been built through sponsor-funded development while remaining fully open source.
