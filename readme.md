
# Nat Watkins Personal Portfolio Site

I built this site off of the [Aether Astro theme](https://github.com/thatsmanmeet/Aether-astro-theme). Modifications are my own. 

Deployed on [GitHub Pages using GitHub actions](https://docs.astro.build/en/guides/deploy/github/).

---

## Installation
 
1. Open the folder and install node modules.
```
npm install
```
2. Make changes to the Homepage on `src/data.js`. To add projects, go to `src/pages/projects` and add `md` files. Copy this frontmatter in every new project:

```
---
layout: ../../layouts/BlogLayout.astro
title: "Demo Post 1"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
pubDate: "Sep 12 2022"
heroImage: ""
badge: "Demo badge"
author: 'John Doe'
---
```

4. Use the following commands.

```
npm run dev // run the dev version 
npm run build // build production version in `dist` folder
npm run preview // preview the production version
```