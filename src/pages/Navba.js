import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { auth } from "../firebase-config";
import "../cssFiles/navba.css";
import { Button } from "@mui/material";
import useAuth from "../hooks/useAuth";
// import "../assets/css/demo_1/style.css";

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
            <></>
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
        {authorized?.role === "FDA" || authorized?.role === "Admin" ? (
          <CustomLink to="/FDA">FDA</CustomLink>
        ) : (
          ""
        )}
        {authorized?.role === "Bavaria" || authorized?.role === "Admin" ? (
          <CustomLink to="/Bavaria">Bavaria</CustomLink>
        ) : (
          ""
        )}
        {authorized?.role === "JaneHopkinsAdmin" ||
        authorized?.role === "Admin" ? (
          <CustomLink to="/JaneHopkinsAdmin">JaneHopkinsAdmin</CustomLink>
        ) : (
          ""
        )}
        {authorized?.role === "JaneHopkinsDoctor" ||
        authorized?.role === "Admin" ? (
          <CustomLink to="/JaneHopkinsDoctor">JaneHopkinsDoctor</CustomLink>
        ) : (
          ""
        )}
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
