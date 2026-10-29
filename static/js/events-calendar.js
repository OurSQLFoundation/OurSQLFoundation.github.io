/* Events calendar: Upcoming / Past tabs, month calendar + list views,
   category and facet filters. Data comes from #ev-data (see
   layouts/resources/events-calendar.html). State lives in the query string
   so a view can be shared: ?tab=past&view=list&cat=Webinars&month=2026-11 */
(function () {
  var app = document.getElementById('ev-app');
  var dataEl = document.getElementById('ev-data');
  if (!app || !dataEl) return;

  var data = JSON.parse(dataEl.textContent);
  var events = data.events;
  var categories = data.categories;
  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function iso(y, m, d) { return y + '-' + pad(m + 1) + '-' + pad(d); }
  var now = new Date();
  var today = iso(now.getFullYear(), now.getMonth(), now.getDate());
  function parts(s) { var a = s.split('-'); return { y: +a[0], m: +a[1] - 1, d: +a[2] }; }
  function slug(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
  function isUpcoming(ev) { return ev.e >= today; }

  function formatRange(ev) {
    var a = parts(ev.d), b = parts(ev.e);
    var M = function (x) { return MONTHS[x.m].slice(0, 3); };
    if (ev.d === ev.e) return M(a) + ' ' + a.d + ', ' + a.y;
    if (a.y === b.y && a.m === b.m) return M(a) + ' ' + a.d + '–' + b.d + ', ' + a.y;
    if (a.y === b.y) return M(a) + ' ' + a.d + ' – ' + M(b) + ' ' + b.d + ', ' + a.y;
    return M(a) + ' ' + a.d + ', ' + a.y + ' – ' + M(b) + ' ' + b.d + ', ' + b.y;
  }
  function formatDay(s) {
    var p = parts(s);
    var wd = new Date(p.y, p.m, p.d).getDay();
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][wd] + ', ' + MONTHS[p.m] + ' ' + p.d + ', ' + p.y;
  }
  function location(ev) {
    var loc = [];
    if (ev.city) loc.push(ev.city);
    (ev.c || []).forEach(function (c) { if (c !== 'Global') loc.push(c); });
    if (!loc.length && ev.f === 'Online') return 'Online';
    return loc.join(', ');
  }
  function primaryCat(ev) { return (ev.s && ev.s[0]) || ''; }
  function catClass(name) { return name ? 'ev-c--' + slug(name) : 'ev-c--none'; }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  // ── State ────────────────────────────────────────────────────────────────
  var q = new URLSearchParams(location_search());
  function location_search() { try { return window.location.search; } catch (e) { return ''; } }
  var state = {
    tab: q.get('tab') === 'past' ? 'past' : 'upcoming',
    view: q.get('view') === 'list' ? 'list' : 'calendar',
    cat: q.get('cat') || '',
    f: q.get('format') || '', o: q.get('org') || '', c: q.get('country') || '',
    month: null, day: ''
  };
  var m = /^(\d{4})-(\d{2})$/.exec(q.get('month') || '');
  if (m) state.month = { y: +m[1], m: +m[2] - 1 };

  var $ = function (sel) { return app.querySelector(sel); };
  var $$ = function (sel) { return Array.prototype.slice.call(app.querySelectorAll(sel)); };
  var catsBox = $('[data-role=cats]');
  var calBox = $('[data-role=calendar]');
  var gridBox = $('[data-role=grid]');
  var titleBox = $('[data-role=month-title]');
  var resBox = $('[data-role=results]');

  // ── Filtering ────────────────────────────────────────────────────────────
  function passesFacets(ev, skipCat) {
    if (!skipCat && state.cat && (ev.s || []).indexOf(state.cat) < 0) return false;
    if (state.f && ev.f !== state.f) return false;
    if (state.o && (ev.o || []).indexOf(state.o) < 0) return false;
    if (state.c && (ev.c || []).indexOf(state.c) < 0) return false;
    return true;
  }
  function inTab(ev) { return (state.tab === 'upcoming') === isUpcoming(ev); }
  function current() { return events.filter(function (ev) { return inTab(ev) && passesFacets(ev); }); }
  function sortEvents(list) {
    return list.slice().sort(function (a, b) {
      var k = a.d < b.d ? -1 : a.d > b.d ? 1 : (a.t < b.t ? -1 : 1);
      return state.tab === 'past' ? -k : k;
    });
  }

  // ── Static controls (facet selects, tab counts) ──────────────────────────
  function uniq(list) { return list.filter(function (v, i) { return v && list.indexOf(v) === i; }).sort(); }
  function fillSelect(key, values, selected) {
    var sel = $('select[data-facet=' + key + ']');
    values.forEach(function (v) {
      var o = el('option', null, v); o.value = v; sel.appendChild(o);
    });
    sel.value = values.indexOf(selected) >= 0 ? selected : '';
    if (sel.value !== selected) state[key] = '';
    sel.addEventListener('change', function () { state[key] = sel.value; state.day = ''; render(); });
  }
  fillSelect('f', uniq(events.map(function (e) { return e.f; })), state.f);
  fillSelect('o', uniq([].concat.apply([], events.map(function (e) { return e.o || []; }))), state.o);
  fillSelect('c', uniq([].concat.apply([], events.map(function (e) { return e.c || []; }))), state.c);

  function sync() {
    var p = new URLSearchParams();
    if (state.tab !== 'upcoming') p.set('tab', state.tab);
    if (state.view !== 'calendar') p.set('view', state.view);
    if (state.cat) p.set('cat', state.cat);
    if (state.f) p.set('format', state.f);
    if (state.o) p.set('org', state.o);
    if (state.c) p.set('country', state.c);
    if (state.view === 'calendar' && state.month) p.set('month', state.month.y + '-' + pad(state.month.m + 1));
    var s = p.toString();
    try { history.replaceState(null, '', window.location.pathname + (s ? '?' + s : '')); } catch (e) {}
  }

  // ── Event card (list + day panel) ────────────────────────────────────────
  function card(ev) {
    var cls = 'ev-card ' + catClass(primaryCat(ev));
    var a = el('article', cls);
    var date = el('div', 'ev-card-date');
    var p = parts(ev.d);
    date.appendChild(el('span', 'ev-card-month', MONTHS[p.m].slice(0, 3)));
    date.appendChild(el('span', 'ev-card-day', String(p.d)));
    if (ev.d !== ev.e) date.appendChild(el('span', 'ev-card-until', '– ' + parts(ev.e).d));
    a.appendChild(date);

    var body = el('div', 'ev-card-body');
    var h = el('h3', 'ev-card-title');
    var link = el('a', null, ev.t); link.href = ev.u; h.appendChild(link);
    body.appendChild(h);
    var meta = el('div', 'ev-card-meta');
    meta.appendChild(el('span', null, formatRange(ev)));
    var loc = location(ev);
    if (loc) meta.appendChild(el('span', null, loc));
    if (ev.f) meta.appendChild(el('span', 'ev-badge ev-badge--' + slug(ev.f), ev.f));
    body.appendChild(meta);
    if (ev.x) body.appendChild(el('p', 'ev-card-desc', ev.x));
    var tags = el('div', 'ev-card-tags');
    (ev.s || []).forEach(function (s) { tags.appendChild(el('span', 'ev-tag ' + catClass(s), s)); });
    if (tags.childNodes.length) body.appendChild(tags);
    var foot = el('div', 'ev-card-links');
    var det = el('a', 'ev-link-btn', 'Details'); det.href = ev.u; foot.appendChild(det);
    if (ev.l) {
      var vis = el('a', 'ev-link-btn ev-link-btn--ghost', 'Visit site ↗');
      vis.href = ev.l; vis.target = '_blank'; vis.rel = 'noopener noreferrer'; foot.appendChild(vis);
    }
    body.appendChild(foot);
    a.appendChild(body);

    if (ev.i) {
      var img = el('img', 'ev-card-img'); img.src = ev.i; img.alt = ''; img.loading = 'lazy';
      a.appendChild(img);
    }
    return a;
  }

  // ── List view ────────────────────────────────────────────────────────────
  function renderList(list) {
    var box = el('div', 'ev-list');
    var lastKey = '';
    sortEvents(list).forEach(function (ev) {
      var p = parts(ev.d), key = p.y + '-' + p.m;
      if (key !== lastKey) {
        lastKey = key;
        box.appendChild(el('h2', 'ev-month-heading', MONTHS[p.m] + ' ' + p.y));
      }
      box.appendChild(card(ev));
    });
    return box;
  }

  // ── Calendar view ────────────────────────────────────────────────────────
  var wk = $('.ev-weekdays');
  WEEKDAYS.forEach(function (d) { wk.appendChild(el('span', null, d)); });

  function defaultMonth() {
    var list = events.filter(inTab);
    var pool = list.length ? list : events;
    var ref;
    if (state.tab === 'upcoming') {
      ref = pool.slice().sort(function (a, b) { return a.d < b.d ? -1 : 1; })[0];
      // Stay on the current month if something is going on in it.
      var thisMonth = today.slice(0, 7);
      var ongoing = pool.some(function (e) { return e.d.slice(0, 7) <= thisMonth && e.e.slice(0, 7) >= thisMonth; });
      var t = parts(today);
      if (ongoing || !ref) return { y: t.y, m: t.m };
    } else {
      ref = pool.slice().sort(function (a, b) { return a.e < b.e ? 1 : -1; })[0];
    }
    var p = parts(ref ? (state.tab === 'past' ? ref.e : ref.d) : today);
    return { y: p.y, m: p.m };
  }

  function eventsOnDay(list, day) {
    return list.filter(function (ev) { return ev.d <= day && ev.e >= day; });
  }

  function renderCalendar(list) {
    var y = state.month.y, mo = state.month.m;
    titleBox.textContent = MONTHS[mo] + ' ' + y;
    gridBox.textContent = '';
    var first = new Date(y, mo, 1);
    var offset = (first.getDay() + 6) % 7;            // Monday-first
    var days = new Date(y, mo + 1, 0).getDate();
    var cells = Math.ceil((offset + days) / 7) * 7;
    for (var i = 0; i < cells; i++) {
      var dt = new Date(y, mo, 1 - offset + i);
      var key = iso(dt.getFullYear(), dt.getMonth(), dt.getDate());
      var outside = dt.getMonth() !== mo;
      var evs = eventsOnDay(list, key);
      var cell = el('div', 'ev-cell' + (outside ? ' ev-cell--out' : '') + (key === today ? ' ev-cell--today' : '') + (evs.length ? ' ev-cell--has' : '') + (key === state.day ? ' ev-cell--selected' : ''));
      cell.setAttribute('role', 'button');
      cell.tabIndex = 0;
      cell.dataset.day = key;
      cell.setAttribute('aria-label', formatDay(key) + (evs.length ? ', ' + evs.length + ' event' + (evs.length > 1 ? 's' : '') : ''));
      cell.appendChild(el('span', 'ev-cell-num', String(dt.getDate())));
      var chips = el('div', 'ev-chips');
      evs.slice(0, 2).forEach(function (ev) {
        var c = el('a', 'ev-chip ' + catClass(primaryCat(ev)), ev.t);
        c.href = ev.u; c.title = ev.t;
        c.addEventListener('click', function (e) { e.stopPropagation(); });
        chips.appendChild(c);
      });
      if (evs.length > 2) chips.appendChild(el('span', 'ev-more', '+' + (evs.length - 2) + ' more'));
      cell.appendChild(chips);
      var dots = el('div', 'ev-dots');
      evs.slice(0, 3).forEach(function (ev) { dots.appendChild(el('i', catClass(primaryCat(ev)))); });
      cell.appendChild(dots);
      gridBox.appendChild(cell);
    }
  }

  function selectDay(key) {
    state.day = state.day === key ? '' : key;
    var p = parts(key);
    if (p.m !== state.month.m || p.y !== state.month.y) { state.month = { y: p.y, m: p.m }; }
    render();
  }
  gridBox.addEventListener('click', function (e) {
    var cell = e.target.closest('.ev-cell'); if (cell) selectDay(cell.dataset.day);
  });
  gridBox.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var cell = e.target.closest('.ev-cell'); if (cell && e.target === cell) { e.preventDefault(); selectDay(cell.dataset.day); }
  });

  function shiftMonth(delta) {
    var d = new Date(state.month.y, state.month.m + delta, 1);
    state.month = { y: d.getFullYear(), m: d.getMonth() };
    state.day = '';
    render();
  }
  $$('[data-nav]').forEach(function (b) {
    b.addEventListener('click', function () {
      var v = b.dataset.nav;
      if (v === 'today') { var t = parts(today); state.month = { y: t.y, m: t.m }; state.day = ''; render(); }
      else shiftMonth(+v);
    });
  });

  function renderCalendarResults(list) {
    var box = el('div', 'ev-list');
    var heading, shown;
    if (state.day) {
      shown = eventsOnDay(list, state.day);
      heading = formatDay(state.day);
    } else {
      var start = iso(state.month.y, state.month.m, 1);
      var end = iso(state.month.y, state.month.m, new Date(state.month.y, state.month.m + 1, 0).getDate());
      shown = list.filter(function (ev) { return ev.d <= end && ev.e >= start; });
      heading = 'Events in ' + MONTHS[state.month.m] + ' ' + state.month.y;
    }
    var head = el('div', 'ev-results-head');
    head.appendChild(el('h2', 'ev-month-heading', heading));
    if (state.day) {
      var back = el('button', 'ev-link-btn ev-link-btn--ghost', 'Show whole month'); back.type = 'button';
      back.addEventListener('click', function () { state.day = ''; render(); });
      head.appendChild(back);
    }
    box.appendChild(head);
    if (!shown.length) {
      var hint = state.day ? 'No events on this day.' : 'No ' + (state.tab === 'past' ? 'past' : 'upcoming') + ' events in this month.';
      box.appendChild(el('p', 'ev-empty-inline', hint));
    }
    sortEvents(shown).forEach(function (ev) { box.appendChild(card(ev)); });
    return box;
  }

  // ── Category pills + tab counts ──────────────────────────────────────────
  function renderCats() {
    catsBox.textContent = '';
    var base = events.filter(function (ev) { return inTab(ev) && passesFacets(ev, true); });
    var all = el('button', 'ev-cat' + (state.cat ? '' : ' ev-cat--active'));
    all.type = 'button'; all.appendChild(document.createTextNode('All '));
    all.appendChild(el('span', 'ev-cat-count', String(base.length)));
    all.addEventListener('click', function () { state.cat = ''; state.day = ''; render(); });
    catsBox.appendChild(all);
    categories.forEach(function (name) {
      var n = base.filter(function (ev) { return (ev.s || []).indexOf(name) >= 0; }).length;
      if (!n && state.cat !== name) return;
      var b = el('button', 'ev-cat ' + catClass(name) + (state.cat === name ? ' ev-cat--active' : ''));
      b.type = 'button';
      b.appendChild(el('i', 'ev-cat-dot'));
      b.appendChild(document.createTextNode(name + ' '));
      b.appendChild(el('span', 'ev-cat-count', String(n)));
      b.addEventListener('click', function () { state.cat = state.cat === name ? '' : name; state.day = ''; render(); });
      catsBox.appendChild(b);
    });
  }

  $$('.ev-tab').forEach(function (b) {
    b.addEventListener('click', function () {
      if (state.tab === b.dataset.tab) return;
      state.tab = b.dataset.tab; state.day = ''; state.month = null; render();
    });
  });
  $$('.ev-view-btn').forEach(function (b) {
    b.addEventListener('click', function () { state.view = b.dataset.view; state.day = ''; render(); });
  });
  $('[data-action=clear]').addEventListener('click', function () {
    state.cat = state.f = state.o = state.c = ''; state.day = '';
    $$('select[data-facet]').forEach(function (s) { s.value = ''; });
    render();
  });

  // ── Render ───────────────────────────────────────────────────────────────
  function render() {
    if (!state.month) state.month = defaultMonth();
    var up = events.filter(function (e) { return passesFacets(e) && isUpcoming(e); }).length;
    var past = events.filter(function (e) { return passesFacets(e) && !isUpcoming(e); }).length;
    $('[data-count=upcoming]').textContent = up;
    $('[data-count=past]').textContent = past;
    $$('.ev-tab').forEach(function (b) {
      var on = b.dataset.tab === state.tab;
      b.classList.toggle('ev-tab--active', on); b.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    $$('.ev-view-btn').forEach(function (b) {
      var on = b.dataset.view === state.view;
      b.classList.toggle('ev-view-btn--active', on); b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    var filtered = state.cat || state.f || state.o || state.c;
    $('[data-action=clear]').hidden = !filtered;

    renderCats();
    var list = current();
    resBox.textContent = '';
    if (state.view === 'calendar') {
      calBox.hidden = false;
      renderCalendar(list);
      resBox.appendChild(renderCalendarResults(list));
    } else {
      calBox.hidden = true;
      if (!list.length) {
        var e = el('div', 'ev-empty');
        e.appendChild(el('h3', null, 'No ' + (state.tab === 'past' ? 'past' : 'upcoming') + ' events match'));
        e.appendChild(el('p', null, filtered ? 'Try clearing a filter.' : 'Check back soon.'));
        resBox.appendChild(e);
      } else {
        resBox.appendChild(renderList(list));
      }
    }
    sync();
  }

  app.classList.add('ev-app--ready');
  render();
})();
