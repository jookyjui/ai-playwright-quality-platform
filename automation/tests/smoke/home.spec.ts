import {test, expect} from '@playwright/test';

test.describe('Smoke tests', ()=>{
	test('should load Playwright website',async({page})=>{
		await page.goto('https://playwright.dev/');
		await expect(page.getByRole('heading', {
			name: 'Playwright enables reliable web automation for testing, scripting, and AI agents.'})).toBeVisible();
	});
});
