---
title: "SchemaBot"
link: "https://github.com/block/schemabot"
github: "block/schemabot"
description: "A GitOps schema-migration tool from Block — SQL files in your repo are the source of truth, and SchemaBot plans and applies the diff against MySQL, Vitess on PlanetScale, or (early alpha) PostgreSQL through pull requests or a CLI."
subcategories:
  - Schema Management & Migration
compatibility:
  - MySQL
  - Vitess
deployment:
  - Self-Hosted
  - Kubernetes
pricing:
  - Open Source
images:
  - logo.png
---

SchemaBot is declarative and GitOps-driven: SQL files in a repository act as the shared source of truth across environments. It compares those files against a database's live schema, shows the exact diff, and applies the change through a pull-request workflow or a CLI — importing an existing database's schema into declarative files on first run rather than requiring it to be written out by hand.

For MySQL, schema changes are generally available and run through [Spirit](https://github.com/block/spirit), using instant DDL where supported and an online copy when needed; Vitess on PlanetScale is also generally available, driven through PlanetScale deploy requests with per-shard progress. PostgreSQL support is an early alpha. The PR workflow supports configurable review gates, a promotion order across environments (e.g. staging before production), and lint checks that flag destructive changes before they can be applied.

Block (formerly Square) runs SchemaBot for the majority of its own production schema changes, including MySQL tables spanning terabytes and Vitess databases with hundreds of shards. It's released under the Apache-2.0 license, and distributed as release binaries, a `ghcr.io/block/schemabot` container image, and a Helm chart.
