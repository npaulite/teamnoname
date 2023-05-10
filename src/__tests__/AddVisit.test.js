import React from "react"
import useJaneHopkins from "../hooks/useJaneHopkins"

const { entities } = useJaneHopkins()
const setVisits = jest.fn()

it('Add Patient Visit', async() => {
    const patient = {
        name: "John Doe",
        patientPicture: "",
        dob: new Date(1990,1,1),
        insuranceNumber: "1234567",
        height: "112cm",
        weight: "100 kg",
        bloodPressure: "120/80",
        temperature: "33 C",
        oxygenSaturation: "100%",
        address: "Random St. Sacramento CA",
        currentMedications: {"medication" : "None"},
        familyHistory: "None",
        currentlyEmployed: "Yes",
        currentlyInsured: "Yes",
        icdHealthCodes: {"code" : "B20"},
        allergies: {"allergy" : "None"},
        visits: [{}],
        eligibility: true,
        startingHIVLoad: "100000",
        trialStatus: "Ongoing"
    }
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

    const patientResponse = entities.patient.add(patient)
    await expect(patientResponse).resolves.not.toThrow().then(
        async() => {
            entities.patient.get((await patientResponse).result._id).then(
                async(result) => {
                    visitsSpy(result.visits)
                    addVisit();
                    await entities.patient.update({
                        _id: result._id,
                        visits: visitsSpy
                    })
                }
            )
            entities.patient.remove((await patientResponse).result._id)
        }
    )

}, 20000)