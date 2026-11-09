---
title: "Cloudflare Hyperdrive"
link: "https://developers.cloudflare.com/hyperdrive/"
description: "Cloudflare's connection pooling and query caching service for reaching existing MySQL and PostgreSQL databases from Workers — with MySQL support generally available since August 2026."
subcategories:
  - Developer Platforms
cloud-providers:
  - Multi-Cloud
pricing:
  - Free Tier Available
  - Pay-as-you-go
compatibility:
  - MySQL
  - MariaDB
images:
  - logo.png
---

Hyperdrive sits between Cloudflare Workers and a regional database to make it fast to query from Cloudflare's edge: it keeps a pool of connections open close to the database, so a Worker doesn't pay the cost of a new connection and TLS handshake on each request, and it can cache the results of read queries.

MySQL support arrived in 2025 and became generally available in August 2026. It works with MySQL and MySQL-compatible databases, including Amazon RDS and Aurora, Google Cloud SQL, Azure Database for MySQL, PlanetScale, and MariaDB, through the `mysql` and `mysql2` drivers, and can reach private databases through Cloudflare Tunnel. TLS is required, and a few features such as `USE` statements and multi-statement queries are not supported. Hyperdrive is available on Cloudflare's Free and Paid Workers plans.
