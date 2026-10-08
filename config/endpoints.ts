export const ENDPOINTS = {
    apiUrl: {
        getUrl: '/repos/microsoft/playwright'
    },
    users: {
        byId: (id: string|number)=>`/api/v1/users/${id}`
    }
}