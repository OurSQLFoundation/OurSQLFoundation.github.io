---
title: "AWS Database Migration Service"
link: "https://aws.amazon.com/dms/"
description: "AWS's managed migration and ongoing-replication service, used to move data into or out of MySQL and MariaDB with minimal downtime, billed hourly with no upfront commitment."
subcategories:
  - Migration & Replication SaaS
cloud-providers:
  - AWS
pricing:
  - Pay-as-you-go
compatibility:
  - MySQL
  - MariaDB
images:
  - logo.png
---

AWS Database Migration Service (DMS) migrates databases to AWS and keeps them in sync afterward, using a replication instance that reads changes from the source and applies them to the target — AWS's migration playbooks list MySQL and MariaDB among its supported sources and targets, alongside engines like Oracle, SQL Server, and PostgreSQL. A serverless option scales replication capacity automatically and bills for what's actually used, instead of a fixed-size replication instance running continuously.

Billing is pay-as-you-go with no upfront purchase: usage-based charges cover the replication instance (or serverless capacity), data transfer, and any extra storage, metered for as long as the migration or ongoing replication task runs.
