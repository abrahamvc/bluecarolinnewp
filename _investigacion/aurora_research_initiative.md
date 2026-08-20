---
layout: project_entry
name: "Aurora Research Initiative"
---

<img src="{{ '/assets/images/logos/logo_aurora.png' | relative_url }}"
    alt="Aurora Research Initiative"
    class="img-right">



Aurora es una iniciativa de investigación y mentoría orientada a estudiantes de pregrado que desean desarrollar sus primeros proyectos científicos y tecnológicos. A través de una dinámica cercana y práctica, reuniones, proyectos colaborativos, posters y publicaciones, busco acercar la investigación a nuevas generaciones de investigadores.

#### Áreas de interés

<p>
  <img class="md-icon" src="{{ '/assets/icons/star.svg' | relative_url }}" alt="Star Icon">
  Soft Robotics
</p>

<p>
  <img class="md-icon" src="{{ '/assets/icons/star.svg' | relative_url }}" alt="Star Icon">
  Human-Robot Interaction
</p>

<p>
  <img class="md-icon" src="{{ '/assets/icons/star.svg' | relative_url }}" alt="Star Icon">
  Art and Technology
</p>

<p>
  <img class="md-icon" src="{{ '/assets/icons/star.svg' | relative_url }}" alt="Star Icon">
  STEAM Education
</p>

Abriré las postulaciones para el Área de Soft Robotics ✨
¿Te gustaría ser parte?

<p>
<img class="md-icon" src="{{ '/assets/icons/star.svg' | relative_url }}" alt="Star Icon">
<a href="https://forms.gle/LkC23Lm12pytuJkdA"
    class="btn-special"
    target="blank"
    rel="noopener noreferrer">
    Postula aquí
</a>
</p>

<div class="section-divider"></div>

<details class="book-toggle">
  <summary>Material recomendado | Soft Robotics</summary>
  <div class="book-recs">
    {% for item in site.data.aurora_material %}
      <a class="book-card" href="{{ item.url }}" target="_blank" rel="noopener noreferrer">
        <span class="book-category">{{ item.category }}</span>
        <span class="book-title">{{ item.title }}</span>
        <span class="book-author">{{ item.author }}</span>
        <span class="book-meta">{{ item.publisher }}</span>
      </a>
    {% endfor %}
  </div>
</details>






