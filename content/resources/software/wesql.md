---
title: "WeSQL"
link: "https://github.com/wesql/wesql"
github: "wesql/wesql"
description: "A MySQL fork built around a compute-storage separation architecture — it replaces MySQL's local disk storage with S3-compatible object storage, aimed at serverless and Bring Your Own Cloud deployments."
subcategories:
  - Database Software
compatibility:
  - MySQL
deployment:
  - Cloud-Native
pricing:
  - Open Source
---

WeSQL is a MySQL distribution that separates compute from storage: binlogs, schema metadata, write-ahead logs, and data files are all kept as objects in S3 or an S3-compatible service rather than on local disk. The project's stated goal is for a clean, empty instance to connect to its S3 bucket, load existing data, and start serving immediately, so compute nodes become disposable and storage durability comes from the object store rather than local replicas.

It targets serverless and "Bring Your Own Cloud" use cases, where workloads need to scale compute up and down without carrying attached block storage along with it. WeSQL is developed by the same team behind the WeScale MySQL proxy (also listed in this directory), and the two projects are designed to be used together — WeScale handling read/write splitting and routing in front of a WeSQL (or regular MySQL) backend. The code is released under GPLv2, inherited from MySQL itself.
