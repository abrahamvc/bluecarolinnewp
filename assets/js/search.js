document.addEventListener('DOMContentLoaded', function () {
  var widget = document.querySelector('.search-widget');
  var toggleBtn = document.getElementById('search-toggle');
  var box = document.getElementById('search-box');
  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  var data = null;

  if (!widget || !toggleBtn || !box) return;

  function loadIndex() {
    if (data) return Promise.resolve(data);
    return fetch(widget.dataset.searchUrl)
      .then(function (res) { return res.json(); })
      .then(function (json) { data = json; return data; });
  }

  function openBox() {
    box.hidden = false;
    toggleBtn.setAttribute('aria-expanded', 'true');
    input.focus();
    loadIndex();
  }

  function closeBox() {
    box.hidden = true;
    toggleBtn.setAttribute('aria-expanded', 'false');
  }

  toggleBtn.addEventListener('click', function () {
    if (box.hidden) { openBox(); } else { closeBox(); }
  });

  document.addEventListener('click', function (e) {
    if (!widget.contains(e.target)) closeBox();
  });

  input.addEventListener('input', function () {
    var query = input.value.trim().toLowerCase();
    results.innerHTML = '';
    if (!query || !data) return;

    var matches = data.filter(function (item) {
      var haystack = (item.title + ' ' + (item.keywords || '')).toLowerCase();
      return haystack.indexOf(query) !== -1;
    }).slice(0, 8);

    if (matches.length === 0) {
      var li = document.createElement('li');
      li.className = 'search-no-results';
      li.textContent = 'Sin resultados';
      results.appendChild(li);
      return;
    }

    matches.forEach(function (item) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = item.url;
      a.textContent = item.title + (item.type ? ' — ' + item.type : '');
      li.appendChild(a);
      results.appendChild(li);
    });
  });
});
