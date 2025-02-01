import { useEffect } from "react"
import { useTasks } from "../context/TaskContext"
import TaskCard from "../components/TaskCard"
import '../styles/TasksView.css'

export default function TasksView() {

  const { tasks, getTasks } = useTasks()

  useEffect(() => {
    getTasks()
  }, [])

  if (tasks.length <= 0) {
    return (
      <div>
        <h1>No hay tareas</h1>
      </div>
    )
  } else {
    return (
      <div className="task-container">
        {
          tasks.map(task => (
            <TaskCard key={task._id} task={task}/>
          ))
        }
      </div>
    )
  }
}
