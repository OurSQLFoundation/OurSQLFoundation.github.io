---
title: "MySQL Operator for Kubernetes"
link: "https://dev.mysql.com/doc/mysql-operator/en/"
github: "mysql/mysql-operator"
description: "Oracle's official Kubernetes operator for MySQL — automates deploying and managing MySQL InnoDB Cluster, InnoDB ReplicaSet, and InnoDB ClusterSet topologies, including upgrades and backups."
subcategories:
  - DevOps & Deployment
compatibility:
  - MySQL
deployment:
  - Kubernetes
pricing:
  - Free
  - Open Source
images:
  - logo.png
---

The MySQL Operator for Kubernetes manages the full lifecycle of MySQL high-availability setups on Kubernetes: it provisions InnoDB Cluster, InnoDB ReplicaSet, and InnoDB ClusterSet deployments from custom resources, then handles in-place upgrades, configuration changes, and backups without manual intervention. It's installable via plain `kubectl` manifests or an official Helm chart, and it's built and maintained by the MySQL team at Oracle alongside the server itself.

It's part of the MySQL Community distribution and released under GPLv2.
