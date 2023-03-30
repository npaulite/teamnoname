import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../cssFiles/app.css";
import useAuth from "../hooks/useAuth";
import "../assets/css/demo_1/style.css";

const Sidebar1 = ({ children }) => {
  const { authorized } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    // {
    //   path: "/",
    //   name: "",
    //   icon: <img src="images/faces/face1.jpg" alt="profile" />,
    // },
    {
      path: "/",
      name: "Home",
      icon: <FaTh />,
    },
    {
      path: "/FDA",
      name: "FDA",
      icon: <FaUserAlt />,
    },
    {
      path: "/Bavaria",
      name: "Bavaria",
      icon: <FaRegChartBar />,
    },
  ];
  return (
    <div className="container2">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>

          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>

        <form
          style={{ display: isOpen ? "block" : "none" }}
          className="form-inline"
        >
          <div className="nav-profile-image">
            <img src="images/faces/face1.jpg" alt="profile" />
            {/*change to offline or busy as needed*/}
          </div>

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

        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar1;
