---
title: "Spirit"
link: "https://github.com/block/spirit"
description: "A multi-threaded online schema-change and data-migration tool for MySQL 8.0+, built by Block (Cash App) as a faster reimplementation of gh-ost's approach."
subcategories:
  - Schema Management & Migration
compatibility:
  - MySQL
deployment:
  - Self-Hosted
pricing:
  - Open Source
---

Spirit runs schema changes and other row-copy operations against a live MySQL table by reading the binary log and applying changes in parallel, rather than tailing it single-threaded the way gh-ost does. Both the initial row-copy and the binlog-apply phases are multi-threaded, with the explicit goal of running large migrations as fast as possible while still favoring safety over speed when the two trade off.

Progress is checkpointed to an internal table as the migration runs, so an interrupted run resumes with only around a minute of lost progress instead of starting over. It requires MySQL 8.0 or later with `binlog_format=ROW` and `binlog_row_image=FULL`, and isn't intended for older MySQL versions or setups that need replicas to stay under 10 seconds of lag during the migration. Spirit is built and used in production by Block's Cash App engineering team and is released under the Apache License 2.0.
