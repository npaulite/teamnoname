import useFDA from '../hooks/useFDA';
const { entities } = useFDA();

it('Complete Post Study', async() => {
    await expect(entities.map.list()).resolves.not.toThrow().then{
        async(result) => {
            result.forEach(map => {
                expect(map.postStudy).toBe("No")
            });
        }
    }
}
,20000)