export const folders = {
    create: '/folders/create',
    fetch: (id) => `/folders/fetch/${id}`,
    getParents: '/folders/parent',
    update: (id) => `/folders/update/${id}`,
    trash: (id) => `/folders/delete/${id}`,
    delete: (id) => `/folders/delete/${id}`,
}