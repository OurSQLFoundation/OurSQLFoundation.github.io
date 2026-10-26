---
title: "MyCat"
link: "https://github.com/MyCATApache/Mycat-Server"
github: "MyCATApache/Mycat-Server"
description: "An open source Java database middleware that shards MySQL across nodes behind a single MySQL-protocol endpoint — the project DBLE was forked from. Its last release, 1.6.76, was in November 2020."
subcategories:
  - Sharding & Horizontal Scaling
  - Proxies & Traffic Management
compatibility:
  - MySQL
deployment:
  - Self-Hosted
pricing:
  - Open Source
---

MyCat is an open source "large database cluster" middleware written in Java. It presents a single MySQL-compatible endpoint to applications and shards data across backend database nodes, with the stated goal of migrating a stand-alone database to a scaled-out setup at low cost and relieving the bottleneck caused by fast growth in data volume.

MyCat is the origin of [DBLE](/resources/software/dble/), which ActionTech forked to focus on MySQL only. The Mycat-Server repository carries the 1.6 line; its last tagged release, 1.6.76, dates from November 2020, with later commits continuing in the repository. A successor project, Mycat2, built on Apache Calcite, published its last release in June 2022. The project's documentation is mostly in Chinese.
