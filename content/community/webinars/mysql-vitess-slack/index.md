---
title: "MySQL + Vitess @ Slack: Managing Databases to Support 1+ Billion Daily Messages"
description: "Eduardo Ortega Urrego explains how Slack operates MySQL and Vitess at billion-message scale, from fleet automation to application-side overload handling."
date: 2026-12-02T10:00:00-05:00
time_display: "10:00 AM ET · 16:00 CET"
registration_url: "https://us06web.zoom.us/webinar/register/WN_yzIQvwVHQMa0Vu011xkT3A"
images:
  - banner.png
speakers:
  - name: "Eduardo Ortega Urrego"
    role: "Staff Software Engineer, Datastores · Slack"
    photo: "speaker-eduardo.jpg"
    profile: "/resources/member-directory/people/eduardo-ortega-urrego/"
---

Slack handles more than a billion messages a day. [Vitess](/resources/software/vitess/) gives Slack sharded MySQL, and Slack has built an operational layer around it to keep thousands of database instances running reliably.

[Eduardo Ortega Urrego](/resources/member-directory/people/eduardo-ortega-urrego/) will cover two parts of that system:

- **Fleet automation.** How Slack detects problems and runs workflows for failovers, resharding, backups, and instance replacements.
- **Application traffic.** How Slack routes traffic through its MySQL-to-Vitess proxy and signals overload to clients so that the application can degrade gracefully.

If you're adopting Vitess, you'll learn what to plan for when operating it at scale.
