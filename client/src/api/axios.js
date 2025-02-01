import axios from 'axios'

const instance = axios.create({
  baseURL: 'mern-auth-task-production.up.railway.app/api',
  withCredentials: true
})

export default instance