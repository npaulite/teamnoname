import React from "react";
import "../cssFiles/home.css";
import { Container } from "@mui/material";

 function Home() {

  return (

    <div className= "main">
      <div className="container">
      <div className="img">
          <a href="https://www.vendia.com/">
          <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/cpuf13twbf75y9bjau7h.png"/>
          </a>
        </div>
      </div> 
      <div className="myBox">
        <Container>
          <h1 className="vendia">Vendia: Bring trust to data</h1>
          <h2 className="info_v">
            Vendia Share is built to make data sharing easier between partners.
            To bring trust and a single source of truth to partner data sharing
            and secure, compliant, real-time collaboration — no matter your
            partners' geographies, stack of systems, data architecture, or
            clouds. It combines business blockchain, smart APIs, and cloud
            databases.

          </h2>
          </Container>
        </div> 
        <div className='myBox1'>
          <h1 className="team">TeamNoName</h1>
          <h2 className='info_v'>Allowing FDA, pharmaceutical companies and partivipating health care providers to
          exchange study data as it is produced in a secure, trusted and controlled manner. 
          </h2> 
        </div>
  </div>
  );
}

export default Home;