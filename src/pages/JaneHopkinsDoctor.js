import { Box, Button, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useJaneHopkins from "../hooks/useJaneHopkins";
import "../cssFiles/janeHopkinsDoctor.css";
import { useState, useEffect, useContext } from "react";
import { Stack } from "@mui/system";
import { CopyToClipboard } from "react-copy-to-clipboard";
import AuthContext from "../components/AuthProvider";
import "../cssFiles/styles.css";

const JaneHopkinsDoctor = () => {
  const { entities } = useJaneHopkins();
  const { authorized } = useContext(AuthContext);
  const [format, setFormat] = useState("list");
  const [patients, setPatients] = useState();
<<<<<<< HEAD
  const [doct, setDoct] = useState()
  const [doctorID, setDoctorID] = useState() 
  const nav = useNavigate();
  
  const listDoctors = async() => {
    if(authorized.role === "JaneHopkinsDoctor") {
    let docResponse = await entities.doctor.list({
      filter: {
        name: {
          eq: authorized.name 
        }
      }
    })
    if(docResponse)
      setDoctorID(docResponse.items[0]._id) 
    }
    else {
      let docResponse = await entities.doctor.list()
      setDoctorID(null)
=======
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
>>>>>>> 5664b671add7e83d86258a539723c51b2ef1dc56
    }
  };

  const listPatients = async () => {
<<<<<<< HEAD
    if(doctorID) {
    let patientResponse = await entities.patient.list({
      filter: {
        uuid: {
          eq: doctorID 
=======
    if (doctorID) {
      let patientResponse = await entities.patient.list({
        filter: {
          uuid: {
            eq: doctorID,
          },
          bloodPressure: {
            gt: "1",
          },
>>>>>>> 5664b671add7e83d86258a539723c51b2ef1dc56
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

  const assigned = [];

  function assign(id) {
    maps?.map(function (p) {
      return p.patientUUID.indexOf(id);
    });
  }

  useEffect(() => {
<<<<<<< HEAD
    getPatients()
  }, [doctorID] );
=======
    getPatients();
    getMap();
  }, [doctorID]);
>>>>>>> 5664b671add7e83d86258a539723c51b2ef1dc56

  function handleUpdate(p) {
    let path = `/JaneHopkinsDoctor/UpdatePatient`;
    nav(path, { state: { _id: p } });
  }

  function handleAddVisit(p) {
    let path = `/JaneHopkinsDoctor/AddPatientVisit`;
    nav(path, { state: { _id: p } });
  }

  return (
    <div className="main">
      <h1 className="container">JaneHopkins Doctor Page</h1>
      {/* Grid list */}
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

      {format === "grid" ? (
        <Box className="grid" sx={{ pt: 4, pb: 6 }} bgcolor="black">
          <div className="patientsGrid">
            {patients?.map((patient, key) => {
<<<<<<< HEAD
              return(
                <div className="grid-items" key={key}>
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
                {/* <div>IDHC: {patient.icdHealthCodes}</div>
=======
>>>>>>> 5664b671add7e83d86258a539723c51b2ef1dc56
              return (
                <div className="grid-items" key={key}>
                  <Card
                    key={key}
                    style={{
                      margin: 20,
                      padding: 5,
                      height: "300px",
                      width: "250px",
                    }}
                  >
                    <h4>Name: {patient.name}</h4>
                    <CopyToClipboard text={patient._id}>
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
                </div>
              );
            })}
          </div>
        </Box>
      ) : (
        <Box sx={{ pt: 4, pb: 6 }} bgcolor="grey">
          {/* <Typography style = {{color: "white", marginLeft: 80}}>{format}</Typography> */}
          <Box>
            <div className="app-container">
              <table>
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
                            return <span key={key}>{codes.code}</span>;
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
                        <td> {patient?.visits.length} / 5</td>
                        <td>
                          <Button
                            variant="contained"
                            sx={{ m: 1 }}
                            onClick={() => handleUpdate(patient._id) } required pattern = "/^\d+$/"
                          >
                            View / Edit Patient Information
                          </Button>
                          {patient.eligibility ? (
<<<<<<< HEAD
                              (patient?.visits.length < 5 ?
                              ( <Button variant="contained" sx={{m:1}}  onClick={() => handleAddVisit(patient._id)} required pattern = "/^\d+$/">Add Visit</Button>)
                              :
                              ( <Button variant="contained" sx={{m:1}}  disabled >Add Visit</Button>)
                              )
=======
                            patient?.visits.length !== 5 ? (
                              maps?.map((map, i) => {
                                if (patient._id === map.patientUUID)
                                  return (
                                    <span key={i}>
                                      <Button
                                        variant="contained"
                                        sx={{ m: 1 }}
                                        onClick={() =>
                                          handleAddVisit(patient._id)
                                        }
                                      >
                                        Add Visit
                                      </Button>
                                    </span>
                                  );
                                return "";
                              })
                            ) : (
                              //(assign(patient._id) > 1? ( <span><Button variant="contained" sx={{m:1}}  disabled >No Drug Assigned</Button></span>) : " ")
                              <Button
                                variant="contained"
                                sx={{ m: 1 }}
                                disabled
                              >
                                5 Visits Reached
                              </Button>
>>>>>>> 5664b671add7e83d86258a539723c51b2ef1dc56
                            )
                          ) : (
                            <Button variant="contained" sx={{ m: 1 }} disabled>
                              Non-Eligible
                            </Button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
<<<<<<< HEAD
              </div>
              </Box>
              </Box>
      
=======
            </div>
          </Box>
        </Box>
>>>>>>> 5664b671add7e83d86258a539723c51b2ef1dc56
      )}
    </div>
  );
};

export default JaneHopkinsDoctor;
