#!/bin/bash
echo "=== Git Diff origin/main...HEAD ==="
git diff origin/main...HEAD

echo -e "\n=== app/components/SharedLayout.tsx ==="
cat app/components/SharedLayout.tsx

echo -e "\n=== app/globals.css ==="
cat app/globals.css

echo -e "\n=== app/services/page.tsx ==="
cat app/services/page.tsx

echo -e "\n=== app/projects/page.tsx ==="
cat app/projects/page.tsx

echo -e "\n=== app/expertise/page.tsx ==="
cat app/expertise/page.tsx

echo -e "\n=== app/contact/page.tsx ==="
cat app/contact/page.tsx

echo -e "\n=== app/request-a-quote/page.tsx ==="
cat app/request-a-quote/page.tsx

echo -e "\n=== next.config.mjs ==="
cat next.config.mjs

echo -e "\n=== package.json ==="
cat package.json

echo -e "\n=== Playwright Verification (test_content.spec.ts) ==="
npx playwright test test_content.spec.ts
