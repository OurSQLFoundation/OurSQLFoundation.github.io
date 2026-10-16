---
title: "Percona Binary Log Server"
link: "https://github.com/Percona-Lab/percona-binlog-server"
description: "A command-line utility from Percona Lab that streams MySQL or Percona Server binary log events to local disk or S3-compatible storage, acting as an enhanced, resumable replication client."
subcategories:
  - Backup & Recovery
  - Replication & High Availability
compatibility:
  - MySQL
  - Percona Server
deployment:
  - Self-Hosted
pricing:
  - Open Source
images:
  - logo.png
---

Percona Binary Log Server (`binlog_server`) connects to a remote Oracle MySQL or Percona Server instance as a replication client and streams binary log events to a local directory or to S3-compatible object storage such as MinIO, reconnecting automatically and resuming from where it left off. Its `pull` mode also runs a MySQL-compatible listener, so `mysqlbinlog --read-from-remote-server` and position-based replicas can read events back from it — useful as a durable binlog archive or as an intermediary between a primary and its replicas.

Besides continuous streaming, it offers `list`, `search_by_timestamp`, and `search_by_gtid_set` commands to inspect stored binlogs, and `purge_binlogs` to delete old ones. GTID-mode storage and checkpoint-based encryption are supported, though GTID-based replicas (`SOURCE_AUTO_POSITION=1`) aren't yet. It's written in C++23, maintained under Percona Lab — Percona's incubator for experimental and community tools — and released under GPLv2.
