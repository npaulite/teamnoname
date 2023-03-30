import useFDA from "../hooks/useFDA";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../cssFiles/fda.css";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Tab = styled.button`
  background-color: #9fa8da;
  padding: 10px 80px;
  cursor: pointer;
  opacity: 0.3;
  ${({ active }) =>
    active &&
    `
  // border: 20px solid block;
  opacity: 2;
  `}
`;

// const types = ["Profile", "Reports", "Results", "Drugs", "Order", "Patients"];
const FDA = () => {
  const nav = useNavigate();
  // const [active, setActive] = useState(types[0]);
  const { entities } = useFDA();
  const [patients, setPatients] = useState();
  const [drugs, setDrugs] = useState();
  const [maps, setMaps] = useState();

  const listPatients = async () => {
    let patientList = await entities.patient.list({
      filter: {
        eligibility: {
          eq: true,
        },
      },
    });
    setPatients(patientList.items);
  };

  const listDrugs = async () => {
    let drugsList = await entities.drug.list();
    setDrugs(drugsList.items);
  };

  const mapDrugs = async () => {
    let mapList = await entities.map.list();
    setMaps(mapList.items);
  };

  function assigned(p) {
    let x = maps?.some((e) => e.patientUUID === p);
    if (x === true) return true;
    else return false;
  }

  function assignDrug(id) {
    let path = `/FDA/AssignDrug`;
    nav(path, { state: { _id: id } });
  }

  useEffect(() => {
    listPatients();
    listDrugs();
    mapDrugs();
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/image1.png"})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="container">FDA</h1>
        {/* {types.map((type) => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))} */}
      </div>
      <p />
      {/* <p> Selected: {active}</p> */}
      <Box sx={{ pt: 4, pb: 6 }} bgcolor="grey">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <Box>
                <div className="appcontainer">
                  <div className="center">
                    <div className="box1">
                      <div className="app-container">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Patient UUID </th>
                              <th>Eligible </th>
                              <th>Drug UUID</th>
                              <th>Placebo</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {patients?.map((patient, key) => {
                              return (
                                <tr key={key}>
                                  <td> {patient._id} </td>
                                  <td>
                                    {" "}
                                    {patient.eligibility ? "Yes" : "No"}{" "}
                                  </td>
                                  <td>
                                    {maps?.map((map, i) => {
                                      {
                                        if (patient._id === map.patientUUID) {
                                          return (
                                            <p key={i}> {map.drugUUID} </p>
                                          );
                                        }
                                      }
                                    })}
                                  </td>
                                  <td>
                                    {maps?.map((map, i) => {
                                      {
                                        if (patient._id === map.patientUUID) {
                                          return (
                                            <p key={i}>
                                              {" "}
                                              {map.placebo
                                                ? "Placebo"
                                                : "Bavaria"}{" "}
                                            </p>
                                          );
                                        }
                                      }
                                    })}
                                  </td>
                                  <td>
                                    {assigned(patient._id) ? (
                                      <Button
                                        disabled
                                        variant="contained"
                                        sx={{ m: 1 }}
                                      >
                                        Drug Assigned
                                      </Button>
                                    ) : (
                                      <Button
                                        variant="contained"
                                        sx={{ m: 1, mr: 3 }}
                                        onClick={() => {
                                          assignDrug(patient._id); 
                                        }}
                                      >
                                        Assign Drug
                                      </Button>
                                    )}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/*
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
*/}
                  </div>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default FDA;
