---
title: "TiDB Operator"
link: "https://github.com/pingcap/tidb-operator"
description: "The official Kubernetes operator for TiDB — automates deploying, scaling, upgrading, and managing TiDB clusters as cloud-native workloads."
subcategories:
  - DevOps & Deployment
compatibility:
  - TiDB
deployment:
  - Kubernetes
pricing:
  - Open Source
images:
  - logo.png
---

TiDB Operator manages the full lifecycle of a TiDB cluster on Kubernetes — provisioning PD, TiKV, and TiDB components, handling rolling upgrades and scaling, automating backup and restore, and integrating with Kubernetes-native monitoring. It's installed via an official Helm chart and is how most self-managed TiDB clusters are run in production rather than deploying the components by hand.

It's developed by PingCAP under the Apache 2.0 license, with documentation available in English and Simplified Chinese. The project's main branch tracks the newer v2 line of the operator, alongside a maintained `release-1.x` branch for the earlier v1 API.
