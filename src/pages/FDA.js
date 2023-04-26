import useFDA from "../hooks/useFDA";
import React, { useState, useEffect, useMemo } from "react";
import "../cssFiles/fda.css";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const FDA = () => {
  const nav = useNavigate();
  const { entities } = useFDA();
  const [patients, setPatients] = useState([]);
  const [maps, setMaps] = useState();
  const [status, setStatus] = useState("Ongoing");

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

  function noOfVisit(p) {
    if (p.visits[0].dateTime === null) return 0;
    else {
      return p.visits.length;
    }
  }

  function currentTrialStatus() {
    for(const patient of patients) {
        if(patient.trialStatus === "Ongoing"){
            setStatus("Ongoing")
            break;
        }
        setStatus("Completed")
    }
  }

  const compile = () =>{ 
    let path = `/PostStudy`; 
    nav(path);
  }

  useEffect(() => {
    listPatients();
    mapDrugs();
  }, []);

  useMemo(() => currentTrialStatus(), [patients])

  return (
      <div className="main">
        <h1 className="container">FDA</h1>
        <Box className="fda" sx={{ pt: 4, pb: 6 }} bgcolor="grey">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="appcontainer">
                  <span>
                    <h2>Trial Status: {status}</h2>
                    {status === "Completed"?
                      <Button variant="contained"
                      onClick={compile}
                      >Compile Report</Button>
                    : ""}
                  </span>
                  <table className="table-striped">
                    <thead>
                        <tr>
                          <th>Patient UUID </th>
                          <th>Eligible </th>
                          <th>Drug UUID</th>
                          <th>Drug Type</th>
                          <th>Drugs Administered</th>
                          <th>Starting HIV Load</th>
                          <th>Latest Viral Load</th>
                          <th>Trial Status</th>
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
                                  {if (patient._id === map.patientUUID) 
                                    return (
                                      <span key={i}> {map.drugUUID} </span>
                                    );
                                  }
                                })}
                              </td>
                              <td>
                                {maps?.map((map, i) => {
                                  {if (patient._id === map.patientUUID) {
                                    return (
                                      <span key={i}>
                                        {map.placebo
                                          ? "Placebo"
                                          : "Bavaria"}{" "}
                                      </span>
                                    );
                                  }
                                }})}
                              </td>
                              <td>{noOfVisit(patient)} / 5</td>
                              <td>{patient.startingHIVLoad}</td>
                              <td>{noOfVisit(patient) === 0 ? patient.startingHIVLoad :
                                patient.visits[patient.visits.length-1].hivViralLoad}</td>
                              <td>{patient.trialStatus}</td>
                              <td>
                                {assigned(patient._id) ? 
                                (
                                  <Button
                                    disabled
                                    variant="contained"
                                    sx={{ m: 1 }}
                                  >
                                    Drug Assigned
                                  </Button>
                                ) 
                                :
                                (
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
                          )
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

export default FDA;
