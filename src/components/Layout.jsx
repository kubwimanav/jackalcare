import React from "react";
import Sidebar from "./Sidebar";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import headerimage from "../assets/react.svg";
import "../styles/Layout.css";
// import "../styles/Navbar.css";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <div style={{ display: "flex",gap:"20px" }}>
        <Sidebar />
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
