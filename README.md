# Portfolio Site

This is your uploaded React code (Home page + 7 `luxury` components),
wired up into a working Vite + React project. The design, animations,
and content in `Home.jsx` and every `components/luxury/*` file are
exactly what you provided — untouched.

## Run it

```
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Deploy / build

```
npm run build
```

Outputs static files to `dist/` — drag that folder into Netlify, or
connect this repo directly.

## The 3 things added so your code would actually run

Your upload only included the Home page and its components. These
three small pieces were referenced by that code but weren't in the
file, so placeholders were added:

1. **`src/lib/siteConfig.js`** — `SITE_CONFIG` is imported everywhere
   (tagline, headline, stats, services, testimonials) but the file
   itself wasn't in your upload. Every value in here is a bracketed
   placeholder like `[Your Headline]` — replace all of them with your
   real copy before shipping.
2. **`.growing-underline` CSS class** — used on the text-style button
   variant but not defined anywhere in what you sent. Added a
   standard hover-underline effect in `src/index.css`.
3. **`/services`, `/about`, `/contact` routes** — the buttons link to
   these, but their page content wasn't part of your upload either.
   They currently render a plain "page not included" placeholder
   (`src/pages/NotIncluded.jsx`) so the links don't break. Swap in the
   real pages when you have that code.

Fonts: `font-display` / `font-body` (used throughout but not Tailwind
defaults) are mapped to Space Grotesk / Inter in `tailwind.config.js`.

Everything else — layout, Tailwind classes, colors, scroll/hover
animations, component logic — is exactly what was in your file.
