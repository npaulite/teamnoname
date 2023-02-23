import React from 'react';
import { createVendiaClient } from '@vendia/client'

const client = createVendiaClient({
    apiUrl: `https://1ju7cykp8e.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://in9htd863k.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: '5CCTkBArL82nfK53RjMgE8f4EwSJPUUTzAnm9LhYBXYC',
  })

const {entities} = client;

const useFDA = () => {
    return {entities};
};

export default useFDA;