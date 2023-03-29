import React, { useContext } from "react";
import { Typography } from "@mui/material";
import AuthContext from "../components/AuthProvider";

export default function Home() {
  const { authorized } = useContext(AuthContext);

  return (
    <div>
    <div className='home'>
      <div className="container"> 
        {/* <Typography variant='h2'>HOMEPAGE</Typography> */}
        <h1 className="heading">HOMEPAGE</h1>
        {authorized == null ? <></>: 
          <div className='user'>
            <Typography variant='h5'>Hi, {authorized?.name} </Typography>
            <Typography variant='h5'>Role: {authorized?.role} </Typography>
          </div>
        }
      </div>
      <div className='img'>
        <a href="https://www.vendia.com/" target ="_blank">
          <img src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/cpuf13twbf75y9bjau7h.png'/>
        </a>
        <div className='myBox'>
            <h1 className='display-4 fw-normal vendia'>Vendia: Bring trust to data</h1>
            <h1 className='display-4 fw-normal info_v'>Vendia Share is built to make data sharing easier 
            between partners. To bring trust and a single source of truth to partner data sharing and secure, 
            compliant, real-time collaboration — no matter your partners’  geographies, stack of systems, data 
            architecture, or clouds. It combines business blockchain, smart APIs, and cloud databases.</h1>
        </div> 
        <div className='myBox1'></div>
            <h1 className='display-4 fw-normal team'>TeamNoName</h1>
      </div>
    </div>
    </div>
  );
}
