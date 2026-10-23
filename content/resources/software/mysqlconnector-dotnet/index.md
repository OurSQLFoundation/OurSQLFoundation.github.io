---
title: "MySqlConnector"
link: "https://mysqlconnector.net/"
github: "mysql-net/MySqlConnector"
description: "A clean-room ADO.NET data provider for MySQL, MariaDB, and other compatible servers — an open-source, fully async alternative to Oracle's official MySQL Connector/NET."
subcategories:
  - Connectors & Drivers
compatibility:
  - MySQL
  - MariaDB
pricing:
  - Open Source
images:
  - logo.png
---

MySqlConnector implements the ADO.NET classes needed to query and update databases from managed .NET code — `DbConnection`, `DbCommand`, `DbDataReader`, and `DbTransaction` — against MySQL 5.5 and newer and MariaDB 10.x and newer. It's a clean-room reimplementation of the MySQL wire protocol, not a fork of Oracle's Connector/NET, and the project's own benchmark (MySqlConnector 2.3.1 vs. MySql.Data 8.2.0 against Azure Database for MySQL 8.0.34 over TLS 1.2) is cited as the reason many .NET teams switch to it.

It implements async support throughout the ADO.NET surface, including newer APIs such as `DbBatch` (.NET 6.0) and `DbDataSource` (.NET 7.0), and fixes a long list of bugs that remain outstanding in Connector/NET. Distributed as the `MySqlConnector` NuGet package, it's MIT-licensed and free to use with commercial software — unlike Connector/NET, which can require a separate commercial license from Oracle for some commercial use cases.
