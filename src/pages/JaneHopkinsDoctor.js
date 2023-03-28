import { Box, Button, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useJaneHopkins from "../hooks/useJaneHopkins";
import "../cssFiles/janeHopkinsDoctor.css";
import { useState, useEffect } from "react";
import { Stack } from "@mui/system";
import { CopyToClipboard } from "react-copy-to-clipboard";

const JaneHopkinsDoctor = () => {
  const { entities } = useJaneHopkins();
  const [format, setFormat] = useState("list");
  const [patients, setPatients] = useState();
  const nav = useNavigate();

  const listPatients = async () => {
    let patientList = await entities.patient.list({});
    setPatients(patientList.items);
  };

  useEffect(() => {
    listPatients();
  }, []);

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
        <Box sx={{ pt: 4, pb: 6 }} bgcolor="grey">
          {/* <Typography style = {{color: "white", marginLeft: 80}}>{format}</Typography> */}
          <Box className="wrapper">
            {patients?.map((patient, key) => {
              return (
                <Card
                  key={key}
                  style={{
                    margin: 20,
                    padding: 5,
                    height: "400px",
                    width: "170px",
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
              );
            })}
          </Box>
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
                    <th>Visits </th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {patients?.map((patient, key) => {
                    return (
                      <tr key={key}>
                        <td> {patient.name}</td>
                        <td> {patient.dob}</td>
                        <td> {patient.address}</td>
                        <td> {patient.insuranceNumber}</td>
                        <td> {patient.currentlyInsured}</td>
                        <td>
                          {" "}
                          {patient?.icdHealthCodes.map((codes, key) => {
                            return <p key={key}>{codes.code}</p>;
                          })}
                        </td>
                        <td> {patient?.eligibility ? "Yes" : "No"} </td>
                        <td> {patient?.visits.length} / 5</td>
                        <td>
                          <Button
                            variant="contained"
                            sx={{ m: 1 }}
                            onClick={() => handleUpdate(patient._id)}
                          >
                            View / Edit Patient Information
                          </Button>
                          {patient.eligibility ? (
                            patient?.visits.length < 5 ? (
                              <Button
                                variant="contained"
                                sx={{ m: 1 }}
                                onClick={() => handleAddVisit(patient._id)}
                              >
                                Add Visit
                              </Button>
                            ) : (
                              <Button
                                variant="contained"
                                sx={{ m: 1 }}
                                disabled
                              >
                                Add Visit
                              </Button>
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
            </div>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default JaneHopkinsDoctor;
