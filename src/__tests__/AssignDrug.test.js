import useFDA from '../hooks/useFDA';
const { entities } = useFDA();

it('Assign Bavaria Drug to Patient', async() => {
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
    const bavariaDrug = entities.drug.get("01881276-bb8e-2b77-e835-f52aa3f3a9c7")
    await expect(bavariaDrug).resolves.not.toThrow()
    const addPatient = entities.patient.add(patient)
    await expect(addPatient).resolves.not.toThrow().then(
        async() => {
            const mapResponse = entities.map.add({
                patientUUID: (await addPatient).result._id,
                drugUUID: (await bavariaDrug)._id,
                placebo: false,
                postStudy: "No"
            })
            await expect(mapResponse).resolves.not.toThrow()
            entities.patient.remove((await addPatient).result._id)
            entities.map.remove((await mapResponse).result._id)
        }
    )
})