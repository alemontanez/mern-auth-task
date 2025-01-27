import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useAuth } from "../context/AuthContext"

export default function LandingView() {

  const navigate = useNavigate()
  const {isAuthenticated} = useAuth()

  useEffect(() => {
    if (isAuthenticated) navigate('/home')
  }, [isAuthenticated])

  return (
    <div>
      <h1>Landing view</h1>
      <ul>
        <Link to={'/login'}>
          <li>Ingresar</li>
        </Link>
        <Link to={'/register'}>
          <li>Registrarse</li>
        </Link>
      </ul>
    </div>
  )
}
