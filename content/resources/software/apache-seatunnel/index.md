---
title: "Apache SeaTunnel"
link: "https://seatunnel.apache.org"
github: "apache/seatunnel"
description: "A distributed data integration tool from the Apache Software Foundation for synchronizing large volumes of data, with a MySQL CDC source connector."
subcategories:
  - Replication & High Availability
  - Data Warehouse & Analytics
compatibility:
  - MySQL
deployment:
  - Self-Hosted
pricing:
  - Open Source
---

Apache SeaTunnel moves data between systems at high volume, covering both batch and streaming synchronization. For MySQL it provides a CDC source connector, so changes can be streamed out of a MySQL database into other stores.

It's written in Java and released under the Apache 2.0 license.

Further reading: [MySQL CDC parallelism is set to 8. Why are all eight readers on the same table?](https://gist.github.com/davidzollo/61c990d1a4e9f65e163ef9b48185b4e4#file-en-snapshot-binlog-handoff-md) walks through how Apache SeaTunnel 3.1.0 assigns snapshot key ranges and transitions to binlog streaming.
