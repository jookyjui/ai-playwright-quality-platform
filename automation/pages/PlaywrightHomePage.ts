import { type Page, expect, Locator } from '@playwright/test';
import { BasePage, LocatorConfig } from './base/BasePage.js';

export class PlaywrightHomePage extends BasePage {
    // readonly getStartedLink = 
    // this.page.getByRole('link', {
    //  name: /Get started/i
    //});

    async open(): Promise<void> {
        await this.page.goto('/');
    }

    async verifyElementisVisible(config: LocatorConfig): Promise<void> {
        await expect(
            // this.page.getByRole('heading', {
            //     name: /Playwright enables reliable web automation/i
            // })
            this.getDynamicLocator(config)
        ).toBeVisible();
    }

    async fillElement(locator: Locator, value: string, postFillDelayMs: number = 0): Promise<void> {
        await this.fill(locator, value, postFillDelayMs);
    }

    async scrollElementIntoView(locator: LocatorConfig): Promise<void> {
        await this.scrollIntoViewIfNeeded(locator);
    }

}
