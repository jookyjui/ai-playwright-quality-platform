import { test, expect } from '@playwright/test';
import { buildUrl } from '../../utils/Utility.js';
import { hostConfig } from '../../../config/hosts.js';
import { ENDPOINTS } from '../../../config/endpoints.js';
// import { UserClient } from '../../api/clients/UserClient.js';
// import { RepositoryResponse } from '../../api/schemas/RepositoryResponse.js';

import { RepositorySchema } from '../../api/schemas/repository.schema.js';
import { expectSuccessfulResponse } from '../../helpers/apiAssertions.js'

test.describe('API Smoke Tests', () => {
	test('[API] Playwright API: [TCP01] Fetch Playwright repository information', { tag: ['@api'] }, async ({ request }) => {
		const getUrlFull = buildUrl(hostConfig.api, ENDPOINTS.apiUrl.getUrl);
		const response = await request.get(getUrlFull);
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
