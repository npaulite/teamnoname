import React, { useContext, useState } from "react";
import "../assets1/css/style.css";
import "../assets1/css/bootstrap.css";
import "../assets1/css/responsive.css";
import { auth } from "../firebase-config";
import { onAuthStateChanged } from "@firebase/auth";
import useAuth from "../hooks/useAuth";
import { Button } from "@mui/material";
import AuthContext from "../components/AuthProvider";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

// import "../assets1/css/style.scss";

export default function Navbar1() {
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
    <body class="sub_page">
      <div>
        <div className="hero_area">
          {/* header section strats */}
          <header className="header_section">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg custom_nav-container ">
                <a className="navbar-brand" href="/">
                  <span>NONAME</span>
                </a>
                {/* <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="s-1"> </span>
                <span className="s-2"> </span>
                <span className="s-3"> </span>
              </button> */}
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                    <ul className="navbar-nav  ">
                      <li className="nav-item ">
                        <a className="nav-link" href="/">
                          Home <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/FDA">
                          FDA
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/Bavaria">
                          Bavaria
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/JaneHopkinsDoctor">
                          JaneHopkinsDoctor
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/JaneHopkinsAdmin">
                          JaneHopkinsAdmin
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#contactLink">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="quote_btn-container ">
                    <a href>
                      <span>Call : + 01 1234567890</span>
                    </a>
                    <form className="form-inline">
                      {authorized == null ? (
                        <div className="nav-profile-text">
                          <p className="text-black font-weight-semibold m-0">
                            LOGIN
                          </p>
                          <span className="font-13 online-color">
                            Role: LOGIN
                          </span>
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
                      {authorized1 === null ? (
                        <Button
                          variant="contained"
                          component={Link}
                          to="/Login"
                        >
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
                    </form>
                  </div>
                </div>
              </nav>
            </div>
          </header>
          {/* end header section */}
        </div>
      </div>
    </body>
  );
}
