import { createVendiaClient } from '@vendia/client'

const client = createVendiaClient({
    apiUrl: `https://t1gk9eo3j7.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://5utiusdjij.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: 'EeGU1ZNyxQZRgiERgLFQRkYT9jsLuMALUmG3Bzv68mU7',
  })

const {entities} = client;

const useBavaria = () => {
    return {entities};
};

export default useBavaria;
