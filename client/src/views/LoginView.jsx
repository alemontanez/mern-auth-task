import { useForm } from 'react-hook-form'
// import { loginRequest } from "../api/auth"
import '../styles/LoginForm.css'
import { useAuth } from "../context/AuthContext"
import { useNavigate, Link } from 'react-router-dom'
import { useEffect } from 'react'


export default function LoginView() {

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const navigate = useNavigate()

  const { signin, isAuthenticated, errors: loginErrors } = useAuth()

  const onSubmit = handleSubmit(async (data) => {
    signin(data)
  })

  useEffect(() => {
    if (isAuthenticated) navigate('/home')
  }, [isAuthenticated])

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={onSubmit}>
        <h1>Iniciar sesión</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Ingrese su email"
          {...register('email', {
            required: { value: true, message: 'El correo es requerido' },
            pattern: { value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: 'Correo inválido' }
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          placeholder="Ingrese su contraseña"
          {...register('password', {
            required: { value: true, message: 'La contraseña es requerida' }
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
        {
          loginErrors.map((error, i) => (
            <div key={i}>
              <span>{error}</span>
            </div>
          ))
        }
        <button type="submit">Ingresar</button>
        <div className="login-register-redirect">
          <p>¿No tienes cuenta?</p>
          <Link to="/register" className="register-link">Regístrate aquí</Link>
        </div>
      </form>
    </div>
  )
}
