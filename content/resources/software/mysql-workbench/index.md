---
title: "MySQL Workbench"
link: "https://mysqlworkbench.org"
github: "mysql/mysql-shell-plugins"
description: "Oracle's official desktop application for developing, administering, and migrating MySQL databases, rebuilt in version 26 on MySQL Shell."
subcategories:
  - Database Management & GUI
compatibility:
  - MySQL
pricing:
  - Open Source
images:
  - logo.png
---

MySQL Workbench is the MySQL team's graphical tool for working with MySQL servers. It includes a rich SQL editor, database administration and maintenance tools, and migration tools, with the backend for the MySQL Migration Assistant included in its GUI plugin.

Starting with version 26.7 in 2026, Workbench is a new application rather than an update of the old one: an Electron app with a Preact frontend and a Python backend running in MySQL Shell, developed in the `mysql/mysql-shell-plugins` repository alongside MySQL Shell plugins for MySQL REST Service, MySQL Schema Management, and MySQL Database Service on Oracle Cloud Infrastructure. The previous C++-based MySQL Workbench 8 is end-of-life, and its `mysql/mysql-workbench` repository now holds only that retired version.

Workbench is part of the MySQL Community distribution, released by the MySQL team at Oracle under GPLv2 with additional permissions, and ships its own MySQL Shell runtime.
