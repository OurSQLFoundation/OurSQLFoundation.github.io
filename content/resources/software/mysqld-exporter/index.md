---
title: "Prometheus MySQL Server Exporter"
link: "https://github.com/prometheus/mysqld_exporter"
description: "The official Prometheus exporter for MySQL and MariaDB server metrics — global status and variables, InnoDB engine status, replication state, and Performance Schema data."
subcategories:
  - Monitoring & Observability
compatibility:
  - MySQL
  - MariaDB
deployment:
  - Self-Hosted
  - Docker
pricing:
  - Open Source
images:
  - logo.png
---

mysqld_exporter connects to a MySQL or MariaDB server with a dedicated, minimally-privileged account (`PROCESS, REPLICATION CLIENT, SELECT`) and exposes its metrics — global status and variables, InnoDB engine status, replication/slave status, and optional Performance Schema and `information_schema` collectors — on an HTTP endpoint that Prometheus can scrape. Individual collectors can be toggled on or off with `--collect.*` flags, and it ships with example Grafana dashboards and Prometheus alerting rules.

It supports MySQL 5.6+ and MariaDB 10.3+, is released under the Apache 2.0 license, and is maintained as an official exporter under the Prometheus GitHub organization. It runs as a standalone binary or as the `prom/mysqld-exporter` Docker image, and is one of the most widely deployed building blocks for MySQL observability stacks that don't use a full commercial monitoring platform.
