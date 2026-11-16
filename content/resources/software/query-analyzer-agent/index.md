---
title: "Query Analyzer Agent"
link: "https://github.com/linkedin/QueryAnalyzerAgent"
github: "linkedin/QueryAnalyzerAgent"
description: "A LinkedIn-built Go agent that captures and analyzes MySQL queries by sniffing the database server's network port, with negligible performance overhead, and aggregates results into a remote MySQL store for review."
subcategories:
  - Monitoring & Observability
compatibility:
  - MySQL
deployment:
  - Self-Hosted
pricing:
  - Open Source
images:
  - logo.png
---

Query Analyzer Agent runs alongside the database server and captures all queries by sniffing the network interface with `libpcap`, rather than hooking into MySQL itself, so it adds no measurable overhead to the server it watches. It aggregates queries by hostname and checksum/fingerprint and either writes them to a local log file or sends them to a remote MySQL database — the project ships the schema for a partitioned `query_analyzer` database with `query_info` and `query_history` tables — so results collected from many agents can be reviewed, annotated, and marked reviewed in one place.

Written in Go, it builds on [GoPacket](https://github.com/google/gopacket) for packet capture, [Percona's go-mysql](https://github.com/percona/go-mysql) libraries for parsing the MySQL protocol, and [Viper](https://github.com/spf13/viper) for its TOML configuration (the interface, port, and remote-database connection details). LinkedIn describes the motivation and design in its [engineering blog post](https://engineering.linkedin.com/blog/2017/09/query-analyzer--a-tool-for-analyzing-mysql-queries-without-overh). It's released under the BSD 2-Clause license.
