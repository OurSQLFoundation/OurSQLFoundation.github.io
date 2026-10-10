---
title: "MariaDB ColumnStore"
link: "https://github.com/mariadb-corporation/mariadb-columnstore-engine"
github: "mariadb-corporation/mariadb-columnstore-engine"
description: "MariaDB's columnar storage engine for analytical workloads — plugs into MariaDB Server to run large aggregations and scans over massively parallel, distributed storage instead of the row-oriented InnoDB/Aria engines."
subcategories:
  - Data Warehouse & Analytics
compatibility:
  - MariaDB
deployment:
  - Self-Hosted
pricing:
  - Open Source
images:
  - logo.png
---

MariaDB ColumnStore stores data by column rather than by row, so queries that scan or aggregate across a small number of columns in a large table — the typical analytical query — read far less data off disk than a row-store engine would. It was built by porting InfiniDB onto MariaDB Server and adding new distributed-storage and parallel-processing capabilities on top, splitting work across separate user-module (UM) and performance-module (PM) processes that can scale out across multiple nodes.

Because it's a storage engine rather than a separate database, ColumnStore tables live inside an ordinary MariaDB Server instance alongside InnoDB or Aria tables, queried with standard SQL over the same connection. The engine is released under GPLv2 and is maintained by MariaDB Corporation as part of the mariadb-corporation GitHub organization; its source isn't meant to be built standalone outside of a MariaDB Server build.
