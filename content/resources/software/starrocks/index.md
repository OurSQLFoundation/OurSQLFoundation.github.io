---
title: "StarRocks"
link: "https://www.starrocks.io/"
github: "StarRocks/starrocks"
description: "An open-source MPP analytical database with native MySQL wire-protocol support, built for sub-second queries over local tables and data-lake tables alike."
subcategories:
  - Data Warehouse & Analytics
  - Database Software
compatibility:
  - MySQL
deployment:
  - Self-Hosted
  - Kubernetes
  - Docker
  - Cloud-Native
pricing:
  - Open Source
images:
  - logo.png
---

StarRocks is a vectorized, massively parallel processing (MPP) SQL engine built for real-time analytics: a fully-customized cost-based optimizer, primary-key tables that support concurrent upserts and deletes, and query federation across Apache Hive, Iceberg, Delta Lake, and Hudi without moving data out of the lake first. Because it implements the MySQL wire protocol, standard MySQL clients, drivers, and BI tools connect to it directly with no special connector.

It's released under the Apache 2.0 license and governed as a Linux Foundation project. Clusters deploy via Helm/a Kubernetes operator, Docker, or bare metal, and a separate shared-data architecture mode decouples compute from object storage for cloud-native setups.
