import useJaneHopkins from '../hooks/useJaneHopkins';
const { entities } = useJaneHopkins()

it('Assign Doctor to Patient', async() => {
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
    const getDoctor = entities.doctor.get("0188126b-f51b-02c8-4259-82760312031c")
    await expect(getDoctor).resolves.not.toThrow()
    const addPatient = entities.patient.add(patient)
    await expect(addPatient).resolves.not.toThrow().then(
        async() => {
            const updatePatient = entities.patient.update({
                _id: (await addPatient).result._id,
                doctorUUID: (await getDoctor)._id
            })
            expect((await updatePatient).result.doctorUUID).toBe((await getDoctor)._id)
            entities.patient.remove((await addPatient).result._id)
        }
    )
}, 20000)