import React, { useState } from 'react';
import { auth, db } from './firebase-config'
import { onAuthStateChanged } from '@firebase/auth';
import {doc, getDoc} from "firebase/firestore"
import Navba from './pages/Navba';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import JaneHopkinsDoctor from './pages/JaneHopkinsDoctor';
import JaneHopkinsAdmin from './pages/JaneHopkinsAdmin';
import Bavaria from './pages/Bavaria';
import FDA from './pages/FDA';
import AddForm from './pages/AddForm';
import UpdateForm from './pages/UpdateForm';
import SendDrugs from './pages/SendDrugs';
import RequireAuth from './components/RequireAuth'
import useAuth from './hooks/useAuth';
import AuthContext from './components/AuthProvider';

function App() {

  const {authorized, setAuth} = useAuth()
  const [user, setUser] = useState()
  const [id, setID] = useState()

  onAuthStateChanged(auth, (currentUser) => {
    if(currentUser) {
    setUser(currentUser)
    setID(currentUser.uid)
    }})

  return (
    <div className='app'>
      <AuthContext.Provider value={{user: user, setUser: setUser,
        id: id, setID: setID, authorized: authorized, setAuth: setAuth
      }}>

        <Navba></Navba>
        <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login'  element={<Login/>} />
          <Route element={<RequireAuth allowedRoles={['FDA', 'Admin']} />}>
          <Route path='/FDA'  element={<FDA/>} />
          </Route>
          <Route element={<RequireAuth allowedRoles={['Bavaria', 'Admin']} />}>
          <Route path='/Bavaria'  element={<Bavaria/>} />
          </Route>
          <Route element={<RequireAuth allowedRoles={['JaneHopkinsDoctor', 'Admin']} />}>
          <Route path='/JaneHopkinsDoctor'  element={<JaneHopkinsDoctor/>} />
          </Route>
          <Route element={<RequireAuth allowedRoles={['JaneHopkinsAdmin', 'Admin']} />}>
          <Route path='/JaneHopkinsAdmin'  element={<JaneHopkinsAdmin/>} />
          </Route>
          <Route element={<RequireAuth allowedRoles={['JaneHopkinsDoctor', 'Admin']} />}>
          <Route path='/JaneHopkinsDoctor/AddPatient'  element={<AddForm/>} />
          </Route>
          <Route element={<RequireAuth allowedRoles={['JaneHopkinsDoctor', 'Admin']} />}>
          <Route path='/JaneHopkinsDoctor/UpdatePatient'  element={<UpdateForm/>} />
          </Route>
          <Route element={<RequireAuth allowedRoles={['Bavaria', 'Admin']} />}>
          <Route path='/Bavaria/SendDrugs' element={<SendDrugs/>} />
          </Route>
        </Routes>
        </div>

        </AuthContext.Provider>
   </div>
  );
}

export default App;