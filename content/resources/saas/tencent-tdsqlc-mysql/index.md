---
title: "Tencent Cloud TDSQL-C for MySQL"
link: "https://intl.cloud.tencent.com/products/tdsqlc"
description: "Tencent Cloud's self-developed cloud-native relational database for MySQL, with compute and storage separated and a shared distributed storage layer across read-write and read-only nodes."
subcategories:
  - Managed Databases
cloud-providers:
  - Tencent Cloud
pricing:
  - Pay-as-you-go
  - Subscription
compatibility:
  - MySQL
images:
  - logo.png
---

TDSQL-C for MySQL is Tencent Cloud's cloud-native relational database, built with a compute-storage-separated architecture: compute nodes run the database engine while a separate distributed storage layer holds the data files and redo logs, and multiple compute nodes in the same cluster share that single storage layer instead of each holding its own copy. It is compatible with MySQL, so existing MySQL databases, drivers, and tooling work against it without application changes.

Compute is billed as a monthly/yearly subscription, pay-as-you-go, or a Serverless mode metered in compute capacity units (CCUs); storage is billed separately, by the data volume kept, and only once per cluster since it's shared rather than duplicated per node.
