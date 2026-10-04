---
title: "Galera Cluster"
link: "https://galeracluster.com/"
github: "codership/galera"
description: "A synchronous multi-master replication library for MySQL, MariaDB, and Percona Server — every node accepts reads and writes, with no replication lag and no lost transactions on failover."
subcategories:
  - Replication & High Availability
compatibility:
  - MySQL
  - MariaDB
  - Percona Server
deployment:
  - Self-Hosted
pricing:
  - Open Source
images:
  - logo.png
---

Galera Cluster, developed by Codership, replicates transactions synchronously across every node via certification-based replication: a transaction only commits once every node has validated ("certified") it against conflicting writes in-flight elsewhere in the cluster, which removes the replication lag and lost-transaction windows inherent to traditional asynchronous MySQL replication. Any node accepts both reads and writes, cluster membership is managed automatically, and a failed node is simply dropped from the cluster rather than triggering a manual failover.

It's released under the GPLv2 license and ships as a loadable wsrep provider plugin rather than a standalone server. Galera is the clustering engine underneath both MariaDB Galera Cluster and Percona XtraDB Cluster, and can also be built directly against upstream MySQL via the companion codership/mysql-wsrep repository.
