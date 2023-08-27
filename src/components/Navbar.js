import React from "react";
import Logo from "../assests/images/aviate logo.png";
import Search from "../assests/images/Group.png";
import Alert from "../assests/images/Ellipse 32.png";
import Message from "../assests/images/messages-icon.png";
import Bell from "../assests/images/Bell.png";
import Award from "../assests/images/award.png";
import ProfilePic from "../assests/images/Ellipse 35.png";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <div className="searchBox">
        <img src={Search} alt="" />
        <input type="text" placeholder="Type for Search" />
      </div>

      <div className="alert">
        <div className="alertInside">
          <img src={Message} alt="" />
          <img src={Alert} alt="" />
          <p className="messageNum">3</p>
        </div>
        <div className="alertInside">
          <img src={Bell} alt="" />
          <img src={Alert} alt="" />
          <p className="bellNum">8</p>
        </div>
        <div className="alertInside">
          <img src={Award} alt="" />
          <img src={Alert} alt="" />
          <p className="awardNum">4</p>
        </div>
      </div>
      <div className="profileContainer">
        <img src={ProfilePic} alt="" />
        <div className="profileName">
          <p>Akash Mishra</p>
          <button>EDIT MY PROFILE</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
