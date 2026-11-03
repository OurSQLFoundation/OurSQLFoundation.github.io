---
title: "KubeBlocks"
link: "https://kubeblocks.io"
github: "apecloud/kubeblocks"
description: "An open-source Kubernetes operator that runs and manages MySQL alongside dozens of other database, cache, and streaming engines through one shared set of CRDs, automating day-2 operations like scaling, upgrades, monitoring, and backup and restore."
subcategories:
  - DevOps & Deployment
compatibility:
  - MySQL
deployment:
  - Kubernetes
pricing:
  - Open Source
images:
  - logo.png
---

KubeBlocks is a Kubernetes operator that manages database and streaming engines — including MySQL, PostgreSQL, Redis, MongoDB, Kafka, and around 35 engines in total — through a shared set of Custom Resource Definitions instead of one bespoke operator per engine. MySQL is covered by a dedicated `apecloud-mysql` addon with its own documentation.

It handles day-2 operations such as horizontal and vertical scaling, version upgrades, monitoring, and backup and restore (including full, continuous, and point-in-time recovery), and ships with a `kbcli` command-line tool that can install KubeBlocks and spin up a local playground with a single command.

KubeBlocks is released under the GNU Affero General Public License v3.0.

Submitted by the community.
