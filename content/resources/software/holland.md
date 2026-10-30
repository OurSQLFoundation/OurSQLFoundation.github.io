---
title: "Holland Backup"
link: "https://github.com/holland-backup/holland"
github: "holland-backup/holland"
description: "An open-source, Python backup framework originally developed by Rackspace, with a pluggable architecture providing dedicated MySQL and MariaDB backup methods — mysqldump, mysql_lvm, mysqlsh, xtrabackup, and mariabackup."
subcategories:
  - Backup & Recovery
compatibility:
  - MySQL
  - MariaDB
deployment:
  - Self-Hosted
pricing:
  - Open Source
---

Holland Backup Manager is a Python backup framework, originally built at Rackspace, aimed at making database backups more configurable and consistent across a fleet of servers rather than hand-rolling scripts per host. A central `holland` command reads config files and hands off the actual work to one of its backup plugins, so the same scheduling and retention logic applies no matter which underlying method is used.

For MySQL and MariaDB the project ships several interchangeable backup plugins: `holland.backup.mysqldump` and `holland.backup.mariadb_dump` for logical dumps, `holland.backup.xtrabackup` and `holland.backup.mariabackup` for Percona XtraBackup/MariaBackup-based physical hot backups, `holland.backup.mysql_lvm` for LVM-snapshot backups, and `holland.backup.mysqlsh` for MySQL Shell-based dumps. Other plugins cover PostgreSQL, MongoDB, and SQLite.

The core `holland-core` framework is released under the New (3-clause) BSD license, with individual plugins carrying their own licenses as noted in the repository's `LICENSE` file. The project has around 150 stars on GitHub and remains actively maintained, with commits as recent as March 2026.
