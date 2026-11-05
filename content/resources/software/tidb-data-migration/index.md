---
title: "TiDB Data Migration (DM)"
link: "https://docs.pingcap.com/tidb/stable/dm-overview"
github: "pingcap/tiflow"
description: "PingCAP's platform for full data migration and incremental replication from MySQL or MariaDB to TiDB."
subcategories:
  - Replication & High Availability
compatibility:
  - MySQL
  - MariaDB
  - TiDB
deployment:
  - Self-Hosted
pricing:
  - Open Source
images:
  - logo.png
---

TiDB Data Migration (DM) handles both the initial copy of data and ongoing incremental replication from MySQL or MariaDB into TiDB. It's developed in the `tiflow` repository alongside TiCDC, which replicates change data to downstream systems such as MySQL protocol-compatible databases and Kafka.

It's released under the Apache 2.0 license.
