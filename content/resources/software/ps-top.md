---
title: "ps-top"
link: "https://github.com/sjmudd/ps-top"
description: "A top-like, real-time terminal monitor for MySQL built on performance_schema — load by table, file, user, mutex, and SQL stage."
subcategories:
  - Monitoring & Observability
compatibility:
  - MySQL
  - MariaDB
deployment:
  - Self-Hosted
pricing:
  - Open Source
---

ps-top reads MySQL's `performance_schema` and shows server load in real time, refreshed every second by default. Activity is broken down by table or file name and split between select, insert, update, and delete work, so you can see at a glance where the server is spending its time. It works with MySQL 5.6 and later, and with MariaDB once `performance_schema` is switched on (it's off by default there from 10.0.12).

It has seven views — table I/O latency, table I/O operations, file I/O latency, table lock latency, user activity (including how many distinct hosts connect under the same username), mutex latency, and SQL stage timings — which you cycle through with the Tab or arrow keys. The poll interval can be changed on the fly, and statistics can be shown either since ps-top started or last reset, or as the absolute values MySQL reports. An optional `~/.pstoprc` file can merge similarly named tables (for example, date-suffixed ones) into a single row.

ps-top only needs `SELECT` on the `performance_schema` tables. The mutex and stage views need `setup_instruments` to be enabled; ps-top will switch them on itself if the account has the grants and restores the original settings on exit. For credentials it reads `~/.my.cnf` or an explicit defaults file, accepts host, port, socket, and user options on the command line, and can prompt for a password or take a Go DSN from the environment so nothing sensitive lands in a process listing.

It's a single Go program, installed with `go install github.com/sjmudd/ps-top@latest`. Its author, [Simon J Mudd](/resources/member-directory/people/simon-j-mudd/), started it as a project to learn Go (the license is copyrighted 2014–2026) and it's still being developed — the latest tag, v1.2.2, dates from April 2026. It's released under the BSD 2-Clause license.
