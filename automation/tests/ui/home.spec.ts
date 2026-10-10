import { test } from '../../fixtures/test.fixture.js';
import { LocatorConfig } from '../../pages/base/BasePage.js';
import { selectors } from '../../../selectorBook.js';
import { Locator } from '@playwright/test';
// import {PlaywrightHomePage} from '../../pages/PlaywrightHomePage.js';
const loginHead: LocatorConfig = {
	strategy: 'role',
	selector: 'heading',
	roleName: selectors.home.homeHeading
};
const getHead: LocatorConfig = {
	strategy: 'role',
	selector: 'link',
	roleName: selectors.home.getStarted
};
const getBtn: LocatorConfig = {
	strategy: 'role',
	selector: 'button',
	roleName: selectors.home.searchText
}

const getPlace: LocatorConfig = {
	strategy: 'placeholder',
	selector: 'Search docs'
}

const projectLink: LocatorConfig = {
	strategy: 'role',
	selector: 'link',
	roleName: selectors.home.network
}
test.only('[UI] Playwright homepage', async ({ homePage }) => {
	// const homePage = new PlaywrightHomePage(page);
	await homePage.open();
	await homePage.verifyElementisVisible(loginHead);
	await homePage.click(getHead);
	// await homePage.click(selectors.home.searchBtn,3000);
	await homePage.click(getBtn);
	await homePage.verifyElementisVisible(getPlace);
	const searchInp = homePage.getDynamicLocator(getPlace);
	await homePage.fillElement(searchInp, 'projects', 2000);
	await searchInp.press('Enter');
	await homePage.scrollElementIntoView(projectLink);
	await homePage.click(projectLink);
});
