import { useState } from "react"
import useJaneHopkins from "../hooks/useJaneHopkins"

const { entities } = useJaneHopkins()

it('Add Patient Visit', async() => {
    const[ visits, setVisits] = useState([])
    const visit = {
        patient: "",
        dateTime: "2023-04-01",
        notes: "N/A",
        hivViralLoad: "16000"
    }

    const addVisit = () => {
        setVisits([...visits, visit]);
    };

    const patient = await entities.patient.get("01871054-ae14-26db-9af3-b3e6b8195b63").then(
        async() => {
            setVisits(patient.visits)
            addVisit();
            await entities.patient.update({
                _id: patient._id,
                visits: visits
            })
        }
    )

}

)