import { Box, Button, Container, Typography, TextField, FormGroup, RadioGroup, FormControlLabel, Radio, FormControl, Autocomplete } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import useFDA from "../hooks/useFDA";
import { ArrowLeftSharp } from "@mui/icons-material";

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
    const [postStudy, setPostStudy] = useState("No")
        
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
            placebo: placebo,
            postStudy: postStudy
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
                    },
                    {
                        principal: {
                            nodes: ["JaneHopkins", "Bavaria"]
                        },
                        operations: ["READ"],
                        path: "postStudy"
                    }
                ]
            }
                
        })
        console.log(assignResponse)
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        setPostStudy("No")
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
                            label="Patient UUID"
                            value={patient || ''} required pattern="/^\d+$/"
                            onChange={(e) => {setPatient(e.target.value);}}
                            fullWidth
                            
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
                            label="Placebo"
                            clearOnEscape
                            inputValue={drug || ''} required pattern="/^[a-zA-Z]+$/"
                            onInputChange={(e, newValue) => setDrug(newValue)}
                            options={placeboDrugs || []} 
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
                            id="placebo"
                            label="Bavaria"
                            clearOnEscape
                            inputValue={drug || ''} required pattern="/^[a-zA-Z]+$/"
                            onInputChange={(e, newValue) => setDrug(newValue)}
                            options={bavariaDrugs || []}
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