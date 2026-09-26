---
title: "Canal"
link: "https://github.com/alibaba/canal"
description: "Alibaba's MySQL binlog subscribe-and-consume component — it disguises itself as a MySQL replica to pull and parse binlog events for real-time data sync, cache invalidation, and search-index updates."
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

Canal works by sending a MySQL master the same dump protocol handshake a real replica would, then reading and parsing the resulting binlog stream — giving downstream systems a low-latency feed of every row-level change without querying the source database directly. Typical uses include cross-datacenter mirroring, cache and search-index invalidation, and feeding change events into custom processing pipelines, with official client libraries for Java, Go, C#, PHP, Python, Rust, and Node.js talking to the canal server over Protocol Buffers.

It's developed by Alibaba and released under the Apache License 2.0, with an optional web admin console (canal-admin) for managing multiple canal instances. It officially supports MySQL 5.1 through 8.0.
