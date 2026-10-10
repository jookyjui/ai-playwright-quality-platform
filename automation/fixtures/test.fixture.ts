import { 
    test as base,
    expect
} from '@playwright/test';

import { PlaywrightHomePage } from '../pages/PlaywrightHomePage.js';

import { logTestExecutionStatus } from '../utils/testStatus.js';

type TestFixtures = { 
    homePage: PlaywrightHomePage;
};

export const test = base.extend<TestFixtures>({
    homePage:async({page},use)=>{
        const homePage = new PlaywrightHomePage(page);
        await use(homePage);
    }
});

test.afterEach(async ({}, testInfo) => {
    logTestExecutionStatus(testInfo);
});

export {expect};