import {test, expect} from '@playwright/test';
import { UserClient } from '../../api/clients/UserClient.js';
import { RepositoryResponse } from '../../api/schemas/RepositoryResponse.js';

test.describe('API Smoke Tests',()=>{
	test.only('[API Smoke Test] should fetch Playwright repository information', async({request})=>{
		// const response = await request.get('https://api.github.com/repos/microsoft/playwright');
		// expect(response.ok()).toBeTruthy();
		// const body = await response.json();
		// expect(body.name).toBe('playwright');
		const apiClient = new UserClient(request);
		const response = await apiClient.getRepository();
		// const body = await response.json();
		const body:RepositoryResponse = await response.json();
		expect(body.name).toBe('playwright');
		expect(body.full_name).toBe('microsoft/playwright');
	});
});
