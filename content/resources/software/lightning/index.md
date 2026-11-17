---
title: "lightning"
link: "https://github.com/LianjiaTech/lightning"
description: "A MySQL binlog conversion tool from Beike's DBA team that turns ROW-format binlogs into original SQL, flashback SQL, and statistics."
subcategories:
  - Replication & High Availability
  - Backup & Recovery
compatibility:
  - MySQL
pricing:
  - Open Source
images:
  - logo.png
---

lightning reads MySQL ROW-format binary logs and generates the original SQL or flashback SQL to roll back mistaken changes, such as an `UPDATE` or `DELETE` without a `WHERE` clause. It can also report which tables change most often, and it can load schema information from SQL files without connecting to MySQL. Its main documentation is in Chinese, with an English README.

It's released under the Apache 2.0 license.
