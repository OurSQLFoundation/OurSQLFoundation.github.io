---
title: "IONOS Cloud DBaaS for MariaDB"
link: "https://docs.ionos.com/cloud/databases/mariadb"
description: "A fully managed MariaDB service on the German IONOS Cloud, with clusters of up to five instances, automatic failover, backup retention of up to a year, and Terraform support."
subcategories:
  - Managed Databases
cloud-providers:
  - IONOS Cloud
compliance:
  - GDPR
pricing:
  - Pay-as-you-go
compatibility:
  - MariaDB
images:
  - logo.png
---

IONOS Cloud's Database as a Service includes a managed MariaDB offering, which IONOS describes as MySQL-compatible. Clusters are created in the Data Center Designer, the API, or with the `ionoscloud_mariadb_cluster_v2` Terraform resource, and can run up to five instances: a primary and secondaries that are promoted automatically on failover. Replication between them is asynchronous, so a failover can lose the most recent committed transactions.

Each cluster runs inside the customer's private network on a chosen IP, with a configurable maintenance window and backup retention from 1 to 365 days. The current v2 service recommends MariaDB 10.11 or later; v1 clusters were migrated automatically before their August 2026 decommissioning. IONOS is a German provider and runs the service in its European data centers.
