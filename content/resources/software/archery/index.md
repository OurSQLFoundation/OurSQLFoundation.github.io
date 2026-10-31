---
title: "Archery"
link: "https://archerydms.com"
github: "hhyo/Archery"
description: "A self-hosted SQL review and query platform for MySQL and MariaDB — workflow-gated DDL/DML review and execution, slow-log analysis, backup, and account/parameter management, with partial support for several other databases."
subcategories:
  - Security
  - Schema Management & Migration
compatibility:
  - MySQL
  - MariaDB
deployment:
  - Self-Hosted
  - Docker
pricing:
  - Open Source
---

Archery (SQL 审核查询平台, "SQL review and query platform") gives teams a workflow for proposing, reviewing, and executing schema and data changes before they reach a MySQL or MariaDB server, instead of running ad hoc SQL directly against production. Built on Django, it covers query review and execution, backup, a data dictionary, slow-query log analysis (via pt-query-digest and aquila_v2), session management, and account and parameter management, with review powered by the goInception and SOAR projects.

Partial support extends to Oracle, SQL Server, Redis, PostgreSQL, MongoDB, Phoenix, ODPS, ClickHouse, Cassandra, Doris, Elasticsearch, OpenSearch, Memcached, and TDengine, though MySQL and MariaDB have the broadest feature coverage. It's a secondary development of the archer project, maintained by hhyo and contributors, deploys via Docker or a manual install, and is released under the Apache-2.0 license.
