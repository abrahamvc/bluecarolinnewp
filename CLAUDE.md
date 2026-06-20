# CLAUDE.md

## Project Overview

Personal portfolio website for Carolina Silva (carolinnesilva.com), built with Jekyll and GitHub Pages. Content is in Spanish. The site has sections for projects, activities, publications, gallery, and an about page.

## Must

- responsive designs for mobile experience
- use organization color based on _config.md
- use docker local development strategy
- cannot use docker for any other thing than test website changes
- preffer minimun code change over long
- always work on branches instead of main

## Guidelines

- always response in spanish, unless asked otherwise
- Always use Unix-style line endings (LF). Do not use Windows-style line endings (CRLF).
- After modifying or creating any file, ensure no carriage return characters (`\r` or `^M`) are introduced.

## Development Commands

### Local development with Docker (preferred)

```bash
docker compose up       # Start site at http://localhost:4000 with livereload
docker compose down     # Stop containers
```

## Test rules

- only test is running docker local development and webpge is serve without error. Then stop container.


## Architecture

### Jekyll Collections

- `_projects/` — Portfolio project entries (rendered at `/proyectos/:slug/`)
- `_activities/` — Activity entries (rendered at `/actividades/:slug/`)

Both collections use the `project_entry` layout and are listed in `_config.yml` under `collections`.

### Layouts (`_layouts/`)

- `default.html` — Base HTML shell; includes `menu.html` and wraps `{{ content }}`
- `home.html` — Homepage layout (extends `default`)
- `project_entry.html` — Single project/activity page (extends `default`)
- `menu.html` — Standalone menu layout used internally

### Data Files (`_data/`)

- `social_media.yaml` — Social media links and icons iterated in `home.html`
- `galeria.yml` — Image entries for the gallery page (with `title`, `image`, `class`)
- `publications_publications.yaml`, `publications_press.yaml`, `publications_participaciones.yaml` — Separate lists for the publications page

### Styling

- `assets/css/main.scss` — Main stylesheet; uses Liquid to inject `_config.yml` brand colors and fonts as CSS variables at `:root`
- `assets/css/styles.css` — Additional styles

Brand colors and font families are defined in `_config.yml` under `brand_colors` and `fonts`, and are consumed by `main.scss` via `{{ site.brand_colors.X }}` and `{{ site.fonts.X }}`.

### Navigation

The menu (`_includes/menu.html`) iterates over `site.data.navigation` defined in `_config.yml`. To add/remove menu items, edit the `navigation` list there.

### Content authoring

Project and activity files use YAML front matter:

```yaml
---
layout: project_entry
name: "Display Title"
img: "assets/images/example.jpg"   # only for _projects/
---
Markdown content here...
```

HTML can be used inline within Markdown for custom layouts (e.g., image galleries with `<div class="logo-gallery">`). Icons from `assets/icons/` can be embedded inline with `<img class="md-icon">`.
