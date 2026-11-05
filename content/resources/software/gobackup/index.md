---
title: "GoBackup"
link: "https://gobackup.github.io"
github: "gobackup/gobackup"
description: "A single-binary CLI tool that backs up databases and files on a schedule to cloud storage such as S3, GCS, FTP, and SCP, with compression and encryption."
subcategories:
  - Backup & Recovery
compatibility:
  - MySQL
  - MariaDB
deployment:
  - Self-Hosted
pricing:
  - Open Source
images:
  - logo.png
---

GoBackup is designed for application servers: one configuration file describes which databases and files to back up, where to send them, and on what schedule. MySQL and MariaDB are supported alongside other databases, and archives can be compressed and encrypted before they go to storage targets including FTP, SCP, S3, GCS, and Aliyun OSS.

It was inspired by the Ruby `backup` gem and removes the Ruby dependency. It's written in Go and released under the MIT license.
