---
layout: default.njk
title: cchirpy.github.io changelog
permalink: blog/{{ title | slugify }}/index.html
date: Last Modified
created: 2023-07-03
description: 
image:
tags:
  - post
  - note
  - log
---
### 2023-10-25 - deployment + started blog
- Created and deleted `gh-pages` branch
- Created `.github/workflows/build.yml` to publish site on GitHub Pages
- Moved Obsidian workspace to `posts/` folder and created `.eleventyignore`
- Updated `.gitignore` (allow Obsidian and VSCode)
- Updated `README.md` to include setup instructions
- Updated template to use partials
- Added dates to posts

### 2023-10-24 - first published version
- Re-added Obsidian in `resources/` folder
	- Created `changelog.md` and `eleventy-notes.md`
- Added VSCode workspace settings `.vscode`
- Added script: ``"clean": "rm -rf public/"`
- Removed `layouts/` in favor of just using `includes/` for all templates
- Added some generated keywords to `site.json`
- Changed page list to: Home, Blog, Gallery, Community, and About
- Added `robot.txt` for SEO
- Added Error 404 message
- Created basic styles in `style.css` and `layout.css`

### 2023-10-13 - added stylesheets
- Fixed paths for the assets folder in `default.njk` and `.eleventy.js`
- Created `base.css`, `style.css`, and `layout.css`
- Changed homepage title to “About”
- Removed Obsidian

### 2023-08-28 - sitemap and obsidian
- Created `sitemap.njk` (`sitemap.xml`)
- Added new pages: privacy, sitemap
- Using Obsidian to manage pages and posts. Added related files to .gitignore (`.obsidian`, `resources`).

### 2023-08-27 - created basic template
- Created `default.njk` and navigation
- Fixed links (`/about/index.html` → `/about/`)
- 404 page moved to root (`/error-404/` → `404.html`)

### 2023-08-26 - custom permalinks
- Customized permalinks so that pages in the `pages` folder shows up at root (`/pages/about/` → `/about/`)

### 2023-07-24 - restarted project
- Created repo under [cchirpy.github.io](http://cchirpy.github.io) to create a user site on Github.
- In `package.json`, included these settings: `"license": "UNLICENSED", "private": true`

### 2023-07-03 - started project
- Installed 11ty 
  - `npm init -y`
  - `npm install @11ty/eleventy --save-dev`
  - `npx @11ty/eleventy`
  - `npm install -g npm@9.7.2`
- Followed a [tutorial](https://11ty.rocks/posts/create-your-first-basic-11ty-website/) to create basic project structure
- Added basic configurations to `package.json`, `.eleventy.js` and `.gitignore`
