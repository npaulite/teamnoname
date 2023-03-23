import { createVendiaClient } from '@vendia/client'

const client = createVendiaClient({
    apiUrl: `https://1ju7cykp8e.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://in9htd863k.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: 'JE3rXz4PjVh8XTKUvHtdVy2QfPAY3AvU4nyWrggSQpFU',
  })

const {entities} = client;

const useFDA = () => {
    return {entities};
};

export default useFDA;