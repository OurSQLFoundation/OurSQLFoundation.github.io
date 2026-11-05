---
title: "Grafana"
link: "https://grafana.com"
github: "grafana/grafana"
description: "An open-source monitoring and observability platform for dashboards and alerting, with a built-in MySQL data source and common use as the front end for MySQL metrics."
subcategories:
  - Monitoring & Observability
compatibility:
  - MySQL
  - MariaDB
deployment:
  - Self-Hosted
  - Docker
  - Kubernetes
pricing:
  - Open Source & Open Core
images:
  - logo.png
---

Grafana queries, visualizes, and alerts on metrics and logs wherever they're stored. In the MySQL world it plays two roles: its built-in MySQL data source runs SQL against a database and charts the results, and it's the usual dashboard layer for server metrics collected through [Prometheus MySQL Server Exporter](/resources/software/mysqld-exporter/). [Percona Monitoring and Management](/resources/software/percona-monitoring-and-management/) also builds on it.

Dashboards support template variables, ad-hoc exploration, and mixed data sources, and alert rules notify systems such as Slack and PagerDuty. Grafana is released under the AGPLv3 by Grafana Labs, which also offers commercial Enterprise and hosted editions.
