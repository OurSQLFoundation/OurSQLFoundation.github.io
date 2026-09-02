#!/usr/bin/env bash
# Generates layouts/<plural>/term.html for every taxonomy declared in
# hugo.yaml (each one just calls partials/resources/term-content.html).
#
# Why this exists: in this Hugo setup, layouts/_default/term.html alone
# does NOT get picked for Kind=term pages — it silently falls through to
# _default/taxonomy.html (the term-LIST page) instead. A taxonomy-specific
# layouts/<plural>/term.html resolves correctly. Rather than hand-maintain
# ~27 near-identical files, this script (re)generates them from the
# taxonomy list below — keep it in sync with hugo.yaml's `taxonomies:` map.
#
# Usage: tools/generate-taxonomy-term-layouts.sh

set -euo pipefail
cd "$(dirname "$0")/.."

PLURALS=(
  event_year
  subcategories
  countries
  compatibility
  pricing
  languages
  deployment
  cloud-providers
  compliance
  delivery
  foundation-status
  training-formats
  levels
  event-formats
  organizers
  topics
  audiences
  platforms
  access
  listing-status
  org-types
  industries
  scale
  roles
  recognition
  award-categories
  award-years
)

for plural in "${PLURALS[@]}"; do
  mkdir -p "layouts/$plural"
  cat > "layouts/$plural/term.html" <<'EOF'
{{ define "main" }}{{ partial "resources/term-content.html" . }}{{ end }}
EOF
done

echo "Generated ${#PLURALS[@]} layouts/<plural>/term.html files."
