# portfolio_website

Static portfolio site for Hakberdi Orazov — plain HTML/CSS/JS, no build step, no backend dependency.

Rebuilt from the original [Base44](https://base44.app)-hosted app (`new-pure-monolith-studio.base44.app`) so it can be hosted for free (e.g. GitHub Pages, Netlify, Vercel, Cloudflare Pages) instead of paid Namecheap hosting.

## Structure

- `index.html` — all page content/sections
- `assets/css/style.css` — styling
- `assets/js/main.js` — active nav-link highlighting on scroll
- `assets/img/hero.jpg` — portrait photo

## Local preview

```
python3 -m http.server 8000
```

then open `http://localhost:8000`.

## TODO

- Medium blog link is still blank (footer) — add the public profile URL (`medium.com/@username`) once available.
- "Gym AI" and "WordyTeach" are marked "In progress" (not linked) since they aren't hosted yet — swap to real links once they're live.
