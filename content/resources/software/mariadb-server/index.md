---
title: "MariaDB Server"
link: "https://mariadb.org"
github: "MariaDB/server"
description: "An open-source relational database forked from MySQL by its original developers, maintained by the MariaDB Foundation and MariaDB plc, with MySQL wire-protocol compatibility, pluggable storage engines, and built-in Galera clustering."
subcategories:
  - Database Software
  - Replication & High Availability
compatibility:
  - MySQL
  - MariaDB
  - Galera
deployment:
  - Self-Hosted
  - Docker
pricing:
  - Open Source
images:
  - logo.png
---

MariaDB Server began as a fork of MySQL led by the original MySQL developers and has grown into its own database while maintaining a high degree of MySQL wire-protocol and syntax compatibility, making it a straightforward migration target for existing MySQL deployments. It ships pluggable storage engines — InnoDB (the transactional default), Aria, MyRocks, the ColumnStore analytical engine, the Spider sharding engine, and S3 for archival — alongside a native `VECTOR` type with HNSW approximate-nearest-neighbour indexing since 11.8, common table expressions, window functions, system-versioned (temporal) tables, and an Oracle SQL compatibility mode with PL/SQL-style stored routines.

Replication options range from asynchronous and semi-synchronous to parallel replication with global transaction IDs, alongside Galera synchronous multi-primary clustering. It's released under GPLv2, follows a yearly long-term-support release model (three years of maintenance) alongside quarterly rolling releases, and is distributed as native packages for major platforms as well as official Docker images.
