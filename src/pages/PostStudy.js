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
    const [bavaria, setBavaria] = useState([]);
    const [placebo, setPlacebo] = useState([]);

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

    const listBavaria = async () => {
        let bavariaList = await entities.map.list({
            filter: {
                placebo: {
                eq: false,
                },
            },
        });
        setBavaria(bavariaList.items);
    };

    const listPlacebo = async () => {
        let placeboList = await entities.map.list({
            filter: {
                placebo: {
                eq: true,
                },
            },
        });
        setPlacebo(placeboList.items);
    };

    function calcEfficacy(p) {
        let result = p.startingHIVLoad;
        for (let index = 0; index < p.visits.length; index++) {
            result = ((p.visits[index].hivViralLoad / result) * 100).toFixed(2);
        }
        result = (100 - result).toFixed(2)
        return result;
    }

    function calcReduction(p) {
        let result = (p.startingHIVLoad - p.visits[4].hivViralLoad)/ p.startingHIVLoad * 100;
        return result.toFixed(2);
    }

    function calcTotalEfficacy(array) {
        let result = 0;
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < patients.length; j++) {
                if(array[i].patientUUID === patients[j]._id) {
                    result += parseFloat(calcEfficacy(patients[j]))
                }
            }
        }
        return (result / array.length).toFixed(2);
    }

    function calcTotalReduction(array) {
        let result = 0;
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < patients.length; j++) {
                if(array[i].patientUUID === patients[j]._id) {
                    result += parseFloat(calcReduction(patients[j]))
                }
            }
        }
        return (result / array.length).toFixed(2);
    }

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

    const goBack = () => {
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
        listBavaria();
        listPlacebo();
    }, []);

    useMemo(() => {
        currentTrialStatus()
    },[patients])

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
                            <div className="box1">
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
                                        {status === "Completed" ? 
                                            <th>Efficacy</th> : "" }
                                        {status === "Completed" ? 
                                            <th>Total Load Reduction</th> : "" }
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
                                            {status === "Completed" ? 
                                            <td>{calcEfficacy(patient)}%</td> : "" }
                                            {status === "Completed" ? 
                                            <td>{calcReduction(patient)}%</td> : "" }
                                            </tr>
                                        )
                                        })}
                                    </tbody>
                                    </table>
                                    </Box>
                                    </div>
                                    <Box sx={{mt:10, mb:5}}>
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
                                                    <td>{bavaria.length}</td>
                                                    <td>{calcTotalEfficacy(bavaria)}%</td>
                                                    <td>{calcTotalReduction(bavaria)}%</td>
                                                </tr>
                                                <tr>
                                                    <td>Placebo</td>
                                                    <td>{placebo.length}</td>
                                                    <td>{calcTotalEfficacy(placebo)}%</td>
                                                    <td>{calcTotalReduction(placebo)}%</td>
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
