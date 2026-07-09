# Review Manifest

`reviews.json` is the internal source of truth for published reviews.

The `id` field is internal only and should not appear on public pages.

Current reviews:
- 2026-001 ASICS Gel Nimbus 28
- 2026-002 Janji Revy Pack

When publishing a new review:
1. Add a new object to `reviews.json`.
2. Set the newest review as `featured: true`.
3. Set all other reviews as `featured: false`.
4. Update homepage, archive pages, search, and related reviews from this file.
