import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useJaneHopkins from "../hooks/useJaneHopkins";
import { ArrowLeftSharp } from "@mui/icons-material";

function AddVisit() {
  const nav = useNavigate();
  const location = useLocation();
  const { entities } = useJaneHopkins();
  const [id, setID] = useState();
  const [patientName, setPatientName] = useState();
  const [visits, setVisits] = useState([
    {
      patient: "",
      dateTime: "",
      notes: "",
      hivViralLoad: "",
    },
  ]);
  const [trialStatus, setTrialStatus] = useState();

  const getPatient = async () => {
    const getResponse = await entities.patient.get(location.state._id);
    setID(getResponse._id);
    setPatientName(getResponse.name);
    setVisits(getResponse.visits);
    setTrialStatus(getResponse.trialStatus);
  };

  useEffect(() => {
    getPatient();
  }, []);

  const updatePatient = async () => {
    const updateResponse = await entities.patient.update({
      _id: id,
      visits: visits,
    });
    console.log(updateResponse);
  };

  const handleVisit = (e, index) => {
    const { name, value } = e.target;
    const list = [...visits];
    list[index][name] = value;
    setVisits(list);
  };

  const handleRemoveVisit = (index) => {
    const list = [...visits];
    list.splice(index, 1);
    setVisits(list);
  };

  const handleAddVisit = () => {
    setVisits([
      ...visits,
      {
        patient: "",
        dateTime: "",
        notes: "",
        hivViralLoad: "",
      },
    ]);
  };
  const handleAddVisit1 = () => {
    if (visits.length < 5) {
      const newVisits = Array.from({ length: 5 }, () => ({
        patient: "11",
        dateTime: "11-16-1111",
        notes: "11",
        hivViralLoad: "11",
      }));
      setVisits(newVisits);
    }
  };

  const goBack = () => {
    let path = `/JaneHopkinsDoctor`;
    nav(path);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (updatePatient()) {
      console.log(updatePatient);
      if (visits.length === 5) {
        if (trialStatus !== "Completed") setTrialStatus("Completed");
      }
      setTimeout(() => {
        nav("/JaneHopkinsDoctor");
      }, 1000);
    }
  };

  return (
    <div className="visits">
      <Box>
        <div className="return">
          <Button variant="outlined" size="large" onClick={goBack}>
            <Typography>Go Back</Typography>
            <ArrowLeftSharp />
          </Button>
        </div>
      </Box>
      <Container>
        <Typography component="h1" variant="h3">
          Add Patient Visit
        </Typography>
        <Box component="form" mt={2} onSubmit={handleSubmit}>
          <div className="patientName" m={2}>
            <Typography variant="h6">Patient Name</Typography>
            <TextField
              required
              id="patientName"
              label="Name"
              value={patientName || ""}
              onChange={(e) => {
                setPatientName(e.target.value);
              }}
              fullWidth
              disabled
            />
          </div>
          <div className="visit" m={2}>
            <Typography variant="h6">Patient Visits</Typography>
            {visits.length === 0 ? (
              <Button variant="outlined" onClick={() => handleAddVisit()}>
                {" "}
                Add First Visit
              </Button>
            ) : (
              visits.map((x, i) => {
                return (
                  <div className="visit" key={i}>
                    <Typography variant="subtitle1" sx={{ mt: 5, mb: 1 }}>
                      {" "}
                      Visit #{i + 1}
                    </Typography>
                    {/*<TextField sx={{mb:1}}
                                        name="patient" 
                                        //label="Patient Name" 
                                        InputLabelProps={{ shrink: true }}
                                        value={patientName  || ''} required pattern = "/^[a-zA-Z]+$/"
                                        onChange={e => handleVisit(e, i)}
                                        fullWidth
                                        disabled
                            /> */}
                    <TextField
                      sx={{ mb: 1 }}
                      name="dateTime"
                      type="date"
                      label="Date of Visit"
                      InputLabelProps={{ shrink: true }}
                      value={x.dateTime}
                      //   required
                      pattern="/^\d{2}-\d{2}-\d{4}$/"
                      onChange={(e) => handleVisit(e, i)}
                      fullWidth
                    />
                    <TextField
                      sx={{ mb: 1 }}
                      name="notes"
                      label="Notes"
                      InputLabelProps={{ shrink: true }}
                      value={x.notes}
                      required
                      pattern="/^[a-zA-Z]+$/"
                      onChange={(e) => handleVisit(e, i)}
                      fullWidth
                    />
                    <TextField
                      sx={{ mb: 1 }}
                      name="hivViralLoad"
                      type="number"
                      label="HIV Viral Load"
                      InputLabelProps={{ shrink: true }}
                      value={x.hivViralLoad}
                      required
                      pattern="/^\d+$/"
                      onChange={(e) => handleVisit(e, i)}
                      fullWidth
                    />
                    <div className="visitButtons">
                      {visits.length !== 1 && (
                        <Button
                          variant="outlined"
                          onClick={() => handleRemoveVisit(i)}
                        >
                          Remove
                        </Button>
                      )}
                      {visits.length - 1 === i && visits.length < 5 && (
                        <Button variant="outlined" onClick={handleAddVisit}>
                          Add
                        </Button>
                      )}
                    </div>
                    <div className="visitButtons">
                      <Button variant="outlined" onClick={handleAddVisit1}>
                        Add
                      </Button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <div>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{ mt: 5, mb: 8 }}
            >
              Update Visits
            </Button>
          </div>
        </Box>
      </Container>
    </div>
  );
}
export default AddVisit;
