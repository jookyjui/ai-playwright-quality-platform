import {test} from '../../fixtures/test.fixture.js';
import { LocatorConfig } from '../../pages/base/BasePage.js';
import { selectors } from '../../../selectorBook.js';
// import {PlaywrightHomePage} from '../../pages/PlaywrightHomePage.js';
const loginHead:LocatorConfig={
	strategy:'role',
	selector: 'heading',
	roleName: selectors.home.homeHeading
};
const getHead:LocatorConfig={
	strategy:'role',
	selector:'link',
	roleName: selectors.home.getStarted
};
test.only('[UI] Playwright homepage', async({homePage})=>{
	// const homePage = new PlaywrightHomePage(page);
	await homePage.open();
	await homePage.verifyElementisVisible(loginHead);
	await homePage.clickGetStarted(getHead);
});
