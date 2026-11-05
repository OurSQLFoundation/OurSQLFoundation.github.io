---
title: "Databasus"
link: "https://databasus.com"
github: "databasus/databasus"
description: "A free, self-hosted backup tool for PostgreSQL, MySQL, MariaDB, and MongoDB with scheduling, retention policies, restore verification, encryption, and multiple storage destinations."
subcategories:
  - Backup & Recovery
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

Databasus wraps scheduled backups in a self-hosted web application. Jobs run on hourly, daily, weekly, monthly, or cron schedules, and retention can be set by age, count, or size. Backups go to local storage, S3, Cloudflare R2, Google Drive, NAS, Dropbox, SFTP, or Rclone, are protected with AES-256-GCM encryption, and can trigger notifications through email, Telegram, Slack, Discord, and other channels. Restore verification spins up a database container, runs a real restore, and reports the row count of each table.

The project started with PostgreSQL, which remains its main focus. For MySQL (5.7 through 26) and MariaDB (5.5 through 13) it takes logical backups only. It's released under the Apache 2.0 license.
