import { Box, Button, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useJaneHopkins from "../hooks/useJaneHopkins";
import "../cssFiles/janeHopkinsDoctor.css";
import { useState, useEffect, useContext } from "react";
import { Stack } from "@mui/system";
import { CopyToClipboard } from "react-copy-to-clipboard";
import AuthContext from "../components/AuthProvider";

const JaneHopkinsDoctor = () => {
  const { entities } = useJaneHopkins();
  const { authorized } = useContext(AuthContext);
  const [format, setFormat] = useState("list");
  const [patients, setPatients] = useState();
  const [doctorID, setDoctorID] = useState();
  const nav = useNavigate();
  const [maps, setMaps] = useState();


  const listDoctors = async () => {
    if (authorized.role === "JaneHopkinsDoctor") {
      let docResponse = await entities.doctor.list({
        filter: {
          name: {
            eq: authorized.name,
          },
        },
      });
      if (docResponse) setDoctorID(docResponse.items[0]._id);
    } else {
      await entities.doctor.list();
      setDoctorID(null);
    }
  };

  const listPatients = async () => {
    if (doctorID) {
      let patientResponse = await entities.patient.list({
        filter: {
          uuid: {
            eq: doctorID,
          },
          bloodPressure: {
            gt: "1",
          },
        },
      });
      if (patientResponse) setPatients(patientResponse.items);
    } else if (doctorID === null) {
      let patientResponse = await entities.patient.list();
      setPatients(patientResponse.items);
    }
  };

  function getPatients() {
    try {
      listDoctors();
    } catch (error) {
      console.log(error.message);
    } finally {
      listPatients();
    }
  }

  const getMap = async () => {
    const getMapResponse = await entities.map.list();
    setMaps(getMapResponse.items);
  };

  useEffect(() => {
    getPatients();
    getMap();
  }, [doctorID]);

  function handleUpdate(p) {
    let path = `/JaneHopkinsDoctor/UpdatePatient`;
    nav(path, { state: { _id: p } });
  }

  function handleAddVisit(p) {
    let path = `/JaneHopkinsDoctor/AddPatientVisit`;
    nav(path, { state: { _id: p } });
  }

  function noOfVisit(p) {
    if (p.visits[0].dateTime === null) return 0;
    else {
      return p.visits.length;
    }
  }

  return (
    <div className="main">
      <h1 className="container">JaneHopkins Doctor Page</h1>
      {/* Grid list */}
      <div className="format">
      {format === "list" ? (
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button
            onClick={() => {
              setFormat("list");
            }}
            variant="contained"
          >
            List
          </Button>
          <Button
            onClick={() => {
              setFormat("grid");
            }}
            variant="outlined"
          >
            Grid
          </Button>
        </Stack>
      ) : (
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button
            onClick={() => {
              setFormat("list");
            }}
            variant="outlined"
          >
            List
          </Button>
          <Button
            onClick={() => {
              setFormat("grid");
            }}
            variant="contained"
          >
            Grid
          </Button>
        </Stack>
      )}
      </div>
      {format === "grid" ? (
        <Box className="grid" sx={{ pt: 4, pb: 6 }} bgcolor="#cbebfd">
          <div className="patientsGrid">
            {patients?.map((patient, key) => {
              return(
                <div className="grid-items" key={key}>
                  <div className="updateColumnForm">
                    <Stack
          sx={{ pt: 4 }}
          direction="column"
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="contained" sx={{m:1}}
            onClick={() => handleAddVisit(patient._id)}>
            Add Visit
          </Button>
          <Button
            variant="contained"
            sx={{ m: 1 }}
            onClick={() => handleUpdate(patient._id) } required pattern = "/^\d+$/">
            Edit 
          </Button>
          
        </Stack>
      ) : (
        
        </div>
                  <Card key={key} style={{ margin: 20, padding: 5, height: "300px", width: "250px"}}>
                    <h4>Name: {patient.name}</h4>
                    <CopyToClipboard text = {patient._id}>
                      <Button>{patient._id}</Button>
                    </CopyToClipboard>
                    
                    <div>
                      <div>IN: {patient.insuranceNumber }</div>
                      <div>DOB: {patient.dob}</div>
                      <div>HEIGHT: {patient.height}</div>
                      <div>WEIGHT: {patient.weight}</div>
                      <div>BP: {patient.bloodPressure}</div>
                      <div>TEMP: {patient.temperature}</div>
                      <div>OS: {patient.oxygenSaturation}</div>
                      <div>UUID: {patient.uuid} </div>
                      <div>ADDRESS: {patient.address}</div>
                      <div>EMPLOYED?: {patient.currentlyEmployed}</div>
                      <div>INSURED?: {patient.currentlyInsured}</div>
                    </div>
                   
                  </Card>
                </div>
              );
            })}
          </div>
        </Box>
      ) : (
        <Box className="patientsList" sx={{ pt: 4, pb: 6 }} bgcolor="grey">
        <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
        <div className="card-body">
        <div className="appcontainer">
          <Box>
            <table className="table-striped">
                <thead>
                  <tr>
                    <th>Name </th>
                    <th>Date of Birth</th>
                    <th>Address </th>
                    <th>Insurance </th>
                    <th>Insured? </th>
                    <th>ICD Health Codes </th>
                    <th>Trial Eligibility</th>
                    <th>Drug Assigned</th>
                    <th>Visits </th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {patients?.map((patient, key) => {
                    return (
                      <tr key={key}>
                        <td> {patient.name} </td>
                        <td> {patient.dob}</td>
                        <td> {patient.address}</td>
                        <td> {patient.insuranceNumber} </td>
                        <td> {patient.currentlyInsured}</td>
                        <td>
                          {patient?.icdHealthCodes.map((codes, key) => {
                            return <span className="spanClass" key={key}>{codes.code}</span>;
                          })}
                        </td>
                        <td> {patient?.eligibility ? "Yes" : "No"} </td>
                        <td>
                          {maps?.map((map, i) => {
                            {
                              if (patient._id === map.patientUUID) {
                                return (
                                  <span key={i}>
                                    {map.patientUUID ? "Yes" : "No"}
                                  </span>
                                );
                              }
                            }
                            return "";
                          })}
                        </td>
                        <td> {noOfVisit(patient)} / 5</td>
                        <td>
                          <Button
                            variant="contained"
                            sx={{ m: 1 }}
                            onClick={() => handleUpdate(patient._id) } required pattern = "/^\d+$/">
                            View / Edit Patient Information
                          </Button>
                          {patient.eligibility ? ( 
                              (patient?.visits.length !== 5 ?
                                (maps?.map((map, i) => {
                                  if(patient._id === map.patientUUID) return( <span key={i}><Button variant="contained" sx={{m:1}}  onClick={() => handleAddVisit(patient._id)}>Add Visit</Button></span>)
                                  return ("");
                                }))
                              :
                              ( <Button variant="contained" sx={{m:1}}  disabled >5 Visits</Button>)
                              )
                            )
                          :
                            <Button variant="contained" sx={{m:1}} disabled>Non-Eligible</Button>
                          }
                          </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
          </Box>
          </div>
          </div>
          </div>
          </div>
        </Box>
      )}
    </div>
  );
};

export default JaneHopkinsDoctor;
