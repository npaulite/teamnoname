import React from 'react';
import Navba from './Navba';
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


function App() {

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
   </>
  );
}

export default App;