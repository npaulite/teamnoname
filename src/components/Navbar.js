import React, { useContext, useState } from "react";
import log from "../assets/images/logo.svg";
import { Typography } from "@mui/material";
import AuthContext from "../components/AuthProvider";
import "../assets/css/demo_2/style.css";
import RequireAuth from "./RequireAuth";
import { Button } from "@mui/material";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { auth } from "../firebase-config";
import { onAuthStateChanged } from "@firebase/auth";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
  const { authorized } = useContext(AuthContext);
  const [user, setUser] = useState();
  const { authorized1, setAuth } = useAuth();

  const SignOut = () => {
    auth.signOut();
    window.location.reload(false);
  };

  onAuthStateChanged(auth, (currentUser) => {
    if (user) setUser(currentUser);
  });

  return (
    <div>
      <div className="horizontal-menu">
        <nav className="navbar top-navbar col-lg-12 col-12 p-0">
          <div className="container">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
              <a className="navbar-brand brand-logo" href="/">
                <img src="../assets/images/logo1.png" alt="logo1" />
                <span className="font-12 d-block font-weight-light">
                  Responsive Dashboard
                </span>
              </a>
              <a className="navbar-brand brand-logo-mini" href="/">
                <img src="../assets/images/logo1.png" alt="logo1" />
              </a>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
              <ul className="navbar-nav mr-lg-2">
                <li className="nav-item nav-search d-none d-lg-block">
                  <div className="input-group">
                    <div
                      className="input-group-prepend hover-cursor"
                      id="navbar-search-icon"
                    >
                      <span className="input-group-text" id="search">
                        <i className="mdi mdi-magnify" />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="navbar-search-input"
                      placeholder="Search"
                      aria-label="search"
                      aria-describedby="search"
                    />
                  </div>
                </li>
              </ul>
              <ul className="navbar-nav navbar-nav-right">
                {/* <li className="nav-item nav-profile dropdown"> */}
                <a
                  className="nav-link"
                  id="profileDropdown"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="nav-profile-img">
                    <img src="../assets/images/faces/face1.jpg" alt="image" />
                  </div>
                  {authorized == null ? (
                    <div className="nav-profile-text">
                      <p className="text-black font-weight-semibold m-0">
                        LOGIN
                      </p>
                      <span className="font-13 online-color">Role: LOGIN</span>
                    </div>
                  ) : (
                    <div className="nav-profile-text">
                      <p className="text-black font-weight-semibold m-0">
                        {authorized?.name}
                      </p>
                      <span className="font-13 online-color">
                        Role: {authorized?.role}
                      </span>
                    </div>
                  )}
                  {authorized1 === null ? (
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
                </a>
                {/* <div
                    className="dropdown-menu navbar-dropdown"
                    aria-labelledby="profileDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      <i className="mdi mdi-cached me-2 text-success" />
                      Activity Log
                    </a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                      <i className="mdi mdi-logout me-2 text-primary" /> Signout
                    </a>
                  </div>
                </li> */}
              </ul>
              <button
                className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                type="button"
                data-toggle="horizontal-menu-toggle"
              >
                <span className="mdi mdi-menu" />
              </button>
            </div>
          </div>
        </nav>
        <nav className="bottom-navbar">
          <div className="container">
            <ul className="nav page-navigation">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="mdi mdi-compass-outline menu-icon" />
                  <span className="menu-title">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="mdi mdi-monitor-dashboard menu-icon" />
                  <span className="menu-title">UI Elements</span>
                  <i className="menu-arrow" />
                </a>
                <div className="submenu">
                  <ul className="submenu-item">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="pages/ui-features/buttons.html"
                      >
                        Buttons
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="pages/ui-features/dropdowns.html"
                      >
                        Dropdown
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="pages/ui-features/typography.html"
                      >
                        Typography
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/FDA">
                  <i className="mdi mdi-clipboard-text menu-icon" />
                  <span className="menu-title">FDA</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Bavaria">
                  <i className="mdi mdi-contacts menu-icon" />
                  <span className="menu-title">Bavaria</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/JaneHopkinsAdmin">
                  <i className="mdi mdi-chart-bar menu-icon" />
                  <span className="menu-title">JaneHopkinsAdmin</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/JaneHopkinsDoctor">
                  <i className="mdi mdi-table-large menu-icon" />
                  <span className="menu-title">JaneHopkinsDoctor</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.bootstrapdash.com/demo/plus-free/documentation/documentation.html"
                  className="nav-link"
                  target="_blank"
                >
                  <i className="mdi mdi-file-document-box menu-icon" />
                  <span className="menu-title">Docs</span>
                </a>
              </li>
              <li className="nav-item">
                <div className="nav-link d-flex">
                  <button className="btn btn-sm bg-danger text-white">
                    Trailing
                  </button>
                  <div className="nav-item dropdown">
                    <a
                      className="nav-link count-indicator dropdown-toggle text-white font-weight-semibold"
                      id="notificationDropdown"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      English
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                      aria-labelledby="notificationDropdown"
                    >
                      <a className="dropdown-item" href="#">
                        <i className="flag-icon flag-icon-bl me-3" /> French
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        <i className="flag-icon flag-icon-cn me-3" /> Chinese
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        <i className="flag-icon flag-icon-de me-3" /> German
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        <i className="flag-icon flag-icon-ru me-3" />
                        Russian
                      </a>
                    </div>
                  </div>
                  <a className="text-white" href="index.html">
                    <i className="mdi mdi-home-circle" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
