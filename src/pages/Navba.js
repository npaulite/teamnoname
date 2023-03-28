import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { auth } from "../firebase-config";
import { onAuthStateChanged } from "@firebase/auth";
import { Button } from "@mui/material";
import useAuth from "../hooks/useAuth";

export default function Navba() {
  const { authorized, setAuth } = useAuth();

  const SignOut = () => {
    auth.signOut();
    window.location.reload(false);
  };

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        NoName
      </Link>
      <ul>
        <form className="form-inline">
          {authorized == null ? (
            <div className="nav-profile-text">
              <p className="text-black font-weight-semibold m-0">LOGIN</p>
              <span className="font-13 online-color">Role: LOGIN</span>
            </div>
          ) : (
            <div className="nav-profile-text">
              <p className="text-white font-weight-semibold m-0">
                User: {authorized?.name}
              </p>
              <span className="font-13 online-color">
                Role: {authorized?.role}
              </span>
            </div>
          )}
        </form>

        <CustomLink to="/FDA">FDA</CustomLink>
        <CustomLink to="/Bavaria">Bavaria</CustomLink>
        <CustomLink to="/JaneHopkinsAdmin">JaneHopkinsAdmin</CustomLink>
        <CustomLink to="/JaneHopkinsDoctor">JaneHopkinsDoctor</CustomLink>
        <CustomLink to="/">Home</CustomLink>
        {authorized === null ? (
          <Button variant="contained" component={Link} to="/Login">
            Login
          </Button>
        ) : (
          <Button
            variant="contained"
            component={Link}
            to="/"
            onClick={() => {
              SignOut();
              setAuth(null);
            }}
          >
            {" "}
            Logout
          </Button>
        )}
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
