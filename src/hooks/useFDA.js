import { createVendiaClient } from '@vendia/client'

const client = createVendiaClient({
    apiUrl: `https://hhbe4wqnt7.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://1vzandso0b.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: 'Gc9c4uZa76TDKEXnFgR7hbQyPQhJTbJ2FZSp9kMEPD7A',
  })

const {entities} = client;

const useFDA = () => {
    return {entities};
};

export default useFDA;