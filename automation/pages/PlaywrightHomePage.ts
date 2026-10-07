import { type Page,expect} from '@playwright/test';

export class PlaywrightHomePage {
	constructor(private readonly page:Page){}

	readonly getStartedLink = this.page.getByRole('link',{name:'Get Started'});
	async open(): Promise<void>{
		await this.page.goto('/');
	}
	async verifyPageLoaded(): Promise<void>{
		await expect(this.page.getByRole('heading',{name:'Playwright enables reliable web automation for testing, scripting, and AI agents.'})).toBeVisible();
	}

	async clickGetStarted():Promise<void>{
		await this.getStartedLink.click();
	}
}

