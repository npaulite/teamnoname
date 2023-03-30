import useJaneHopkins from "../hooks/useJaneHopkins";
import "../cssFiles/janeHopkinsAdmin.css";
import { useEffect, useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import "../cssFiles/styles.css";

const JaneHopkinsAdmin = () => {
  const { entities } = useJaneHopkins();
  const nav = useNavigate();
  const [patients, setPatients] = useState();
  const [doctors, setDoctors] = useState();

  const listPatients = async () => {
    let patientList = await entities.patient.list();
    setPatients(patientList.items);
  };

  const listDoctors = async () => {
    let doctorList = await entities.doctor.list();
    setDoctors(doctorList.items);
  };

  function assignDoctor(id) {
<<<<<<< HEAD
    let path = `/JaneHopkinsAdmin/AssignDoctor`
    nav(path, {state: { _id: id }})
  }

  useEffect(() => {
    listPatients() 
    listDoctors()
  }, [])
=======
    let path = `/JaneHopkinsAdmin/AssignDoctor`;
    nav(path, { state: { _id: id } });
  }

  useEffect(() => {
    listPatients();
    listDoctors();
  }, []);
>>>>>>> 5664b671add7e83d86258a539723c51b2ef1dc56

  return (
    <div className="main">
      <h1 className="container">JaneHopkins Admin Page</h1>
      <div className="add">
        <Button
          sx={{ mb: 2 }}
          variant="contained"
          size="large"
          href={"JaneHopkinsAdmin/AddPatient"}
        >
          <Typography variant="h5">Add New Patient</Typography>
          <AddIcon />
        </Button>
      </div>
      {/*
      <div className="assign"> 
        <Button sx={{mb:2}} variant="contained" size="large" href={"JaneHopkinsAdmin/AssignDoctor"}>
          <Typography variant="h5">AssignDoctor</Typography>
        </Button>
      </div>
      */}
      <div className="list">
        <Box className="patientsList" sx={{ pt: 4, pb: 6 }} bgcolor="black">
          <table>
            <thead>
              <tr>
                <th>Name </th>
                <th>Date of Birth</th>
                <th>Address </th>
                <th>Insurance </th>
                <th>Insured? </th>
                <th>Height</th>
                <th>Weight</th>
                <th>Temperature</th>
                <th>Oxygen Saturation</th>
                <th>Currently Employed</th>
                <th>Family History</th>
                <th>Current Medications</th>
                <th>Allergies</th>
                <th>ICD Health Codes </th>
                <th>Trial Eligibility</th>
                <th>Doctor Assigned</th>
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
                    <td> {patient.insuranceNumber}</td>
                    <td> {patient.currentlyInsured}</td>
                    <td> {patient.height}</td>
                    <td> {patient.weight}</td>
                    <td> {patient.temperature}</td>
                    <td> {patient.oxygenSaturation}</td>
                    <td> {patient.currentlyEmployed}</td>
                    <td> {patient.familyHistory}</td>
                    <td>
                      {" "}
                      {patient?.currentMedications.map((meds, key) => {
                        return <span key={key}>{meds.medication}</span>;
                      })}
                    </td>
                    <td>
                      {" "}
                      {patient?.allergies.map((all, key) => {
                        return <span key={key}>{all.allergy}</span>;
                      })}
                    </td>

                    <td>
                      {" "}
                      {patient?.icdHealthCodes.map((codes, key) => {
                        return <span key={key}>{codes.code}</span>;
                      })}
                    </td>
                    <td> {patient?.eligibility ? "Yes" : "No"} </td>
                    <td>
                      {doctors?.map((doctor, i) => {
                        {
                          if (patient.uuid === doctor._id) {
                            return <span key={i}> {doctor.name} </span>;
                          }
                        }
                      })}
                    </td>
                    <td> {patient?.visits.length} / 5</td>
<<<<<<< HEAD
                    <td> {patient?.uuid? 
                            <Button variant="contained" sx={{m:1, mr:3}} disabled >Assign Doctor</Button>
                          :
                            <Button variant="contained" sx={{m:1, mr:3}} onClick={() => {assignDoctor(patient._id)} } required pattern = "/^\d+$/">Assign Doctor</Button>
                          } </td>
=======
                    <td>
                      {" "}
                      {patient?.uuid ? (
                        <Button
                          variant="contained"
                          sx={{ m: 1, mr: 3 }}
                          disabled
                        >
                          Assign Doctor
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          sx={{ m: 1, mr: 3 }}
                          onClick={() => {
                            assignDoctor(patient._id);
                          }}
                        >
                          Assign Doctor
                        </Button>
                      )}{" "}
                    </td>
>>>>>>> 5664b671add7e83d86258a539723c51b2ef1dc56
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Box>
      </div>
    </div>
  );
};

export default JaneHopkinsAdmin;
