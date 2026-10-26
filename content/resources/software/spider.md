---
title: "Spider (MariaDB)"
link: "https://mariadb.com/docs/server/server-usage/storage-engines/spider/spider-storage-engine-overview"
description: "A storage engine with built-in sharding for MariaDB Server: it lets tables on different MariaDB instances be handled as if they were on one, using partitions mapped to remote backends."
subcategories:
  - Sharding & Horizontal Scaling
  - Database Software
compatibility:
  - MariaDB
deployment:
  - Self-Hosted
pricing:
  - Open Source
---

Spider is a storage engine for MariaDB Server, not a standalone product. A Spider table links to a table on a remote server, which can use any storage engine, so tables of different MariaDB instances can be handled as if they were on the same instance.

Sharding is set up with partitioning: a Spider table uses `PARTITION BY KEY`, and each partition is assigned to a remote backend server. Connection details go in the table's `COMMENT` or `CONNECTION` clause, and from MariaDB 10.8.1 they can also be defined with `CREATE SERVER` and the `REMOTE_SERVER`, `REMOTE_DATABASE`, and `REMOTE_TABLE` table options. Spider supports XA transactions, so a transaction that spans backends is committed with two-phase commit. It is one possible implementation of ISO/IEC 9075-9:2008 SQL/MED.

Spider's built-in high-availability feature was deprecated in MariaDB 10.7.5 and removed; MariaDB recommends replication or Galera Cluster instead. MariaDB notes that its Spider documentation is incomplete and points to the Spider project's own documentation. Spider is one of the five sharding solutions compared in Percona's open [MySQL sharding benchmark](https://github.com/Percona-Lab/mysql-sharding-testing).
