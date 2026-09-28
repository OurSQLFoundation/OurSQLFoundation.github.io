---
title: "DigitalOcean Managed MySQL"
link: "https://docs.digitalocean.com/products/databases/mysql/"
description: "Fully managed MySQL clusters on DigitalOcean — daily backups with point-in-time recovery, encryption in transit and at rest, and optional standby nodes for automatic failover, billed with flat monthly pricing."
subcategories:
  - Managed Databases
cloud-providers:
  - DigitalOcean
compliance:
  - SOC 2
pricing:
  - Pay-as-you-go
compatibility:
  - MySQL
images:
  - logo.png
---

DigitalOcean handles provisioning, daily backups with a 7-day point-in-time recovery window, software patching, and encryption for MySQL clusters, without charging separately for bandwidth to managed databases. Single-node clusters start at $15/month for development and testing; high-availability clusters start at $30/month per node with a matching standby node for automatic failover, and read-only replicas can be added in different regions and billed separately. Storage beyond the included allowance is billed per GiB in 10 GiB increments.

Managed Databases are covered by DigitalOcean's SOC 2 Type II audit, with data encrypted at rest via LUKS and connections enforced over TLS/SSL.
