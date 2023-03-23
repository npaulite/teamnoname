import { createVendiaClient } from '@vendia/client'

const client = createVendiaClient({
    apiUrl: `https://q7eon5dpba.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://31hiogqk9g.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: '93EDRchUrKXwH6wEcX48zhB6YXLZGWMqRMg5NF5YwdmX',
  })

const {entities} = client;

const useJaneHopkins = () => {
    return {entities};
};

export default useJaneHopkins;
