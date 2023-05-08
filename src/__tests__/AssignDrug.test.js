import useJaneHopkins from '../hooks/useJaneHopkins';
import useFDA from '../hooks/useFDA';

const { entities } = useJaneHopkins();
const { maps} = useFDA();

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
    //const addPatient = entities.patient.add(patient)
    //await expect(addPatient).resolves.not.toThrow()
    const bavariaDrug = entities.drug.get("01877ca6-6756-e387-493c-8089a79b1714")
    await expect(bavariaDrug).resolves.not.toThrow()

    entities.patient.remove((await addPatient).result._id)
}, 20000)