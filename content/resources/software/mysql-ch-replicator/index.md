---
title: "mysql_ch_replicator"
link: "https://github.com/bakwc/mysql_ch_replicator"
description: "A tool for real-time replication of MySQL databases to ClickHouse, with support for migrations and schema changes."
subcategories:
  - Replication & High Availability
  - Data Warehouse & Analytics
compatibility:
  - MySQL
deployment:
  - Docker
pricing:
  - Open Source
---

mysql_ch_replicator keeps a ClickHouse database in sync with MySQL with a delay of around five seconds. It batches heavily and moves slow parts, such as MySQL's internal JSON parsing, into a C++ extension, which its README puts at about 20,000 events per second on a single core.

It's written in Python and released under the MIT license.
