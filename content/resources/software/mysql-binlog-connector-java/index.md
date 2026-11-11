---
title: "mysql-binlog-connector-java"
link: "https://github.com/osheroff/mysql-binlog-connector-java"
description: "A Java library that reads the MySQL binary log like a replica, maintained as osheroff's fork of shyiko's original project with help from the Debezium developers."
subcategories:
  - Replication & High Availability
  - Connectors & Drivers
compatibility:
  - MySQL
pricing:
  - Open Source
---

mysql-binlog-connector-java connects to MySQL as a replica and streams binary log events to Java applications, which makes it a building block for change data capture tools. It supports features such as `binlog_checksum=CRC32` for MySQL 5.6.2 and later.

This fork, published under the `com.zendesk` Maven group, is described in its README as probably the "official" version of the original project.
