# Jeitinho Vibe

The landing page for [jeitinhovibe.online](https://jeitinhovibe.online) — a two-person studio that builds small, useful, faintly unhinged software.

Static HTML, CSS and a sprinkle of JavaScript. No framework, no build step, no meetings.

## Layout

```
public/
  index.html          the whole page
  styles.css          all the styling
  app.js              scroll reveals and the idea machine
  assets/
    logo.webp         the mascot
    projects/         one image (or a small set) per project
wrangler.jsonc        Cloudflare Worker with static assets + custom domain
```

## Adding or editing a project

Each project is an `<article class="card">` in `public/index.html`. The accent colours live in inline custom properties:

```html
<article class="card reveal" style="--accent:#f26b1d; --accent-soft:#ffd9c2;">
```

- `--accent` — used for the card number and link underlines.
- `--accent-soft` — the media mat behind the image.

Drop a screenshot in `public/assets/projects/`, point the `<img>` at it, and update the tweet-length description, the `spec` one-liner, and the GitHub / live links.

Useful media classes:

| Class | Use it for |
|---|---|
| `.media-wide` | the full-width featured card |
| `.media-phone` | tall phone screenshots (it crops the bottom like a phone peeking out) |
| `.media-encore` | the three-phone Encore triptych |
| `.media-contained` | screenshots with transparent margins, shown on a dotted mat |
| `.media-photo` | photo-led cards with a round sticker in the corner |
| `.media-footnotes` | the Footnotes risograph collage |
| `.media-poster` | illustration or poster art |

## Run it locally

```sh
npm install
npm run dev
```

## Deploy

Every push to `main` deploys automatically through GitHub Actions (`.github/workflows/deploy.yml`). Pull requests get a Cloudflare preview at `pr-<number>.jeitinhovibe.online`.

The Worker is bound to `jeitinhovibe.online` as a custom domain, on the Jeitinho Vibe Cloudflare account. The workflow needs a `CLOUDFLARE_API_TOKEN` repository secret with Workers Scripts, Workers Routes and Zone read permissions.

To deploy manually (useful if Actions is down):

```sh
npm run deploy
```

## Credits

Logo: ours. Yes, the dog is the boss. Project screenshots are from the projects themselves. Fonts: Baloo 2, Fraunces, Space Grotesk and Space Mono, served by Google Fonts.

© Jeitinho Vibe. No rights reserved. We're not lawyers.
