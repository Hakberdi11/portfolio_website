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

A few outbound links were placeholders (`#`) in the original site's rendered output and need the real URLs filled in in `index.html`:

- LinkedIn profile
- GitHub profile
- Medium blog
- "Dostoyevsky Society" interview link
- "YouTube Feature" video link
- "Gym AI" project link
- "WordyTeach" project link
