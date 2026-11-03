---
title: "Warpgate"
link: "https://warpgate.null.page"
github: "warp-tech/warpgate"
description: "A self-hosted, protocol-aware bastion host and reverse proxy for SSH, HTTPS, Kubernetes, MySQL, PostgreSQL, RDP, and VNC that needs no client software, with session recording and replay, native 2FA/SSO, and built-in brute-force protection."
subcategories:
  - Security
  - Proxies & Traffic Management
compatibility:
  - MySQL
deployment:
  - Self-Hosted
  - Docker
pricing:
  - Open Source
images:
  - logo.png
---

Warpgate sits in a DMZ as a single point of entry for SSH, HTTPS, Kubernetes, MySQL, PostgreSQL, RDP, and VNC targets. Because it's protocol-aware, users connect with their normal client — including a MySQL CLI or GUI — and Warpgate authenticates and routes the session without any agent or wrapper installed on either end.

Administrators manage users and targets through a built-in web admin UI, where every session can be recorded and later replayed. It ships with native two-factor authentication and OpenID Connect SSO, plus brute-force protection with automatic IP blocking and user lockout.

Warpgate is written in Rust, distributed as a single binary (with a Docker image also available), and released under the Apache-2.0 license.

Submitted by the community.
