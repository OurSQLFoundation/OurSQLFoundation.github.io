---
title: "sql-tap"
link: "https://github.com/proto-tap/sql-tap"
description: "A real-time SQL traffic viewer that sits as a proxy between an application and PostgreSQL, MySQL, or TiDB, with terminal and web clients for inspecting queries and transactions."
subcategories:
  - Monitoring & Observability
compatibility:
  - MySQL
  - TiDB
pricing:
  - Open Source
images:
  - logo.png
---

sql-tap runs as a proxy daemon in front of the database and captures every query that passes through it, then displays them in an interactive terminal UI or web client. You can inspect queries, view transactions, and run `EXPLAIN` without changing application code, which makes it handy for seeing what an ORM actually sends.

It's written in Go and released under the MIT license.
