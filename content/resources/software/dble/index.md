---
title: "DBLE"
link: "https://opensource.actionsky.com"
github: "actiontech/dble"
description: "An open source middleware for MySQL sharding from ActionTech: it speaks the MySQL protocol, spreads tables across MySQL nodes, and supports distributed transactions with two-phase commit. Its last release was in November 2023."
subcategories:
  - Sharding & Horizontal Scaling
  - Proxies & Traffic Management
compatibility:
  - MySQL
deployment:
  - Self-Hosted
  - Docker
pricing:
  - Open Source
images:
  - logo.png
---

DBLE (pronounced "double") is a high-scalability middleware for MySQL sharding, maintained by ActionTech, a Shanghai company. It is the open source edition of ActionTech's commercial distributed database product, CTREE Shard. DBLE is based on MyCat; ActionTech dropped support for other databases to focus on MySQL, and reworked compatibility, complex queries, and distributed transactions.

Applications connect to DBLE as if it were MySQL, and in most cases the project says no application code changes are needed. DBLE routes queries across sharded MySQL nodes and handles complex SQL such as group by, order by, distinct, joins, and unions, with optimizations for joining global tables to sharded tables. Distributed transactions use two-phase commit, in a normal mode for performance or an XA mode for data safety, and several DBLE servers can run as a cluster so a single node failure does not stop the service.

Project status: the latest release, 3.23.08.0, was published in November 2023, and the last commit to the main branch was in June 2025, so the project is in maintenance mode. DBLE is one of the five sharding solutions compared in Percona's open [MySQL sharding benchmark](https://github.com/Percona-Lab/mysql-sharding-testing).
