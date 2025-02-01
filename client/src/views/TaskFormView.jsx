import { useNavigate, useParams } from "react-router-dom"
import { useTasks } from "../context/TaskContext"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import '../styles/TaskForm.css'

export default function TaskFormView() {

  const { createTask, getTask, updateTask } = useTasks()
  const { id } = useParams()
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const navigate = useNavigate()
  
  const onSubmit = async (data) => {
    try {
      if (id) {
        updateTask(id, data)
      } else {
        createTask(data)
      }
      navigate('/tasks')
    } catch (error) {
      console.error(error)
    }
  }
  
  useEffect(() => {
    const loadTask = async () => {
      if (id) {
        const task = await getTask(id)
        setValue('title', task.title)
        setValue('description', task.description)
      } else {
        reset()
      }
    }
    loadTask()
  }, [id])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="task-form">
        <label htmlFor="title">Título</label>
        <input
          type="text"
          name="title"
          placeholder="Título de la tarea" 
          {...register('title', {
            required: {
              value: true,
              message: 'El título no puede estar vacío'
            },
            minLength: {
              value: 3,
              message: 'El título no puede tener menos de 3 caracteres'
            },
            maxLength: {
              value: 100,
              message: 'El título no puede superar los 100 caracteres'
            }
          })}
        />
        {
          errors.title && <span>{errors.title.message}</span>
        }

        <label htmlFor="description">Descripción</label>
        <textarea 
          name="description"
          placeholder="Descripción de la tarea"
          {...register('description', {
            required: {
              value: true,
              message: 'La descripción no puede estar vacía'
            },
            minLength: {
              value: 10,
              message: 'La descripción no puede tener menos de 10 caracteres'
            },
            maxLength: {
              value: 500,
              message: 'La descripción no puede superar los 500 caracteres'
            }
          })}
        ></textarea>
        {
          errors.description && <span>{errors.description.message}</span>
        }

        <button>
          {id ? 'Guardar cambios' : 'Guardar tarea'}
        </button>
      </form>
    </>
  )
}
