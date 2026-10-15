---
title: "ClusterControl"
link: "https://severalnines.com/clustercontrol"
description: "Agentless database-cluster management software from Severalnines that deploys, monitors, manages, and scales MySQL, MariaDB, and Galera clusters from a single UI, with a free Community edition and paid Advanced/Enterprise tiers."
subcategories:
  - DevOps & Deployment
  - Database Management & GUI
compatibility:
  - MySQL
  - MariaDB
  - Percona Server
  - Galera
deployment:
  - Self-Hosted
  - Docker
pricing:
  - Free
  - Commercial
images:
  - logo.png
---

ClusterControl is Severalnines' database-cluster management platform. Its `cmon` controller backend deploys, monitors, manages, and scales database clusters from a web UI, covering MySQL, MariaDB, Galera Cluster, PostgreSQL, and other open-source databases alongside some proprietary engines. For MySQL-family deployments it handles cluster deployment, automated failover and node recovery, backup scheduling (via mysqldump, Percona XtraBackup, or Mariabackup), and performance/query monitoring.

It ships as a single binary across Community, Advanced, and Enterprise editions — the Community edition is free with no time limit and covers deployment and monitoring, while paid tiers add features such as advanced backup management, scaling, and load-balancer deployment. New installs get a 30-day trial with full Enterprise functionality before reverting to Community. It's installed via a self-hosted shell installer on RHEL/Rocky/AlmaLinux, Ubuntu, Debian, or SLES (x86_64), or run from an official Docker image.
