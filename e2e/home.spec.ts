/**
 * @note
 * - make sure local dev environment is ready (pnpm dev)
 */

import { test, expect } from '@playwright/test';

/** replace with env vars if needed */
const LOCAL_HOST_URL = 'http://localhost:3000/';
const WELCOME_TEXT = 'Welcome to Leonardo.AI';
const INFO_TEXT = 'Info';

test('should show home page', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL);
  await expect(page.locator('h1')).toContainText(WELCOME_TEXT);
  await expect(page.locator('a', { hasText: INFO_TEXT })).toBeVisible();
});
