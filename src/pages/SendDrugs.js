import { Box, Button, Checkbox, Container, FormControlLabel, FormGroup, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import useBavaria from "../hooks/useBavaria"
import { ArrowLeftSharp } from "@mui/icons-material";

function SendDrugs() {

    const { entities } = useBavaria()
    const nav = useNavigate()
    const [placebo, setPlacebo] = useState(true)
    const [batchNumber, setBatchNumber] = useState(0)

    const sendDrugs = async() => {
        const sendResponse = await entities.drug.add( {
            placebo: placebo,
            batchNumber: batchNumber
        },
        {
            aclInput: {
                acl: [
                    {
                    principal: {
                        nodes: ["FDA"]
                    },
                    operations: ["READ"],
                    path: "placebo"
                    },
                    {
                    principal: {
                        nodes: ["JaneHopkins", "FDA"]
                    },
                    operations: ["READ"],
                    path: "batchNumber"
                    },
                    {
                        principal: {
                            nodes: ["JaneHopkins", "FDA"]
                        },
                        operations: ["READ"],
                        path: "id"
                    }
                ]
            }
        })
        console.log(sendResponse)
    }

    const checkPlacebo = () => {
        setPlacebo(placebo => !placebo)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(sendDrugs()) {
        console.log(sendDrugs);
        setTimeout(() => {nav("/Bavaria")}, 1000)
        }
    }

    const goBack = () =>{ 
        let path = `/Bavaria`; 
        nav(path);
    }

    return(
        <div className="sendDrugs">
            <Box>
                <div className="return">
                <Button variant="outlined" size="large" onClick={goBack}>
                    <Typography>Go Back</Typography>
                    <ArrowLeftSharp/>
                </Button>
                </div>
            </Box>
            <Container>
                <Typography component="h1" variant="h3">Send Drugs</Typography>
                <Typography component="h5">Asterisk(*) is required</Typography>
            <Box component="form" mt={2} onSubmit={handleSubmit}>
                <div className="placebo">
                    <FormGroup>
                        <FormControlLabel 
                            label="Bavaria"
                            control={
                                <Checkbox
                            id="placebo"
                            label="placebo"
                            onChange={() => checkPlacebo()}
                            />}
                            />
                    </FormGroup>
                </div>
                <div className="batchNumber" m={2} >
                    <Typography variant="h6">Batch Number*</Typography>
                    <TextField
                        required
                        id="batchNumber"
                        type="number"
                        label="Batch Number"
                        value={batchNumber || ''} pattern = "/^\d+$/"
                        onChange={(e) => {setBatchNumber(e.target.value);}}
                        fullWidth
                        autoFocus
                    />    
                </div>
                <div className="btn">
                    <Button
                    variant="contained"  
                    type="submit"
                    fullWidth
                    sx={{mt: 5, mb: 8}}>
                        Send Drugs to FDA
                    </Button>
                </div>
            </Box>
            </Container>
        </div>
    );


}
export default SendDrugs;