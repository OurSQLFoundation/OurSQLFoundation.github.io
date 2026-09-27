---
title: "Percona Operator for MySQL"
link: "https://docs.percona.com/percona-operator-for-mysql/ps/index.html"
github: "percona/percona-server-mysql-operator"
description: "A Kubernetes operator built on Percona Server for MySQL — automates deploying, scaling, and managing highly available MySQL clusters with group replication or asynchronous replication."
subcategories:
  - DevOps & Deployment
compatibility:
  - Percona Server
  - MySQL
deployment:
  - Kubernetes
pricing:
  - Open Source
images:
  - logo.png
---

The operator automates day-to-day cluster lifecycle work on Kubernetes: deploying group-replication MySQL clusters behind HAProxy or MySQL Router, exposing them through standard Kubernetes Services, customizing MySQL configuration, and managing system user passwords. It also wires clusters up to Percona Monitoring and Management for observability out of the box.

Group-replication clusters reached General Availability as of operator version 1.0.0; a second topology using Orchestrator and HAProxy for asynchronous replication is still in tech preview and not recommended for production. The project is released under the Apache License 2.0 and follows the Operator SDK/CNCF conventions, installable via `kubectl` bundle files or an official Helm chart.
