---
title: "Signal 18 Replication Manager"
link: "https://signal18.io/products/srm"
github: "signal18/replication-manager"
description: "An open-source replication topology monitor and automated failover manager for MySQL, MariaDB, and Percona Server clusters, with proxy integration and a NOC-style dashboard."
subcategories:
  - Replication & High Availability
  - Monitoring & Observability
compatibility:
  - MySQL
  - MariaDB
  - Percona Server
deployment:
  - Self-Hosted
  - Kubernetes
pricing:
  - Open Source
images:
  - logo.png
---

Signal 18's Replication Manager (repman) monitors MySQL, MariaDB, and Percona Server replication topologies in real time — async, semi-sync, multi-source, multi-master, mesh, wsrep (Galera), Group Replication, and delayed replication — with GTID-aware topology detection.

When a primary fails, it can run automated failover or a controlled, scheduled switchover, and integrates with ProxySQL, MariaDB MaxScale, HAProxy, and Spider so traffic is redirected automatically. Its dashboard includes a full-screen NOC slideshow for watching multiple clusters at once, integrated WebTTY terminal sessions, backup and alerting, and REST/gRPC APIs with role-based access control. Since version 3.1.43 it also supports PostgreSQL clusters, with active-passive, WAL streaming, and logical replication topologies.

It's developed and supported by SIGNAL18 CLOUD SAS, deploys on OpenSVC or Kubernetes (including init containers), and is released under the GPL-3.0 license.
