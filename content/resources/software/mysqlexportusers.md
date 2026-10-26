---
title: "mysqlexportusers"
link: "https://dbabrabo.com.br/"
github: "acaciolr/dbabrabo_mysqlexportusers"
description: "A MySQL Shell extension that exports users, roles, and privileges as idempotent SQL, generates REVOKE statements for rollback and auditing, and converts MariaDB account syntax to MySQL — with no external dependencies."
subcategories:
  - Database Software
compatibility:
  - MySQL
pricing:
  - Open Source
---

mysqlexportusers, published as DBA BRABO, is a MySQL Shell extension written in pure Python that exports accounts, roles, and grants as SQL that is safe to replay between environments (dev, staging, prod) and ready to keep in Git, with deterministic ordering. It is loaded from the MySQL Shell init directory and used from Python mode, with no external dependencies.

It fills gaps left by `util.dumpInstance()`, which already exports users, roles, and grants but writes only to a directory, is not idempotent, and cannot filter a single user or host. mysqlexportusers can write a single SQL file with `CREATE USER IF NOT EXISTS`, filter by user or host, and produce a security metadata dump in the same layout as `util.dumpInstance()` without overwriting the Shell's own manifest, plus a JSON inventory of authentication plugins, locks, and SSL settings. A revoke mode reads `SHOW GRANTS` and generates matching `REVOKE` statements for rollback or auditing, and an option converts MariaDB account syntax to MySQL, similar to the `--convert-MariaDB` option of Percona Toolkit's `pt-show-grants`.

The author lists MySQL 8.0, 8.4, and 9.4 as tested, with MySQL Shell 8.0 or later required. MySQL 5.7 testing is pending, and MariaDB is supported as an input only through the conversion option. The README marks the project as beta and licenses it under MIT, copyright Acacio LR. The linked dbabrabo.com.br is the DBA BRABO database mentoring site.
