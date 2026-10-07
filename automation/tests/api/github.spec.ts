import {test, expect} from '@playwright/test';

test.describe('API Smoke Tests',()=>{
	test('should fetch Playwright repository information', async({request})=>{
		const response = await request.get('https://api.github.com/repos/microsoft/playwright');
		expect(response.ok()).toBeTruthy();
		const body = await response.json();
		expect(body.name).toBe('playwright');
	});
});
