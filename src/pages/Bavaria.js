import { Typography, Button, Box } from "@mui/material"
import useBavaria from "../hooks/useBavaria"
import { useState, useEffect } from "react"
import {CopyToClipboard} from "react-copy-to-clipboard";

const Bavaria = () => {

  const { entities } = useBavaria();
  const [patients, setPatients] = useState();
  const [drugs, setDrugs] = useState();
  const [placebo, setPlacebo] = useState(false);

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

        <Box
          sx={{ pt: 4, pb: 6}}
          bgcolor = "black"
        >
          {/* <Typography style = {{color: "white", marginLeft: 80}}>{format}</Typography> */}
          <Box>
              <div className="appcontainer">
                <div className="box1">
                <div className="app-container">
                  <table className="table">
                    <thead>
                    <th>PATIENTS</th>

                      <tr>
                        <th>_id </th>
                        <th>uuid </th>
                        <th>Number of Visits</th>
                      </tr>
                    </thead>
                    <tbody>
                    {patients?.map((patient, key) => {
                      return( 
                      <tr>
                           <CopyToClipboard text = {patient._id}>
                            <Button> <td> {patient._id}</td></Button>
                           </CopyToClipboard>
                        <td> {patient.uuid}</td>
                        <td> {patient.visit}</td>
                      </tr>
                    ) })}
                      
                    </tbody>
                  </table>
                </div>
                </div>

                <div className="box2">
                <div className="app-container">
                  <table className="table">
                    <thead>
                    <th>DRUGS</th>

                      <tr>
                        <th>_id </th>
                        <th>id </th>
                        <th>Placebo </th>
                        <th>BatchNumber </th>
                      </tr>
                    </thead>
                    <tbody>
                    {drugs?.map((drug, key) => {
                      return( 
                      <tr>
                           <CopyToClipboard text = {drug._id}>
                            <Button> <td> {drug._id}</td></Button>
                           </CopyToClipboard>
                        <td> {drug.id}</td>
                        <td> {drug.placebo?  'Yes': 'No'}</td>
                        <td> {drug.batchNumber}</td>
                      </tr>
                    ) })}
                      
                    </tbody>
                  </table>
                </div>
                </div>


                </div>
          </Box>
        </Box>



    </div>

  );
};

export default Bavaria;