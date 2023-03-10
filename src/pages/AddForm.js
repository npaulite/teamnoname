import React from "react";
import useJaneHopkins from "../hooks/useJaneHopkins";
import { Box, Button, Container, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../cssFiles/addForm.css'
import { ArrowLeftSharp } from "@mui/icons-material";

function AddForm() {

    const nav = useNavigate()
    const { entities } = useJaneHopkins()
    const [patientName, setPatientName] = useState()
    const [patientPicture, setPatientPicture] = useState()
    const [dob, setDob] = useState()
    const [insuranceNumber, setInsuranceNumber] = useState()
    const [height, setHeight] = useState()
    const [weight, setWeight] = useState()
    const [bloodPressure, setBloodPressure] = useState()
    const [temperature, setTemperature] = useState()
    const [oxygenSaturation, setOxygenSaturation] = useState()
    const [uuid, setUuid] = useState()
    const [address, setAddress] = useState()
    const [currentMedications, setCurrentMedications] = useState([{medication: ""}]);
    const [familyHistory, setFamilyHistory] = useState()
    const [currentlyEmployed, setCurrentlyEmployed] = useState('No')
    const [currentlyInsured, setCurrentlyInsured] = useState('No')
    const [icdHealthCodes, setIcdHealthCodes] = useState([{code: ""}])
    const [allergies, setAllergies] = useState([{allergy: ""}])
    const [visits, setVisits] = useState([{
        patient: "",
        dateTime: "",
        notes: "",
        hivViralLoad: ""
    }])

    const addPatient = async() => {

        const addResponse = await entities.patient.add( {
            name: patientName,
            patientPicture: patientPicture,
            dob: dob,
            insuranceNumber: insuranceNumber,
            height: height + ' cm',
            weight: weight + ' kg',
            bloodPressure: bloodPressure,
            temperature: temperature + ' C',
            oxygenSaturation: oxygenSaturation + "%",
            uuid: uuid,
            address: address,
            currentMedications: currentMedications,
            familyHistory: familyHistory,
            currentlyEmployed: currentlyEmployed,
            currentlyInsured: currentlyInsured,
            icdHealthCodes: icdHealthCodes,
            allergies: allergies,
            visits: visits
        },
        {
            aclInput: {
                acl: [
                    {
                        principal: {
                            nodes: ["Bavaria", "FDA"]
                        },
                        operations: ["READ"],
                        path: "dob"
                    },
                    {
                        principal: {
                            nodes: ["Bavaria", "FDA"]
                        },
                        operations: ["READ"],
                        path: "insuranceNumber"
                    },
                    {
                        principal: {
                            nodes: ["Bavaria", "FDA"]
                        },
                        operations: ["READ"],
                        path: "height"
                    },
                    {
                        principal: {
                            nodes: ["Bavaria", "FDA"]
                        },
                        operations: ["READ"],
                        path: "weight"
                    },
                    {
                        principal: {
                            nodes: ["Bavaria", "FDA"]
                        },
                        operations: ["READ"],
                        path: "bloodPressure"
                    },
                    {
                        principal: {
                            nodes: ["Bavaria", "FDA"]
                        },
                        operations: ["READ"],
                        path: "temperature"
                    },
                    {
                        principal: {
                            nodes: ["Bavaria", "FDA"]
                        },
                        operations: ["READ"],
                        path: "oxygenSaturation"
                    },
                    {
                        principal: {
                            nodes: ["Bavaria", "FDA"]
                        },
                        operations: ["READ"],
                        path: "uuid"
                    },
                    {
                        principal: {
                            nodes: ["Bavaria", "FDA"]
                        },
                        operations: ["READ"],
                        path: "currentMedications"
                    },
                    {
                        principal: {
                            nodes: ["Bavaria", "FDA"]
                        },
                        operations: ["READ"],
                        path: "familyHistory"
                    }
                    ,
                    {
                        principal: {
                            nodes: ["Bavaria", "FDA"]
                        },
                        operations: ["READ"],
                        path: "currentlyEmployed"
                    }
                    ,
                    {
                        principal: {
                            nodes: ["Bavaria", "FDA"]
                        },
                        operations: ["READ"],
                        path: "currentlyInsured"
                    },
                    {
                        principal: {
                            nodes: ["Bavaria", "FDA"]
                        },
                        operations: ["READ"],
                        path: "icdHealthCodes"
                    }
                    ,
                    {
                        principal: {
                            nodes: ["Bavaria", "FDA"]
                        },
                        operations: ["READ"],
                        path: "allergies"
                    }
                    ,
                    {
                        principal: {
                            nodes: ["Bavaria", "FDA"]
                        },
                        operations: ["READ"],
                        path: "visits"
                    }
                ]
            }
        })
        console.log(addResponse)
    }
    
    const handleMedication = (e, index) => {
        const { name, value } = e.target;
        const list = [...currentMedications];
        list[index][name] = value;
        setCurrentMedications(list);
      };

    const handleRemoveMedication = index => {
        const list = [...currentMedications];
        list.splice(index, 1);
        setCurrentMedications(list);
      };
       
    const handleAddMedication = () => {
        setCurrentMedications([...currentMedications, {medication: "" }]);
      };

    const handleICD = (e, index) => {
        const { name, value } = e.target;
        const list = [...icdHealthCodes];
        list[index][name] = value;
        setIcdHealthCodes(list);
      };

    const handleRemoveICD = index => {
        const list = [...icdHealthCodes];
        list.splice(index, 1);
        setIcdHealthCodes(list);
      };
       
    const handleAddICD = () => {
        setIcdHealthCodes([...icdHealthCodes, {code: "" }]);
      };

    const handleAllergy = (e, index) => {
        const { name, value } = e.target;
        const list = [...allergies];
        list[index][name] = value;
        setAllergies(list);
      };

    const handleRemoveAllergy = index => {
        const list = [...allergies];
        list.splice(index, 1);
        setAllergies(list);
      };
       
    const handleAddAllergy = () => {
        setAllergies([...allergies, {allergy: "" }]);
      };

    const handleVisit = (e, index) => {
        const { name, value } = e.target;
        const list = [...visits];
        list[index][name] = value;
        setVisits(list);
      };

    const handleRemoveVisit = index => {
        const list = [...visits];
        list.splice(index, 1);
        setVisits(list);
      };
       
    const handleAddVisit = () => {
        setVisits([...visits, {
            patient: "",
            dateTime: "",
            notes: "",
            hivViralLoad: ""
        }]);
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(addPatient()) {
        console.log(addPatient);
        nav("/JaneHopkinsDoctor");
        }
    }

    const goBack = () =>{ 
        let path = `/JaneHopkinsDoctor`; 
        nav(path);
    }

    return (
    <div className="add">
        <Box>
        <div className="return">
            <Button variant="outlined" size="large" onClick={goBack}>
                <Typography>Go Back</Typography>
                <ArrowLeftSharp/>
            </Button>
        </div>
        </Box>
        <Container>
        <Typography component="h1" variant="h3">Add Patient</Typography>
        <Typography component="h5">Asterisk(*) is required</Typography>
        <Box component="form" mt={2} sx={2} onSubmit={handleSubmit}>
            <div className="patientName" m={2} >
                <Typography variant="h6">Patient Name *</Typography>
                <TextField
                        required
                        id="patientName"
                        label="Name"
                        value={patientName || ''}
                        onChange={(e) => {setPatientName(e.target.value);}}
                        fullWidth
                        autoFocus
                />    
            </div>
            <div className="patientPicture">
                <Typography variant="h6">Patient Picture</Typography>
                <TextField
                        id="patientPicture"
                        label="Patient Picture"
                        value={patientPicture || ''}
                        onChange={(e) => setPatientPicture(e.target.value)}
                        fullWidth
                    />
            </div>
            <div className="dob">
                <Typography variant="h6">Date of Birth *</Typography>
                <TextField
                        required
                        id="dob"
                        type="date"
                        value={dob || ''}
                        onChange={(e) => setDob(e.target.value)}
                        fullWidth
                />
            </div>
            <div className="insuranceNumber">
                <Typography variant="h6">Insurance Number *</Typography>
                <TextField
                        required
                        id="insuranceNumber"
                        type="number"
                        label="Insurance Number"
                        value={insuranceNumber || ''}
                        onChange={(e) => setInsuranceNumber(e.target.value)}
                        fullWidth
                    />  
            </div>
            <div className="height">
                <Typography variant="h6">Height *</Typography>
                <TextField
                        required
                        id="height"
                        type="number"
                        label="Height (in cm)"
                        value={height || ''}
                        onChange={(e) => setHeight(e.target.value)}
                        fullWidth
                    />
            </div>
            <div className="weight">
                <Typography variant="h6">Weight *</Typography>
                <TextField
                        required
                        id="weight"
                        type="number"
                        label="Weight (in kg)"
                        value={weight || ''}
                        onChange={(e) => setWeight(e.target.value)}
                        fullWidth
                    />
            </div>
            <div className="bloodPressure">
                <Typography variant="h6">Blood Pressure *</Typography>
                <TextField
                        required
                        id="bloodPressure"
                        type="number"
                        label="Blood Pressure"
                        value={bloodPressure || ''}
                        onChange={(e) => setBloodPressure(e.target.value)}
                        fullWidth
                    />   
            </div>
            <div className="temperature">
                <Typography variant="h6">Temperature *</Typography>
                <TextField
                        required
                        id="temperature"
                        type="number"
                        label="Temperature (in Celsius)"
                        value={temperature || ''}
                        onChange={(e) => setTemperature(e.target.value)}
                        fullWidth
                    />
            </div>
            <div className="oxygenSaturation">
                <Typography variant="h6">Oxygen Saturation *</Typography>
                <TextField
                        required
                        id="oxygenSaturation"
                        type="number"
                        label="Oxygen Saturation (%)"
                        value={oxygenSaturation || ''}
                        onChange={(e) => setOxygenSaturation(e.target.value)}
                        fullWidth
                    />
            </div>
            <div className="uuid">
                <Typography variant="h6">UUID *</Typography>
                <TextField
                        required
                        id="uuid"
                        type="number"
                        label="UUID "
                        value={uuid || ''}
                        onChange={(e) => setUuid(e.target.value)}
                        fullWidth
                    />
            </div>

    
            <div className="address">
                <Typography variant="h6">Address *</Typography>
                <TextField
                        required
                        id="address"
                        label="Address"
                        value={address || ''}
                        onChange={(e) => setAddress(e.target.value)}
                        fullWidth
                    />  
            </div>            
            <div className="currentMedication">
                <Typography variant="h6">Current Medications</Typography>
                {currentMedications.map((x, i) => {
                    return(
                    <div className="medications">
                        <TextField
                            name="medication"
                            label="Medications"
                            value={x.medication}
                            onChange={e => handleMedication(e, i)}
                            fullWidth
                            />
                        <div className="medButtons">
                        {currentMedications.length !== 1 && <Button variant="outlined"
                            onClick={() => handleRemoveMedication(i)}>Remove</Button>}
                        {currentMedications.length - 1 === i && <Button variant="outlined" 
                            onClick={handleAddMedication}>Add</Button>}
                    </div>
                    </div>
                    );
                })}
            </div>
            <div className="familyHistory">
                <Typography variant="h6">Family History</Typography>
                <TextField
                        id="familyHistory"
                        label="Family History"
                        value={familyHistory || ''}
                        onChange={(e) => setFamilyHistory(e.target.value)}
                        fullWidth
                    />
            </div>
            <div className="currentlyEmployed">
                <Typography variant="h6">Currently Employed *</Typography>
                <Select
                   required
                   id="currentlyEmployed"
                    label="CurrentLy Employed"
                    value={currentlyEmployed || ''}
                    onChange={(e) => setCurrentlyEmployed(e.target.value)}
                    fullWidth
                    >
                        <MenuItem value={'Yes'}>Yes</MenuItem>
                        <MenuItem value={'No'}>No</MenuItem>
                </Select>
            </div>
            <div className="currentlyInsured">
                <Typography variant="h6">Currently Insured *</Typography>
                <Select
                    required
                    id="currentlyInsured"
                    label="CurrentLy Insured"    
                    value={currentlyInsured || ''}
                    onChange={(e) => setCurrentlyInsured(e.target.value)}
                    fullWidth
                    >
                        <MenuItem value={'Yes'}>Yes</MenuItem>
                        <MenuItem value={'No'}>No</MenuItem>
                </Select>
            </div>
            <div className="icdHealthCodes">
            <Typography variant="h6">ICD Health Code</Typography>
                {icdHealthCodes.map((x, i) => {
                    return(
                    <div className="icd">
                        <TextField
                            name="code"
                            label="ICD Health Code"
                            type="number"
                            value={x.code}
                            onChange={e => handleICD(e, i)}
                            fullWidth
                            />
                        <div className="icdButtons">
                        {icdHealthCodes.length !== 1 && <Button variant="outlined"
                            onClick={() => handleRemoveICD(i)}>Remove</Button>}
                        {icdHealthCodes.length - 1 === i && <Button variant="outlined" 
                            onClick={handleAddICD}>Add</Button>}
                    </div>
                    </div>
                    );
                })}
            </div>
            <div className="allergies">
            <Typography variant="h6">Allergies</Typography>
                {allergies.map((x, i) => {
                    return(
                    <div className="allergy">
                        <TextField
                            name="allergy"
                            label="Allergy"
                            value={x.allergy}
                            onChange={e => handleAllergy(e, i)}
                            fullWidth
                            />
                        <div className="allergyButtons">
                        {allergies.length !== 1 && <Button variant="outlined"
                            onClick={() => handleRemoveAllergy(i)}>Remove</Button>}
                        {allergies.length - 1 === i && <Button variant="outlined" 
                            onClick={handleAddAllergy}>Add</Button>}
                    </div>
                    </div>
                    );
                })}
            </div>
            <div className="visits">
                <Typography variant="h6">Visits</Typography>
                {visits.map((x, i) => {
                    return(
                    <div className="visit">
                        <TextField
                            name="patient"
                            label="Patient Name"
                            value={x.patient}
                            onChange={e => handleVisit(e, i)}
                            fullWidth
                            />
                        <TextField
                            name="dateTime"
                            type='date'
                            value={x.dateTime}
                            onChange={e => handleVisit(e, i)}
                            fullWidth
                            />
                        <TextField
                            name="notes"
                            label="Notes"
                            value={x.notes}
                            onChange={e => handleVisit(e, i)}
                            fullWidth
                            />
                        <TextField
                            name="hivViralLoad"
                            type="number"
                            label="HIV Viral Load"
                            value={x.hivViralLoad}
                            onChange={e => handleVisit(e, i)}
                            fullWidth
                            />
                        <div className="visitButtons">
                        {visits.length !== 1 && <Button variant="outlined"
                            onClick={() => handleRemoveVisit(i)}>Remove</Button>}
                        {visits.length - 1 === i && <Button variant="outlined" 
                            onClick={handleAddVisit}>Add</Button>}
                    </div>
                    </div>
                    );
                })}
            </div>
            <div>
                <Button
                variant="contained"  
                type="submit"
                fullWidth
                sx={{mt: 5, mb: 8}}>
                    Add Patient
                </Button>
            </div>
        </Box>
        </Container>
      </div>
    );
}


  
export default AddForm;