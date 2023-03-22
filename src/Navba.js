import React, {useState} from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { auth } from './firebase-config'
import { onAuthStateChanged } from '@firebase/auth';
import { Button } from '@mui/material';
import { SignOut } from './App';

export default function Navba() {

  const [user, setUser] = useState()

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        NoName
      </Link>
      <ul>

        <CustomLink to="/FDA">FDA</CustomLink>
        <CustomLink to="/Bavaria">Bavaria</CustomLink>
        <CustomLink to="/JaneHopkinsAdmin">JaneHopkinsAdmin</CustomLink>
        <CustomLink to="/JaneHopkinsDoctor">JaneHopkinsDoctor</CustomLink>
        <CustomLink to="/">Home</CustomLink>
        {user === null ?
        <Button variant='contained' component={Link} to="/Login">Login</Button>
        :
        <Button variant='contained' onClick={SignOut} > <Link to="/"> Logout </Link></Button>
        }
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}