import React from "react";
import "./SideNavbar.css";
import Hamburger from "../assests/images/hamburger'.png";
import Dashboard from "../assests/images/dashboard.png";
import Message from "../assests/images/messages-icon.png";
import Events from "../assests/images/upcoming events-icon.png";
import Job from "../assests/images/Vector.png";
import Jobs from "../assests/images/job.png";
import Logout from "../assests/images/logout-icon.png";
import "../pages/Dashboard.css";
import Yellow from "../assests/images/Group 29 (1).png";
import YellowDot from "../assests/images/Ellipse 16.png";

function SideNavbar() {
  return (
    <div className="sideNav">
      <div className="navigation">
        <div className="ham flex">
          <img src={Hamburger} alt="" />
        </div>
        <div className="dashboard flex">
          <img className="yellow" src={Yellow} alt="" />
          <img className="yellowDash" src={Dashboard} alt="" />
          <p>Dashboard</p>
        </div>
        <div className="job flex">
          <div className="image">
            <img src={Job} alt="" />
            <img src={Jobs} alt="" />
          </div>
          <p>My Jobs</p>
        </div>
        <div className="message flex">
          <img src={Message} alt="" />
          <p>Messages</p>
        </div>
        <div className="events flex">
          <img src={Events} alt="" />
          <p>Upcoming Events</p>
          <img className="yellowDot" src={YellowDot} alt="" />
          <p className="number">3</p>
        </div>
      </div>
      <div className="help flex">
        <button>Help</button>
        <div className="logout">
          <img src={Logout} alt="" />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
}

export default SideNavbar;
