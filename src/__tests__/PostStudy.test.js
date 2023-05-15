import useFDA from '../hooks/useFDA';
const { entities } = useFDA();

it('Check Post Study', async() => {
    const mapResponse = entities.map.list({
        filter: {
            postStudy: {
                eq: "No"
            }
        }})
    await expect(mapResponse).resolves.not.toThrow().then(
        async() => {
            await expect((await mapResponse).items.forEach(item => {expect(item.postStudy).toBe("No")}))
        }
    )
},20000)