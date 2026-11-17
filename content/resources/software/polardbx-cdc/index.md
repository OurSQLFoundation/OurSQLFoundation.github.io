---
title: "PolarDB-X CDC"
link: "https://github.com/polardb/polardbx-cdc"
description: "The PolarDB-X component that generates a global binary log compatible with MySQL and can act as a MySQL replica."
subcategories:
  - Replication & High Availability
compatibility:
  - MySQL
deployment:
  - Self-Hosted
pricing:
  - Open Source
images:
  - logo.png
---

PolarDB-X CDC merges the binary logs from all [PolarDB-X](/resources/software/polardb-x/) data nodes into one global, ordered stream that is fully compatible with the MySQL binary log format, so existing MySQL binlog tools can consume it. It also implements the MySQL replication protocol, so it can serve as a MySQL replica.
