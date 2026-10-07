import {test} from '@playwright/test';
import {PlaywrightHomePage} from '../../pages/PlaywrightHomePage.js';

test.only('Playwright homepage', async({page})=>{
	const homePage = new PlaywrightHomePage(page);
	await homePage.open();
	await homePage.verifyPageLoaded();
});
