import { createVendiaClient } from '@vendia/client'

const client = createVendiaClient({
    apiUrl: `https://q7eon5dpba.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://31hiogqk9g.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: 'Ggh5akHSthAkCEcx1xmZBV9THQJjS4wGW7Yeh7CGcx6c',
  })

const {entities} = client;

const useJaneHopkins = () => {
    return {entities};
};

export default useJaneHopkins;
