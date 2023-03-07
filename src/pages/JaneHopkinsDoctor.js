import { Box, Button, Typography, } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useJaneHopkins from "../hooks/useJaneHopkins";
import AddIcon from '@mui/icons-material/Add';
import EastIcon from '@mui/icons-material/East';
import '../cssFiles/janeHopkinsDoctor.css'
import { useState, useEffect } from "react";

const JaneHopkinsDoctor = () => {
  const { entities } = useJaneHopkins()
  const nav = useNavigate()
  const [updatePatient, setUpdatePatient] = useState() // id for updating patient needs to be taken from list of patient

  const listPatients = async() => {
    let patientList = await entities.patient.list();
    console.log(patientList);
  }

  useEffect(() => {
    listPatients();
  }, [])
  
  const handleUpdate = (e) => {
    e.preventDefault()
    let path = `/JaneHopkinsDoctor/UpdatePatient`
    nav(path, {state: { _id: '0186b9ca-53b4-aad1-702d-266bf242a784'}}) //_id of patient to be updated is hardcoded

  }

  return (
      <div className="main">
        <h1 className="h1">JaneHopkins Doctor Page</h1>
        <div className="add"> 
          <Button variant="contained" size="large" href="/JaneHopkinsDoctor/AddPatient">
            <Typography variant="h5">Add Patient</Typography>
            <AddIcon/>
          </Button>
        </div>
        <Box component="form">
        <div className="update">
          <Button variant="contained" size="large" onClick={handleUpdate}>
            <Typography variant="h5">Update Patient</Typography>
            <EastIcon/>
          </Button>
        </div>
        </Box>
      </div>
  );
};

export default JaneHopkinsDoctor;