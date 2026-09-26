---
layout: project_entry
name: "Diseño de identidad"
keywords: ["diseño", "logotipos", "logos", "identidad visual", "ilustración", "gráfica"]
---
<div class="disenio-logos-page"></div>

## Diseño de Logotipos
En mi faceta como diseñadora, realicé diversas piezas gráficas de identidad visual para proyectos académicos, educativos y de investigación. Entre ellos se encuentran laborarios de robótica, física y acústica, bioinformática, biomédica, entre otros.

Aquí algunos de ellos:

<div class="logo-showcase">
  <div class="logo-showcase-stage">
    <div class="logo-showcase-main logo-sticker"><img src="{{ '/assets/images/logos/logo-01.png' | relative_url }}" alt="Logo 1"></div>
  </div>
  <div class="logo-showcase-thumbs">
  {%- for i in (1..11) -%}
    {%- capture num -%}{% if i < 10 %}0{% endif %}{{ i }}{%- endcapture %}
    <button type="button" class="logo-thumb logo-sticker{% if forloop.first %} is-active{% endif %}" style="--i: {{ forloop.index0 }};"><img src="{{ '/assets/images/logos/logo-' | append: num | append: '.png' | relative_url }}" alt="Logo {{ i }}"></button>
  {%- endfor %}
  </div>
</div>

<script>
(function () {
  var showcase = document.querySelector('.logo-showcase');
  if (!showcase) return;
  var main = showcase.querySelector('.logo-showcase-main img');
  var thumbs = [].slice.call(showcase.querySelectorAll('.logo-thumb'));
  var current = 0;
  var picked = false;
  var timer;

  function show(i) {
    if (i === current) return;
    thumbs[current].classList.remove('is-active');
    thumbs[i].classList.add('is-active');
    current = i;
    var img = thumbs[i].querySelector('img');
    main.style.opacity = 0;
    setTimeout(function () {
      main.src = img.src;
      main.alt = img.alt;
      main.style.opacity = 1;
    }, 200);
  }

  function pick(i) {
    clearInterval(timer);
    picked = true;
    show(i);
  }

  function step(n) {
    pick((current + n + thumbs.length) % thumbs.length);
  }

  thumbs.forEach(function (thumb, i) {
    thumb.addEventListener('mouseenter', function () { pick(i); });
    thumb.addEventListener('focus', function () { pick(i); });
    thumb.addEventListener('click', function () { pick(i); });
  });

  var touchX = null;
  main.parentElement.addEventListener('touchstart', function (e) { touchX = e.touches[0].clientX; }, { passive: true });
  main.parentElement.addEventListener('touchend', function (e) {
    if (touchX === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
  });

  document.addEventListener('keydown', function (e) {
    if (!picked || (e.target.closest && e.target.closest('input, textarea, select'))) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      step(e.key === 'ArrowRight' ? 1 : -1);
      if (showcase.contains(document.activeElement)) thumbs[current].focus();
    }
  });

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    timer = setInterval(function () { show((current + 1) % thumbs.length); }, 3000);
  }
})();
</script>


<div class="section-divider"></div>


## Diseño de Identidad gráfica - Conferencias

Un hito importante para mi fue tambien realizar diseños para conferencias de Robótica. 

-   ### LACORO, 2024 
    Organizada por la Universidad de O'Higgins.

<div class="branding-gallery">

  <img src="{{ '/assets/images/logos/proyecto_logo-11.png' | relative_url }}" alt="proyecto lacoro1">
  <img src="{{ '/assets/images/logos/proyecto_logo-12.png' | relative_url }}" alt="proyecto lacoro2">
</div>

- ### GLOBAL SOFT ROBOTICS
    Organizada por IEEE RAS y el Departamento de Mecánica de la Universidad de Chile.

<div class="branding-gallery">
  <img src="{{ '/assets/images/logos/proyecto_logo-13.png' | relative_url }}" alt="proyecto global1">
  <img src="{{ '/assets/images/logos/proyecto_logo-14.png' | relative_url }}" alt="proyecto global2">
</div>