
import React from 'react';
import Navbar from './Navbar';
import './App.css';
// import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import JaneHopkinsDoctor from './pages/JaneHopkinsDoctor';
import JaneHopkinsAdmin from './pages/JaneHopkinsAdmin';
import Bavaria from './pages/Bavaria';
import FDA from './pages/FDA';

function App() {
  return (
    <>

        <Navbar></Navbar>
        <Routes>
          {/* <Route path='/' exact/>
          <Route path='/FDA' component={FDA} />
          <Route path='/Bavaria' component={Bavaria} />
          <Route path='/JaneHopkinsDoctor' component={JaneHopkinsDoctor} />
          <Route path='/JaneHopkinsAdmin' component={JaneHopkinsAdmin} />
          <Route path='/Login' component={Login} /> */}
          <Route path='/' exact/>
          <Route path='/FDA' exact element={<FDA/>} />
          <Route path='/Bavaria' exact element={<Bavaria/>} />
          <Route path='/JaneHopkinsDoctor' exact element={<JaneHopkinsDoctor/>} />
          <Route path='/JaneHopkinsAdmin' exact element={<JaneHopkinsAdmin/>} />
          <Route path='/Login' exact element={<Login/>} />
        </Routes>

    </>
  );
}

export default App;