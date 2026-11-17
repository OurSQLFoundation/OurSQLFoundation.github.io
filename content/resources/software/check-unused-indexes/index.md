---
title: "check_unused_indexes"
link: "https://github.com/Percona-Lab/check_unused_indexes"
description: "A Percona Lab tool that flags an index as unused only when every node in a MySQL replication topology agrees, including Aurora readers."
subcategories:
  - Schema Management & Migration
  - Monitoring & Observability
compatibility:
  - MySQL
  - RDS MySQL
pricing:
  - Open Source
images:
  - logo.png
---

Statistics from a single server can make an index look unused when a replica still relies on it for reporting. check_unused_indexes discovers the replication topology from the primary and reports an index only if it's unused on all nodes. It also skips indexes that back foreign keys, warns about recently restarted nodes, and generates `ALTER INDEX ... INVISIBLE` statements by default so changes are easy to roll back.

It's written in Python and released under the Apache 2.0 license.
