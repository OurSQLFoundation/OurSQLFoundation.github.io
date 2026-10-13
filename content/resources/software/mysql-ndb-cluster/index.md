---
title: "MySQL NDB Cluster"
link: "https://dev.mysql.com/doc/refman/8.0/en/mysql-cluster-overview.html"
description: "Oracle's official shared-nothing, in-memory distributed storage engine and clustering technology for MySQL — built for very high availability and horizontal scaling, with no single point of failure."
subcategories:
  - Database Software
  - Replication & High Availability
compatibility:
  - MySQL
deployment:
  - Self-Hosted
pricing:
  - Free
  - Open Source
images:
  - logo.png
---

MySQL NDB Cluster combines the standard MySQL server with NDB, an in-memory clustered storage engine, to form a shared-nothing distributed database. Management nodes, SQL/API nodes, and data nodes each run as separate processes, and data is automatically partitioned and replicated — two replicas per partition by default — across data nodes, so no single node failure interrupts service.

It targets workloads that need very high availability and predictable, low-latency reads and writes at scale; it originated for telecom session and subscriber databases and has since been used in other high-throughput, high-availability deployments. It's distributed as part of the MySQL Community offering under GPLv2 — alongside a Carrier Grade Edition with Oracle commercial support — and ships its own release lines (including an 8.4 LTS track) in step with the core MySQL server.
