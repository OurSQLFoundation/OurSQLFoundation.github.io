---
title: "Dolphie"
link: "https://github.com/charles-001/dolphie"
description: "A terminal \"single pane of glass\" for real-time analytics into MySQL, MariaDB, and ProxySQL — with graphs, a live processlist, and session record and replay."
subcategories:
  - Monitoring & Observability
compatibility:
  - MySQL
  - MariaDB
  - Percona Server
  - RDS MySQL
  - Galera
  - Group Replication
deployment:
  - Self-Hosted
  - Docker
pricing:
  - Open Source
images:
  - logo.png
---

Dolphie is a terminal application for watching a MySQL, MariaDB, or [ProxySQL](/resources/software/proxysql/) server in real time. Its panels cover a dashboard of key metrics, a live processlist, graphs, replication status, metadata locks, DDL, Performance Schema metrics, and statement summaries, with ProxySQL-specific panels such as hostgroup summaries. Several servers can be monitored at once in tabs or as a configured hostgroup, and credentials can be kept in named profiles, a `.my.cnf`, or `mysql_config_editor` login paths. When it runs on the same machine as the server it also shows CPU, load, memory, swap, and network usage.

What sets it apart is **record and replay**: a session can be recorded to a ZSTD-compressed SQLite file and played back later, navigating the data as if it were live at the exact moment you need to investigate. A **daemon mode** runs with no interface at all, recording continuously so that the data around a stall or incident is already captured; the replay file is a plain SQLite database that other tools can read.

It supports MySQL and Percona Server 5.6, 5.7, 8.x, and 9.x, MariaDB 5.5, 10.0, and 11.0 and later, and ProxySQL 2.6 and up, including Amazon RDS and Aurora and Azure managed servers. Its integration tests run against real servers and multi-node topologies including Group Replication, Galera, and InnoDB ClusterSet. It needs only a handful of privileges — `SELECT` on `performance_schema` and `REPLICATION CLIENT` at minimum, with `PROCESS` for the classic processlist and `SUPER` only if you want to kill queries — and can use the timestamp from [pt-heartbeat](/resources/software/percona-toolkit/) for replication lag.

Dolphie requires Python 3.10 or later and installs with `pip`, `uv`, Homebrew, or a Docker image. It was created by Charles Thompson, is actively maintained — release 6.18.0 came out in September 2026 — and is released under the GPL-3.0 license.
