import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://mern-todo-api-production.up.railway.app/api',
  withCredentials: true
})

export default instance