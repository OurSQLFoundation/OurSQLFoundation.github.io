# Resources directory

The resource directory at [oursqlfoundation.org/resources/](https://oursqlfoundation.org/resources/) is maintained by the community. Each resource is a single Markdown file in this folder.

There are two ways to contribute.

---

## Option 1 — Pull request

### Folder structure

Pick the folder that matches the resource type:

```
content/resources/software/     — open source tools, databases, proxies
content/resources/saas/         — managed cloud database services
content/resources/services/     — consulting, support, managed services
content/resources/training/     — courses, tutorials, certifications
content/resources/books/        — MySQL books and reference material
content/resources/events/       — conferences, meetups, community events
content/resources/community/    — blogs, forums, aggregators, chat
content/resources/press/        — articles, press releases, coverage
```

### File naming

Lowercase letters and hyphens only. No spaces or special characters.

```
percona-server-for-mysql.md   ✓
Percona Server.md             ✗
```

### Front matter

Every file needs these fields. Copy an existing file as a starting point.

**All types:**
```yaml
---
title: "Resource Name"
link: "https://example.com"
description: "One or two sentences describing what it is."
tags: ["tag1", "tag2"]
---
```

**Events — additional fields:**
```yaml
date: 2027-06-01
format: "in-person"   # or "online"
city: "Amsterdam"
country: "Netherlands"
event_country: ["Netherlands"]
event_year: ["2027"]
```

**Press & News — additional fields:**
```yaml
date: 2026-05-27
source: "Publication Name"
```

### Available tags

| Type | Tags |
|------|------|
| Software | `open-source` `server` `proxy` `sharding` |
| SaaS | `managed` `cloud` `serverless` |
| Services | `consulting` `support` `enterprise` |
| Training | `free` `online` `video` `dba` `developer` `certification` |
| Books | `beginner` `advanced` `practical` `performance` |
| Events | `conference` `free` `open-source` |
| Community | `blogs` `news` `forums` `chat` `support` |
| Press | `news` `press-release` `launch` |

---

## Option 2 — Open an issue

Not comfortable with Git? Open an issue and describe the resource — someone from the community will add it.

| Type | Issue template |
|------|---------------|
| Software | [Add Software resource](https://github.com/OurSQLFoundation/OurSQLFoundation.github.io/issues/new?template=resource-software.yml) |
| SaaS Solutions | [Add SaaS resource](https://github.com/OurSQLFoundation/OurSQLFoundation.github.io/issues/new?template=resource-saas.yml) |
| Services | [Add Services resource](https://github.com/OurSQLFoundation/OurSQLFoundation.github.io/issues/new?template=resource-services.yml) |
| Training | [Add Training resource](https://github.com/OurSQLFoundation/OurSQLFoundation.github.io/issues/new?template=resource-training.yml) |
| Books | [Add Book](https://github.com/OurSQLFoundation/OurSQLFoundation.github.io/issues/new?template=resource-books.yml) |
| Events | [Add Event](https://github.com/OurSQLFoundation/OurSQLFoundation.github.io/issues/new?template=resource-events.yml) |
| Community | [Add Community resource](https://github.com/OurSQLFoundation/OurSQLFoundation.github.io/issues/new?template=resource-community.yml) |
| Press & News | [Add Press item](https://github.com/OurSQLFoundation/OurSQLFoundation.github.io/issues/new?template=resource-press.yml) |

Not sure which type fits? [Open a general issue](https://github.com/OurSQLFoundation/OurSQLFoundation.github.io/issues/new) and describe it in your own words.

---

Questions? [contact@oursqlfoundation.org](mailto:contact@oursqlfoundation.org)
