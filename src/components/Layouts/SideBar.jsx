import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import {
  faHome,
  faBan,
  faPieChart,
  faGear,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom/dist";

const Sidebar = () => {
  const route = useLocation();
  const icons = [
    { to: "/Home", icon: faHome },
    { to: "/ProductManagement", icon: faBan },
    { to: "/History", icon: faPieChart },
    { to: "/Settings", icon: faGear },
  ];

  const handleLogout = () => {
    localStorage.clear();
  };
  

  return (
    <div className="fixed top-0 left-0 flex flex-col h-full bg-navy dark:bg-white text-pink items-end py-4 pl-4 z-50">
      <NavLink to="/Home" className="w-20 h-20 mb-5 mr-2">
        <img src={logo} alt="Logo" />
      </NavLink>
      {icons.map((item, index) => (
        <div className={`p-4 ${route.pathname === item.to ? "bg-lightNavy dark:bg-offWhite" : ""}`} key={index}>
          <NavLink
            to={item.to}
            className={({ isActive }) =>
              isActive
                ? "py-4 px-4 rounded flex justify-center bg-pink text-white hover:bg-pink"
                : "py-4 px-4 rounded flex justify-center hover:bg-pink hover:text-white"
            }
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="text-salmon-600 text-xl hover:text-white"
            />
          </NavLink>
        </div>
      ))}

      <div className="mt-auto">
        <NavLink
          to="/"
          className={({ isActive }) =>
              isActive
                ? "py-4 px-4 mr-3 rounded flex justify-center bg-pink text-white hover:bg-pink"
                : "py-4 px-4 mr-3 rounded flex justify-center hover:bg-pink hover:text-white"
            }
          onClick={handleLogout}
        >
          <FontAwesomeIcon
            icon={faSignOutAlt}
            className="text-salmon-600 text-4xl hover:text-white"
            style={{ fontSize: "24px" }}
          />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
