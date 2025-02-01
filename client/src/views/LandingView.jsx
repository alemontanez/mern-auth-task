import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useAuth } from "../context/AuthContext"
import { Link } from "react-router-dom"
import "../styles/LandingView.css"

export default function LandingView() {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) navigate("/home")
  }, [isAuthenticated, navigate])

  return (
    <div className="landing">
      <header className="landing-header">
        <h1>MERN Manager</h1>
        <p>Gestiona tus tareas de manera eficiente y sencilla.</p>
        <div className="landing-buttons">
          <Link to="/login" className="btn primary">Iniciar sesión</Link>
          <Link to="/register" className="btn secondary">Registrarse</Link>
        </div>
      </header>
    </div>
  );
}
