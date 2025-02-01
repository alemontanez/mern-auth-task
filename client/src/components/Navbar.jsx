import { Link, NavLink } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import '../styles/Navbar.css'

export default function Navbar() {

  const { isAuthenticated, logout } = useAuth()

  return (
    <nav className="navbar">
      <h2>
        <Link to={isAuthenticated ? '/home' : '/'}>MERN Manager</Link>
      </h2>
      <ul>
        {isAuthenticated ? (
          <>
            <li>
              <NavLink
                to={'/home'}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/tasks'}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Mis tareas
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/create-task'}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Crear tarea
              </NavLink>
            </li>
            <li>
              <button onClick={() => logout()}>
                Cerrar sesión
              </button>
            </li>
          </>
        ) : (
          <>
            <ul>
              <li>
                <Link to={'/login'}>
                  Iniciar sesión
                </Link>
              </li>
              <li>
                <Link to={'/register'}>
                  Registrarse
                </Link>
              </li>
            </ul>
          </>
        )}
      </ul>
    </nav>
  )
}
