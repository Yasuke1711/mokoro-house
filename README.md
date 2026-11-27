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

## Deploy

### GitHub Pages (recommended)
1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, select **GitHub Actions** as the source.
3. The included workflow deploys the site on pushes to `main`.
4. The site will be available at https://yasuke1711.github.io/mokoro-house/.

### Vercel
1. Import `Yasuke1711/mokoro-house` as a new Vercel project.
2. Select **Other** as the framework preset.
3. Leave the build command empty.
4. Set the output directory to `.`.
5. Deploy.

### Netlify
Connect the repository as a new Netlify site. The included `netlify.toml` publishes the repository root without a build step.

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
