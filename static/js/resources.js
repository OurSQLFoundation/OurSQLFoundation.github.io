(function () {

  // ── Tag filter ────────────────────────────────────────────────────────────
  var select = document.getElementById('tag-filter');
  if (select) {
    select.addEventListener('change', function () {
      var tag = this.value;
      document.querySelectorAll('.resource-card').forEach(function (card) {
        if (!tag) { card.hidden = false; return; }
        var tags = (card.dataset.tags || '').split(',').map(function (t) { return t.trim(); });
        card.hidden = tags.indexOf(tag) === -1;
      });
    });
  }

  // ── CSV download ──────────────────────────────────────────────────────────
  var csvBtn = document.getElementById('download-csv');
  if (csvBtn) {
  csvBtn.addEventListener('click', function () {
    var cards = document.querySelectorAll('.resource-card');
    var rows  = [['Name', 'Description', 'Format', 'Location', 'Date', 'Tags', 'Link']];

    cards.forEach(function (card) {
      if (card.hidden) return; // respect active filter
      rows.push([
        card.dataset.title       || '',
        card.dataset.description || '',
        card.dataset.format      || '',
        card.dataset.location    || '',
        card.dataset.date        || '',
        card.dataset.tags        || '',
        card.dataset.link        || ''
      ]);
    });

    var csv = rows.map(function (row) {
      return row.map(function (cell) {
        var val = String(cell).replace(/"/g, '""');
        return /[,"\n\r]/.test(val) ? '"' + val + '"' : val;
      }).join(',');
    }).join('\r\n');

    var blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
    var url  = URL.createObjectURL(blob);
    var a    = document.createElement('a');
    var section = document.querySelector('.resources-section-title');
    var name = section ? section.textContent.trim().toLowerCase().replace(/\s+/g, '-') : 'resources';
    a.href     = url;
    a.download = 'oursql-' + name + '.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
  }

  // ── Resource detail: "Read more" (mobile only — About is clamped to 3 lines) ──
  var readmore = document.querySelector('[data-readmore]');
  if (readmore) {
    var toggle = document.querySelector('[data-readmore-toggle]');
    var sync = function () {
      // Only relevant while the mobile clamp is actually active (<= 768px).
      if (window.innerWidth > 768) { toggle.hidden = true; return; }
      readmore.classList.remove('resource-detail-content--expanded');
      toggle.hidden = readmore.scrollHeight <= readmore.clientHeight + 1;
      toggle.textContent = 'Read more';
    };
    if (toggle) {
      toggle.addEventListener('click', function () {
        var expanded = readmore.classList.toggle('resource-detail-content--expanded');
        toggle.textContent = expanded ? 'Read less' : 'Read more';
      });
      // Wait for everything (fonts included) to finish loading before measuring —
      // measuring too early can catch text mid-reflow and misjudge the overflow.
      if (document.readyState === 'complete') { sync(); } else { window.addEventListener('load', sync); }
      window.addEventListener('resize', sync);
    }
  }

})();
