import React from "react";
import useJaneHopkins from "../hooks/useJaneHopkins";
import { Box, Button, Container, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import '../cssFiles/janeHopkinsDoctor.css'
import { ArrowLeftSharp } from "@mui/icons-material";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

function UpdatePatient() {

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

    const handleSubmit= (e) => {
        e.preventDefault();
        if(updatePatient()) {
        console.log(updatePatient);
        setTimeout(() => {nav("/JaneHopkinsDoctor")}, 1000)
        }
    }

    const goBack = () =>{ 
        let path = `/JaneHopkinsDoctor`; 
        nav(path);
    }

    const validationSchema = Yup.object().shape({
        patientname: Yup.string().required('Fullname is required'),
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
        icd: Yup.number()
          .required('ICD is required')
          .oneOf([Yup.ref('icd'), null], 'Confirm Insurance #'),        
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

    return (
    <div className="update">
        <Box>
        <div className="return">
            
            <Button variant="outlined" size="large" onClick={goBack}>
                <Typography>Go Back</Typography>
                <ArrowLeftSharp/>
            </Button>
            
        </div>
        </Box>
        <Container>
        <Typography component="h1" variant="h3">Update Patient Information</Typography>
        <Typography component="h5">Asterisk(*) is required</Typography>
        <Box component="form" mt={2} onSubmit={handleSubmit}>
            <div className="patientName" m={2} >
                <Typography variant="h6">Patient Name *</Typography>
                <TextField
                        disabled
                        id="patientName"
                        label="Name"
                        value={patientName || ''} 
                        onChange={(e) => {setPatientName(e.target.value);}}
                        fullWidth
                        autoFocus
                        {...register('patientName')}
                        error={errors.patientname? true : false}
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
                        {...register('dob')}
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
                        value={insuranceNumber || ''}
                        onChange={(e) => setInsuranceNumber(e.target.value)}
                        fullWidth
                        {...register('insuranceNumber')}
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
                        {...register('height')}
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
                        {...register('weight')}
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
                        {...register('bloodPressure')}
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
                        value={temperature || ''}
                        onChange={(e) => setTemperature(e.target.value)}
                        fullWidth
                        {...register('temperature')}
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
                        value={oxygenSaturation || ''}
                        onChange={(e) => setOxygenSaturation(e.target.value)}
                        fullWidth
                        {...register('oxygenSaturation')}
                        error={errors.oxygenSaturation? true : false}
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
                        {...register('address')}
                        error={errors.address? true : false}
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
                            
                            value={x.medication}
                            onChange={e => handleMedication(e, i)}
                            fullWidth
                            {...register('medication')}
                            error={errors.medication? true : false}
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
                        {...register('familyHistory')}
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
                    {...register('currentlyEmployed')}
                        error={errors.currentlyEmployed? true : false}
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
                    {...register('currentlyInsured')}
                        error={errors.currentlyInsured? true : false}
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
                    <div className="icd" key={i}>
                        <TextField
                            name="code"
                            label="ICD Health Code"
                            value={x.code}
                            onChange={e => handleICD(e, i)}
                            {...register('icd')}
                        error={errors.icd? true : false}
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
                    <div className="allergy" key={i}>
                        <TextField
                            name="allergy"
                            label="Allergy"
                            value={x.allergy}
                            onChange={e => handleAllergy(e, i)}
                            fullWidth
                            {...register('allergies')}
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
            
            <div className="visits">
                <Typography variant="h6">Visits</Typography>
                {visits.map((x, i) => {
                    return(
                    <div className="visit" key={i}>
                        <Typography variant="subtitle1"> Visit #{i+1}</Typography>
                        <TextField sx={{mt:1, mb:1}}
                            name="patient"
                            value={x.patient || patientName}
                            onChange={e => handleVisit(e, i)}
                            fullWidth
                            disabled
                            {...register('patientName')}
                        error={errors.patientName? true : false}
                            />
                        <TextField sx={{mb:1}}
                            name="dateTime"
                            type="date"
                            value={x.dateTime}
                            onChange={e => handleVisit(e, i)}
                            fullWidth
                            />
                        <TextField sx={{mb:1}}
                            name="notes"
                            label="Notes"
                            value={x.notes || ""}
                            onChange={e => handleVisit(e, i)}
                            fullWidth
                            />
                        <TextField sx={{mb:1}}
                            name="hivViralLoad"
                            type="number"
                            label="HIV Viral Load"
                            value={"" || x.hivViralLoad}
                            onChange={e => handleVisit(e, i)}
                            fullWidth
                            {...register('hivViralLoad')}
                        error={errors.hivViralLoad? true : false}
                            />
                        <div className="visitButtons">
                        {visits.length !== 1 && <Button variant="outlined"
                            onClick={() => handleRemoveVisit(i)}>Remove</Button>}
                        {(visits.length - 1 === i  && visits.length < 5) && <Button variant="outlined" 
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
                    Update Patient
                </Button>
            </div>
        </Box>
        </Container>
      </div>
    );
}
  
export default UpdatePatient;