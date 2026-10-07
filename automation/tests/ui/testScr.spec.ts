import {test} from '../../fixtures/test.fixture.js';
// import {PlaywrightHomePage} from '../../pages/PlaywrightHomePage.js';

test('Playwright homepage', async({homePage})=>{
	// const homePage = new PlaywrightHomePage(page);
	await homePage.open();
	await homePage.verifyPageLoaded();
});
