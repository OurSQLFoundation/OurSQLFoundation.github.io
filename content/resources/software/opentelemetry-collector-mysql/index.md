---
title: "OpenTelemetry Collector MySQL Receiver"
link: "https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/receiver/mysqlreceiver"
github: "open-telemetry/opentelemetry-collector-contrib"
description: "The MySQL receiver for the OpenTelemetry Collector, which collects MySQL server metrics into vendor-neutral OpenTelemetry pipelines."
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

The MySQL receiver ships in the contrib distribution of the OpenTelemetry Collector. It queries MySQL for server statistics and emits them as OpenTelemetry metrics, so they can flow to any compatible backend alongside traces and logs. Metrics collection is at beta stability, and log collection is in development.

It's part of the OpenTelemetry project and released under the Apache 2.0 license.
