---
title: "MySQL Advisor"
link: "https://nitty-witty.com/mysql-advisor"
description: "A web-based configuration analyzer that reviews MySQL, MariaDB, and Percona server output for performance and security issues and returns prioritized, severity-ranked recommendations."
subcategories:
  - Monitoring SaaS
  - Security & Compliance SaaS
compatibility:
  - MySQL
  - MariaDB
  - Percona Server
---

Built by MySQL consultant Kedar Vaijanapurkar to automate the first-pass configuration review he used to run by hand on every client engagement, MySQL Advisor analyzes the output of `SHOW GLOBAL VARIABLES` and `SHOW GLOBAL STATUS` — pasted or uploaded as text — without ever connecting to the database itself, so it's safe to run against production.

It runs roughly 150 checks across 19 categories (InnoDB memory, replication, security, clustering, and more), version-aware for MySQL 5.6–8.4, MariaDB 10.x–11.x, and Percona variants including XtraDB Cluster (Galera) and Group Replication. Findings come back ranked Critical / Warning / Info / OK, exportable as HTML, Markdown, or Word, with an optional REST API for automating the same checks in a pipeline.
