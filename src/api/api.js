export const api = {
    url: "http//localhost:3001/list",
    fetchGet: () => fetch(api.url),
    fetchGetById: (id) => fetch(api.url + '/tarefa/' + id)
}