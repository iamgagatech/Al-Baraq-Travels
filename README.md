# Al-Baraq Travels

A single-page React + Vite website for **Al-Baraq Travels**, a travel agency in Ikeja, Lagos, Nigeria.

Built as a sales demonstration for the business owner. The design follows a premium,
editorial travel-agency aesthetic: warm ivory surfaces, deep forest green, brass accents,
Cormorant Garamond display type over Manrope body text.

## What's on the page

- **Hero** — identity, services summary, "Explore our services" + "Chat on WhatsApp" + call actions.
- **Trust strip** — honest, verifiable statements only (location, direct contact, no promises of approvals). No invented ratings, client counts, or awards.
- **Services** — ordered by the business's stated focus: Visa assistance → Flight bookings → Study abroad → Corporate travel → Hotels & airport transfers → Holidays & group tours. Each service has a context-specific prefilled WhatsApp enquiry link and a call fallback.
- **Visa & study-abroad spotlight** — preparation support explained honestly (no approval guarantees).
- **Process** — a neutral four-step enquiry flow, labelled as typical rather than contractual.
- **Why / About / Destinations / FAQ** — identity, editorial destination inspiration, and carefully worded answers.
- **Contact** — phone, WhatsApp, location, verified social profiles, and an enquiry form.

## The enquiry form (important)

The form is **a prototype with a real hand-off**: on submit it validates the fields and opens
WhatsApp (`wa.me/2348024029843`) with the enquiry prefilled. The page itself stores and
sends nothing — no backend, no third-party credentials, no sensitive document fields.
This is disclosed on the page itself.

## Content lives in one file

All copy, contact details, and service definitions live in `src/data/business.ts`
(the single personalization swap-file). Edit it there; components read from it.
Verified values are marked `VERIFIED`, owner-confirmation items are marked `CONFIRM`.

## Run locally

Requires Node.js 22.x and npm.

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run build   # type-checks TypeScript, then bundles
npm run preview # serves dist/ locally
```

The production site is a single self-contained `dist/index.html` (JS/CSS inlined via
`vite-plugin-singlefile`). `vercel.json` points Vercel at that build.

## Deploy to Vercel

Import this repository in Vercel and deploy. No environment variables are required.

## Launch checklist (owner confirmation needed)

Before publishing as the live site:

- [ ] Remove the `noindex, nofollow` robots meta tag in `index.html` (demo is intentionally kept out of search indexes).
- [ ] Confirm the street address, opening hours, and a preferred email (placeholders noted on the page).
- [ ] Replace the About-section photo placeholder with an owner-approved image.
- [ ] Confirm the exact list/order of services and the enquiry workflow wording.
- [ ] Confirm the scope of Statement of Purpose / document-preparation support.
- [ ] Swap the preview note in the footer once the owner authorizes production use.
