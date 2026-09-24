---
title: "Percona XtraDB Cluster"
link: "https://github.com/percona/percona-xtradb-cluster"
github: "percona/percona-xtradb-cluster"
description: "A synchronous, multi-master MySQL clustering solution built on Galera replication, developed by Percona as a high-availability alternative to standalone MySQL."
subcategories:
  - Replication & High Availability
  - Database Software
compatibility:
  - MySQL
  - Percona Server
  - Galera
deployment:
  - Self-Hosted
pricing:
  - Open Source
images:
  - logo.png
---

Percona XtraDB Cluster combines Percona Server for MySQL with Galera replication to provide synchronous, multi-master clustering: writes committed on one node are certified and applied on every other node in the cluster before the transaction returns, so any node can be read from or written to and a node failure doesn't require manual failover. Galera itself is bundled as a submodule of the project rather than an external dependency to install separately.

It's released under the GPLv2 license and developed and maintained by Percona alongside Percona Server for MySQL and Percona XtraBackup, which it uses for state transfers (SST) between cluster nodes.
