---
title: Releem
link: https://releem.com/
github: Releem/releem-agent
description: A database advisor for MySQL, MariaDB, and PostgreSQL — a cloud service that analyzes metrics from an open-source agent and recommends configuration, query, index, and schema changes.
subcategories:
- Monitoring SaaS
cloud-providers:
- AWS
- GCP
- Azure
compatibility:
- MySQL
- MariaDB
- Percona Server
pricing:
- Subscription
images:
- logo.png
---

Releem is a database advisor delivered as a cloud service. A small open-source agent runs next to your database and sends metrics to Releem's cloud platform, which analyzes your workload around the clock, flags performance, reliability, and security risks, ranks what matters first, recommends what to change, and then checks the effect of each change. Its stated aim is to turn monitoring signals into decisions rather than to add another dashboard.

Its main areas are workload-based MySQL configuration tuning with a history of changes, SQL query analytics and optimization with index suggestions, schema optimization (such as duplicate and unused indexes), health checks that feed a Releem Score, plus monitoring, a process list, deadlock detection, and weekly email reports. The same company also publishes an open-source MySQL Memory Calculator that estimates the maximum memory a configuration can use. You get a first set of recommended settings within 24 hours of adding a server.

Releem is built to keep you in control. Nothing is applied automatically: a recommended configuration is applied only when you press "Apply Now" or run a command, or on a schedule you set up with a cron job during a maintenance window, and a rollback is available. Applying a configuration restarts MySQL. The agent needs no inbound ports and sends data over HTTPS. According to Releem, it collects system and MySQL status and variables, schema and table structure, index usage, and query execution statistics with placeholders and `EXPLAIN` plans for the top queries — but not the contents of your tables. It needs root access to install.

It supports MySQL 5.5 through 8.x, MariaDB 10.1 through 11.0, Percona Server 5.5 through 8.x, and PostgreSQL 15 through 18, including InnoDB Cluster, Galera Cluster, and Percona XtraDB Cluster. Installation is a single command on common Linux distributions such as Debian, Ubuntu, RHEL and its derivatives, and on Windows Server. It also works with Amazon RDS (MySQL, MariaDB, and Aurora, including Aurora Serverless), Google Cloud SQL for MySQL, and Azure Database for MySQL; DigitalOcean managed databases are not supported yet.

Releem is sold as a subscription priced per database server, with a 14-day free trial, a plan for hosting providers, and a Business tier for larger deployments. The agent itself is written in Go, released under the GPL-3.0 license, and actively developed — version 1.25.4 came out in September 2026. Releem, Inc. also runs a community on Slack and maintains the `awesome-mysql-performance` list of tuning resources.
