# Bokamoso Geomatics - Audit & Implementation Plan

## A. Existing Architecture
- **Framework:** Next.js 15 application.
- **Routing:** Operates using `next.config.mjs` to rewrite requests for standard routes directly to static HTML files located in the `public/` directory.
- **Fallback:** `app/layout.tsx` and `app/page.tsx` exist as a fallback when rewrites are missing, rendering a "Nothing rewrote this request" placeholder.
- **Assets:** JS modules and images are stored in `public/assets/`.

## B. Existing Routes
Configured in `next.config.mjs` and present in `public/`:
- `/` (Home, maps to `public/index.html`)
- `/about` (maps to `public/about/index.html`)
- `/services` (maps to `public/services/index.html`)

## C. Missing Routes
The following routes are linked in the navigation but do not exist in the `public/` directory and are missing from `next.config.mjs`:
- `/projects`
- `/contact`
- `/expertise`
- `/request-a-quote`
- Detailed service pages (e.g., `/services/cadastral-surveys`, etc.)
- Detailed project pages (e.g., `/projects/topographic-survey-kanana-estate`, etc.)

## D. Broken Links/Buttons
Because the routes in section C are missing, all navigation links and buttons pointing to them (e.g., `href="projects/"`, `href="contact/"`) are broken and result in the Next.js fallback page instead of the actual content.

## E. Missing Assets
- `/classes.png` and `/learners.jpeg` return 404s.
- I will trace every reference to these files within the Framer export to determine if they are actively used or stale.
- I will search for the original assets in the Framer export and runtime. I will not invent visual replacements or use transparent placeholders. If the assets cannot be found but are referenced, they will be removed/fixed at the reference point, or the original assets will be recovered if possible.

## F. Content that should come from the company profile
Content in the HTML files needs to be audited against `docs/company-profile.pdf` for FACTUAL information only.
- I will preserve existing approved website/marketing copy.
- I will only correct factual inaccuracies (such as mismatched addresses, contact numbers, email, or project names/dates) using the PDF as the source of truth.
- **Addresses to verify:** "Regus Business Park, 214 Beyers Naude Dr, Rustenburg, 0299" and "Stand 152 Phatsima Township Rustenburg 0351".
- **Contact Numbers:** 061 502 7201 and 076 534 6929.
- **Email:** kerengsenna@gmail.com

## G. Responsive Problems
The exported Framer HTML sometimes suffers from horizontal overflow or layout shifts on specific viewport widths if constraints were not configured perfectly in Framer. The site must be tested at 320, 360, 375, 390, 414, 430, 768, 834, 1024, 1280, 1440, and 1920px.

## H. Accessibility Issues
- I will not restructure the Framer-generated DOM simply because it uses `div`s, to avoid breaking CSS selectors or layout.
- Accessibility improvements will be strictly minimal (e.g., adding `alt` attributes to images, verifying focus states) and will not break Framer's CSS, runtime behavior, or visual fidelity.

## I. SEO Issues
- Check `meta` descriptions and semantic heading hierarchy (`h1`, `h2`) on all pages, modifying only if it doesn't break Framer logic.

## J. Performance Issues
- Review asset loading and scripts. Will report findings but will not remove or alter Framer runtime scripts or aggressively restructure code in a way that breaks Framer's functionality.

## K. Dependency/Security Issues
- I will run `npm audit` to identify vulnerabilities and report them in a separate document or comment.
- I will NOT automatically run `npm audit fix` or change dependency versions at this stage, to preserve compatibility with the Framer export. Dependency changes require justification.

## L. Exact Files that Need Modification
- `next.config.mjs`
- `public/index.html`
- `public/about/index.html`
- `public/services/index.html`
- Missing pages/routes: The method for adding these will be determined after a deep inspection of the Framer exact export mechanism, rather than assuming standalone HTML downloads.

## M. Proposed Implementation Order
1. **Framer Export Inspection:** Deeply inspect the existing Framer Exact export (Javascript modules in `public/assets/`, HTML structure) to determine the safest method for implementing missing routes (`/projects`, `/contact`, etc.) while preserving the visual system exactly.
2. **Missing Assets Tracing:** Trace references to `classes.png` and `learners.jpeg` to see if they are stale or how to properly recover the original assets.
3. **Factual Content Verification:** Cross-reference HTML content with the PDF to identify and correct any factual inaccuracies, preserving all marketing copy.
4. **Link & Route Repair:** Implement the safest method for adding missing pages and update `href` links to restore navigation.
5. **Minimal Accessibility/SEO:** Apply non-breaking a11y improvements like `alt` tags.
6. **Vulnerability Audit:** Run `npm audit` and report findings without applying fixes.
7. **Responsive CSS Tweaks:** Run Playwright tests and apply necessary fixes (e.g. `overflow-x: hidden`) without altering visual design.
8. **Final Polish:** Ensure tests pass and the site matches the live Framer visual source of truth.

## N. How visual fidelity will be verified against the Framer site
We will write a Playwright script to take full-page screenshots of the local site at key mobile, tablet, and desktop widths (e.g., 375px, 768px, 1440px). We will visually compare these screenshots side-by-side with the live site (`https://bokamoso-geomatics.framer.website/`) to guarantee the layout, spacing, colors, fonts, and hierarchy are perfectly preserved. No visual CSS values (colors, margins, padding, fonts) will be changed. Non-negotiable visual constraints apply.
