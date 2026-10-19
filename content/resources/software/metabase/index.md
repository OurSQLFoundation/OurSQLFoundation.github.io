---
title: "Metabase"
link: "https://www.metabase.com"
github: "metabase/metabase"
description: "An open-source business intelligence and embedded analytics tool that lets anyone query a MySQL database and build dashboards through a point-and-click interface or the SQL editor."
subcategories:
  - Data Warehouse & Analytics
compatibility:
  - MySQL
pricing:
  - Open Source & Open Core
images:
  - logo.png
---

Metabase connects directly to a MySQL (or MariaDB) database and lets non-technical users explore data, build charts, and assemble dashboards without writing SQL, while a built-in SQL editor with autocomplete and query snippets is available for users who want to write it directly. Dashboards can be set to auto-refresh, exported, embedded in other applications, and scheduled for delivery by email or Slack.

The project is written mostly in Clojure and ClojureScript, with around 49,000 stars on GitHub. Code outside the `enterprise` directory is released under the GNU Affero General Public License (AGPL); the `enterprise` directory, which adds features like SSO, auditing, and advanced permissions, is licensed separately under Metabase's commercial license, making it an open-core project.
