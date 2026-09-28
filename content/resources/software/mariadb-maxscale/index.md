---
title: "MariaDB MaxScale"
link: "https://mariadb.com/docs/platform/mariadb-faqs/database-proxies-and-routers/mariadb-maxscale"
github: "mariadb-corporation/MaxScale"
description: "An intelligent database proxy that sits in front of MariaDB and MySQL servers, routing SQL traffic with read/write split, automatic failover, and cluster-aware load balancing."
subcategories:
  - Proxies & Traffic Management
compatibility:
  - MySQL
  - MariaDB
deployment:
  - Self-Hosted
  - Docker
pricing:
  - Commercial
images:
  - logo.png
---

MaxScale forwards database statements to one or more backend servers using rules that understand both the SQL being sent and the role of each server in the topology — splitting reads from writes, failing over automatically when a primary goes down, and staying aware of Galera and standard replication cluster state. Its plugin architecture covers routing, authentication, filtering, and monitoring, and it ships official Docker images alongside packages for direct installation.

Licensing has changed twice: MaxScale moved from GPLv2 to the source-available Business Source License (BSL) in 2016, and as of MaxScale 25.01 (released January 16, 2025) MariaDB plc moved it again to a fully proprietary commercial license that requires an active MariaDB Enterprise subscription for production use. Versions prior to 25.01 remain under the BSL, which converts to GPLv2 automatically a fixed number of years after each release.
