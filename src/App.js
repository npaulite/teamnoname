import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Login from './pages/Login';
import JaneHopkinsDoctor from './pages/JaneHopkinsDoctor';
import JaneHopkinsAdmin from './pages/JaneHopkinsAdmin';
import Bavaria from './pages/Bavaria';
import FDA from './pages/FDA';

function App() {
  return (
  <Routes>
    <Route exact path="/" element={<Login/>}> </Route>
    <Route path="/JaneHopkins/doctor" element= { <JaneHopkinsDoctor/> }> </Route>
    <Route path="/JaneHopkins/admin" element= { <JaneHopkinsAdmin/> }> </Route>
    <Route path="/Bavaria" element={<Bavaria />} />
    <Route path="/FDA" element={<FDA />} />
  </Routes>
  )
}

export default App;
