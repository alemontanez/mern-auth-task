import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingView from './views/LandingView'
import LoginView from './views/LoginView'
import RegisterView from './views/RegisterView'
import HomeView from './views/HomeView'
import TasksView from './views/TasksView'
import TaskFormView from './views/TaskFormView'
import ProfileView from './views/ProfileView'
import ProtectedRoute from './ProtectedRoute'
import { AuthProvider } from './context/AuthContext'


export default function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* Public */}
            <Route path='/' element={<LandingView />} />
            <Route path='/login' element={<LoginView />} />
            <Route path='/register' element={<RegisterView />} />

            {/* Auth required */}
            <Route element={<ProtectedRoute />}>
              <Route path='/home' element={<HomeView />} />
              <Route path='/tasks' element={<TasksView />} />
              <Route path='/tasks/:id' element={<TaskFormView />} />
              <Route path='/profile' element={<ProfileView />} />
            </Route>
            <Route path='/*' element={<Navigate to='/home' />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}