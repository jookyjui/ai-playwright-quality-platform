import {z}from 'zod';

export const RepositorySchema = z.object({
    name:z.string(),
    full_name:z.string(),
    html_url:z.string().url(),
    private:z.boolean(),
    description:z.string().nullable()
})

export type RepositoryResponse = z.infer<typeof RepositorySchema>;