import Task from '../models/task.model.js'
import mongoose from 'mongoose'


export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      user: req.user.id
    }).populate('user', 'username')
    res.json(tasks)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal error' })
  }
}

export const createTask = async (req, res) => {
  try {
    const { title, description, date } = req.body
    const newTask = new Task({
      title,
      description,
      date,
      user: req.user.id
    })
    await newTask.save()
    res.json({ message: 'Task created successfully', task: newTask })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal error' })
  }
}

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params
    // Se verifica si el ID es válido
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid Task ID' })
    }
    const deletedTask = await Task.findByIdAndDelete(id)
    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' })
    }
    return res.sendStatus(204)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal error' })
  }
}

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params
    const { title, description, date } = req.body
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid Task ID' })
    }
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description, date },
      { new: true }
    )
    if (!updateTask) {
      return res.status(404).json({ message: 'Task not found' })
    }
    return res.json({ message: 'Task updated successfully', task: updatedTask })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal error' })
  }
}

export const getTask = async (req, res) => {
  try {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid Task ID' })
    }
    const task = await Task.findById(id).populate('user', ['username', 'email'])
    if (!task) {
      return res.status(404).json({ message: 'Task not found' })
    }
    return res.json(task)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal error' })
  }
}