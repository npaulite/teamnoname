import useJaneHopkins from "../hooks/useJaneHopkins";
import "../cssFiles/janeHopkinsAdmin.css";
import { useEffect, useState } from "react";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
    let path = `/JaneHopkinsAdmin/AssignDoctor`
    nav(path, {state: { _id: id }})
  }

  function noOfVisit(p) {
    if (p.visits[0].dateTime === null) return 0;
    else {
      return p.visits.length;
    }
  }

  function handleSetCompletion(id) {
    let path = `/JaneHopkinsAdmin/ReviewPatient`
    nav(path, {state: { _id: id }})
  }

  useEffect(() => {
    listPatients() 
    listDoctors()
  }, [])

  return (
    <div className="main">
      <h1 className="container">JaneHopkins Admin Page</h1>
      <Box className="patientsList" sx={{ pt: 4, pb: 6 }} bgcolor="grey">
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
        <div className="card-body">
        <div className="appcontainer">
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
                <th>Blood Pressure</th>
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
                    <td> {patient.bloodPressure}</td>
                    <td> {patient.temperature}</td>
                    <td> {patient.oxygenSaturation}</td>
                    <td> {patient.currentlyEmployed}</td>
                    <td> {patient.familyHistory}</td>
                    <td>
                      {" "}
                      {patient?.currentMedications.map((meds, key) => {
                        return <span className="spanClass" key={key}>{meds.medication} </span>;
                      })}
                    </td>
                    <td>
                      {" "}
                      {patient?.allergies.map((all, key) => {
                        return <span className="spanClass" key={key}>{all.allergy}</span>;
                      })}
                    </td>

                    <td>
                      {" "}
                      {patient?.icdHealthCodes.map((codes, key) => {
                        return <span className="spanClass" key={key}>{codes.code}</span>;
                      })}
                    </td>
                    <td> {patient?.eligibility ? "Yes" : "No"} </td>
                    <td>
                      {doctors?.map((doctor, i) => {
                        {
                          if (patient.doctorUUID === doctor._id) {
                            return <span key={i}> {doctor.name} </span>;
                          }
                        }
                      })}
                    </td>
                    <td> {noOfVisit(patient)} / 5</td>
                    <td> {patient?.doctorUUID? 
                            <Button variant="contained" sx={{m:1, mr:3}} disabled >Assign Doctor</Button>
                          :
                            <Button variant="contained" sx={{m:1, mr:3}} onClick={() => {assignDoctor(patient._id)} }>Assign Doctor</Button>
                          }
                          {noOfVisit(patient) === 5 ? ( patient.trialStatus === "Ongoing" ? 
                          <Button variant="contained" sx={{m:1}} onClick={() => {handleSetCompletion(patient._id)}}>Complete Trial</Button>
                          :
                          <Button variant="contained" disabled sx={{m:1}}>Trial Completed</Button>
                          )
                          :
                          <Button variant="contained" disabled sx={{m:1}}>Trial Ongoing</Button>} 
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          </div>
          </div>
          </div>
          </div>
      </Box>
    </div>
  );
};

export default JaneHopkinsAdmin;
