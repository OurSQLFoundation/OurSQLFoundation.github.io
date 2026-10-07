---
title: "Readyset"
link: "https://readyset.io"
github: "readysettech/readyset"
description: "A transparent, MySQL- and Postgres-compatible SQL caching layer that sits in front of your database and keeps cached query results up to date from the replication stream."
subcategories:
  - Proxies & Traffic Management
compatibility:
  - MySQL
  - RDS MySQL
deployment:
  - Self-Hosted
  - Docker
pricing:
  - Free
  - Commercial
images:
  - logo.png
---

Readyset is a caching layer that sits between an application and its database and speaks the MySQL and PostgreSQL wire protocols, so it can be adopted by changing a connection string, with no application rewrite and no hand-written cache invalidation. It caches the queries you choose and proxies everything else straight through to the database, working with your existing ORM or client.

It offers two kinds of cache. *Deep* caches are dataflow-based: Readyset snapshots your tables and then follows the database's replication stream, updating cached results incrementally as the underlying data changes. *Shallow* caches are simpler and TTL-based, served without snapshotting or replication. The company also offers a managed Readyset Cloud and Readyset QueryPilot, which automates query caching for AI-generated workloads.

For MySQL it supports version 8.0 and later, alongside PostgreSQL 13 and later, and it is generally available on self-hosted servers, Amazon RDS, and Aurora, with Azure, Google Cloud SQL, Supabase, and Aiven at alpha level. It's written in Rust and runs from a Docker image or a Linux binary (the binary is recommended for production), with a one-line quickstart script for trying it out.

Readyset is released under the Business Source License 1.1, which is source-available rather than open source: production use is free as long as your aggregate deployment stays within 2 GB of RAM across all instances and you aren't offering it as a managed service, larger deployments need a commercial license from ReadySet, Inc., and each version converts to Apache 2.0 four years after it is published. The project is actively developed — the latest stable release, `stable-260924`, shipped in September 2026.
