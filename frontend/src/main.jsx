import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Router, Routes } from 'react-router'
import UserRegister from './components/User/UserRegister.jsx'
import Layout from './components/Layout.jsx'
import UserLogin from './components/User/UserLogin.jsx'
import DashboardLayout from './components/DashboardLayout.jsx'
import UserProfile from './components/User/UserProfile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/register' element={<UserRegister/>}/>
          <Route path='/login' element={<UserLogin/>}/>
        </Route>
        <Route path='/dashboard' element={<DashboardLayout/>}>
          <Route path='contacts' element={<div>Contacts</div>}/>
          <Route path='users/profile' element={<UserProfile/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)