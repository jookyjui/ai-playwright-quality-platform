import dotenv from 'dotenv';
import { en } from 'zod/locales';
dotenv.config();

const BASE_DOMAIN = 'github.com';

export function buildUrl(subdomain:string,endpoint:string=''):string{
    const env = process.env.Test_Env || 'api';

    const formattedEndpoint = endpoint && !endpoint.startsWith('/')?'/${endpoint}':endpoint;
    return `https://${subdomain}.${BASE_DOMAIN}${formattedEndpoint}`;
}