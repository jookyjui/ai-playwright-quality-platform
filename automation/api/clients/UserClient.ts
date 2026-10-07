import { type APIRequestContext,
    expect
 } from "@playwright/test";

 export class UserClient{
    constructor(
        private readonly request: APIRequestContext
    ){}

    async getRepository(){
        const response = await this.request.get('https://api.github.com/repos/microsoft/playwright');
        expect(response.ok()).toBeTruthy();
        return response;
}
}