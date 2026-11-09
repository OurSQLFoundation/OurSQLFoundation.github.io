---
title: "NAVER Cloud DB for MySQL"
link: "https://guide.ncloud-docs.com/docs/en/clouddbformysql-overview"
description: "A fully managed MySQL service on NAVER Cloud Platform, with configuration tuned by NAVER's own services, daily backups, up to ten read replicas behind a load balancer, and automatic failover."
subcategories:
  - Managed Databases
cloud-providers:
  - NAVER Cloud
pricing:
  - Pay-as-you-go
compatibility:
  - MySQL
images:
  - logo.png
---

Cloud DB for MySQL is the managed MySQL service of NAVER Cloud Platform, the cloud arm of South Korea's largest internet company. It ships with MySQL settings that NAVER has validated on its own services, so databases are tuned for stable operation without extra configuration.

Data is backed up daily at a time the customer chooses, and restores create a new server from the backup. The high-availability option pairs a master with a standby master and fails over automatically, and up to ten replicas can be attached behind a load balancer to spread read traffic. Dashboards cover MySQL and operating-system metrics and per-server query statistics, with event rules for alerts and integration with external monitoring tools. The service is available in both NAVER Cloud's Classic and VPC environments.
