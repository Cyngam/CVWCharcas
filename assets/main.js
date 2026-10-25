(function () {
  // Menú móvil
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');
  function setMenu(open) {
    navLinks.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  }
  hamburger.addEventListener('click', function () {
    setMenu(!navLinks.classList.contains('open'));
  });
  navLinks.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });

  // Botón volver arriba
  var topBtn = document.getElementById('topBtn');
  window.addEventListener('scroll', function () {
    topBtn.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });
  topBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Filtro y búsqueda de cursos (el contenido ya está en el HTML)
  var tools = document.getElementById('courseTools');
  var filters = document.getElementById('courseFilters');
  var search = document.getElementById('courseSearch');
  var count = document.getElementById('courseCount');
  var empty = document.getElementById('courseEmpty');
  var cards = Array.prototype.slice.call(document.querySelectorAll('#courseList .course-card'));
  if (!tools || !cards.length) return;
  tools.hidden = false;

  var categories = ['Todos'];
  cards.forEach(function (c) {
    var cat = c.dataset.cat;
    if (categories.indexOf(cat) === -1) categories.push(cat);
  });
  categories.forEach(function (cat) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'filter-btn';
    btn.textContent = cat;
    btn.dataset.cat = cat;
    btn.setAttribute('aria-pressed', cat === 'Todos' ? 'true' : 'false');
    filters.appendChild(btn);
  });

  var active = 'Todos';
  function normalize(s) {
    return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }
  cards.forEach(function (c) { c.dataset.text = normalize(c.textContent); });

  function apply() {
    var q = normalize(search.value.trim());
    var shown = 0;
    cards.forEach(function (c) {
      var ok = (active === 'Todos' || c.dataset.cat === active) && (!q || c.dataset.text.indexOf(q) !== -1);
      c.hidden = !ok;
      if (ok) shown++;
    });
    count.textContent = shown + (shown === 1 ? ' curso' : ' cursos');
    empty.hidden = shown !== 0;
  }

  filters.addEventListener('click', function (e) {
    var btn = e.target.closest('.filter-btn');
    if (!btn) return;
    active = btn.dataset.cat;
    filters.querySelectorAll('.filter-btn').forEach(function (b) {
      b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
    });
    apply();
  });
  search.addEventListener('input', apply);
  apply();
})();
