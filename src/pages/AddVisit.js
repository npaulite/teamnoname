import { Box, Button, Container, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import useJaneHopkins from "../hooks/useJaneHopkins"
import { ArrowLeftSharp } from "@mui/icons-material";


function AddVisit() {

    const nav = useNavigate()
    const location = useLocation()
    const { entities } = useJaneHopkins()
    const [id, setID] = useState()
    const [patientName, setPatientName] = useState()
    const [visits, setVisits] = useState([{
        patient: "",
        dateTime: "",
        notes: "",
        hivViralLoad: ""
    }])
    
    const getPatient = async() => {
        const getResponse = await entities.patient.get(location.state._id)
        setID(getResponse._id)
        setPatientName(getResponse.name)
        setVisits(getResponse.visits)
    }

    useEffect(() => {
        getPatient()
      }, [])

    const updatePatient = async() => {
        const updateResponse = await entities.patient.update( {
            _id: id,
            visits: visits
        })
        console.log(updateResponse)
    }

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
            patient: patientName,
            dateTime: "",
            notes: "",
            hivViralLoad: ""
        }]);
      };

    const goBack = () =>{ 
        let path = `/JaneHopkinsDoctor`; 
        nav(path);
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        if(updatePatient()) {
        console.log(updatePatient);
        setTimeout(() => {nav("/JaneHopkinsDoctor")}, 1000)
        }
    }

    return(
        <div className="visits">
            <Box>
                <div className="return">
                    <Button variant="outlined" size="large" onClick={goBack}>
                        <Typography>Go Back</Typography>
                        <ArrowLeftSharp/>
                    </Button>
                </div>
            </Box>
            <Container>
                <Typography component="h1" variant="h3">Add Patient Visit</Typography>
                <Box component="form" mt={2} onSubmit={handleSubmit}>
                    <div className="patientName" m={2} >
                        <Typography variant="h6">Patient Name</Typography>
                        <TextField
                                required
                                id="patientName"
                                label="Name"
                                value={patientName || ''}
                                onChange={(e) => {setPatientName(e.target.value);}}
                                fullWidth
                                disabled
                        />    
                    </div>
                    <div className="visit" m={2} >
                        <Typography variant="h6">Patient Visits</Typography>
                        {visits.map((x, i) => {
                            return(
                                <div className="visit" key={i}>
                                    <Typography variant="subtitle1"> Visit #{i+1}</Typography>
                                    <TextField
                                        name="patient"
                                        label="Patient Name"
                                        value={patientName || ''}
                                        onChange={e => handleVisit(e, i)}
                                        fullWidth
                                        disabled
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
                            Update Visits
                        </Button>
                    </div>
                </Box>
            </Container>
        </div>
    )

}
export default AddVisit