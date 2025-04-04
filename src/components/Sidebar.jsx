import React, { useState } from "react";
import { CgLogOut } from "react-icons/cg";
import { HiOutlineClock } from "react-icons/hi";
import profile from "../assets/react.svg";
import { FaChevronDown } from "react-icons/fa6";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdDashboard, MdOutlineHelp } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineAppBlocking } from "react-icons/md";
import "../styles/Sidebar.css";
import { Link, NavLink } from "react-router-dom";
// import Reportcard from "./Reportcard";
// import Listening from "./Listening";

function Sidebar() {
  const [openReport, setOpenReport] = useState(false);
  const handle = () => {
    setOpenReport(!openReport);
  };
  const [openlisten, setOpenlisten] = useState(false);
  const handlelisten = () => {
    setOpenlisten(!openlisten);
  };
  const menu = [
    {
      icon: <MdDashboard className="icon" />,
      path: "dashboard",
      name: "Dashboard",
    },

    {
      icon: <MdOutlineAppBlocking className="icon" />,
      path: "appointments",
      name: "Apppointments",
    },
    {
      icon: <HiOutlineClock className="icon" />,
      path: "profile",
      name: " Profile",
    },

    {
      icon: <IoMdSettings className="icon" />,
      path: "medicalhistory",
      name: "Medical History",
    },
    {
      icon: <IoMdSettings className="icon" />,
      path: "setting",
      name: "Settings",
    },
  ];
  return (
    <div className="sidebar">
      {openReport && <Reportcard handle={handle} />}
      {openlisten && <Listening handlelisten={handlelisten} />}
        <div className="othermenus">
          
            <div className="menu-link">
              {menu.map((menudata) => (
                <NavLink
                  to={menudata.path}
                  className={({ isActive }) =>
                    isActive ? "linkside-active" : "linkside"
                  }
                >
                  {menudata.icon}
                  <div className="list_dash">{menudata.name}</div>
                  {menudata.icon1}
                </NavLink>
              ))}
          </div>
        </div>
      {/* <Link to="/" className="logout">
        <CgLogOut className="logout-icon" style={{ color: "black" }} /> Logout
      </Link> */}
    </div>
  );
}

export default Sidebar;
