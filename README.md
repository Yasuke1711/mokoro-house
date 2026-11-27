# Mokoro House

An independent, one-page hospitality website concept for an imagined safari retreat inspired by Botswana's Okavango Delta.

**Mokoro House is fictional.** It is not an operating lodge and does not accept bookings. Accommodation descriptions are visual directions only. The stay planner creates a text brief in the visitor's browser and does not transmit or store personal information.

## Run locally

This is a static HTML, CSS and JavaScript site. No package installation or build step is needed.

You can open `index.html` directly, or start a local static server from this directory:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Deploy with Vercel

1. Open [Vercel](https://vercel.com/) and choose **Add New → Project**.
2. Import the `Yasuke1711/mokoro-house` GitHub repository.
3. Set **Framework Preset** to **Other**.
4. Keep **Root Directory** as `./`.
5. Leave the **Build Command** empty. If Vercel asks, enable its override and leave the field blank.
6. Leave **Output Directory** at the default. This repository has its `index.html` at the root, so Vercel serves the site directly.
7. Click **Deploy**.

Once connected, commits pushed to `main` automatically create new deployments.

## Features

- Responsive editorial-style landing page
- Okavango Delta landscape storytelling
- Interactive four-part seasonal guide
- Illustrative accommodation directions
- Safari experience overview
- Client-side stay brief builder with copy interaction
- Keyboard focus styles and reduced-motion support

## Content and imagery

Photographs are remotely loaded from Pexels and are credited in [ASSET_CREDITS.md](./ASSET_CREDITS.md). The seasonal guide is a broad introduction, not a forecast. Flood extent, water levels, access and wildlife activity vary between years and locations.

The Okavango Delta background reference is the [UNESCO World Heritage Centre](https://whc.unesco.org/en/list/1432/).
