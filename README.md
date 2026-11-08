# MCIS — Maliyadeva College IT Society

Responsive Next.js App Router website with TypeScript, Tailwind CSS 4, and Lucide icons. Includes the homepage, competitions, events, blogs, news, about, contact, and TERMINAL v26.0. Content detail pages are generated from typed local data, with real 404 responses for unknown paths.

## Local setup

Use Node.js 20.9+ (validated with 24.22.1).

```sh
npm ci
npm run dev
```

Open the development server on port 3000. `npm run build` creates the production build; `npm start` serves it. `npm run typecheck` and `npm run lint` check the code.

## Content and branding

- Edit `src/lib/content.ts` for navigation, site settings, external links, sponsors (including optional tiers), sample communities, articles, events, competitions, and TERMINAL configuration. Replace sample author/date information as well as the copy. `Entry.body` is an array of safely rendered paragraphs; connect a CMS at this data boundary later.
- `src/app/globals.css` contains centralized palette tokens, typography stacks, layout, and reduced-motion rules. Fonts use local system stacks to avoid external requests.
- `public/art/` contains original abstract SVG placeholders. Replace them with approved assets and update `Art` in `src/components/ui.tsx` if switching formats. Next Image provides responsive sizes, stable aspect ratios, and lazy loading.
- The MCIS wordmark is temporary typography, not an official crest. Supply an approved logo before replacing it.
- Set `settings.links.github`, `settings.links.forums`, and `settings.email` to verified destinations. Null values deliberately show unavailable states. No contact form exists because there is no delivery integration; configure a real server-side delivery provider before adding one.
- Set `settings.productionUrl` to the real absolute production URL to enable sitemap entries. No production domain, canonical URLs, or structured data are invented. Update robots with a sitemap URL when the domain is known.
- Supply approved community names, committee details, mission/vision, sponsor names/logos, event dates/venues, competition eligibility/rules, and TERMINAL registration/schedule/contact information. Sample entries are explicitly identified and do not accept registrations.

## Browser validation

Start the production server after a build, then run `npm run test:e2e`. Tests cover all implemented routes and internal links, unknown slugs, search and combined filters, empty states, mobile menu keyboard interaction, and overflow at five viewport widths. The Playwright config uses system Chromium when present; otherwise install it with `npx playwright install chromium` or set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to an installed browser. Browser downloads require network access to Playwright's CDN.

No database, authentication, CMS, email provider, or third-party credentials are required. Use this existing checkout in cloud tasks; no extra Git worktree is necessary.
