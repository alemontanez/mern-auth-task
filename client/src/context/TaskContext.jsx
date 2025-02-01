import { createContext, useContext, useState } from 'react'
import { createTaskRequest, deleteTaskRequest, getTaskRequest, getTasksRequest, updateTaskRequest } from '../api/tasks'

export const TaskContext = createContext()

export const useTasks = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('UseTasks must be used within an TaskProvider')
  }
  return context
}

export const TaskProvider = ({ children }) => {
  
  const [tasks, setTasks] = useState([])

  const getTasks = async () => {
    try {
      const res = await getTasksRequest()
      setTasks(res.data)
    } catch (error) {
      console.error(error)
    }
  }
  
  const createTask = async (task) => {
    try {
      await createTaskRequest(task)
    } catch (error) {
      console.error(error)
    }
  }

  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id)
      return res.data
    } catch (error) {
      console.error(error)      
    }
  }

  const updateTask = async (id, task) => {
    try {
      await updateTaskRequest(id, task)
    } catch (error) {
      console.error(error)
    }
  }
  
  const deleteTask = async (id) => {
    try {
      await deleteTaskRequest(id)
      await getTasks()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <TaskContext.Provider value={{
      tasks,
      getTasks,
      createTask,
      getTask,
      updateTask,
      deleteTask
    }}>
      {children}
    </TaskContext.Provider>
  )
}