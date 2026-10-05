---
title: "dbdeployer"
link: "https://github.com/ProxySQL/dbdeployer"
description: "Deploys single, replicated, or Galera MySQL/MariaDB/Percona Server sandboxes locally in seconds, for development and testing — no root access or Docker required."
subcategories:
  - Testing & Benchmarking
  - DevOps & Deployment
compatibility:
  - MySQL
  - MariaDB
  - Percona Server
  - Galera
deployment:
  - Self-Hosted
pricing:
  - Open Source
---

dbdeployer unpacks a MySQL, MariaDB, or Percona Server tarball and spins up single instances, master/replica replication topologies, Group Replication, Galera/PXC clusters, or InnoDB Cluster — each one isolated in its own directory with its own ports, so multiple versions and flavors can run side by side on one machine. It's a Go rewrite of the older Perl-based MySQL-Sandbox, built by Giuseppe Maxia.

The project is now maintained by the ProxySQL team (with Maxia's blessing), with CI that tracks compatibility across MySQL 5.6 through 9.5, MariaDB 10.11/11.8, and Percona Server/PXC 8.0 and 8.4, including ProxySQL-fronted deployments. It's released under the Apache 2.0 license.
