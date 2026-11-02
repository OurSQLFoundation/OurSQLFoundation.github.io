---
title: "usql"
link: "https://github.com/xo/usql"
description: "A universal command-line interface for SQL and NoSQL databases, modeled on PostgreSQL's psql — connect to MySQL, MariaDB, Percona Server, TiDB, and Vitess (plus dozens of other engines) through one interactive shell."
subcategories:
  - Database Management & GUI
compatibility:
  - MySQL
  - MariaDB
  - Percona Server
  - TiDB
  - Vitess
pricing:
  - Open Source
images:
  - logo.png
---

usql is a single command-line client for SQL (and some NoSQL) databases, with an interactive shell modeled on PostgreSQL's `psql` — tab completion, multiple simultaneous connections, and the ability to copy data between different database engines in one session.

MySQL is a base driver included in every build, reached via the `mysql://` scheme or its `my`, `maria`, `mariadb`, `aurora`, and `percona` aliases (for example `usql my://user:pass@host/dbname`), and the same driver also connects to MySQL-compatible engines through the `tidb` and `vitess` schemes. It installs from prebuilt release binaries, Homebrew (`xo/xo/usql`), the Arch AUR, `go install`, or the official `xo/usql` Docker image; the `most` build tag adds most of the other stable drivers. It has no server component of its own and is released under the MIT license.
