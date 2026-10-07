import { defineConfig, devices } from '@playwright/test';

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
        baseURL: process.env.BASE_URL,

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
