import { Box, Button, Card, Grid, TextField, Typography, } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useJaneHopkins from "../hooks/useJaneHopkins";
import AddIcon from '@mui/icons-material/Add';
import EastIcon from '@mui/icons-material/East';
import '../cssFiles/janeHopkinsDoctor.css'
import { useState, useEffect } from "react";
import { Stack } from "@mui/system";
import {CopyToClipboard} from "react-copy-to-clipboard";

const JaneHopkinsDoctor = () => {
  const { entities } = useJaneHopkins()
  const [format, setFormat] = useState("list")
  const [patients, setPatients] = useState();
  const nav = useNavigate()
  const [updatePatient, setUpdatePatient] = useState() // id for updating patient needs to be taken from list of patient

  const listPatients = async() => {
    let patientList = await entities.patient.list();
    setPatients(patientList.items);
  }

  useEffect(() => {
    listPatients();
  }, [])
  
  const handleUpdate = (e) => {
    e.preventDefault()
    let path = `/JaneHopkinsDoctor/UpdatePatient`
    nav(path, {state: { _id: updatePatient}}) //_id of patient to be updated is hardcoded

  }

  return (
      <div className="main">
        <h1 className='container'>JaneHopkins Doctor Page</h1>
        <div className="add"> 
          <Button sx={{mb:2}} variant="contained" size="large" href="/JaneHopkinsDoctor/AddPatient">
            <Typography variant="h5">Add Patient</Typography>
            <AddIcon/>
          </Button>
        </div>


        {/* Grid list */}
      {format ==="list" ? (

        <Stack
         sx={{ pt: 4 }}
         direction="row"
         spacing = {2}
         justifyContent="center"
        >
        <Button onClick={() => {setFormat("list")}} variant="contained">List</Button>
        <Button onClick={() => {setFormat("grid")}}variant="outlined">Grid</Button>
        </Stack>
        
          ) : (

        <Stack
         sx={{ pt: 4 }}
         direction="row"
         spacing = {2}
         justifyContent="center"
         >
           <Button onClick={() => {setFormat("list")}} variant="outlined">List</Button>
           <Button onClick={() => {setFormat("grid")}}variant="contained">Grid</Button>
           </Stack>

      )}

      {format ==="grid" ? (

        <Box
          sx={{ pt: 4, pb: 6}}
          bgcolor = "black"
        >
          {/* <Typography style = {{color: "white", marginLeft: 80}}>{format}</Typography> */}
          <Box className = "wrapper">
            {patients?.map((patient, key) => {
              return( 
              <Card key={key} style={{ margin: 20, padding: 5, height: "400px", width: "170px"}}>
                <h4>Name: {patient.name}</h4>
                <CopyToClipboard text = {patient._id}>
                  <Button>{patient._id}</Button>
                </CopyToClipboard>
                <div>
                  <div>IN: {patient.insuranceNumber}</div>
                  <div>DOB: {patient.dob}</div>
                  <div>HEIGHT: {patient.height}</div>
                  <div>WEIGHT: {patient.weight}</div>
                  <div>BP: {patient.bloodPressure}</div>
                  <div>TEMP: {patient.temperature}</div>
                  <div>OS: {patient.oxygenSaturation}</div>
                  <div>UUID: {patient.uuid}</div>
                  <div>ADDRESS: {patient.address}</div>
                  <div>EMPLOYED?: {patient.currentlyEmployed}</div>
                  <div>INSURED?: {patient.currentlyInsured}</div>
                </div>
                {/* <div>IDHC: {patient.icdHealthCodes}</div>
                <div>ALLERGIES: {patient.allergies}</div>
                <div>VISITS: {patient.visits}</div> */}


              </Card>
              );
            })}
          </Box>
        </Box>
        ) : (
        <Box
          sx={{ pt: 4, pb: 6}}
          bgcolor = "black"
        >
          {/* <Typography style = {{color: "white", marginLeft: 80}}>{format}</Typography> */}
          <Box>

                <div className="app-container">
                  <table>
                    <thead>
                      <tr>
                        <th>_id </th>
                        <th>Name </th>
                        <th>INSURANCE </th>
                        <th>HEIGHT </th>
                        <th>WEIGHT </th>
                        <th>BLOODPRESSURE </th>
                        <th>TEMPERATURE </th>
                        <th>OXYGENS </th>
                      </tr>
                    </thead>
                    <tbody>
                    {patients?.map((patient, key) => {
                      return( 
                      <tr>
                           <CopyToClipboard text = {patient._id}>
                            <Button> <td> {patient._id}</td></Button>
                           </CopyToClipboard>
                        <td> {patient.name}</td>
                        <td> {patient.insuranceNumber}</td>
                        <td> {patient.height}</td>
                        <td> {patient.weight}</td>
                        <td> {patient.bloodPressure}</td>
                        <td> {patient.temperature}</td>
                        <td> {patient.oxygenSaturation}</td>
                      </tr>
                    ) })}
                    </tbody>
                  </table>
                </div>
              );

          </Box>
        </Box>
      )}

<div className="update">
          <Grid container xs={12}>
            <Grid item xs={6}>
          <TextField
            id="update"
            label="ID of Patient"
            value={updatePatient || ''}
            onChange={(e) => setUpdatePatient(e.target.value)}
            fullWidth
          />
          </Grid>
          <Grid item xs={6}>
          <Button sx={{ml:2}} variant="contained" size="large" onClick={handleUpdate}>
            <Typography variant="h5">Update Patient</Typography>
            <EastIcon/>
          </Button>
          </Grid>
          </Grid>
        </div>

      </div>
  );
};

export default JaneHopkinsDoctor;