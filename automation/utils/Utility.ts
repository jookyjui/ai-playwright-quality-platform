import dotenv from 'dotenv';
import { en } from 'zod/locales';
dotenv.config();

const BASE_DOMAIN = 'com';

export function buildUrl(subdomain:string,endpoint:string=''):string{
    const env = process.env.TEST_ENV || 'api';

    const formattedEndpoint = endpoint && !endpoint.startsWith('/')?'/${endpoint}':endpoint;
    return `https://${env}.${subdomain}.${BASE_DOMAIN}${formattedEndpoint}`;
}