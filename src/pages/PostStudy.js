import useFDA from "../hooks/useFDA";
import React, { useState, useEffect, useMemo } from "react";
import "../cssFiles/fda.css";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ArrowLeftSharp } from "@mui/icons-material";


function PostStudy() {
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

    function noOfVisit(p) {
        if (p.visits[0].dateTime === null) return 0;
        else {
          return p.visits.length;
        }
    }

    const goBack = () =>{ 
        let path = `/FDA`; 
        nav(path);
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
        
    useEffect(() => {
        listPatients();
        mapDrugs();
    }, []);

    useMemo(() => currentTrialStatus(), [patients])

    return (
        <div className="main">
            <h1 className="container">Post Study Report</h1>
            <Box>
                <div className="return">
                <Button variant="outlined" size="large" onClick={goBack}>
                    <Typography>Go Back</Typography>
                    <ArrowLeftSharp/>
                </Button>
                </div>
            </Box>
            <Box className="fda" sx={{ pt: 4, pb: 6 }} bgcolor="grey">
                <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <div className="appcontainer">
                        <div className="center">
                            <Box sx={{ pt: 4 }}>
                                <span>
                                    <h2>Trial Status: {status}</h2>
                                </span>
                            </Box>
                            <Box>
                            <Typography variant="h5">Patient Results</Typography>
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
                                        <th>Trial Completion Status</th>
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
                                                        <span key={i}> {map.drugUUID} </span>
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
                                                        <span key={i}>
                                                        {map.placebo
                                                            ? "Placebo"
                                                            : "Bavaria"}{" "}
                                                        </span>
                                                    );
                                                    }
                                                }
                                                })}
                                            </td>
                                            <td>{noOfVisit(patient)} / 5</td>
                                            <td>{patient.startingHIVLoad}</td>
                                            <td>{noOfVisit(patient) === 0 ? patient.startingHIVLoad :
                                                patient.visits[patient.visits.length-1].hivViralLoad}</td>
                                            <td>{patient.trialStatus}</td>
                                            </tr>
                                        )
                                        })}
                                    </tbody>
                                    </table>
                                    </Box>
                                    <Box sx={{mt:10}}>
                                        <Typography variant="h5">Drug Results</Typography>
                                        <table className="table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Drug Type</th>
                                                    <th>NoOfPatients</th>
                                                    <th>Efficacy</th>
                                                    <th>Overall Reduction</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Bavaria</td>
                                                    <td>#</td>
                                                    <td>%</td>
                                                    <td>%</td>
                                                </tr>
                                                <tr>
                                                    <td>Placebo</td>
                                                    <td>#</td>
                                                    <td>%</td>
                                                    <td>%</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Box>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    );
};

export default PostStudy;
