
#!/usr/bin/env bash

set -Eeuo pipefail

# ------------------------------------------
# Playwright Automation - Execution Script
# ------------------------------------------

echo "========================================"
echo " Playwright Quality Engineering Platform"
echo "========================================"

# Default environment
export TEST_ENV="${TEST_ENV:-dev}"

echo "Environment : ${TEST_ENV}"
echo "Node version:"
node --version

echo "npm version:"
npm --version

# Ensure the script runs from the repository root
cd "$(dirname "${BASH_SOURCE[0]}")"

# 1. Validate required project files
if [[ ! -f "package.json" ]]; then
    echo "ERROR: package.json not found."
    exit 1
fi

if [[ ! -f "package-lock.json" ]]; then
    echo "ERROR: package-lock.json not found."
    exit 1
fi

# 2. Install dependencies
echo "Installing project dependencies..."
npm ci

# 3. Validate TypeScript
echo "Running TypeScript checks..."
npm run typecheck

# 4. Ensure Chromium is installed
echo "Checking Playwright Chromium browser..."
npx playwright install chromium

# 5. Execute tests
echo "Executing Playwright tests..."

npx playwright test --grep @ui

echo "========================================"
echo " Playwright execution completed!"
echo "========================================"
