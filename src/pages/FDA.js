import useFDA from "../hooks/useFDA"
import React, { useState } from 'react';
import styled from 'styled-components';

const Tab = styled.button`
  background-color: #9fa8da;
  padding: 10px 80px;
  cursor: pointer;
  opacity: 0.3;
  ${({ active  }) =>
  active &&
  `
  // border: 20px solid block;
  opacity: 2;
  `}
`;


const types = ['Profile', 'Reports', 'Results', 'Drugs', 'Order', 'Patients'];
 const FDA = () => {
  const [active, setActive] = useState(types[0]);
  return (
    <>
    <div style={{ 
       backgroundImage: `url(${process.env.PUBLIC_URL + '/image1.png'})`,
       backgroundRepeat: 'no-repeat',
    }}>
    <h1 className='container'>FDA</h1>
      {types.map(type => (
        <Tab
          key={type}
          active={active === type}
          onClick={() => setActive(type)}
        >
          {type}
        </Tab>
      ))}
    </div>
    <p />
    <p> Selected: {active}</p>
    </>
  );
}

// const FDA = () => {
//   return (
//     <div>
//       <h1>FDA</h1>

//     </div>
//   );
// };



export default FDA;