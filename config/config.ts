import dotenv from 'dotenv';
// import {hosts} from './hosts.js';

const environment = process.env.TEST_ENV || 'dev';

// function resolveHost(template:string):string{
//     return template.replace('${env}',environment);
// }

dotenv.config({
    path: `config/env/${environment}.env`
});

// export const config = {
//     environment,
//     // baseURL: process.env.BASE_URL ?? ''
//     ui: {
//         web: resolveHost(hosts.ui.web);
//     },
//     api: {
//         get: resolveHost(hosts.api.getHost);
//     }
// };

export const config = {
  // Runtime environment (e.g., env1, env2, qa, stage)
  env: process.env.TEST_ENV || 'env1',

  // Base domain
  baseDomain: process.env.BASE_DOMAIN || '.com',
  baseURL: process.env.BASE_URL,
  // Authentication credentials
  users: {
    standardUser: {
      username: process.env.USER_NAME || 'standard_user',
      password: process.env.USER_PASSWORD || 'Secret123!',
    },
    adminUser: {
      username: process.env.ADMIN_NAME || 'admin_user',
      password: process.env.ADMIN_PASSWORD || 'AdminSecret123!',
    },
  },

  // API Tokens / Secrets
  api: {
    apiKey: process.env.API_KEY || 'default_test_api_key',
    timeout: 30000,
  },

  // Feature flags or execution controls
  features: {
    useMockData: process.env.USE_MOCKS === 'true',
  },
} as const;

export type AppConfig = typeof config;