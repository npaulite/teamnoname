import { createVendiaClient } from '@vendia/client'

const client = createVendiaClient({
    apiUrl: `https://q7eon5dpba.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://31hiogqk9g.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: 'Ahq8HpzfvCdnJKbhQRX5CwEbSintWU5McUzARMBUUs9C',
  });

const {entities} = client;

const useJaneHopkins = () => {
    return {entities};
};

export default function useJaneHopkins();
