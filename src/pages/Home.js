import React, { useState } from 'react';
import { auth } from '../firebase-config'
import { onAuthStateChanged } from '@firebase/auth';
import { Typography } from '@mui/material';

export default function Home() {

  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  return (
    <h1 className='container'>
        <div>
          <Typography variant='h2'>HOME PAGE</Typography>
          {user === null ? <></>:
            <Typography variant='h5'>Hi, {user?.email} </Typography>
          }
          
        </div>
    </h1>
  );
};