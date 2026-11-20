---
title: "Navop"
link: "https://navop.dev/en-US/"
github: "feigeCode/navop"
description: "A native, GPU-accelerated desktop workspace for MySQL, MariaDB, PostgreSQL, and a dozen other databases, bundling a SQL editor, SSH/SFTP, terminals, remote desktop, and AI agents in one window with no Electron or WebView."
subcategories:
  - Database Management & GUI
  - AI & Ecosystem Skills
compatibility:
  - MySQL
  - MariaDB
pricing:
  - Free
images:
  - logo.png
---

Navop is a single native binary, written in Rust and rendered with the GPU-accelerated GPUI framework, that puts a MySQL/MariaDB SQL editor, schema and data compare, ER diagrams, and import/export alongside Redis and MongoDB browsing, SSH/SFTP, terminals, and remote desktop (RDP/VNC) in one window. It ships prebuilt packages for macOS, Windows, and Linux, plus two narrower editions — Navop Shell and Navop Data — built from the same source.

It exposes a loopback-only MCP server and a CLI/Agent Skill so coding agents such as Claude Code and Codex can query and act on a connection with configurable Safe/Confirm/Auto permission levels. The source is Apache-2.0 with an additional Navop Supplementary License that keeps it free to download and redistribute through free channels while reserving commercial resale and paid distribution to the maintainer.
