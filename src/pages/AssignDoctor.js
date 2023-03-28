import { Autocomplete, Button, FormControl, TextField, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import useJaneHopkins from '../hooks/useJaneHopkins';
import { ArrowLeftSharp } from "@mui/icons-material";

 function AssignDoctor() {
  
  const{ entities } = useJaneHopkins()
  const nav = useNavigate()
  const location = useLocation()
  const [doctors, setDoctors] = useState()
  const [id, setID] = useState()
  const [name, setName] = useState()
  const [doctor, setDoctor] = useState()
  const [doctorID, setDoctorID] = useState()

  useEffect(() => {
    listDoctors()
    getPatient()

  }, [])


  const listDoctors = async() => {
    let doctorList = await entities.doctor.list();
    setDoctors(doctorList.items);
  }

  const getPatient = async() => {
    const getResponse = await entities.patient.get(location.state._id)
    setID(getResponse._id)
    setName(getResponse.name)
    setDoctorID(getResponse.uuid)
  }

  const updatePatient = async() => {
    const updateResponse = await entities.patient.update({
      _id: id,
      uuid: doctorID
    })
    console.log(updateResponse)
  }
  
  const getDoctor = () => {
      console.log(doctor)
      doctors?.map((doc) => {
        console.log(doc._id)
        if(doc.name === doctor) {
          console.log("found")
          setDoctorID(doc._id)
        }
      })
      
  }
  
  const handleSubmit= (e) => {
    e.preventDefault();
    if(updatePatient()) {
    console.log(updatePatient);
    nav("/JaneHopkinsAdmin");
    }
}

  const goBack = () =>{ 
    let path = `/JaneHopkinsAdmin`; 
    nav(path);
}

  return (
    <div className='assignDoctor'>
        <Box>
          <div className="return">
            <Button variant="outlined" size="large" onClick={goBack}>
              <Typography>Go Back</Typography>
              <ArrowLeftSharp/>
            </Button>
          </div>
        </Box>
        <Container>
          <Typography component="h1" variant="h3">Assign Doctor</Typography>
                <Box component="form" mt={2} onSubmit={handleSubmit}>
                  <div className="patientUUID" m={2} >
                      <Typography variant="h6">Patient UUID</Typography>
                      <TextField
                              disabled
                              id="patientUUID"
                              label="Patient UUID"
                              value={id || ''}
                              onChange={(e) => {setID(e.target.value);}}
                              fullWidth
                              
                      />    
                  </div>
                  <div className="patientName" m={2} >
                      <Typography variant="h6">Patient Name</Typography>
                      <TextField
                              disabled
                              id="patientName"
                              label="Patient Name"
                              value={name || ''}
                              onChange={(e) => {setName(e.target.value);}}
                              fullWidth
                              
                      />    
                  </div>
                  <div className="doctors" m={2}>
                    <Typography variant="h6"> Select Doctor </Typography>
                    <FormControl
                        fullWidth>
                        <Autocomplete 
                            key={doctors}
                            id="doctor"
                            label="Doctor"
                            clearOnEscape
                            inputValue={doctor || ''}
                            onInputChange={(e, newValue) => setDoctor(newValue)}
                            options={doctors || []}
                            getOptionLabel={option => option.name}
                            renderInput={(params) => 
                            <TextField 
                                {...params}
                                placeholder="Doctor"
                                label="Doctor" 
                                fullWidth
                            />}
                        />
                    </FormControl>
                </div>
                  <div className="submitButton">
                    <Button
                        variant="contained"  
                        type="submit"
                        fullWidth
                        sx={{mt: 5, mb: 8}}
                        onClick={getDoctor}>
                        Assign Doctor
                    </Button>
                </div>
                </Box>
        </Container>
    </div>
  )
}

export default AssignDoctor;
