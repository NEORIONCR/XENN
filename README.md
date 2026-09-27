# XENN website

Responsive, single-page website based on the supplied desktop wireframe and iPhone PDF. The site uses plain HTML, CSS, and JavaScript, so it does not need a build step.

## Preview locally

From this folder, run:

```sh
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## Publish to Vercel

Import this folder as a project or connect a GitHub repository containing its contents. Set Framework Preset to **Other**, leave Build Command empty, and set the Output Directory to `.`. The site's `index.html` is at the project root.

After the deployment works on the Vercel preview domain, add the final domain to the Vercel project. Copy the exact DNS records shown there into Porkbun; avoid guessing DNS values before Vercel assigns them. Keep the existing mail-related DNS records if the domain already receives email.

## Content and assets

- The hero “LISTEN TO THE FIRST SIGNAL” button jumps to the single section. The remaining contact calls to action open an email to `hola@gavrielarias.com`.
- The Spotify embed uses the supplied track ID.
- Production copy includes “music composition” at every viewport width.
- The `element-cutout.png` and `contact-cutout.png` files are transparent cutouts made from the supplied artwork. The source files remain in the user's asset folder.
- Intel One Mono is bundled locally under the Open Font License (`assets/IntelOneMono-LICENSE.txt`). Inter loads from Google Fonts.
- Social icons come from the [Simple Icons](https://github.com/simple-icons/simple-icons) project (CC0).
- Entrance animations use [Motion](https://motion.dev/docs/quick-start) when its CDN is available and have a CSS fallback. The ambient glow and subtle floating effects use CSS. Reduced-motion preferences are honored.

## Remaining publication detail

The exact domain name and access to the GitHub, Vercel, and Porkbun accounts are needed to connect and publish the project. No credentials should be placed in this folder.
