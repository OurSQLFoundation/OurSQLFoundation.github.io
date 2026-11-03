---
title: "Grafana Cloud MySQL Integration"
link: "https://grafana.com/docs/grafana-cloud/observe-and-act/monitor-infrastructure/integrations/integration-reference/integration-mysql/"
description: "Grafana Cloud's MySQL integration — collects MySQL metrics and logs with Grafana Alloy and ships two pre-built dashboards and 15 alerts."
subcategories:
  - Monitoring SaaS
cloud-providers:
  - Multi-Cloud
pricing:
  - Pay-as-you-go
  - Free Tier Available
compatibility:
  - MySQL
  - MariaDB
---

The MySQL integration for Grafana Cloud collects MySQL server metrics through the Prometheus MySQL exporter built into Grafana Alloy, and MySQL log files through Alloy, sending both to Grafana Cloud. It includes two pre-built dashboards (MySQL and MySQL logs) and 15 alerts, such as replication lag and slow queries, and can also be deployed on Kubernetes with the Kubernetes Monitoring Helm chart.

It supports MySQL 5.6 and later and MariaDB 10.2 and later. Grafana Cloud has an always-free tier (10k active metric series and 50 GB of logs per month, 14-day retention), a Pro tier with a $19 monthly platform fee plus usage, and Enterprise plans.
