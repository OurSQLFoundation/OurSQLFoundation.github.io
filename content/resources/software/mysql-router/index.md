---
title: "MySQL Router"
link: "https://dev.mysql.com/doc/mysql-router/en/"
description: "Oracle's official lightweight routing proxy for MySQL — sits between applications and a MySQL InnoDB Cluster, ReplicaSet, or ClusterSet, directing each connection to the right backend server so client applications don't need to track cluster topology themselves."
subcategories:
  - Proxies & Traffic Management
compatibility:
  - MySQL
  - Group Replication
deployment:
  - Self-Hosted
pricing:
  - Free
  - Open Source
images:
  - logo.png
---

MySQL Router is middleware that provides transparent routing between an application and the MySQL servers behind it, most commonly a MySQL InnoDB Cluster running on Group Replication. Applications connect to the Router instead of to individual database instances; the Router tracks the cluster's topology and forwards each connection to the correct PRIMARY or SECONDARY node, so client code doesn't have to implement failover logic itself.

It also sits in front of InnoDB ReplicaSet and InnoDB ClusterSet deployments, and is typically bootstrapped against a running cluster right after installation. It ships as part of the standard MySQL Community distribution, released under GPLv2, and follows the same release cadence as the MySQL server — current builds track the 8.4 LTS and 9.x/Innovation release lines.
