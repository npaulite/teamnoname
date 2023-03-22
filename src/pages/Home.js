import React, { useState, useContext } from 'react';
import { auth, db } from '../firebase-config'
import { onAuthStateChanged } from '@firebase/auth';
import {doc, getDoc} from "firebase/firestore";
import { UserContent } from '../App';
import { Typography } from '@mui/material';

export default function Home() {

  const {user} = useContext(UserContent)
  const {userDetail} = useContext(UserContent)

  return (
    <h1 className='container'>
        <div className='home'> 
          <Typography variant='h2'>HOME PAGE</Typography>
          {user == null ? <></>: 
          <div className='user'>
            <Typography variant='h5'>Hi, {userDetail.name} </Typography>
            <Typography variant='h5'>Role: {userDetail.role} </Typography>
            </div>
          }
        </div>
    </h1>
  );
};