import React from "react"
import useJaneHopkins from "../hooks/useJaneHopkins"

const { entities } = useJaneHopkins()
const setVisits = jest.fn()

it('Add Patient Visit', async() => {
    const visitsSpy = jest.spyOn(React, 'useState')
    visitsSpy.mockImplementation((visits) => [visits, setVisits])
    const visit = {
        patient: "",
        dateTime: "2023-04-01",
        notes: "N/A",
        hivViralLoad: "16000"
    }

    const addVisit = () => {
        visitsSpy(visit)
    };

    const patient = await entities.patient.get("01877854-7f06-db60-7999-fd54ab408ddc")
        async() => {
            visitsSpy(patient.visits)
            addVisit();
            await entities.patient.update({
                _id: patient._id,
                visits: visitsSpy
            })
        }
    

}, 20000)