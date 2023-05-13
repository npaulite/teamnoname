import { createVendiaClient } from '@vendia/client'

const client = createVendiaClient({
    apiUrl: `https://iidc4txcq7.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://treue06wrg.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: '5cUT4aY6kwanXcBbhqph621YUxcb1636bb8xMcTm6qFc',
  })

const {entities} = client;

const useFDA = () => {
    return {entities};
};

export default useFDA;