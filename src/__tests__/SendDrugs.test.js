import useBavaria from "../hooks/useBavaria"

const {entities} = useBavaria();

it('Send Placebo Drugs', async() => {
    const placebo = {
        placebo: true,
        batchNumber: Math.floor((Math.random() * 1000) + 1).toString()
    }
    const sendDrugs = entities.drug.add(placebo)
    await expect(sendDrugs).resolves.not.toThrow().then(
        async() => {
            entities.drug.remove((await sendDrugs).result._id)
        }
    )
}, 20000)

it('Send Bavaria Drugs', async() => {
    const bavaria = {
        placebo: false,
        batchNumber: Math.floor((Math.random() * 1000) + 1).toString()
    }
    const sendDrugs = entities.drug.add(bavaria)
    await expect(sendDrugs).resolves.not.toThrow().then(
        async() => {
            entities.drug.remove((await sendDrugs).result._id)
        }
    )
}, 20000)