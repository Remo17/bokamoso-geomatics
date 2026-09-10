# Bokamoso Geomatics - Agent Instructions

## 1. SOURCE OF TRUTH

There are two authoritative sources:

### Visual source of truth
The existing Framer export and published Framer website are the visual source of truth.

Published site:
https://bokamoso-geomatics.framer.website/

The current design is approved. Preserve its identity exactly.

### Company information source of truth
Use:

`docs/company-profile.pdf`

This document is the authoritative source for company facts, services, projects, personnel, contact information, addresses, mission, vision, and other business information.

Do not invent company facts, projects, qualifications, addresses, contact details, or personnel.

---

## 2. NON-NEGOTIABLE VISUAL LOCK

DO NOT redesign the website.

The existing Framer design is approved and must be preserved.

Do NOT change:

- colours
- HEX/RGB/HSL colour values
- gradients
- typography
- fonts
- font weights
- font sizes
- line heights
- letter spacing
- spacing
- padding
- margins
- layout
- grid structure
- container widths
- imagery
- logo
- borders
- shadows
- corner radii
- opacity
- blur
- visual hierarchy
- animation style
- transition style
- existing branding

Treat existing visual values as immutable design tokens.

If a visual value appears incorrect, do not guess a replacement. Investigate the existing Framer export/live site first.

If a visual change is genuinely necessary, STOP and explain why before making that change.

The objective is to repair, complete, optimize, and productionize the existing website, NOT to create a new design.

---

## 3. PRIMARY OBJECTIVE

Make the existing Bokamoso Geomatics website production-ready while maintaining the exact existing Framer visual identity.

Priorities:

1. Preserve the exact existing design.
2. Fix broken routes and links.
3. Complete missing pages.
4. Make all existing buttons and navigation functional.
5. Make the site properly responsive.
6. Ensure content accurately reflects the company profile.
7. Fix missing assets.
8. Improve accessibility.
9. Improve performance where this does not alter the visual design.
10. Verify the complete site with automated browser testing.

---

## 4. EXISTING KNOWN ISSUES

Investigate and fix these known issues without changing the approved design:

- `/projects` currently returns 404.
- `/contact` currently returns 404.
- `/classes.png` currently returns 404.
- `/learners.jpeg` currently returns 404.
- Some navigation/buttons do not currently lead to working destinations.
- Some pages/routes appear to be missing.
- Responsive behavior needs to be verified across mobile, tablet, and desktop.

Do not assume these are the only problems. Audit the complete site.

---

## 5. RESPONSIVE REQUIREMENTS

Test the website at minimum at:

- 320px
- 360px
- 375px
- 390px
- 414px
- 430px
- 768px
- 834px
- 1024px
- 1280px
- 1440px
- 1920px

The mobile/tablet/desktop versions must retain the same visual identity.

Responsive changes should only adapt layout behavior where necessary. They must not introduce a new design language.

Check for:

- horizontal overflow
- clipped text
- broken navigation
- overlapping elements
- incorrect spacing
- unreadable text
- images overflowing containers
- broken buttons
- broken forms
- inaccessible controls
- viewport-specific layout failures

---

## 6. CONTENT

Use `docs/company-profile.pdf` for official company information.

Important content categories include:

- company description
- vision
- mission
- services
- projects
- personnel
- professional qualifications
- contact details
- office addresses
- skills transfer
- quality assurance

Do not fabricate missing information.

If the existing Framer website contains content that conflicts with the company profile, flag the conflict rather than silently inventing or changing facts.

---

## 7. ROUTES AND NAVIGATION

Audit every navigation item, button, CTA, internal link, external link, and form.

Every intended internal destination must exist and work.

Check at minimum:

- Home
- About
- Services
- Projects
- Contact
- all major CTA buttons
- header navigation
- footer navigation
- mobile navigation
- project/service links
- contact actions

Use sensible semantic routes rather than leaving dead links.

---

## 8. FORMS AND INTERACTIONS

Audit all forms and interactive elements.

Check:

- validation
- required fields
- error states
- success states
- keyboard navigation
- focus states
- submit behavior
- mobile usability

Do not add fake functionality that appears to send information when it does not actually do so.

If a backend/service is required but not configured, clearly identify it rather than pretending it works.

---

## 9. ACCESSIBILITY

Improve accessibility without changing the visual design.

Check:

- semantic HTML
- heading hierarchy
- alt text
- keyboard navigation
- focus visibility
- button/link semantics
- form labels
- colour contrast
- ARIA only where appropriate
- screen-reader behavior

Do not alter the approved visual palette merely to satisfy accessibility checks without first identifying the exact conflict.

---

## 10. SEO

Audit and improve where appropriate:

- page titles
- meta descriptions
- canonical URLs
- Open Graph metadata
- favicon
- robots.txt
- sitemap
- semantic headings
- image alt text

SEO improvements must not change the visual design.

---

## 11. PERFORMANCE

Audit:

- unnecessary JavaScript
- oversized assets
- image loading
- font loading
- layout shifts
- duplicate assets
- unnecessary dependencies
- broken requests

Do not replace or visually alter approved imagery merely for optimization unless explicitly authorized.

---

## 12. SECURITY AND DEPENDENCIES

Audit the Next.js/React project and dependencies.

Do not blindly run destructive or breaking commands such as:

`npm audit fix --force`

Preserve compatibility with the existing Framer export.

The exported Framer authentication/access-token asset is intentionally excluded from Git via `.gitignore`. Do not expose, print, commit, or publish secrets or authentication tokens.

---

## 13. TESTING

Use browser-based testing, preferably Playwright, to verify the finished website.

Test:

- every route
- navigation
- buttons
- forms
- responsive layouts
- console errors
- failed network requests
- missing images/assets
- basic accessibility
- mobile menu
- desktop navigation

Capture screenshots at representative desktop, tablet, and mobile widths.

Compare the implementation against the existing published Framer website and preserve visual fidelity.

---

## 14. WORKFLOW

Before making substantial changes:

1. Inspect the repository.
2. Inspect the existing Framer implementation.
3. Inspect the published website.
4. Inspect `docs/company-profile.pdf`.
5. Identify routes, assets, components, styles, and dependencies.
6. Audit the known failures.
7. Produce a plan.

Do not immediately rewrite the application.

After the plan is approved:

1. Implement the smallest necessary changes.
2. Preserve existing visual values.
3. Test each route.
4. Test responsive behavior.
5. Run browser tests.
6. Check for console/network errors.
7. Review screenshots against the Framer source.
8. Report exactly what changed.

---

## 15. ABSOLUTE RULE

The website should look like the same Bokamoso Geomatics website that was created in Framer.

Jules is being used as an engineering/QA agent, not as a designer.

WHEN IN DOUBT:

Preserve the existing design.
Preserve the existing colours.
Preserve the existing content unless the company profile establishes a correction.
Do not invent information.
Do not redesign.
