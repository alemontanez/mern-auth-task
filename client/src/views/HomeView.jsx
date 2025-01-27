import { useAuth } from "../context/AuthContext"

export default function HomeView() {

  const { user } = useAuth()
  console.log(user)
  const username = user.username[0].toUpperCase() + user.username.substring(1)

  return (
    <div>
      <h1>Bienvenido {username}</h1>
    </div>
  )
}
