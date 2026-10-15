---
title: "SchemaSpy"
link: "https://schemaspy.org"
github: "schemaspy/schemaspy"
description: "A standalone, no-GUI Java tool that reads a live database's metadata and generates a browsable HTML report with entity-relationship diagrams — for documenting a MySQL schema without drawing it by hand."
subcategories:
  - Schema Management & Migration
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

SchemaSpy is a database metadata analyzer: it connects to a live database, reads its structural metadata only (never row data), and produces an HTML-based report that lets administrators and developers navigate and understand the data model — tables, views, columns, constraints, routines, row counts, and entity-relationship diagrams generated with Graphviz.

It ships as a plain JAR (bare-bone or a fat JAR with dependencies, both published to Maven Central) or as a Docker image (`schemaspy/schemaspy` on Docker Hub), with no GUI of its own — it's run from the command line or wired into a CI/CD pipeline so documentation and diagrams stay current automatically. Out of the box it supports MySQL, MariaDB, and over a dozen other databases via JDBC (list them with `-dbhelp`); you supply the matching JDBC driver yourself. Because it only reads schema metadata, it can safely run against an empty replica when the data itself is sensitive.

The project is released under the LGPL-3.0/GPL-3.0 licenses and is maintained on GitHub, with documentation hosted on Read the Docs.
