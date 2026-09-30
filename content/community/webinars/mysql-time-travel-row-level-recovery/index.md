---
title: "MySQL Time Travel: Practical Row-Level Recovery With Open Source Tools"
description: "A bad UPDATE hit a handful of rows. Do you really need to restore a full backup and replay binlogs? In a mostly live demo, Daniel shows how to see exactly which rows changed, query any table as it looked at a past moment, and generate the exact statements to undo the damage."
date: 2026-10-15
time_display: "10:00 AM ET · 16:00 CEST"
registration_url: "https://us06web.zoom.us/webinar/register/WN_AYk4qjMBTU2ofrY_hkpXvQ"
images:
  - banner.jpg
speakers:
  - name: "Daniel Guzmán Burgos"
    role: "Creator of dbtrail"
    photo: "speaker-daniel.jpg"
    profile: "/resources/member-directory/people/daniel-guzman-burgos/"
    linkedin: "https://www.linkedin.com/in/danielmauricioguzman/"
---

Recovering from a bad `UPDATE` or `DELETE` in MySQL is disproportionately expensive: restore a backup and replay binlogs, or hand-parse `mysqlbinlog` output and reconstruct the reversal manually. Both take hours for incidents that touched a handful of rows.

This session shows a faster workflow using [dbtrail](https://dbtrail.com), an open source (Apache 2.0) tool that captures every row change from the binlog and makes it queryable — in a mostly live demo, on a real schema, with a real mistake and a real recovery.

Step by step, Daniel shows how to:

- identify which rows changed and when
- inspect full before-and-after images of each change
- query any table **as of** a past timestamp, using plain SQL
- generate the exact reversal statements for the incident — including changes propagated through FK cascades, which manual binlog parsing usually gets wrong

He'll also cover verifying that the captured history matches the source — a check worth running before trusting any of it for recovery.

Capture works over the replication protocol, so the same setup runs on-premises and on RDS or Aurora, where binlog files on disk aren't accessible. Deployment is Docker Compose, and everything shown is reproducible on a test instance.
