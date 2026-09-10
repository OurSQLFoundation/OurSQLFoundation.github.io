---
title: "innodump"
link: "https://github.com/PrzemekMalkowski/innodump"
description: "An offline reader for InnoDB tablespace files (.ibd, ibdata1) across MySQL 5.6–8.4 and MariaDB — reconstructs CREATE TABLE statements and extracts row data via direct B+tree traversal, without a running database server."
subcategories:
  - Backup & Recovery
compatibility:
  - MySQL
  - MariaDB
deployment:
  - Self-Hosted
pricing:
  - Open Source
---

innodump reads InnoDB tablespace files — file-per-table `.ibd` files or the shared `ibdata1` — directly off disk, reconstructing `CREATE TABLE` statements from embedded SDI dictionary information or `.frm` files, then walking the B+tree to extract row data. It handles every InnoDB row format (DYNAMIC, COMPACT, REDUNDANT, COMPRESSED) and understands `INSTANT ADD/DROP COLUMN` history, and can recover deleted-but-not-yet-purged rows with a `--deleted-only` flag. Output is either SQL `INSERT` statements or MySQL Shell-compatible TSV, for a single file or recursively across a directory, with a `--skip-corrupted` option to tolerate damaged pages.

It's explicitly read-only and, per the author, "not a backup tool" — it's meant for consistent snapshots (a stopped server, `FLUSH TABLES ... FOR EXPORT`, or an existing backup), offering best-effort data recovery from files that are no longer attached to a live server, not a substitute for one that is. Written in Go with no external dependencies, GPL-3.0-or-later licensed.
