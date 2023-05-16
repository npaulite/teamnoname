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
        <div className="img2">
          <img src="https://www.vendia.com/images/illustrations/Vendia_HPIcon.svg"/>
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
        <div className="myBox1">
          <h1 className="team">TeamNoName</h1>
          <h2 className='info_v'>Allowing FDA, pharmaceutical companies and partivipating health care providers to
          exchange study data as it is produced in a secure, trusted and controlled manner. 
          </h2> 
        </div>
        <div className="box">
          <h1 className="text">Instant Reconciliation</h1>
          <h2 className="text2">Eliminate the costs of manual, error-prone reconciliation from partner data. 
          Vendia Share offers automatic, real-time reconciliation with an accurate, indisputable, and trusted 
          source of truth.</h2>
        </div>
        <div className="box2">
          <h1 className="text">Full chain of custody</h1>
          <h2 className="text2">Track and trace product DNA, inventory, customers, and shipping information 
          across supply chain partners. Vendia Share provides a fully auditable, versioned, and immutable 
          source of truth.</h2>
        </div>
  </div>
  );
}

export default Home;