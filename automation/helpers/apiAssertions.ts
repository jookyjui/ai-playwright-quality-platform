import {expect, type APIResponse }from '@playwright/test';

export async function expectSuccessfulResponse(response:APIResponse):Promise<void> {
    expect(response.ok()).toBeTruthy();
}