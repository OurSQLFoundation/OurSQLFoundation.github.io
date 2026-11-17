---
title: "WAL-G"
link: "https://github.com/wal-g/wal-g"
description: "An archival and restoration tool for PostgreSQL, MySQL and MariaDB, and SQL Server that stores compressed backups in cloud storage."
subcategories:
  - Backup & Recovery
compatibility:
  - MySQL
  - MariaDB
pricing:
  - Open Source
images:
  - logo.png
---

WAL-G, the successor of WAL-E, takes backups and archives logs to object storage, with LZ4, LZMA, ZSTD, or Brotli compression and parallel processing. MySQL and MariaDB use a dedicated `wal-g-mysql` binary, with support for delta backups.

It's released under the Apache 2.0 license, except for LZO support, which is under GPLv3 or later.
