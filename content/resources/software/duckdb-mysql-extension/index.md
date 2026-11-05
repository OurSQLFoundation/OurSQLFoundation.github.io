---
title: "DuckDB MySQL Extension"
link: "https://duckdb.org/docs/extensions/mysql"
github: "duckdb/duckdb-mysql"
description: "An official DuckDB extension that attaches a running MySQL database so DuckDB can read and write its tables directly with SQL."
subcategories:
  - Data Warehouse & Analytics
compatibility:
  - MySQL
  - DuckDB
pricing:
  - Open Source
images:
  - logo.png
---

The DuckDB MySQL extension makes a MySQL database accessible from DuckDB with a single `ATTACH` command. Its tables can then be queried in place, joined with other data DuckDB can read, or copied into DuckDB for analytical work, and DuckDB can write data back to MySQL as well.

Connection settings are passed as `key=value` pairs or read from the usual MySQL environment variables. The extension is maintained in the DuckDB GitHub organization and released under the MIT license.
