---
title: "freno"
link: "https://github.com/github/freno"
description: "A cooperative, highly available throttler service from GitHub that tells clients when to hold back writes based on MySQL replication lag."
subcategories:
  - Proxies & Traffic Management
  - Replication & High Availability
compatibility:
  - MySQL
deployment:
  - Self-Hosted
pricing:
  - Open Source
---

freno collects replication lag per MySQL cluster and answers one question for its clients: may I write to the backend store? Cooperative clients back off when lag crosses a threshold, and operators can force throttling of specific applications. It adapts to changes in server inventory and uses the Raft consensus protocol for leadership.

It's released under the MIT license.
