import { Navigate, Route, Routes } from 'react-router'
import UserRegister from './components/User/UserRegister.jsx'
import Layout from './components/Layout.jsx'
import UserLogin from './components/User/UserLogin.jsx'
import DashboardLayout from './components/DashboardLayout.jsx'
import UserProfile from './components/User/UserProfile.jsx'
import UserLogout from './components/User/UserLogout.jsx'
import ContactCreate from './components/Contact/ContactCreate.jsx'
import ContactList from './components/Contact/ContactList.jsx'
import ContactEdit from './components/Contact/ContactEdit.jsx'
import ContactDetail from './components/Contact/ContactDetail.jsx'
import AddressCreate from './components/Address/AddressCreate.jsx'
import AddressEdit from './components/Address/AddressEdit.jsx'
import { useLocalStorage } from 'react-use'

export default function App() {
  const [token, _] = useLocalStorage("token", "")

  return (
    <Routes>
      <Route path='/'
        element={token ? 
          ( 
            <Navigate to="/dashboard/contacts" replace />
          )
          :
          (
             <Navigate to="/login" replace />
          )
        }
      />

      <Route element={<Layout />}>
        <Route path='/register' element={<UserRegister />} />
        <Route path='/login' element={<UserLogin />} />
      </Route>

      <Route path='/dashboard' element={<DashboardLayout />}>
        <Route path='users'>
          <Route path='profile' element={<UserProfile />} />
          <Route path='logout' element={<UserLogout />} />
        </Route>

        <Route path='contacts'>
          <Route index element={<ContactList />} />
          <Route path='create' element={<ContactCreate />} />
          <Route path=':id'>
            <Route index element={<ContactDetail />} />
            <Route path='edit' element={<ContactEdit />} />
            <Route path='addresses'>
              <Route path='create' element={<AddressCreate />} />
              <Route path=':addressId/edit' element={<AddressEdit />} />
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}
