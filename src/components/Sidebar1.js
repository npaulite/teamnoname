import React, { useState } from "react";
import {
  FaHome,
  FaBars,
  FaHeading,
  FaHeartbeat,
  FaHospitalSymbol,
  FaHospitalAlt,
  FaUserAlt,
  FaFileContract,
  FaPills,
  FaSkating,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../cssFiles/app.css";
import useAuth from "../hooks/useAuth";
// import "../assets/css/demo_1/style.css";

const Sidebar1 = ({ children }) => {
  const { authorized } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    /**{
      path: "/",
      name: "",
      icon: <FaUserAlt />,
      authorizedRoles: null,
      // icon: <img src="images/faces/face1.jpg" alt="profile" />,
    },**/

    {
      path: "/",
      name: "Home",
      icon: <FaHome />,
      authorizedRoles: null,
    },
    //admin
    {
      path: "/FDA",
      name: "FDA",
      icon: <FaHeading />,
      authorizedRoles: "Admin",
    },
    {
      path: "/Bavaria",
      name: "Bavaria",
      icon: <FaHeartbeat />,
      authorizedRoles: "Admin",
    },
    {
      path: "/Bavaria/SendDrugs",
      name: "SendDrugs",
      icon: <FaPills />,
      authorizedRoles: "Admin",
    },
    // {
    //   path: "/PostStudy",
    //   name: "PostStudy",
    //   icon: <FaFileContract />,
    //   authorizedRoles: ["Admin", "Bavaria"],
    // },
    {
      path: "/JaneHopkinsAdmin",
      name: "JaneHopkinsA",
      icon: <FaHospitalSymbol />,
      authorizedRoles: "Admin",
    },
    {
      path: "/JaneHopkinsAdmin/AddPatient",
      name: "AddPatient",
      icon: <FaSkating />,
      authorizedRoles: "Admin",
    },
    {
      path: "/JaneHopkinsDoctor",
      name: "JaneHopkinsD",
      icon: <FaHospitalAlt />,
      authorizedRoles: "Admin",
    },
    {
      path: "/PostStudy",
      name: "PostStudy",
      icon: <FaFileContract />,
      authorizedRoles: "Admin",
    },
    //fda
    {
      path: "/FDA",
      name: "FDA",
      icon: <FaHeading />,
      authorizedRoles: "FDA",
    },
    {
      path: "/PostStudy",
      name: "PostStudy",
      icon: <FaFileContract />,
      authorizedRoles: "FDA",
    },
    //bav
    {
      path: "/Bavaria",
      name: "Bavaria",
      icon: <FaHeartbeat />,
      authorizedRoles: "Bavaria",
    },
    {
      path: "/Bavaria/SendDrugs",
      name: "SendDrugs",
      icon: <FaPills />,
      authorizedRoles: "Bavaria",
    },
    {
      path: "/PostStudy",
      name: "PostStudy",
      icon: <FaFileContract />,
      authorizedRoles: "Bavaria",
    },
    //jha
    {
      path: "/JaneHopkinsAdmin",
      name: "JaneHopkinsA",
      icon: <FaHospitalSymbol />,
      authorizedRoles: "JaneHopkinsAdmin",
    },
    {
      path: "/JaneHopkinsAdmin/AddPatient",
      name: "AddPatient",
      icon: <FaSkating />,
      authorizedRoles: "JaneHopkinsAdmin",
    },
    {
      path: "/PostStudy",
      name: "PostStudy",
      icon: <FaFileContract />,
      authorizedRoles: "JaneHopkinsAdmin",
    },
    //jhd
    {
      path: "/JaneHopkinsDoctor",
      name: "JaneHopkinsD",
      icon: <FaHospitalAlt />,
      authorizedRoles: "JaneHopkinsDoctor",
    },
    {
      path: "/PostStudy",
      name: "PostStudy",
      icon: <FaFileContract />,
      authorizedRoles: "JaneHopkinsDoctor",
    },
  ];

  const filteredMenuItems = menuItem.filter((item) => {
    if (item.authorizedRoles == null) {
      return true; // always show menu items that don't require authorization
    } else if (authorized != null && authorized.role === item.authorizedRoles) {
      return true; // show menu items if the user has the required authorization
    } else {
      return false; // hide menu items if the user doesn't have the required authorization
    }
  });

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

        {filteredMenuItems.map((item, index) => (
          // if (
          //   item.authorizedRoles.includes(authorized?.role)
          //   // ||
          //   // authorized == null
          // ) {
          //   return (
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
          //   );
          // }
          // {
          //   /* // return null; */
          // }
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar1;
