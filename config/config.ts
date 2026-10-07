import dotenv from 'dotenv';

const environment = process.env.TEST_ENV || 'dev';

dotenv.config({
    path: `config/env/${environment}.env`
});

export const config = {
    environment,
    baseURL: process.env.BASE_URL ?? ''
};