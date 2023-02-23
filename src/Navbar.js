import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1080) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            NoName
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/FDA'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                FDA
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Bavaria'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Bavaria
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/JaneHopkinsAdmin'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                JaneHopkinsAdmin
              </Link>
            </li> 
           <li className='nav-item'>
              <Link
                to='/JaneHopkinsDoctor'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                JaneHopkinsDoctor
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Login</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;