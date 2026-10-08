import { type Locator, type Page} from '@playwright/test';
type PlaywrightAriaRole = Parameters<Page['getByRole']>[0];

export type LocatorConfig = 
|{strategy: 'role';selector: PlaywrightAriaRole;roleName?:string|RegExp;exact?:boolean}
|{strategy: 'placeholder';selector:string|RegExp;exact?:boolean}
|{strategy: 'label';selector:string|RegExp;exact?:boolean}
|{strategy: 'text';selector:string|RegExp;exact?:boolean};
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

    protected getDynamicLocator(config:LocatorConfig):Locator{
        switch(config.strategy){
            case 'role':
                return this.page.getByRole(config.selector as PlaywrightAriaRole,{
                    name:config.roleName,
                    exact:config.exact
                });
            case 'placeholder':
                return this.page.getByPlaceholder(config.selector as string|RegExp,{exact:config.exact});
            case 'label':
                return this.page.getByLabel(config.selector as string|RegExp,{exact:config.exact});
            case 'text':
                return this.page.getByText(config.selector as string|RegExp,{exact:config.exact});
            default:
                throw new Error(`Unsupported locator strategy`);
        }
    }
}