# onur-portfolio-os

The personal portfolio of Onur Tellioglu, served at [onurtellioglu.com](https://onurtellioglu.com). It is a retro Windows-style desktop on large screens and a Holo-era Android home screen on phones, and it holds the same content in both: profile, skills, projects, experience, a short blog and a downloadable CV. The interface is available in English, Turkish and German.

## Credit

This site is built on [portfoliOS](https://github.com/akbayrakyagiz/portfoliOS) by Ibrahim Yağız Akbayrak and is used with his permission. The window manager, the mobile shell, the games, the terminal and the pixel-art icon set come from his project. The content, the projects, the added skill tiles and the placeholder portrait are specific to this fork.

## Running locally

There is no build step. The page loads React and Babel from a CDN and compiles the JSX files in the browser, so any static file server works:

```bash
python3 -m http.server 8765
```

Then open http://127.0.0.1:8765.

## Where the content lives

Most personal content is in `portfolio.jsx` (projects, skills, experience) and `i18n.jsx` (every visible string in three languages). The project explorer and the blog are in `extras.jsx`, the terminal file system is in `terminal.jsx`, and the mobile screens read from `mobile.jsx` and `mobile-apps.jsx`. The CV served by the site is `portfolios-assets/onur_tellioglu_cv.pdf`, copied from the RenderCV output.

## Deploying

The repository is the site. Copy it, without `.git`, to any static web root and point the domain at it.
