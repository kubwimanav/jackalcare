import React, { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { GiRoyalLove } from "react-icons/gi";
import "../styles/Header.css";
import profile from "../assets/profile.jpg";
// import Search from "./Search";

function Header() {
  const [openModel, setOpenModel] = useState(false);
  const handlemodal = () => {
    setOpenModel(!openModel);
  };

  return (
    <div className="nav">
        <div className="logo">
        <GiRoyalLove style={{ color: "blue" }} />
        <p>JackalCare</p>
          </div>
          
          <input type="" placeholder="search"  className="header-input"/>
        <div className="profile">
        <IoNotificationsOutline
          className="logout-icon"
          style={{ color: "black" }}
        />
        <img src={ profile} className="profile-image"/>
        </div>
     </div>
  );
}

export default Header;
