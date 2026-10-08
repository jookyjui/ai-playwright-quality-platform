import { type Page, expect } from '@playwright/test';
import { BasePage, LocatorConfig } from './base/BasePage.js';

export class PlaywrightHomePage extends BasePage{
    readonly getStartedLink=
         this.page.getByRole('link', {
            name: /Get started/i
        });

    async open(): Promise<void> {
        await this.page.goto('/');
    }

    async verifyElementisVisible(config:LocatorConfig): Promise<void> {
        await expect(
            // this.page.getByRole('heading', {
            //     name: /Playwright enables reliable web automation/i
            // })
            this.getDynamicLocator(config)
        ).toBeVisible();
    }

    async clickGetStarted(): Promise<void> {
        await this.click(this.getStartedLink);
    }

}