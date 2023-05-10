import { createVendiaClient } from '@vendia/client'

const client = createVendiaClient({
    apiUrl: `https://a0ve1n9q31.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://kwspysdcnl.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: '8NGQjQt86Mq2gQ3KAfe8Jczb9iJQ173dHTAKEp768uEV',
  })

const {entities} = client;

const useBavaria = () => {
    return {entities};
};

export default useBavaria;
