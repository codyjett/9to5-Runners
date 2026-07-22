# 9to5 Runners V2 Foundation

This package preserves the approved static HTML site while adding shared infrastructure.

## Shared files

- `data/reviews.json` — central registry for review titles, URLs, images, dates, brands, categories, and tags.
- `assets/site.js` — shared browser-side behavior and analytics duplicate protection.
- `scripts/validate-site.js` — validates analytics, review pages, images, and the featured review.
- `npm run check` — runs the validation before deployment.

## New review workflow

1. Add the review HTML page and its images.
2. Add a record to `data/reviews.json`.
3. Mark only the newest featured review with `"hero": true`.
4. Run `npm run check`.
5. Deploy to Vercel.

This is a safe V2 foundation. It centralizes metadata and validation without changing the approved page layouts.
