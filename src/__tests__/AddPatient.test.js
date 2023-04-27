import useJaneHopkins from '../hooks/useJaneHopkins';
const { entities } = useJaneHopkins()

it('Add Eligible Patient', async() => {
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
        visits: [],
        eligibility: true,
        startingHIVLoad: "100000",
        trialStatus: "Ongoing"
    }
    const addPatient = entities.patient.add(patient)
    await expect(addPatient).resolves.not.toThrow().then(
        async() => {
            entities.patient.remove((await addPatient).transaction._id)
        }
    )
}, 20000)

it('Add Non-Eligible Patient', async() => {
    const patient = {
        name: "Jane Doe",
        patientPicture: "",
        dob: new Date(2005,1,1),
        insuranceNumber: "7654321",
        height: "102cm",
        weight: "86 kg",
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
        visits: [],
        eligibility: false,
        startingHIVLoad: "100000",
        trialStatus: "Non-Eligible"
    }
    const addPatient = entities.patient.add(patient)
    await expect(addPatient).resolves.not.toThrow().then(
        async() => {
            entities.patient.remove((await addPatient).transaction._id)
        }
    )
}, 20000)