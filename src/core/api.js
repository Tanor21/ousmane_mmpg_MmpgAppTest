import axios from 'axios'

const apiInstance = axios.create({ baseURL: 'https://reqres.in/api' })

const api = {
    getUsers: () => apiInstance.get('/users')
}

export default api
