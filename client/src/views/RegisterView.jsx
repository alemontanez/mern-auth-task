import { useForm } from "react-hook-form"
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from "../context/AuthContext"
import '../styles/RegisterForm.css'
import { useEffect } from "react"

export default function RegisterView() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const { signup, isAuthenticated, errors: registerErrors } = useAuth()

  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (data) => {
    signup(data)
  })

  useEffect(() => {
    if (isAuthenticated) navigate('/home')
  }, [isAuthenticated])

  return (
    <div className="register-form-container">
      <form className="register-form" onSubmit={onSubmit}>
        <h1>Crear cuenta</h1>
        {
          registerErrors.map((error, i) => (
            <div key={i}>
              <span>{error}</span>
            </div>
          ))
        }

        <label htmlFor="username">Usuario</label>
        <input
          type="text"
          id="username"
          placeholder="Ingrese el usuario"
          {...register('username', {
            required: { value: true, message: 'El nombre de usuario es requerido' },
            minLength: { value: 3, message: 'El nombre de usuario debe ser superior a 3 caracteres' },
            maxLength: { value: 30, message: 'El nombre de usuario no debe superar los 30 caracteres' },
            pattern: { value: /^[a-zA-Z0-9_]+$/, message: 'El usuario solo puede contener letras, números y "_"' }
          })}
        />
        {errors.username && <span>{errors.username.message}</span>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Ingrese el email"
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
            required: { value: true, message: 'La contraseña es necesaria' },
            minLength: { value: 6, message: 'La contraseña debe superar los 6 caracteres' },
            maxLength: { value: 128, message: 'La contraseña no puede superar los 128 caracteres' }
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}

        <button type="submit">Registrar</button>
        <div className="register-login-redirect">
          <p>¿Ya tienes una cuenta?</p>
          <Link to="/login" className="login-link">Inicia sesión aquí</Link>
        </div>
      </form>
    </div>
  )
}
