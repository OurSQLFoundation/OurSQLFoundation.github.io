---
title: "gcache-inspector"
link: "https://github.com/PrzemekMalkowski/gcache-inspector"
description: "An offline reader for Galera's write-set cache (GCache) files on Percona XtraDB Cluster and MariaDB Galera Cluster, summarizing per-table activity and decoding write-sets into row-level output without a database connection."
subcategories:
  - Monitoring & Observability
  - Replication & High Availability
compatibility:
  - MariaDB
  - Percona Server
  - Galera
deployment:
  - Self-Hosted
pricing:
  - Open Source
---

gcache-inspector parses Galera's GCache write-set cache files directly, without connecting to a running cluster, which makes it useful for diagnosing replication issues on nodes that are stopped, crashed, or otherwise unreachable. It identifies which tables were modified, attributes each write-set to its Galera sequence number, and derives timestamps from the binlog commit data embedded in the cache — producing an activity summary of inserts, updates, deletes, DDL, and bytes per table.

For deeper inspection, it can decode individual write-sets into row-level output comparable to `mysqlbinlog`, with a seqno range selector for targeting specific spans of activity. It auto-detects MySQL v2 vs. MariaDB v1 row event formats rather than assuming a fixed layout, and supports encrypted caches via keyring files or HashiCorp Vault. It's a static Go binary with no external dependencies.
