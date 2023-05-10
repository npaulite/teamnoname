import useJaneHopkins from '../hooks/useJaneHopkins';
const { entities } = useJaneHopkins()

it('Review Trial Completed Patient', async() => {
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
        visits: [ 
            {
                patient: "",
                dateTime: "2023-04-01",
                notes: "N/A",
                hivViralLoad: "90000"
            },
            {
                patient: "",
                dateTime: "2023-04-02",
                notes: "N/A",
                hivViralLoad: "80000"
            },
            {
                patient: "",
                dateTime: "2023-04-03",
                notes: "N/A",
                hivViralLoad: "70000"
            },
            {
                patient: "",
                dateTime: "2023-04-04",
                notes: "N/A",
                hivViralLoad: "60000"
            },
            {
                patient: "",
                dateTime: "2023-04-05",
                notes: "N/A",
                hivViralLoad: "50000"
            },
        ],
        eligibility: true,
        startingHIVLoad: "100000",
        trialStatus: "Ongoing"
    }
    const addPatient = entities.patient.add(patient)
    await expect(addPatient).resolves.not.toThrow().then(
        async() => {
            const reviewPatient =  entities.patient.update( {
                _id: (await addPatient).result._id,
                trialStatus: "Completed"
            })
            expect((await reviewPatient).result.trialStatus).toBe("Completed")
            entities.patient.remove((await reviewPatient).result._id)
        }
    )
}, 20000)