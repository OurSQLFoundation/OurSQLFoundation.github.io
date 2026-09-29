---
title: "MySQLTuner"
link: "https://github.com/major/MySQLTuner-perl"
description: "A Perl script that reviews a live MySQL, MariaDB, or Percona Server installation and produces a weighted health score plus concrete configuration recommendations for performance, security, and resilience."
subcategories:
  - Monitoring & Observability
  - Security
compatibility:
  - MySQL
  - MariaDB
  - Percona Server
  - Galera
pricing:
  - Open Source
images:
  - logo.png
---

MySQLTuner connects to a running server and reviews around 900 indicators — system resources, storage engines (InnoDB, MyISAM, Aria, TokuDB), connections, replication and Galera Cluster status, security settings, and schema modeling — then reports a Weighted Health Score alongside specific tuning suggestions. It runs read-only and never modifies the server itself; output can be plain text, an HTML dashboard, or JSON, and it also exposes an MCP server mode for AI-agent integration.

Started by Major Hayden and actively maintained on GitHub, MySQLTuner is released under the GPL-3.0 license and requires only Perl 5.6+ and read access to the target server.
