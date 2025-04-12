export const files = {
    create: '/files/create',
    update: (id) => `/files/update/${id}`,
    trash: (id) => `/files/delete/${id}`,
    delete: (id) => `/files/delete/${id}`,
}