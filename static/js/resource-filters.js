(function () {

  var app = document.getElementById('resources-filter-app');
  if (!app) return;

  var dataEl = document.getElementById('resources-filter-data');
  var index = {};
  try {
    var parsed = JSON.parse(dataEl.textContent || '{}');
    (parsed.resources || []).forEach(function (r) { index[r.url] = r; });
  } catch (e) { index = {}; }

  var cards = Array.prototype.slice.call(document.querySelectorAll('#resources-cards-grid .resource-card'));
  var total = cards.length;

  // ── State ──────────────────────────────────────────────────────────────
  var selectedCategory = null;           // subcategory value, or null for "All"
  var selectedFacets = {};               // { facetPath: Set(values) }

  function facetSet(path) {
    if (!selectedFacets[path]) selectedFacets[path] = {};
    return selectedFacets[path];
  }

  function activeFacetCount() {
    var n = 0;
    Object.keys(selectedFacets).forEach(function (path) {
      n += Object.keys(selectedFacets[path]).length;
    });
    return n;
  }

  function matches(resource) {
    if (!resource) return false;
    if (selectedCategory && (resource.subcategories || []).indexOf(selectedCategory) === -1) {
      return false;
    }
    for (var path in selectedFacets) {
      var wanted = Object.keys(selectedFacets[path]);
      if (wanted.length === 0) continue;
      var have = (resource.facets && resource.facets[path]) || [];
      var any = wanted.some(function (v) { return have.indexOf(v) !== -1; });
      if (!any) return false;
    }
    return true;
  }

  // ── Rendering ──────────────────────────────────────────────────────────
  function render() {
    var visibleCount = 0;
    cards.forEach(function (card) {
      var url = card.dataset.url;
      var visible = matches(index[url]);
      card.hidden = !visible;
      if (visible) visibleCount++;
    });

    var countLabel = visibleCount + ' resource' + (visibleCount === 1 ? '' : 's');
    document.querySelectorAll('[data-role="result-count"], [data-role="result-count-mobile"]').forEach(function (el) {
      el.textContent = countLabel;
    });
    document.querySelectorAll('[data-role="apply-btn"]').forEach(function (el) {
      el.textContent = 'Show ' + visibleCount + ' result' + (visibleCount === 1 ? '' : 's');
    });

    var noMatch = document.querySelector('[data-role="no-match-state"]');
    if (noMatch) noMatch.hidden = !(total > 0 && visibleCount === 0);

    var grid = document.getElementById('resources-cards-grid');
    if (grid) grid.hidden = total > 0 && visibleCount === 0;

    // Filter button badge + active state
    var n = activeFacetCount();
    document.querySelectorAll('[data-role="filter-badge"]').forEach(function (el) {
      el.hidden = n === 0;
      el.textContent = n;
    });
    document.querySelectorAll('.filter-btn, .toolbar-btn[data-open="filters-sheet"]').forEach(function (btn) {
      btn.classList.toggle('filter-btn--active', n > 0);
    });

    // Category items (sidebar + mobile sheet)
    document.querySelectorAll('.cat-item').forEach(function (item) {
      var isActive = (item.dataset.catValue || '') === (selectedCategory || '');
      item.classList.toggle('cat-item--active', isActive);
    });
    document.querySelectorAll('[data-role="mobile-cat-label"]').forEach(function (el) {
      el.textContent = selectedCategory || 'All categories';
    });

    // Chips (desktop popover + mobile sheet)
    document.querySelectorAll('.facet-group').forEach(function (group) {
      var path = group.dataset.facetPath;
      var selected = selectedFacets[path] || {};
      group.querySelectorAll('.chip').forEach(function (chip) {
        chip.classList.toggle('chip--selected', !!selected[chip.dataset.chipValue]);
      });
    });

    // Applied chips row (facet values only, not category)
    var appliedRow = document.querySelector('[data-role="applied-chips"]');
    if (appliedRow) {
      appliedRow.innerHTML = '';
      var any = false;
      Object.keys(selectedFacets).forEach(function (path) {
        Object.keys(selectedFacets[path]).forEach(function (value) {
          any = true;
          var chip = document.createElement('button');
          chip.type = 'button';
          chip.className = 'applied-chip';
          chip.dataset.facetPath = path;
          chip.dataset.chipValue = value;
          chip.innerHTML = escapeHtml(value) +
            '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"></line><line x1="18" y1="6" x2="6" y2="18"></line></svg>';
          chip.addEventListener('click', function () {
            toggleFacet(path, value);
            render();
          });
          appliedRow.appendChild(chip);
        });
      });
      if (any) {
        var clear = document.createElement('button');
        clear.type = 'button';
        clear.className = 'applied-chips-clear';
        clear.textContent = 'Clear all';
        clear.addEventListener('click', clearAll);
        appliedRow.appendChild(clear);
      }
      appliedRow.hidden = !any;
    }
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function toggleFacet(path, value) {
    var set = facetSet(path);
    if (set[value]) { delete set[value]; } else { set[value] = true; }
  }

  function clearAll() {
    selectedCategory = null;
    selectedFacets = {};
    render();
  }

  // ── Category clicks ────────────────────────────────────────────────────
  document.querySelectorAll('.cat-item').forEach(function (item) {
    item.addEventListener('click', function () {
      selectedCategory = item.dataset.catValue || null;
      render();
      closePanel('category-sheet');
    });
  });

  // ── Chip clicks ────────────────────────────────────────────────────────
  document.querySelectorAll('.facet-group .chip').forEach(function (chip) {
    chip.addEventListener('click', function () {
      var path = chip.closest('.facet-group').dataset.facetPath;
      toggleFacet(path, chip.dataset.chipValue);
      render();
    });
  });

  // ── Clear-all triggers (popover/sheet footers, no-match state) ────────
  document.querySelectorAll('[data-action="clear-all"]').forEach(function (btn) {
    btn.addEventListener('click', clearAll);
  });

  // ── Accordion toggle (mobile) ──────────────────────────────────────────
  document.querySelectorAll('.facet-group .accordion-row').forEach(function (row) {
    row.addEventListener('click', function () {
      var group = row.closest('.facet-group');
      group.dataset.collapsed = group.dataset.collapsed === 'true' ? 'false' : 'true';
    });
  });

  // ── Open / close popover + sheets ──────────────────────────────────────
  var panelRoles = ['filters-popover', 'category-sheet', 'filters-sheet'];

  function panelEl(role) {
    return document.querySelector('[data-role="' + role + '"]');
  }

  function closePanel(role) {
    var el = panelEl(role);
    if (el && !el.hidden) {
      el.hidden = true;
      document.body.classList.remove('sheet-open');
    }
  }

  function closeAllPanels() {
    panelRoles.forEach(closePanel);
  }

  document.querySelectorAll('[data-open]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var role = btn.dataset.open;
      var el = panelEl(role);
      if (!el) return;
      var wasHidden = el.hidden;
      closeAllPanels();
      if (wasHidden) {
        el.hidden = false;
        if (role !== 'filters-popover') document.body.classList.add('sheet-open');
      }
    });
  });

  document.querySelectorAll('[data-close]').forEach(function (btn) {
    btn.addEventListener('click', function () { closePanel(btn.dataset.close); });
  });

  // Sheet overlay: click on the dimmed backdrop (not the sheet itself) closes it
  document.querySelectorAll('.sheet-overlay').forEach(function (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closePanel(overlay.dataset.role);
    });
  });

  // Click outside the desktop popover closes it
  document.addEventListener('click', function (e) {
    var popover = panelEl('filters-popover');
    if (!popover || popover.hidden) return;
    if (popover.contains(e.target)) return;
    if (e.target.closest('[data-open="filters-popover"]')) return;
    closePanel('filters-popover');
  });

  // Escape closes whatever is open
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAllPanels();
  });

  render();
})();
