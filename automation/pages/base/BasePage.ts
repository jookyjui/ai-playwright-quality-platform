import { type Locator, type Page } from '@playwright/test';
type PlaywrightAriaRole = Parameters<Page['getByRole']>[0];

export type LocatorConfig =
    | { strategy: 'role'; selector: PlaywrightAriaRole; roleName: string | RegExp; exact?: boolean }
    | { strategy: 'placeholder'; selector: string | RegExp; exact?: boolean }
    | { strategy: 'label'; selector: string | RegExp; exact?: boolean }
    | { strategy: 'text'; selector: string | RegExp; exact?: boolean };
export class BasePage {
    constructor(protected readonly page: Page) { }
    public async click(target: string | LocatorConfig, postClickDelayMs: number = 0): Promise<void> {
        let locator: Locator;
        if (typeof target === 'string') {
            locator = this.page.locator(target);
        } else {
            locator = this.getDynamicLocator(target);
        }
        await locator.click();

        if (postClickDelayMs > 0) {
            await this.page.waitForTimeout(postClickDelayMs);
        }
    }

    protected async fill(
        locator: Locator,
        value: string,
        postFillDelayMs: number = 0
    ): Promise<void> {
        await locator.fill(value);
        if (postFillDelayMs > 0) {
            await this.page.waitForTimeout(postFillDelayMs);
        }
    }

    protected async getText(locator: Locator): Promise<string> {
        return (await locator.textContent())?.trim() ?? '';
    }

    protected async isVisible(locator: Locator): Promise<boolean> {
        return locator.isVisible();
    }

    protected async waitForUrl(url: string | RegExp): Promise<void> {
        await this.page.waitForURL(url);
    }

    protected async press(locator: Locator, key: string): Promise<void> {
        await locator.press(key);
    }

    public getDynamicLocator(config: LocatorConfig): Locator {
        switch (config.strategy) {
            case 'role':
                return this.page.getByRole(config.selector, {
                    name: config.roleName,
                    exact: config.exact
                });
            case 'placeholder':
                return this.page.getByPlaceholder(config.selector, { exact: config.exact });
            case 'label':
                return this.page.getByLabel(config.selector, { exact: config.exact });
            case 'text':
                return this.page.getByText(config.selector, { exact: config.exact });
            default:
                throw new Error(`Unsupported locator strategy`);
        }
    }

    protected async scrollIntoViewIfNeeded(locateScroll:LocatorConfig):Promise<void>{
        let locator:Locator = this.getDynamicLocator(locateScroll);
        await locator.scrollIntoViewIfNeeded();
    }
}