---
title: "Railway MySQL"
link: "https://docs.railway.com/databases/mysql"
description: "A MySQL database on the Railway app platform — deployed from a Railway-maintained template, with optional high-availability clusters and seven days of point-in-time recovery."
subcategories:
  - Developer Platforms
pricing:
  - Pay-as-you-go
  - Free Tier Available
compatibility:
  - MySQL
---

Railway is an application platform where a MySQL database is added to a project from a template that Railway maintains: it deploys a single MySQL node from the official Docker image and exposes connection details as environment variables. Databases are private by default, with optional public access through a TCP proxy. Changing the template's image, start command, or variables makes the database yours to manage.

An existing MySQL service can be converted into a high-availability cluster with automatic failover, built on Group Replication and HAProxy. Turning on continuous binlog archiving enables point-in-time recovery to any moment in the last seven days. Railway bills per second for the CPU, memory, and disk a service uses, on top of a plan fee, and offers a free trial and a free plan.
