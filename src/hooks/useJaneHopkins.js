import { createVendiaClient } from '@vendia/client'

const client = createVendiaClient({
    apiUrl: `https://2l7j25uewh.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://rcquenx7qk.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: '5o9QB8hukCTuHuu41M1knbufTHRMPfUzEnmFrtGMvUpe',
  })

const {entities} = client;

const useJaneHopkins = () => {
    return {entities};
};

export default useJaneHopkins;
