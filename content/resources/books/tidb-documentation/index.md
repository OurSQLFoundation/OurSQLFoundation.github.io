---
title: "TiDB Documentation"
link: "https://docs.pingcap.com/tidb/stable/"
description: "PingCAP's official documentation for TiDB — installation and cluster administration, the SQL reference, the MySQL-protocol compatibility notes, data migration from MySQL, and performance tuning, maintained across dev and stable release lines."
authors:
  - PingCAP
subcategories:
  - Documentation Portals
topics:
  - Administration
  - Migration
  - Development
audiences:
  - DBA
  - Developer
pricing:
  - Free
images:
  - cover.png
---

The TiDB docs cover deploying and operating a TiDB cluster (TiUP, Kubernetes via TiDB Operator, and manual deployment), the SQL language reference, and TiDB's storage and execution architecture (TiKV, PD, TiFlash). A dedicated MySQL-compatibility page documents exactly which parts of the MySQL 5.7/8.0 protocol and syntax TiDB implements and which it doesn't (for example, stored procedures and MySQL's native replication protocol), so teams migrating from MySQL can check feature-by-feature compatibility before cutting over.

Each release line (the `dev` branch and each stable LTS release, currently 8.5) has its own version of the docs, and the migration section covers moving data in from an existing MySQL instance using TiDB's own tooling.
