import { Typography, Button } from "@mui/material"
import useBavaria from "../hooks/useBavaria"
import { useState, useEffect } from "react"

const Bavaria = () => {

  const { entities } = useBavaria();
  const [patients, setPatients] = useState();
  const [drugs, setDrugs] = useState();

  const listPatients = async() => {
    let patientList = await entities.patient.list();
    setPatients(patientList.items);
  }

  const listDrugs = async() => {
    let drugsList = await entities.drug.list();
    setDrugs(drugsList.items);
  }

  useEffect(() => {
    listPatients()
    listDrugs()
  }, [])

  return (
    <div className='container'>
      <Typography variant="h3">Bavaria</Typography>
      <div className="add"> 
          <Button sx={{mb:2}} variant="contained" size="large" href="/Bavaria/SendDrugs">
            <Typography variant="h5">Send Drug to FDA</Typography>
          </Button>
        </div>
    </div>
  );
};

export default Bavaria;