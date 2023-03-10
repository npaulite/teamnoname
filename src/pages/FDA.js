import useFDA from "../hooks/useFDA"
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Box, Button, Card, TextField, Typography, } from "@mui/material";
import {CopyToClipboard} from "react-copy-to-clipboard";



const Tab = styled.button`
  background-color: #9fa8da;
  padding: 10px 80px;
  cursor: pointer;
  opacity: 0.3;
  ${({ active  }) =>
  active &&
  `
  // border: 20px solid block;
  opacity: 2;
  `}
`;


const types = ['Profile', 'Reports', 'Results', 'Drugs', 'Order', 'Patients'];
 const FDA = () => {
  const [active, setActive] = useState(types[0]);

  const { entities } = useFDA();
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
    <>
    <div style={{ 
       backgroundImage: `url(${process.env.PUBLIC_URL + '/image1.png'})`,
       backgroundRepeat: 'no-repeat',
    }}>
    <h1 className='container'>FDA</h1>
      {types.map(type => (
        <Tab
          key={type}
          active={active === type}
          onClick={() => setActive(type)}
        >
          {type}
        </Tab>
      ))}
    </div>
    <p />
    <p> Selected: {active}</p>
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
                        <th>Drug Assigned</th>
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
                        <td> {' '}</td>
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

    </>
  );
}



export default FDA;