---
title: "MySQL Time Travel: Practical Row-Level Recovery With Open Source Tools"
description: "A bad UPDATE hit a handful of rows. Do you really need to restore a full backup and replay binlogs? In a mostly live demo, Daniel shows how to see exactly which rows changed, query any table as it looked at a past moment, and generate the exact statements to undo the damage."
date: 2026-10-15
time_display: "10:00 AM ET · 16:00 CEST"
talk_url: "https://perconalive.com/2026-amsterdam/talks/mysql-time-travel-practical-row-level-recovery-with-open-source-tools/"
registration_url: "https://us06web.zoom.us/webinar/register/WN_X82k7xu-STmLLTln6NjTHw"
images:
  - banner.jpg
speakers:
  - name: "Daniel Guzmán Burgos"
    role: "Creator of dbtrail"
    profile: "/resources/member-directory/daniel-guzman-burgos/"
    linkedin: "https://www.linkedin.com/in/danielmauricioguzman/"
---

A bad `UPDATE` hit a handful of rows. Do you really need to restore a full backup and replay binlogs? In a mostly live demo, Daniel shows how to:

- see exactly which rows changed and when
- query any table as it looked at a past moment, using plain SQL
- generate the exact statements to undo the damage, including FK cascades that manual binlog parsing tends to miss

The same setup works on-prem and on RDS or Aurora.
