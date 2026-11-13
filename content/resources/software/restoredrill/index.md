---
title: "restoredrill"
link: "https://github.com/ahmadpiran/restoredrill"
description: "A CLI that proves your PostgreSQL or MySQL backups actually restore: it restores the latest backup into a throwaway Docker container, runs the checks you define, and writes a timestamped JSON evidence report for SOC 2, ISO 27001, or AWS FTR audits."
subcategories:
  - Backup & Recovery
  - Testing & Benchmarking
compatibility:
  - MySQL
deployment:
  - Self-Hosted
  - Docker
pricing:
  - Open Source
---

restoredrill runs restore tests in tiers: prechecks on the backup file itself (size, readable header, RPO freshness), structural checks that the restore completed and tables/sequences came back correctly, read-path checks (row counts, data freshness, custom SQL assertions), and RTO timing against a target. For MySQL it checks `mysqldump` SQL dumps and verifies that views, triggers, events, and routines don't reference a `DEFINER` account that no longer exists. It can also skip the restore step and just run checks against a database another tool already restored.

The JSON report it produces is the deliverable: every field (trigger source, backup file selected, RPO/RTO numbers, validation errors) is always present, formatted for copying directly into an audit packet. As of this writing it's early-stage (v0.4.4), covers PostgreSQL plus MySQL 8 from `mysqldump` files, and is released under the MIT license.
