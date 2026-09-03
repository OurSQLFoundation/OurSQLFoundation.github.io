# Resources directory

The resource directory at [oursqlfoundation.org/resources/](https://oursqlfoundation.org/resources/) is maintained by the community. Each resource is a single Markdown file — or a folder with a Markdown file and images.

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

### Two formats: single file vs folder (leaf bundle)

**Single file** — for most resources:
```
content/resources/software/proxysql.md
```

**Folder (leaf bundle)** — use this when you have a cover image, PDF, or other files to include alongside the resource (recommended for books):
```
content/resources/books/high-performance-mysql/
  index.md
  cover.jpeg
```

### File naming

Lowercase letters and hyphens only. No spaces or special characters.

```
percona-server-for-mysql.md   ✓
Percona Server.md             ✗
```

**Events** — prefix the file with the date:
```
2026-09-11-percona-live-amsterdam.md
aggregator-mysql-events.md       ← for aggregator pages without a specific date
```

### Front matter

**All types (single file):**
```yaml
---
title: "Resource Name"
link: "https://example.com"
description: "One or two sentences describing what it is."
subcategories: ["Database Software"]   # pick from the list for this section, see below
---
```

Every resource also carries a handful of **tag facets** — small, controlled sets of values (not free text) used to power the filters on each category page. The field name in front matter must be the **plural** shown below — Hugo taxonomies require it. The full machine-readable list (including which URL each one filters to) lives in [`data/taxonomy_schema.yaml`](data/taxonomy_schema.yaml); this is the human-readable version of the same thing.

Pick a `subcategories` value from your section's list, and set whichever facets apply — all are optional and multi-value (a resource can carry more than one).

**`content/resources/software/`** — subcategories: Database Software · Monitoring & Observability · Backup & Recovery · Data Warehouse & Analytics · Replication & High Availability · Proxies & Traffic Management · Connectors & Drivers · Database Management & GUI · DevOps & Deployment · Schema Management & Migration · Testing & Benchmarking · Security · AI & Ecosystem Skills (a resource can carry more than one subcategory, e.g. a backup tool that's also a data lakehouse)
```yaml
compatibility: ["MySQL"]        # MySQL, MariaDB, Percona Server, TiDB, Vitess, HeatWave, Galera, Group Replication, RDS MySQL, DuckDB
deployment: ["Self-Hosted"]     # Self-Hosted, Kubernetes, Docker, Cloud-Native, On-Premises
pricing: ["Open Source"]        # Open Source, Commercial, Free, Paid, Enterprise, Open Source & Open Core
```

**Software & Tools / SaaS & Cloud Solutions / Services also get a structured detail page** (hero, actions row, sticky "Details" panel) with a few extra optional fields on top of the usual ones:
```yaml
github: "owner/repo"          # optional — shorthand, or a full https://github.com/... URL. Adds
                               # a "View on GitHub" button and a Repository row. Only set it when
                               # it's a genuinely separate URL from `link` — skip it if `link`
                               # already points at the repo.
member: true                  # optional — shows the "OurSQL Member" badge. Only set this when the
                               # resource's org is an actual OurSQL Foundation member/sponsor/partner;
                               # leave it unset otherwise (the row/badge is just omitted, no placeholder).
last_reviewed: 2026-08-14     # optional — shows a "Last reviewed" row, credited to the editorial
                               # team. Only set it once someone has actually reviewed the listing.
```
The full description (Markdown body, under the front matter) renders as the "About" section — plain-text `description` still serves as the short hero subtitle. "Suggest an update" always appears (top-right and in the Details panel) and links straight to editing the resource's own file on GitHub.

**`content/resources/saas/`** — subcategories: Managed Databases · Monitoring SaaS · Backup & Recovery SaaS · Migration & Replication SaaS · Developer Platforms · Security & Compliance SaaS
```yaml
cloud-providers: ["AWS"]        # AWS, Azure, GCP, Multi-Cloud, Private Cloud
compliance: ["SOC 2"]           # SOC 2, HIPAA, GDPR, PCI DSS
pricing: ["Pay-as-you-go"]      # Pay-as-you-go, Subscription, Free Tier Available
compatibility: ["MySQL"]        # MySQL, MariaDB, Percona Server, TiDB, Vitess
```

**`content/resources/services/`** — subcategories: Consulting · Support · Managed Services · Migration Services · Performance Tuning · Architecture & HA Design · Cloud & Kubernetes · Security & Compliance · Training Providers
```yaml
delivery: ["Remote"]            # Remote, On-Site, Hybrid
countries: ["Global"]           # a country name (e.g. "Germany"), or "Global" if not region-specific
compatibility: ["MySQL"]        # MySQL, MariaDB, Percona Server, TiDB, Vitess, Galera
foundation-status: ["Sponsor"]  # Foundation Member, Sponsor, Partner — only if it actually applies
```

**`content/resources/training/`** — subcategories: Courses · Workshops · Certifications · Academic Resources · Training Providers
```yaml
training-formats: ["Self-Paced"] # Self-Paced, Instructor-Led, Workshop, Certification, Practice Lab
levels: ["Beginner"]             # Beginner, Intermediate, Advanced
pricing: ["Free"]                # Free, Paid, Free Trial Available
languages: ["English"]           # English, Spanish, Portuguese, German, Chinese, Other
author: "Percona"                # optional
```

**`content/resources/books/`** (leaf bundle with cover image) — subcategories: Books · Blogs · Newsletters · Reports & Research · Whitepapers · Case Studies · Podcasts & Videos · Documentation Portals
```yaml
---
title: "High Performance MySQL, 4th Edition"
link: "https://..."
description: "One or two sentences."
authors: ["Silvia Botros", "Jeremy Tinley"]
year: 2021
subcategories: ["Books"]
topics: ["Performance"]         # Administration, Development, Architecture, Replication, Performance, Security, Migration, Scaling, Other
audiences: ["Advanced"]         # DBA, Developer, Architect, Beginner, Advanced
pricing: ["Paid"]               # Free, Paid
images:
  - cover.jpeg
---
```

**`content/resources/events/`** — subcategories: Foundation Events · Community Calls · Webinars · Meetups · Conferences · Partner & Member Events · Past Events & Recordings — prefix the filename with the date
```yaml
date: 2026-09-11
format: "in-person"             # or "online" — drives the card's Online/In-person badge
city: "Amsterdam"                # optional, only for in-person events
countries: ["Netherlands"]       # a country name, or "Global" for an online/worldwide event
event_year: ["2026"]
event-formats: ["In-Person"]     # In-Person, Online, Hybrid
organizers: ["Community"]        # OurSQL Foundation, Community, Member & Partner
```

**`content/resources/community/`** — subcategories: Forums · Slack, Discord & IRC · Mailing Lists · Reddit & Social · Blog Aggregators · Podcasts & Videos
```yaml
platforms: ["Forum"]             # Forum, Slack, Discord, Mailing List, Reddit, Meetup, YouTube, Podcast
languages: ["English"]           # English, Spanish, Portuguese, German, Chinese, Other
access: ["Open"]                 # Open, Registration Required
listing-status: ["Active"]       # Active, Archived
```

**`content/resources/press/`** — additional fields:
```yaml
date: 2026-05-27
source: "Publication Name"
```

**`content/resources/member-directory/`** (leaf bundle with photo) — subcategories: Members · Sponsors · Partners · Adopters · People · Awards. Every entry needs a `url` override so its address stays under `/resources/member-directory/<subcategory-slug>/`, not the flat content path:
```yaml
---
title: "Full Name"
url: "/resources/member-directory/people/full-name/"   # subcategory-slug matches the subcategories value, lowercased
description: "One line — role, company."
role: "Job title, Company · other affiliation"          # optional, shown on the profile and any author card
subcategories: ["People"]
images:
  - photo.jpg
---
```

> Slashes ("/") aren't safe inside a facet value — Hugo treats them as URL path separators and breaks the filter link. Use "&" or "," instead (e.g. "Slack, Discord & IRC", not "Slack / Discord / IRC").

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
