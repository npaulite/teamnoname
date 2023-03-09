import React, {useState} from 'react';
import Navba from './Navba';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './firebase-config'
import { onAuthStateChanged } from '@firebase/auth';
import Login from './pages/Login';
import JaneHopkinsDoctor from './pages/JaneHopkinsDoctor';
import JaneHopkinsAdmin from './pages/JaneHopkinsAdmin';
import Bavaria from './pages/Bavaria';
import FDA from './pages/FDA';
import AddForm from './pages/AddForm';
import UpdateForm from './pages/UpdateForm';
import SendDrugs from './pages/SendDrugs';
import { Typography } from '@mui/material';

function App() {
  
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  return (
    <>
        <Navba></Navba>
        <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/FDA'  element={<FDA/>} />
          <Route path='/Bavaria'  element={<Bavaria/>} />
          <Route path='/JaneHopkinsDoctor'  element={<JaneHopkinsDoctor/>} />
          <Route path='/JaneHopkinsAdmin'  element={<JaneHopkinsAdmin/>} />
          <Route path='/Login'  element={<Login/>} />
          <Route path='/JaneHopkinsDoctor/AddPatient'  element={<AddForm/>} />
          <Route path='/JaneHopkinsDoctor/UpdatePatient'  element={<UpdateForm/>} />
          <Route path='/Bavaria/SendDrugs' element={<SendDrugs/>} />
        </Routes>
        </div>

{/*}        <div>
          <Typography>Hi, {user?.name} </Typography>
        </div>
  */}
    </>
  );
}

export default App;