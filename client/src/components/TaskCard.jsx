import { Link } from "react-router-dom"
import { useTasks } from "../context/TaskContext"
import '../styles/TaskCard.css'


export default function TaskCard({ task }) {

  const { deleteTask } = useTasks()

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <Link to={`/tasks/${task._id}`}>Editar tarea</Link>
      <button onClick={() => deleteTask(task._id)}>Eliminar tarea</button>
    </div>
  )
}
