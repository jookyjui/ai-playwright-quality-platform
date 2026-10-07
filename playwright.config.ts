import { defineConfig, devices } from '@playwright/test';
import { config } from './config/config.js';

export default defineConfig({
    testDir: './automation/tests',

    fullyParallel: true,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 2 : undefined,

    reporter: [
        ['html', { open: 'never' }],
        ['list']
    ],

    use: {
        baseURL: config.baseURL,

        trace: 'retain-on-failure',

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
