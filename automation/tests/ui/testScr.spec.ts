import {test} from '@playwright/test';
import {PlaywrightHomePage} from '../../pages/PlaywrightHomePage.ts';

test('Playwright homepage', async({page})=>{
	const homePage = new PlaywrightHomePage(page);
	await homePage.open();
	await homePage.verifyPageLoaded();
});
