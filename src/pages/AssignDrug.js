import { Box, Button, Container, Typography, TextField, FormGroup, RadioGroup, FormControlLabel, Radio, FormControl, Autocomplete } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import useFDA from "../hooks/useFDA";
import { ArrowLeftSharp } from "@mui/icons-material";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import React, { Fragment } from 'react';

function AssignDrug() {

    const { entities } = useFDA()
    const nav = useNavigate()
    const location = useLocation()
    const [patient, setPatient] = useState()
    const [drug, setDrug] = useState()
    const [placebo, setPlacebo] = useState(true)
    const [selection, setSelection] = useState(true)
    const [placeboDrugs, setPlaceboDrugs] = useState()
    const [bavariaDrugs, setBavariaDrugs] = useState()
        
    const {
        register,
        control,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(validationSchema)
      });

    const validationSchema = Yup.object().shape({
        fullname: Yup.string().required('Fullname is required'),
        username: Yup.string()
          .required('Username is required')
          .min(6, 'Username must be at least 6 characters')
          .max(20, 'Username must not exceed 20 characters'),
        email: Yup.string()
          .required('Email is required')
          .email('Email is invalid'),
        bavariaDrugs: Yup.string()
          .required('Drugs are required')
          .oneOf([Yup.ref('bavariaDrugs'), null], 'Confirm it is not a placebo'),
        placebo: Yup.string()
          .required('Confirm Placebo')
          .oneOf([Yup.ref('placebo'), null], 'Confirm it is a placebo'),
        patientUUID: Yup.string() 
            .required('Patient UUID required')
            .oneOf([Yup.ref('patientUUID'), null], 'UUID is required'),
        role: Yup.string()
          .required('Confirm Role')
          .oneOf([Yup.ref('Doctor', "Patient", "Administrator"), null], 'Confirm Role does not match'),
      });

    useEffect(() => {
        getMap()
        listPlacebo()
        listBavaria()
      }, [])

    const getMap = async() => {
        const getResponse = await entities.patient.get(location.state._id)
        setPatient(getResponse._id)
    }

    const listPlacebo = async() => {
        const placeboResponse = await entities.drug.list({
            filter: {
                placebo: {
                    eq: true
                }
            }
        })
        setPlaceboDrugs(placeboResponse.items)
    }

    const listBavaria = async() => {
        const bavariaResponse = await entities.drug.list({
            filter: {
                placebo: {
                    eq: false
                }
            }
        })
        setBavariaDrugs(bavariaResponse.items)
    }

    const assignDrug = async() => {
        const assignResponse = await entities.map.add({
            patientUUID: patient,
            drugUUID: drug,
            placebo: placebo
        },
        {
            aclInput: {
                acl: [
                    {
                        principal: {
                            nodes: ["JaneHopkins", "Bavaria"]
                        },
                        operations: ["READ"],
                        path: "patientUUID"
                    },
                    {
                        principal: {
                            nodes: ["JaneHopkins", "Bavaria"]
                        },
                        operations: ["READ"],
                        path: "drugUUID"
                    }
                ]
            }
                
        })
        console.log(assignResponse)
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        if(assignDrug()) {
        console.log(assignDrug);
        setTimeout(() => {nav("/FDA")}, 1000)
        }
    }
    const checkPlacebo = () => {
        setPlacebo(placebo => !placebo)
        setDrug("")
        console.log(placebo)
    }

    const changeSelection = () => {
        setSelection(selection => !selection)
    }

    const goBack = () =>{ 
        let path = `/FDA`; 
        nav(path);
    }

    return (
        <div className="assign">
            <Box>
                <div className="return">
                    <Button variant="outlined" size="large" onClick={goBack}>
                        <Typography>Go Back</Typography>
                        <ArrowLeftSharp/>
                    </Button>
            
                </div>
            </Box>
            <Container>
                <Typography component="h1" variant="h3">Assign Drug</Typography>
                <Box component="form" mt={2} onSubmit={handleSubmit}>
                <div className="patientUUID" m={2} >
                    <Typography variant="h6">Patient UUID</Typography>
                    <TextField
                            disabled
                            id="patientUUID"
                            name="patientUUID"
                            label="Patient UUID"
                            type ="patientUUID"
                            value={patient || ''} 
                            onChange={(e) => {setPatient(e.target.value);}}
                            fullWidth
                            {...register('patientUUID')}
                            error={errors.patientUUID ? true : false}
                            
                    />    
                </div>
                <div><Typography variant="h6" mt={2}>Placebo or Bavaria</Typography></div>
                <div className="placebo" m={3}>
                    <FormGroup aria-label="position" row>
                        <RadioGroup row 
                        value={placebo}
                        onChange={() => {checkPlacebo(); changeSelection()}}>
                            <FormControlLabel value={true} control={<Radio />} label="Placebo"/>
                            <FormControlLabel value={false} control={<Radio />} label="Bavaria"/>
                        </RadioGroup>
                    </FormGroup>
                </div>
                {selection === true ?
                <div className="Placebo">
                    <Typography variant="h6" mt={2}> Available Placebo Drugs</Typography>
                    <FormControl
                        fullWidth>
                        <Autocomplete 
                            key={placeboDrugs}
                            id="placebo"
                            name="placebo"
                            type="placebo"
                            label="Placebo"
                            clearOnEscape
                            inputValue={drug || ''} 
                            onInputChange={(e, newValue) => setDrug(newValue)}
                            options={placeboDrugs || []}
                            {...register('placebo')} 
                            error={errors.placebo ? true : false}
                            getOptionLabel={option => option._id} 
                            renderInput={(params) => 
                            <TextField 
                                {...params}
                                placeholder="Placebo Drugs"
                                label="Placebo" 
                                fullWidth
                            />}
                        />
                    </FormControl>
                </div>
                : 
                <div className="Bavaria">
                    <Typography variant="h6" mt={2}>Available Bavaria Drugs</Typography>
                    <FormControl
                        fullWidth>
                        <Autocomplete 
                            key={bavariaDrugs}
                            id="bavariaDrugs"
                            type="drugs"
                            name="bavariaDrugs"
                            label="Bavaria"
                            {...register('bavariaDrugs')}
                            clearOnEscape
                            inputValue={drug || ''} required pattern="/^[a-zA-Z]+$/"
                            onInputChange={(e, newValue) => setDrug(newValue)}
                            options={bavariaDrugs || []}
                            error={errors.bavariaDrugs ? true : false}
                            getOptionLabel={option => option._id}
                            renderInput={(params) => 
                            <TextField 
                                {...params}
                                placeholder="Bavaria Drugs"
                                label="Bavaria"

                                fullWidth
                            />}
                            
                        />
                    </FormControl>
                </div>
                }
                <div className="submitButton">
                    <Button
                        variant="contained"  
                        type="submit"
                        fullWidth
                        sx={{mt: 5, mb: 8}}>
                        Assign Drug
                    </Button>
                </div>
                </Box>
            </Container>    
        </div>
    )
}

export default AssignDrug;