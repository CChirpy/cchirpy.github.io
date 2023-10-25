# cchirpy.github.io

🚧 This website is still under development! 🚧

My personal website; Made with [11ty](https://www.11ty.dev/docs/), managed with [Obsidian](https://obsidian.md), and deployed on [GitHub Pages](https://pages.github.com).

## Project Structure

```md
cchirpy.github.io/
├── .github/         # GitHub configurations
├── public/          # Output directory (automatically generated)
├── src/             # Source directory 
│   ├── assets/      # Stylesheets and media files
│   ├── data/        # Data files
│   ├── includes/    # Reusable templates
│   ├── pages/       # Main website pages
│   ├── posts/       # All posts
│   ├── robot.txt    # Allows web crawlers to index the site
│   └── sitemap.njk  # Sitemap for search engine optimization
├── .eleventy.js     # 11ty configurations
├── .eleventyignore  # Specifies files to ignore on build
└── package.json     # Project config, scripts, and dependency list
```

## Setup

1. `nvm use` switches to the correct Node version.
2. `npm install` installs dependencies.
3. `npm run build` builds site.

### Additional Scripts

- `npm run serve` builds and preview site.
- `npm run clean` removes current build.
- `npm run debug` goes into debug mode.
- `npm run clean && npm run build` combined script essentially refreshes output folder.