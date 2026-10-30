---
title: "Databasement"
link: "https://github.com/David-Crty/databasement"
github: "David-Crty/databasement"
description: "A self-hosted, web-UI database backup manager for MySQL, MariaDB, PostgreSQL, SQL Server, MongoDB, SQLite, Firebird, and Redis, with scheduling, SSH-tunnel and firewalled-network support, and cross-server restore."
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

Databasement is a single-container application that backs up and restores a MySQL, MariaDB, PostgreSQL, SQL Server, MongoDB, SQLite, Firebird, or Redis/Valkey server from a web interface, using the native dump tool for each engine (`mysqldump`/`mariadb-dump` for MySQL and MariaDB). It can reach databases behind a bastion host over an SSH tunnel, or in a firewalled network through a lightweight outbound-only remote agent that dumps locally and uploads to storage.

Backups can be scheduled daily or weekly with time-based or GFS (grandfather-father-son) retention, compressed with gzip or zstd, or encrypted with AES-256, and stored locally, on S3-compatible storage, Azure Blob Storage, Samba/SMB, or SFTP/FTP. It also supports cross-server and scheduled restores (for example, refreshing a staging database from production nightly), multi-tenant organizations with role-based access control and OAuth/SSO login, and a REST API plus an MCP server for scripting and AI-assistant integration. It's released under the MIT license and deploys as a single Docker container, via Docker Compose, or on Kubernetes through a Helm chart.
