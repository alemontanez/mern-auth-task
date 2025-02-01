import axios from './axios'

export const getTasksRequest = async () => {
  return axios.get('/tasks')
}

export const getTaskRequest = async (id) => {
  return axios.get(`/tasks/${id}`)
}

export const createTaskRequest = async (task) => {
  return axios.post('/tasks', task)
}

export const updateTaskRequest = async (id, task) => {
  return axios.put(`/tasks/${id}`, task)
}

export const deleteTaskRequest = async (id) => {
  return axios.delete(`/tasks/${id}`)
}