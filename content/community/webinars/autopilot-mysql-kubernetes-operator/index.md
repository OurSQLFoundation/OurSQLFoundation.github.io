---
title: "Stop Hand-Tuning MySQL: Teaching a Kubernetes Operator to Do It for You"
description: "Most MySQL clusters on Kubernetes run near-default configs. Kate Obiidykhata of Percona introduces Autopilot Mode in the Percona Operator for MySQL, which derives a production-grade configuration from each cluster's actual resources and re-tunes it whenever they change."
date: 2026-11-24
time_display: "10:00 AM ET · 16:00 CET"
registration_url: "https://us06web.zoom.us/webinar/register/WN_wsiPvCBvRn6U2nKd6-V5KA"
images:
  - banner.jpg
speakers:
  - name: "Kate Obiidykhata"
    role: "General Manager for Cloud-Native Solutions, Percona"
    photo: "speaker-kate.jpg"
    profile: "/resources/member-directory/people/kate-obiidykhata/"
---

Ask ten DBAs how to size `innodb_buffer_pool_size` and you'll get ten formulas — and none of them survive Kubernetes, where resources change with a one-line YAML edit and yesterday's carefully tuned config is today's OOMKill. Meanwhile, most MySQL clusters on Kubernetes still run near-default configurations, wasting the memory and CPU they're allocated.

In this session, [Kate Obiidykhata](/resources/member-directory/people/kate-obiidykhata/) introduces Autopilot Mode in the [Percona Operator for MySQL](/resources/software/percona-operator-for-mysql/). The operator derives a full production-grade MySQL configuration — InnoDB buffer pool and redo log, session buffers, connection limits, Group Replication settings — from each cluster's actual CPU, memory, and a declared workload profile. It's on by default, and it re-tunes automatically every time resources change: scale the pod, and the config follows.

Kate covers:

- how tuning formulas that assumed dedicated hardware had to change for containers — sidecars, limits vs. requests, headroom for OOM safety
- how an open source configuration calculator was embedded into the operator's reconcile loop without causing restart storms
- where the boundary lies between what automation should decide and what stays in the DBA's hands

Kate has 11 years of experience across Linux security, open source infrastructure, web hosting, and enterprise systems, helping financial institutions, cloud providers, and multi-regional enterprises run open source platforms in production.
