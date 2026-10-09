---
title: "Teleport"
link: "https://goteleport.com/"
github: "gravitational/teleport"
description: "An identity-aware access platform that provides secure, audited, passwordless access to MySQL and other databases, servers, and Kubernetes clusters without opening inbound firewall ports or managing long-lived credentials."
subcategories:
  - Security
compatibility:
  - MySQL
deployment:
  - Self-Hosted
pricing:
  - Open Source & Open Core
images:
  - logo.png
---

Teleport's Database Access feature puts a proxy in front of MySQL (and PostgreSQL, MongoDB, CockroachDB, and other) servers so that users authenticate once with short-lived, identity-based certificates instead of static database passwords, connect through standard MySQL clients without exposing the database's network port directly, and have every session recorded for audit and compliance.

It's built around role-based access control and can enforce per-session multi-factor authentication and integrate with existing SSO providers. The core engine is released under the GNU Affero General Public License 3.0, with Teleport Community Edition builds distributed under a modified Apache 2.0 license, while Teleport Enterprise adds commercial features like access-request workflows and device trust — which is why it carries both an Open Source and Open Core pricing tag here.
