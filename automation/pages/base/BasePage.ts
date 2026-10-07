import { type Locator, type Page} from '@playwright/test';

export class BasePage{
    constructor(protected readonly page:Page){}
    protected async click(locator: Locator): Promise<void>{
        await locator.click();
    }

    protected async fill(
        locator:Locator,
        value: string
    ): Promise<void>{
        await locator.fill(value);
    }

    protected async getText(locator: Locator):Promise<string>{
        return (await locator.textContent())?.trim()??'';
    }

    protected async isVisible(locator: Locator):Promise<boolean>{
        return locator.isVisible();
    }

    protected async waitForUrl(url:string|RegExp):Promise<void>{
    await this.page.waitForURL(url);
    }
}