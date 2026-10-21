---
title: "Bitpoke MySQL Operator"
link: "https://github.com/bitpoke/mysql-operator"
github: "bitpoke/mysql-operator"
description: "A Kubernetes operator, built on Percona Server for MySQL and Orchestrator, for deploying and running highly available MySQL clusters with scheduled backups and point-in-time recovery."
subcategories:
  - Replication & High Availability
  - DevOps & Deployment
compatibility:
  - Percona Server
deployment:
  - Kubernetes
pricing:
  - Open Source
images:
  - logo.png
---

Bitpoke's MySQL Operator manages the resources needed to run a highly available MySQL cluster on Kubernetes: a cluster-per-service deployment model, scheduled and on-demand backups with point-in-time recovery, and cloning both within and across clusters. It installs via a Helm chart that deploys the controller together with an [Orchestrator](https://github.com/openark/orchestrator) cluster for replication topology management and failover.

It's built on Percona Server for MySQL (5.7 and 8.0) rather than stock MySQL or MariaDB — the README cites Percona's backup locks, monitoring, and serviceability improvements (such as the utility user) as the reason, while keeping the deployment a drop-in replacement. The operator was originally built by [Bitpoke](https://www.bitpoke.io/) to run its own cloud-native WordPress hosting and was later open-sourced; it's released under the Apache 2.0 license, with Bitpoke also offering paid commercial support for it separately.
