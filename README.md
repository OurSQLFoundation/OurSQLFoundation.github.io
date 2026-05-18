# OurSQL Foundation

OurSQL Foundation is a vendor-neutral nonprofit dedicated to the advancement and sustainability of open source MySQL-compatible database technologies.

This repository contains the source for [oursqlfoundation.com](https://oursqlfoundation.com) — a Hugo static site published via GitHub Pages.

## Run it locally

The site uses Hugo (extended version). Install it first.

**macOS:**
```bash
brew install hugo
```

**Other platforms:** see [gohugo.io/installation](https://gohugo.io/installation/).

Clone the repository:

```bash
git clone git@github.com:OurSQLFoundation/OurSQLFoundation.github.io.git
cd OurSQLFoundation
```

Start the dev server:

```bash
hugo server -D
```

Open [localhost:1313](http://localhost:1313) in your browser.

## Make changes with Claude Code

Add the project folder to [Claude Code](https://claude.ai/code). Then describe what you want changed — a new blog post, a copy edit, a layout tweak. Claude reads the Hugo project structure directly and edits the right files.

Run `hugo server -D` to verify the result at [localhost:1313](http://localhost:1313) before committing.

## Contribute

Work in a branch, not on `main`:

```bash
git checkout -b your-branch-name
```

Make your changes, then commit and push:

```bash
git add .
git commit -m "describe what you changed"
git push origin your-branch-name
```

Open a pull request on GitHub. Keep PRs focused — one change per PR makes review faster.

## Get involved

Not sure where to start? [Open an issue](https://github.com/OurSQLFoundation/OurSQLFoundation.github.io/issues/new?template=get-involved.yml) and tell us who you are and what you'd like to work on.
