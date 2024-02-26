import axios from 'axios'

const api = axios.create()
api.defaults.baseURL = `http://172.16.3.107:3000`
api.defaults.headers.common['Content-Type'] = 'application/json'

export default api
