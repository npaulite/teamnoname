import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import AuthContext from '../components/AuthProvider';

export default function Home() {

  const {user} = useContext(AuthContext)
  const {authorized} = useContext(AuthContext)

  return (
    <h1 className='container'>
        <div className='home'> 
          <Typography variant='h2'>HOME PAGE</Typography>
          {user == null ? <></>: 
          <div className='user'>
            <Typography variant='h5'>Hi, {authorized.name} </Typography>
            <Typography variant='h5'>Role: {authorized.role} </Typography>
            </div>
          }
        </div>
    </h1>
  );
};