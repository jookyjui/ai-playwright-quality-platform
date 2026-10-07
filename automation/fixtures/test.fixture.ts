import { 
    test as base,
    expect
} from '@playwright/test';

import { PlaywrightHomePage } from '../pages/PlaywrightHomePage.js';

type TestFixtures = { 
    homePage: PlaywrightHomePage;
};

export const test = base.extend<TestFixtures>({
    homePage:async({page},use)=>{
        const homePage = new PlaywrightHomePage(page);
        await use(homePage);
    }
});

export {expect};