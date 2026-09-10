# Cotewell feedback review

Reviewed and applied 10 September 2026.

## Homepage and shared branding

The supplied local Figma export was decoded after the Figma connector refused access to the linked frame. The implementation uses the visible homepage section sequence and component measurements from that export: hero, trusted logos, alternating service tiles, projector spotlight, tape carousel and sample banner, case studies, cost banner, FAQ, contact form and footer.

Big John headings and buttons, Cotewell red (#a6192e), square buttons and the shared spacing treatment now apply across the consolidated pages. The original page structures were not rebuilt during this pass, except for the requested homepage replacement and the explicitly requested CAP relocation.

Six photographs were extracted from the supplied Figma file for the homepage. Existing local project videos remain in use. The trusted-logo strip retains all 16 supplied partner logos in colour and autoplays. The case-study section retains Dematic, Grillex, Sitemax and Tubeworx, with the Dematic testimonial playable in the page.

The hidden Figma results section is omitted. Concrete Repair remains excluded from navigation, footer and internal links. Its service-grid position is used for the separate Line Marking Tape category, preserving the four-pair layout without restoring the excluded service.

The self-assessment checklist CTA is retained in the hero. The cost CTA leads to a working, explicitly indicative floor-coating calculator, using the broad $40–$100/m² range in the supplied design. It does not request contact details or claim to produce a quote.

## Projector category and products

| Feedback | Consolidated result |
| --- | --- |
| Autoplay, relevant thumbnail, lower hero eyebrow | Muted autoplay background video, projector installation poster, and clear top spacing. |
| Remove flooring-only cost calculator | No cost calculator CTA on projector category or product pages. |
| View the Product | Category product buttons updated. All three product pages remain linked. |
| Use Toll case study | In-action section now uses the supplied Toll media and links to Cotewell’s published Toll case study. |
| Equal-size video cards | Shared aspect ratio and stretched card layout applied. |
| Change video section title | Simplified to Projector videos. No replacement wording was specified in the task. |
| Red FAQ titles; remove extra call sentence | Open questions use brand red on white. The flagged sentence is absent. |
| Remove product summary specification boxes | Hidden on all projector products; detailed installation notes remain. |
| All feature accents red | Shared red feature treatment applied, with no teal or purple accents. |
| One installation note per line | Each note occupies its own table row. |
| Keep alternative-marking banner, rename, remove boxes | Added Line marking tape and paint solutions as a simple banner without the old pair of feature boxes. |

## Tape category and products

| Feedback | Consolidated result |
| --- | --- |
| Autoplay, relevant thumbnail, lower eyebrow | Existing muted autoplay video retained with installation poster and revised hero spacing. |
| Compare the Tapes | Comparison heading updated. |
| White X-Treme product image | White freezer-tape image retained, distinct from the yellow MightyLine tape. |
| Move CAP to main Line Marking; remove long anecdote | CAP section moved to Line Marking. The quoted concrete-plant anecdote is absent. |
| Remove extra FAQ call sentence | Flagged sentence is absent. |
| Replace awkward related-article introduction | Concise preparation, selection and removal wording retained. |
| Remove product summary boxes | Tape template already omitted these boxes; remains unboxed. |
| Red accents only | Shared red feature/list treatment retained. |
| Separate the installation limitation | Each limitation occupies its own row. |

Colour and size selectors, catalogue prices, quantity, Add to cart, Request Free Samples and related-project gallery controls remain available. Prices are labelled as starting catalogue prices, not dynamically verified variant prices.

## Floor coating

| Feedback | Consolidated result |
| --- | --- |
| Red hover states | Feature cards use a red hover state with white text. |
| Lower hero eyebrow | Revised hero spacing keeps the eyebrow clear of the header. |
| Replacement image, coming soon | Pending the client's replacement asset. The consolidated page retains its existing relevant flooring images. |
| Revised 18-month inspection CTA | Added See a workshop floor 18 months after installation, linked to the original Cotewell article. |
| Video posters and broken testimonial | The consolidated layout uses a local flooring-process video with a poster instead of the old remote testimonial embeds. Those exact Grillex/Cabinet Connections embeds are not restored or claimed as repaired. |
| See all testimonials CTA | Label updated. |
| Revised reading-section title | Worth reading before your site assessment. |
| Open FAQ title red | Applied. |
| Promote assessment sentence to title | Final section heading is Get a site assessment for recommendations suited to your operations. |

## Verification

All 12 linked HTML page templates were opened at 1440px and 390px widths. The final 24 checks found no broken images, JavaScript page errors or document-level horizontal overflow. Desktop screenshots were reviewed for layout and readability; contrast fixes include table headings, FAQ answers, hero text and white product cards on dark sections.

All 16 tape routes and three projector routes were checked earlier in the same revision for product titles, galleries, purchase controls and sticky bars. Interactive checks passed for case-study switching, tape-carousel navigation, FAQ expansion and calculator output. The 100m² test returns $4,000–$10,000 + GST.

Forms and cart actions are mockup interactions. They do not send enquiries, take payment or create live orders.

## Remaining dependencies and limits

- The exact Helvetica Neue LT Pro webfont files were not supplied. Body text currently uses Helvetica Neue where available, then the existing Founders Grotesk fallback. Exact cross-device font matching remains pending those licensed font files.
- The floor-coating image marked coming soon still requires the client's replacement.
- The implementation follows the decoded local Figma layout; an exact rendered-frame comparison through the Figma connector remains unavailable because access was refused.

## Sources

### Product-page revision, 10 September 2026

- Checked all 16 tape product pages through the user's VPN-connected Chrome session. The source gallery paths are retained with each product in `app.js`.
- Added all distinct images shown in those live galleries: 82 local assets across colour variations and installation photos. Duplicate gallery entries on the live Lean Line pages appear once.
- Added a contained main image, visible thumbnail grid, keyboard-accessible thumbnail buttons and colour-to-photo switching. Where the live site supplies a colour option without a matching photo, the mockup states this instead of inventing an image.
- Corrected the shared product-card frames and left-aligned numbered product notes. Page section order and approved branding are unchanged.
- Replaced generic tape features, limitations and applications with concise product-specific information. Corrected sizes include standard arrows (254 × 152mm), external arrows (240 × 90mm), external footprints (100mm wide), Keep Clear signs (610mm), external angle/T shapes (50mm and 75mm) and standard/freezer tapes (50mm and 100mm).
- Prices remain the catalogue starting prices. This revision does not claim to implement live per-variation pricing, stock availability or checkout.
- Fixed sticky-header scroll jitter by separating the compact-header entry and exit thresholds.
- Final browser checks passed: 19 product routes at 1920px, 1440px and 390px (57 checks), plus all 12 linked page templates at 1440px and 390px (24 checks). No broken images, page errors or horizontal overflow were detected. Every product thumbnail switched the main image correctly; product images use contained framing and numbered notes remain left-aligned. Existing case-study, range-carousel, FAQ and calculator interactions also passed.

Live content requiring Cotewell confirmation:

1. The [Warning Forklift Traffic sign](https://cotewell.com.au/product/mightyline-floor-sticker-warning-forklift-traffic/) says `610m wide`. The mockup requests dimension confirmation rather than silently treating this as 610mm.
2. [Lean Line 570](https://cotewell.com.au/product/lean-line-570-floor-marking-tape-50mm-x-30m/) recommends low traffic in its description but mentions medium traffic in a feature. The mockup uses the more conservative low-traffic description and requests suitability confirmation.
3. [External tape](https://cotewell.com.au/product/cotewell-external-line-marking-tape/) specifies a 25m roll but no selectable width. The previous unsupported 50mm/100mm options were removed.
4. [External arrows](https://cotewell.com.au/product/cotewell-external-5s-arrow-floor-tape/) omit red in the notes, but include it in both the colour selector and gallery. Red is retained.
5. The [Lean Line 960 gallery](https://cotewell.com.au/product/lean-line-960-floor-marking-tape-50mm-x-30m-roll/) uses the Lean Line 570 yellow/black image. The mockup mirrors that supplied gallery asset.

### Earlier design and feedback sources

- [Homepage Figma frame](https://www.figma.com/proto/EEQT1hNUFelzeanBj4uOLZ/Cotewell?node-id=43-2705)
- [Projector feedback](https://app.asana.com/1/36425852541914/project/1215611002676299/task/1218124512170377?focus=true)
- [Tape feedback](https://app.asana.com/1/36425852541914/project/1215611002676299/task/1218118495945664?focus=true)
- [Floor-coating feedback](https://app.asana.com/1/36425852541914/project/1215611002676299/task/1218118495945662?focus=true)
- [Published Toll case study](https://cotewell.com.au/case-study-projected-warning-signs-at-a-toll-warehouse/)
- [Big John, designer's page](https://www.ionlucin.com/bigjohn)
