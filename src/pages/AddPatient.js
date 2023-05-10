import React from "react";
import useJaneHopkins from "../hooks/useJaneHopkins";
import { Box, Button, Container, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../cssFiles/addForm.css'
import { ArrowLeftSharp } from "@mui/icons-material";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

function AddPatient() {

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
    const [address, setAddress] = useState()
    const [currentMedications, setCurrentMedications] = useState([{medication: ""}]);
    const [familyHistory, setFamilyHistory] = useState()
    const [currentlyEmployed, setCurrentlyEmployed] = useState('No')
    const [currentlyInsured, setCurrentlyInsured] = useState('No')
    const [icdHealthCodes, setIcdHealthCodes] = useState([{code: ""}])
    const [allergies, setAllergies] = useState([{allergy: ""}])
    const [visits, setVisits] = useState([{}])
    const [eligibility, setEligibility] = useState(false)
    const [startingHIVLoad, setStartingHIVLoad] = useState()
    const [trialStatus, setTrialStatus] = useState()

    const validationSchema = Yup.object().shape({
        fullname: Yup.string().required('Fullname is required'),
//        username: Yup.string()
//          .required('Username is required')
//          .min(6, 'Username must be at least 6 characters')
//          .max(20, 'Username must not exceed 20 characters'),
        address: Yup.string()
            .required('address is required')
            .oneOf([Yup.ref('address'), null], 'Confirm dob'), 
        dob: Yup.date()
            .required('date is required')
            .oneOf([Yup.ref('dob'), null], 'Confirm dob'), 
        email: Yup.string()
          .required('Email is required')
          .oneOf([Yup.ref('email'), null], 'Confirm email'), 
        weight: Yup.number()
          .required('weight is required')
          .oneOf([Yup.ref('weight'), null], 'Confirm weight'),  
        height: Yup.number()
          .required('Height is required')
          .oneOf([Yup.ref('height'), null], 'Confirm height'), 
        bloodPressure: Yup.number()
          .required('BP is required')
          .oneOf([Yup.ref('bloodPressure'), null], 'Confirm BP'),
        temperature: Yup.number()
          .required('Temperature is required')
          .oneOf([Yup.ref('temperature'), null], 'Confirm temperature'),      
        oxygenSaturation: Yup.number()
          .required('H20 saturation are required')
          .oneOf([Yup.ref('oxygenSaturation'), null], 'Confirm Insurance #'),
        insuranceNumber: Yup.number()
          .required('insuranceNumber are required')
          .oneOf([Yup.ref('insuranceNumber'), null], 'Confirm Insurance #'),
        hivLoad: Yup.number()
          .required('hivLoad are required')
          .oneOf([Yup.ref('hivLoad'), null], 'Confirm Insurance #'),
        allergies: Yup.string()
          .required('allergies are required')
          .oneOf([Yup.ref('allergies'), null], 'Confirm Insurance #'),
          bavariaDrugs: Yup.string()
          .required('Drugs are required')
          .oneOf([Yup.ref('bavariaDrugs'), null], 'Confirm it is not a placebo'),
        medications: Yup.string()
          .required('Drugs are required')
          .oneOf([Yup.ref('medications'), null], 'Confirm it is not a placebo'),
        familyHistory: Yup.string()
            .required('Family History')
            .oneOf([Yup.ref('familyHistory'), null], 'Confirm Family History'),
        placebo: Yup.string()
          .required('Confirm Placebo')
          .oneOf([Yup.ref('placebo'), null], 'Confirm it is a placebo'),
        patientUUID: Yup.string() 
            .required('Patient UUID required')
            .oneOf([Yup.ref('patientUUID'), null], 'UUID is required'),
        currentlyEmployed: Yup.bool().oneOf([true], 'Employed?'),
        currentlyInsured: Yup.bool().oneOf([true], 'Insured?'),
        role: Yup.string()
          .required('Confirm Role')
          .oneOf([Yup.ref('Doctor', "Patient", "Administrator"), null], 'Confirm Role does not match'),
      });


      const {
        register,
        control,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(validationSchema)
      });

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
            address: address,
            currentMedications: currentMedications,
            familyHistory: familyHistory,
            currentlyEmployed: currentlyEmployed,
            currentlyInsured: currentlyInsured,
            icdHealthCodes: icdHealthCodes,
            allergies: allergies,
            visits: visits,
            eligibility: eligibility,
            startingHIVLoad: startingHIVLoad,
            trialStatus: trialStatus
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
                    },
                    {
                        principal: {
                            nodes: ["Bavaria", "FDA"]
                        },
                        operations: ["READ"],
                        path: "currentlyEmployed"
                    },
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
                    },
                    {
                        principal: {
                            nodes: ["Bavaria", "FDA"]
                        },
                        operations: ["READ"],
                        path: "allergies"
                    },
                    {
                        principal: {
                            nodes: ["Bavaria", "FDA"]
                        },
                        operations: ["READ"],
                        path: "startingHIVLoad"
                    },
                    {
                        principal: {
                            nodes: ["Bavaria", "FDA"]
                        },
                        operations: ["READ"],
                        path: "visits"
                    },
                    {
                        principal: {
                            nodes: ["Bavaria", "FDA"]
                        },
                        operations: ["READ"],
                        path: "eligibility"
                    },
                    {
                        principal: {
                            nodes: ["Bavaria", "FDA"]
                        },
                        operations: ["READ"],
                        path: "startingHIVLoad"
                    },
                    {
                        principal: {
                            nodes: ["Bavaria", "FDA"]
                        },
                        operations: ["READ"],
                        path: "trialStatus"
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

    const handleEligibility = () => {
        const date = new Date("2005-01-01")
        let birth = dob.split('-')
        const birthday = new Date(birth[0], birth[1] - 1, birth[2])
        if (birthday <= date) {
            setEligibility(true)
            setTrialStatus("Ongoing")}
        else {
            setEligibility(false)
            setTrialStatus("Non-Eligible")
        }
        icdHealthCodes.map((codes) => {
            if(codes.code.indexOf('O') > -1) {
                setEligibility(false)
                setTrialStatus("Non-Eligible")}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(addPatient()) {
        console.log(addPatient);
        setTimeout(() => {nav("/JaneHopkinsAdmin")}, 1000)
        }
    }

    const goBack = () =>{ 
        let path = `/JaneHopkinsAdmin`; 
        nav(path);
    }

    return (
    <div className="main">
        <div className="return">
            <Box>
                <Button variant="outlined" size="large" onClick={goBack}>
                    <Typography>Go Back</Typography>
                    <ArrowLeftSharp/>
                </Button>
            </Box>
        </div>
        <div className="addForm">
        <Container>
        <Typography component="h1" variant="h3">Add Patient</Typography>
        <Typography component="h5">Asterisk(*) is required</Typography>
        <Box component="form" mt={2} onSubmit={handleSubmit}>
            <div className="patientName" m={2} >
                <Typography variant="h6">Patient Name *</Typography>
                <TextField
                        required
                        id="patientName"
                        name="patientName"
                        type="fullname"
                        label="Name"
                        value={patientName || ''} 
                        onChange={(e) => {setPatientName(e.target.value);}}
                        fullWidth
                        autoFocus
                        //{...register('patientName')}
                        error={errors.fullname? true : false}
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
                        name="dob"
                        label="dob"
                        type="date"
                        value={dob || ''} 
                        onChange={(e) => setDob(e.target.value)}
                        fullWidth
                        //{...register('dob')}
                        error={errors.dob? true : false}
                />
            </div>
            <div className="insuranceNumber">
                <Typography variant="h6">Insurance Number *</Typography>
                <TextField
                        required
                        id="insuranceNumber"
                        type="number"
                        label="Insurance Number"
                        value={insuranceNumber || ''} pattern="/^\d+$/"
                        onChange={(e) => setInsuranceNumber(e.target.value)}
                        fullWidth
                        //{...register('insuranceNumber')}
                        error={errors.insuranceNumber? true : false}
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
                        //{...register('height')}
                        error={errors.height? true : false}
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
                        //{...register('weight')}
                        error={errors.weight? true : false}
                    />
            </div>
            <div className="bloodPressure">
                <Typography variant="h6">Blood Pressure *</Typography>
                <TextField
                        required
                        id="bloodPressure"
                        label="Systolic/Diastolic"
                        value={bloodPressure || ''}
                        onChange={(e) => setBloodPressure(e.target.value)}
                        fullWidth
                        //{...register('bloodPressure')}
                        error={errors.bloodPressure? true : false}
                    />   
            </div>
            <div className="temperature">
                <Typography variant="h6">Temperature *</Typography>
                <TextField
                        required
                        id="temperature"
                        type="number"
                        label="Temperature (in Celsius)"
                        value={temperature || ''} pattern="/^\d+$/"
                        onChange={(e) => setTemperature(e.target.value)}
                        fullWidth
                        //{...register('temperature')}
                        error={errors.temperature? true : false}
                    />
            </div>
            <div className="oxygenSaturation">
                <Typography variant="h6">Oxygen Saturation *</Typography>
                <TextField
                        required
                        id="oxygenSaturation"
                        type="number"
                        label="Oxygen Saturation (%)"
                        value={oxygenSaturation || ''} pattern="/^\d+$/"
                        onChange={(e) => setOxygenSaturation(e.target.value)}
                        fullWidth
                        //{...register('oxygenSaturation')}
                        error={errors.oxygenSaturation? true : false}
                    />
            </div>
            <div className="address">
                <Typography variant="h6">Address *</Typography>
                <TextField
                        required
                        id="address"
                        type="address"
                        label="Address"
                        value={address || ''} 
                        onChange={(e) => setAddress(e.target.value)}
                        fullWidth
                        //{...register('address')}
                        error={errors.address? true : false}
                    />  
            </div>            
            <div className="currentMedication">
                <Typography variant="h6">Current Medications *</Typography>
                {currentMedications.map((x, i) => {
                    return(
                    <div className="medications" key={i}>
                        <TextField
                            required
                            name="medication"
                            type="medications"
                            label="Medications"
                            value={x.medication || ''}
                            onChange={e => handleMedication(e, i)}
                            fullWidth
                            //{...register('medications')}
                            error={errors.medications? true : false}
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
                <Typography variant="h6">Family History *</Typography>
                <TextField
                        required
                        id="familyHistory"
                        type="familyHistory"
                        label="Family History"
                        value={familyHistory || ''} 
                        onChange={(e) => setFamilyHistory(e.target.value)}
                        fullWidth
                        //{...register('familyHistory')}
                        error={errors.familyHistory? true : false}
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
            <Typography variant="h6">ICD Health Code *</Typography>
                {icdHealthCodes.map((x, i) => {
                    return(
                    <div className="icd" key={i}>
                        <TextField
                            required
                            name="code"
                            label="ICD Health Code"
                            value={x.code} 
                            onChange={e => handleICD(e, i)}
                            fullWidth
                           // {...register('icd')}
                            error={errors.icd? true : false}
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
            <div className="uuid">
                <Typography variant="h6">Starting HIV Load *</Typography>
                <TextField
                        required
                        id="hivLoad"
                        type="number"
                        label="HIV LOAD "
                        value={startingHIVLoad || ''} pattern = "/^\d+$/"
                        onChange={(e) => setStartingHIVLoad(e.target.value)}
                        fullWidth
                        //{...register('hivLoad')}
                        error={errors.hivLoad? true : false}
                    />
            </div>
            <div className="allergies">
            <Typography variant="h6">Allergies *</Typography>
                {allergies.map((x, i) => {
                    return(
                    <div className="allergy" key={i}>
                        <TextField
                            name="allergy"
                            label="Allergy"
                            value={x.allergy || ''}
                            onChange={e => handleAllergy(e, i)}
                            fullWidth
                            //{...register('allergy')}
                            error={errors.allergies? true : false}
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
            <div className="submitButton">
                <Button onClick={handleEligibility}
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
      </div>

    );

}

export default AddPatient;
