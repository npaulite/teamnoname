import { createVendiaClient } from '@vendia/client'

const client = createVendiaClient({
    apiUrl: `https://34jd9wy451.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://e36y03l2j9.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: 'J3SBqM5gEryHuPtWNqo4Fr75jGoosoemAUiM9XsJ8BGQ',
  })

const {entities} = client;

const useBavaria = () => {
    return {entities};
};

export default useBavaria;
