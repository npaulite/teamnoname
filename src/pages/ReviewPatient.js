import React from "react";
import useJaneHopkins from "../hooks/useJaneHopkins";
import { Box, Button, Container, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../cssFiles/janeHopkinsAdmin.css'
import { ArrowLeftSharp } from "@mui/icons-material";

function ReviewPatient() {

    const nav = useNavigate()
    const location = useLocation()
    const { entities } = useJaneHopkins()
    const [id, setID] = useState()
    const [patientName, setPatientName] = useState()
    const [patientPicture, setPatientPicture] = useState()
    const [dob, setDob] = useState()
    const [insuranceNumber, setInsuranceNumber] = useState()
    const [height, setHeight] = useState()
    const [weight, setWeight] = useState()
    const [bloodPressure, setBloodPressure] = useState()
    const [temperature, setTemperature] = useState()
    const [oxygenSaturation, setOxygenSaturation] = useState()
    const [address, setAddress] = useState()
    const [currentMedications, setCurrentMedications] = useState([{medication: ""}]);
    const [familyHistory, setFamilyHistory] = useState()
    const [currentlyEmployed, setCurrentlyEmployed] = useState('No')
    const [currentlyInsured, setCurrentlyInsured] = useState('No')
    const [icdHealthCodes, setIcdHealthCodes] = useState([{code: ""}])
    const [allergies, setAllergies] = useState([{allergy: ""}])
    const [visits, setVisits] = useState([{}])
    const [startingHIVLoad, setStartingHIVLoad] = useState([{}])
    const [trialStatus, setTrialStatus] = useState()
    
    
    useEffect(() => {
        const getPatient = async() => {
            const getResponse = await entities.patient.get(location.state._id)
            setPatientName(getResponse.name)
            setPatientPicture(getResponse.patientPicture)
            setDob(getResponse.dob)
            setInsuranceNumber(getResponse.insuranceNumber)
            setHeight(getResponse.height.replace(/\D/g,''))
            setWeight(getResponse.weight.replace(/\D/g,''))
            setBloodPressure(getResponse.bloodPressure)
            setTemperature(getResponse.temperature.replace(/\D/g,''))
            setOxygenSaturation(getResponse.oxygenSaturation.replace(/\D/g,''))
            setAddress(getResponse.address)
            setCurrentMedications(getResponse.currentMedications)
            setFamilyHistory(getResponse.familyHistory)
            setCurrentlyEmployed(getResponse.currentlyEmployed)
            setCurrentlyInsured(getResponse.currentlyInsured)
            setIcdHealthCodes(getResponse.icdHealthCodes)
            setAllergies(getResponse.allergies)
            setVisits(getResponse.visits)
            setID(getResponse._id)
            setStartingHIVLoad(getResponse.startingHIVLoad)
            setTrialStatus(getResponse.trialStatus)
        }
    
      getPatient()
    }, [entities, location])
    
    
    const updatePatient = async() => {
        const updateResponse = await entities.patient.update( {
            _id: id,
            name: patientName,
            patientPicture: patientPicture,
            dob: dob,
            insuranceNumber: insuranceNumber,
            height: height + ' cm',
            weight: weight + ' kg',
            bloodPressure: bloodPressure,
            temperature: temperature + ' C',
            oxygenSaturation: oxygenSaturation + "%",
            address: address,
            currentMedications: currentMedications,
            familyHistory: familyHistory,
            currentlyEmployed: currentlyEmployed,
            currentlyInsured: currentlyInsured,
            icdHealthCodes: icdHealthCodes,
            allergies: allergies,
            visits: visits,
            startingHIVLoad: startingHIVLoad,
            trialStatus: trialStatus
        })
        console.log(updateResponse)

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

    const handleSetComplete = () => {
        setTrialStatus("Completed")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTrialStatus("Completed");
        if(updatePatient()) {
        console.log(updatePatient);
        setTimeout(() => {nav("/JaneHopkinsAdmin")}, 1000)
        }
    }

    const goBack = () =>{ 
        let path = `/JaneHopkinsAdmin`; 
        nav(path);
    }

    return (
    <div className="update">
        <Box>
        <div className="return">
            
            <Button variant="contained" size="large" onClick={goBack}>
                <Typography>Go Back</Typography>
                <ArrowLeftSharp/>
            </Button>
            
        </div>
        </Box>
        <Container>
        <Box className="fda" sx={{ pt: 4, pb: 6 }} bgcolor="grey">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
        <Typography component="h1" variant="h3">Review and Set Patient Trial Completion</Typography>
        <Typography component="h5">Asterisk(*) is required</Typography>
        <Box component="form" mt={2} onSubmit={handleSubmit}>
            <div className="patientName" m={2} >
                <Typography variant="h6">Patient Name *</Typography>
                <TextField
                        required
                        id="patientName"
                        label="Name"
                        InputLabelProps={{ shrink: true }}
                        value={patientName || ''} 
                        onChange={(e) => {setPatientName(e.target.value);}}
                        fullWidth
                        disabled
                />    
            </div>
            <div className="patientPicture">
                <Typography variant="h6">Patient Picture</Typography>
                <TextField
                        id="patientPicture"
                        label="Patient Picture"
                        InputLabelProps={{ shrink: true }}
                        value={patientPicture || ''}
                        onChange={(e) => setPatientPicture(e.target.value)}
                        fullWidth
                        disabled
                    />
            </div>
            <div className="dob">
                <Typography variant="h6">Date of Birth *</Typography>
                <TextField
                        required
                        id="dob"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={dob || ''}
                        onChange={(e) => setDob(e.target.value)}
                        fullWidth
                        disabled
                />
            </div>
            <div className="insuranceNumber">
                <Typography variant="h6">Insurance Number *</Typography>
                <TextField
                        required
                        id="insuranceNumber"
                        type="number"
                        label="Insurance Number"
                        InputLabelProps={{ shrink: true }}
                        value={insuranceNumber || ''}
                        onChange={(e) => setInsuranceNumber(e.target.value)}
                        fullWidth
                        disabled
                    />  
            </div>
            <div className="height">
                <Typography variant="h6">Height *</Typography>
                <TextField
                        required
                        id="height"
                        type="number"
                        label="Height (in cm)"
                        InputLabelProps={{ shrink: true }}
                        value={height || ''}
                        onChange={(e) => setHeight(e.target.value)}
                        fullWidth
                        disabled
                    />
            </div>
            <div className="weight">
                <Typography variant="h6">Weight *</Typography>
                <TextField
                        required
                        id="weight"
                        type="number"
                        label="Weight (in kg)"
                        InputLabelProps={{ shrink: true }}
                        value={weight || ''}
                        onChange={(e) => setWeight(e.target.value)}
                        fullWidth
                        disabled
                    />
            </div>
            <div className="bloodPressure">
                <Typography variant="h6">Blood Pressure *</Typography>
                <TextField
                        required
                        id="bloodPressure"
                        label="Systolic/Diastolic"
                        InputLabelProps={{ shrink: true }}
                        value={bloodPressure || ''}
                        onChange={(e) => setBloodPressure(e.target.value)}
                        fullWidth
                        disabled
                    />   
            </div>
            <div className="temperature">
                <Typography variant="h6">Temperature *</Typography>
                <TextField
                        required
                        id="temperature"
                        type="number"
                        label="Temperature (in Celsius)"
                        InputLabelProps={{ shrink: true }}
                        value={temperature || ''}
                        onChange={(e) => setTemperature(e.target.value)}
                        fullWidth
                        disabled
                    />
            </div>
            <div className="oxygenSaturation">
                <Typography variant="h6">Oxygen Saturation *</Typography>
                <TextField
                        required
                        id="oxygenSaturation"
                        type="number"
                        label="Oxygen Saturation (%)"
                        InputLabelProps={{ shrink: true }}
                        value={oxygenSaturation || ''}
                        onChange={(e) => setOxygenSaturation(e.target.value)}
                        fullWidth
                        disabled
                    />
            </div>
            <div className="address">
                <Typography variant="h6">Address *</Typography>
                <TextField
                        required
                        id="address"
                        label="Address"
                        InputLabelProps={{ shrink: true }}
                        value={address || ''}
                        onChange={(e) => setAddress(e.target.value)}
                        fullWidth
                        disabled
                    />  
            </div>            
            <div className="currentMedication">
                <Typography variant="h6">Current Medications</Typography>
                {currentMedications.map((x, i) => {
                    return(
                    <div className="medications" key={i}>
                        <TextField
                            name="medication"
                            label="Medications"
                            InputLabelProps={{ shrink: true }}
                            value={x.medication}
                            onChange={e => handleMedication(e, i)}
                            fullWidth
                            disabled
                            sx={{mb:1}}
                            />
                        {/* <div className="medButtons">
                        {currentMedications.length !== 1 && <Button variant="outlined"
                            onClick={() => handleRemoveMedication(i)} disabled>Remove</Button>}
                        {currentMedications.length - 1 === i && <Button variant="outlined" 
                            onClick={handleAddMedication} disabled>Add</Button>}
                    </div> */}
                    </div>
                    );
                })}
            </div>
            <div className="familyHistory">
                <Typography variant="h6">Family History</Typography>
                <TextField
                        id="familyHistory"
                        label="Family History"
                        InputLabelProps={{ shrink: true }}
                        value={familyHistory || ''}
                        onChange={(e) => setFamilyHistory(e.target.value)}
                        fullWidth
                        disabled
                    />
            </div>
            <div className="currentlyEmployed">
            
                <Typography variant="h6">Currently Employed *</Typography>
                <Select
                   required
                   id="currentlyEmployed"
                    label="CurrentLy Employed"
                    InputLabelProps={{ shrink: true }}
                    value={currentlyEmployed || ''}
                    onChange={(e) => setCurrentlyEmployed(e.target.value)}
                    fullWidth
                    disabled
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
                    InputLabelProps={{ shrink: true }}
                    value={currentlyInsured || ''}
                    onChange={(e) => setCurrentlyInsured(e.target.value)}
                    fullWidth
                    disabled
                    >
                        <MenuItem value={'Yes'}>Yes</MenuItem>
                        <MenuItem value={'No'}>No</MenuItem>
                </Select>
            </div>
            <div className="icdHealthCodes">
            <Typography variant="h6">ICD Health Code</Typography>
                {icdHealthCodes.map((x, i) => {
                    return(
                    <div className="icd" key={i}>
                        <TextField
                            name="code"
                            label="ICD Health Code"
                            InputLabelProps={{ shrink: true }}
                            value={x.code}
                            onChange={e => handleICD(e, i)}
                            fullWidth
                            disabled
                            sx={{mb:1}}
                            />
                        {/* <div className="icdButtons">
                        {icdHealthCodes.length !== 1 && <Button variant="outlined"
                            onClick={() => handleRemoveICD(i)} disabled>Remove</Button>}
                        {icdHealthCodes.length - 1 === i && <Button variant="outlined" 
                            onClick={handleAddICD} disabled>Add</Button>}
                    </div> */}
                    </div>
                    );
                })}
            </div>
            <div className="allergies">
            <Typography variant="h6">Allergies</Typography>
                {allergies.map((x, i) => {
                    return(
                    <div className="allergy" key={i}>
                        <TextField
                            name="allergy"
                            label="Allergy"
                            InputLabelProps={{ shrink: true }}
                            value={x.allergy}
                            onChange={e => handleAllergy(e, i)}
                            fullWidth
                            disabled
                            />
                        {/*<div className="allergyButtons">
                        {allergies.length !== 1 && <Button variant="outlined"
                            onClick={() => handleRemoveAllergy(i)} disabled>Remove</Button>}
                        {allergies.length - 1 === i && <Button variant="outlined" 
                            onClick={handleAddAllergy} disabled>Add</Button>}
                    </div>*/}
                    </div>
                    );
                })}
            </div>
            
            <div className="visits">
                <Typography variant="h6">Visits</Typography>
                {visits.map((x, i) => {
                    return(
                    <div className="visit" key={i}>
                        <Typography variant="subtitle1"> Visit #{i+1}</Typography>
                        <TextField sx={{mt:1, mb:1}}
                            name="patient"
                            InputLabelProps={{ shrink: true }}
                            value={x.patient || patientName}
                            onChange={e => handleVisit(e, i)}
                            fullWidth
                            disabled
                            />
                        <TextField sx={{mb:1}}
                            name="dateTime"
                            type="date"
                            label="Date of Visit"
                            InputLabelProps={{ shrink: true }}
                            value={x.dateTime}
                            onChange={e => handleVisit(e, i)}
                            fullWidth
                            disabled
                            />
                        <TextField sx={{mb:1}}
                            name="notes"
                            label="Notes"
                            InputLabelProps={{ shrink: true }}
                            value={x.notes}
                            onChange={e => handleVisit(e, i)}
                            fullWidth
                            disabled
                            />
                        <TextField sx={{mb:1}}
                            name="hivViralLoad"
                            type="number"
                            label="HIV Viral Load"
                            InputLabelProps={{ shrink: true }}
                            value={x.hivViralLoad}
                            onChange={e => handleVisit(e, i)}
                            fullWidth
                            disabled
                            />
                    </div>
                    );
                })}
            </div>
            <div>
                <Button
                variant="contained"  
                type="submit"
                fullWidth
                onClick={handleSetComplete}
                sx={{mt: 5, mb: 8}}>
                    Set Patient's Trial Completed
                </Button>
            </div>
        </Box>
        </div>
            </div>
          </div>
        </Box>
        </Container>
      </div>
    );
}
  
export default ReviewPatient;