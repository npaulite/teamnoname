import useJaneHopkins from "../hooks/useJaneHopkins";
import { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const JaneHopkinsAdmin = () => {

  const { entities } = useJaneHopkins()
  const [patients, setPatients] = useState()

  const listPatients = async() => {
    let patientList = await entities.patient.list();
    setPatients(patientList.items);
  }

  useEffect(() => {
    listPatients();
  })

  return (
    <div className="doctor">
      <h1 className='container'>JaneHopkins Admin Page</h1>
      <div className="add"> 
        <Button sx={{mb:2}} variant="contained" size="large" href={"JaneHopkinsAdmin/AddPatient"}>
          <Typography variant="h5">Add Patient</Typography>
          <AddIcon/>
        </Button>
      </div>
    </div>
  );
};

export default JaneHopkinsAdmin;