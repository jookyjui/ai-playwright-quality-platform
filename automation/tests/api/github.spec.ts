import {test, expect} from '@playwright/test';
import { UserClient } from '../../api/clients/UserClient.js';
import { RepositoryResponse } from '../../api/schemas/RepositoryResponse.js';
import { RepositorySchema } from '../../api/schemas/repository.schema.js';
import {expectSuccessfulResponse} from '../../helpers/apiAssertions.js'
test.describe('API Smoke Tests',()=>{
	test('[API Smoke Test] should fetch Playwright repository information', async({request})=>{
		const response = await request.get('https://api.github.com/repos/microsoft/playwright');
		expectSuccessfulResponse(response);
		// expect(response.ok()).toBeTruthy();
		// [way 1] const body = await response.json();
		// [way 1] expect(body.name).toBe('playwright');
		// [way 2] const apiClient = new UserClient(request);
		// [way 2] const response = await apiClient.getRepository();
		// [way 1] const body = await response.json();
		// [way 2]const body:RepositoryResponse = await response.json();
		// [way 2] expect(body.name).toBe('playwright');
		// [way 2] expect(body.full_name).toBe('microsoft/playwright');

		const body = await response.json();
		const repository = RepositorySchema.parse(body);
		expect(repository.name).toBe('playwright');
	});
});
