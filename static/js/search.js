(function () {

  var input   = document.getElementById('resources-search-input');
  var btn     = document.getElementById('resources-search-btn');
  var results = document.getElementById('resources-search-results');
  if (!input || !results) return;

  var index = null;   // loaded lazily on first interaction
  var loading = null;

  function loadIndex() {
    if (index) return Promise.resolve(index);
    if (loading) return loading;
    loading = fetch('/index.json')
      .then(function (r) { return r.json(); })
      .then(function (data) { index = data; return index; })
      .catch(function () { index = []; return index; });
    return loading;
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function render(query, items) {
    if (!query) {
      results.hidden = true;
      results.innerHTML = '';
      return;
    }

    if (!items.length) {
      results.innerHTML = '<p class="resources-search-empty">No matches for "' + escapeHtml(query) + '".</p>';
      results.hidden = false;
      return;
    }

    var html = items.slice(0, 8).map(function (item) {
      return (
        '<a href="' + item.url + '" class="resources-search-result">' +
          '<span class="resources-search-result-category">' + escapeHtml(item.category) + '</span>' +
          '<span class="resources-search-result-title">' + escapeHtml(item.title) + '</span>' +
          (item.description ? '<span class="resources-search-result-desc">' + escapeHtml(item.description) + '</span>' : '') +
        '</a>'
      );
    }).join('');

    results.innerHTML = html;
    results.hidden = false;
  }

  function search(query) {
    var q = query.trim().toLowerCase();
    if (!q) { render('', []); return; }

    loadIndex().then(function (items) {
      var matches = items.filter(function (item) {
        var haystack = [item.title, item.description, item.category]
          .concat(item.tags || [])
          .join(' ')
          .toLowerCase();
        return haystack.indexOf(q) !== -1;
      });
      render(query, matches);
    });
  }

  var debounceTimer;
  input.addEventListener('input', function () {
    clearTimeout(debounceTimer);
    var value = input.value;
    debounceTimer = setTimeout(function () { search(value); }, 150);
  });

  input.addEventListener('focus', function () {
    if (input.value.trim()) search(input.value);
  });

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { render('', []); input.blur(); }
  });

  if (btn) {
    btn.addEventListener('click', function () { search(input.value); input.focus(); });
  }

  document.addEventListener('click', function (e) {
    if (!results.contains(e.target) && e.target !== input && e.target !== btn) {
      results.hidden = true;
    }
  });

})();
