import useJaneHopkins from '../hooks/useJaneHopkins';
const { entities } = useJaneHopkins()

it('Add & Update Patient Name', async() => {
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
    const addPatient = entities.patient.add(patient)
    await expect(addPatient).resolves.not.toThrow().then(
        async() => {
            const updatePatient = entities.patient.update({
                _id: (await addPatient).result._id,
                name: "James Doe"
            })
            expect((await updatePatient).result.name).toBe("James Doe")
            entities.patient.remove((await addPatient).result._id)
        }
    )

}, 20000)