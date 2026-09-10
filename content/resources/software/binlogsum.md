---
title: "binlogsum"
link: "https://github.com/PrzemekMalkowski/binlogsum"
description: "A summarizer for decoded MySQL and MariaDB binary logs — turns mysqlbinlog output into per-table write statistics, GTID/transaction ranges, and writes-over-time histograms for diagnosing replication delay and unusual write activity."
subcategories:
  - Monitoring & Observability
  - Replication & High Availability
compatibility:
  - MySQL
  - MariaDB
deployment:
  - Self-Hosted
pricing:
  - Open Source
---

binlogsum reads the decoded output of `mysqlbinlog` and reports on what actually happened in a given window of binary log activity: time range covered, server versions and per-server event counts, GTID and transaction ID ranges, a breakdown of query types, and which tables received the most writes and when. It distinguishes tables that were actually updated in a transaction from ones merely referenced, and surfaces the original SQL when `binlog_rows_query_log_events` is enabled — useful for tracing down the cause of a replication lag spike or an unexpected burst of writes.

It supports both ROW and STATEMENT binlog formats and can output a terminal report with Unicode histograms, an interactive web UI with zoomable graphs, or a self-contained HTML snapshot for sharing. Like the author's other tools, it's pure Go with no external dependencies, built as a single static binary.
