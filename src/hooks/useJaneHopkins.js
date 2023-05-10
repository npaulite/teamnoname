import { createVendiaClient } from '@vendia/client'

const client = createVendiaClient({
    apiUrl: `https://vu0kzbf6kk.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `https://vu0kzbf6kk.execute-api.us-west-2.amazonaws.com/graphql/`,
    apiKey: 'HHK9md8L4LGRPHTksi79GFT9rFweVpLjw9hWJt3SfKU1',
  })

const {entities} = client;

const useJaneHopkins = () => {
    return {entities};
};

export default useJaneHopkins;
