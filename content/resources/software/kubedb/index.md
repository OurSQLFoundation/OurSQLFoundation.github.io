---
title: "KubeDB"
link: "https://kubedb.com/"
description: "AppsCode's Kubernetes operator for provisioning and operating production databases — including MySQL, MariaDB, and Percona Server for MySQL — as Kubernetes Custom Resources, with automated backups, failover, monitoring, and in-place upgrades."
subcategories:
  - DevOps & Deployment
compatibility:
  - MySQL
  - MariaDB
  - Percona Server
deployment:
  - Kubernetes
pricing:
  - Open Source & Open Core
images:
  - logo.png
---

KubeDB turns MySQL, MariaDB, and Percona Server for MySQL into Kubernetes-native resources: a database is declared as a custom resource, and the operator handles provisioning, configuration, failure detection and repair, and in-place version upgrades. It installs as a set of Helm charts (the API types live in `kubedb/apimachinery`, the installer and `kubectl` plugin in separate repositories) maintained by AppsCode, and it's actively developed — commits across its component repos land on most days.

The core operator code is Apache 2.0 licensed, but running KubeDB requires a license key supplied at install time (a free community license is available, alongside paid commercial tiers), putting it in the open-core model rather than being fully unrestricted open source. It's part of a broader AppsCode product line that also includes KubeStash for Kubernetes-native backups.
