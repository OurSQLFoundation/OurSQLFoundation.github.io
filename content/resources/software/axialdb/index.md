---
title: "AxialDB"
link: "https://axialdb.com/"
description: "A proprietary analytical engine that reads the MySQL binlog itself and keeps fast columnar copies of the tables your reports use, current as they change, so BI tools can query them in plain SQL without a pipeline or warehouse. Free for up to 5 tables."
subcategories:
  - Data Warehouse & Analytics
compatibility:
  - MySQL
deployment:
  - Self-Hosted
pricing:
  - Commercial
  - Free
---

AxialDB keeps a columnar copy of the tables your reports use and answers the heavy queries from that copy, so they stay off the production server. You create a table with SQL as a snapshot, taken once, or as a live table that follows the MySQL binlog, typically within a few seconds. Your databases stay the system of record and AxialDB never writes to them. The engine reads the binlog itself, using its own open-source library, [ce-stream](https://github.com/AxialDB/ce-stream), so there is no broker or separate change-capture tool to run.

It reads MySQL 9.7 servers with nothing installed on them, and MongoDB 8.0+ replica sets, so one query can join a MySQL table to a MongoDB collection. You query it from the `axialdb` command line, from Tableau and Power BI over ODBC, or from DBeaver over JDBC. An optional MySQL plugin adds `CREATE TABLE ... ENGINE=AXIALDB` and ordinary `SELECT` from inside MySQL; it needs a MySQL 9.7 server you run yourself, so it does not work on Amazon RDS or Aurora.

AxialDB is proprietary, and the engine's source is not published. The free download, for Windows x64 and Linux x64, does not expire and is limited to 5 tables, 2 of them live; a license file lifts the caps and is how a support agreement is made. The project publishes its own measurements, including a 3.92-million-row query that took 47.6 s as a MySQL join and 0.067 s on an AxialDB table, and notes that results will differ on your data.
