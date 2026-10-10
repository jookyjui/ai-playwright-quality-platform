import { defineConfig, devices } from '@playwright/test';
import { config } from './config/config.js';

export default defineConfig({
    testDir: './automation/tests',

    fullyParallel: true,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 2 : undefined,

    reporter: [
        ['html', { 
            outputFolder: 'playwright-report',
            open: 'never' 
        }],
        ['list'],
        ['allure-playwright',{
            resultsDir: 'allure-results'
        }]
    ],

    use: {
        baseURL: config.baseURL,

        trace: 'on',

        screenshot: 'only-on-failure',

        video: 'retain-on-failure'
    },

    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome']
            }
        }
    ]
});
