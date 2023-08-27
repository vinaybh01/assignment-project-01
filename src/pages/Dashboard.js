import React from "react";
import "./Dashboard.css";
import SideNavbar from "../components/SideNavbar";
import image1 from "../assests/images/Rectangle 293.png";
import image2 from "../assests/images/Rectangle 296.png";
import image3 from "../assests/images/Rectangle 298.png";
import Question from "../assests/images/Component 15.png";
import Suggest from "../assests/images/image 41.png";
import Threedot from "../assests/images/3 dots.png";
import Avalon from "../assests/images/Avalon-PNG 1.png";
import Cred from "../assests/images/Avalon-PNG 2.png";
import saved from "../assests/images/save.png";
import DownArrow from "../assests/images/Down.png";
import Pesto from "../assests/images/Rectangle 302.png";
import Verna1 from "../assests/images/Rectangle 302 (1).png";
import Verna2 from "../assests/images/Rectangle 303.png";
import Grow1 from "../assests/images/Rectangle 312.png";
import Grow2 from "../assests/images/Rectangle 311.png";
import Dot from "../assests/images/Ellipse 28.png";
import RedDot from "../assests/images/Ellipse 25.png";
import GreenDot from "../assests/images/Ellipse 26.png";

function Dashboard() {
  return (
    <div className="mainContainer">
      <SideNavbar />
      <div className="main">
        <div className="dashBoard flex-row">
          <div className="mainPartOne">
            <div className="header flex-row">
              <p className="dash">Dashboard</p>
              <div className="jobSearch flex-col">
                <p>Job search status</p>
                <div className="actively flex-row">
                  <img src={GreenDot} alt="" />
                  <p>Actively Interviewing</p>
                  <img src={DownArrow} alt="" />
                </div>
              </div>
            </div>
            <div className="applications flex-col">
              <div className="appHeader flex-row">
                <p>Applications</p>
                <p>see all</p>
              </div>
              <div className="jobBody flex-row  space-btween">
                <div className="jobDetails flex-row">
                  <div className="jobImage">
                    <img src={image1} alt="" />
                  </div>
                  <div className="jobRole flex-col">
                    <p>Senior Product Designer</p>
                    <p>Techmint , On-site</p>
                    <p>Bengaluru, India</p>
                  </div>
                </div>
                <div className="jobSalary flex-col">
                  <p>₹ 50K - ₹ 70K</p>
                  <p>Per Month</p>
                </div>
                <div className="jobButton flex-row">
                  <button className="rejected">Rejected</button>
                  <img src={Question} alt="" />
                </div>
              </div>

              <div className="jobBody flex-row space-btween">
                <div className="jobDetails flex-row">
                  <div className="jobImage">
                    <img src={image2} alt="" />
                  </div>
                  <div className="jobRole flex-col">
                    <p>Senior Product Designer</p>
                    <p>Unacademy ,work from home</p>
                    <p>Bengaluru, India</p>
                  </div>
                </div>
                <div className="jobSalary flex-col left">
                  <p>₹ 60K - ₹ 80K</p>
                  <p>Per Month</p>
                </div>
                <div className="jobButton flex-col">
                  <button className="process">In Process</button>
                  <p>70% Chances</p>
                </div>
              </div>
              <div className="jobBody flex-row space-btween">
                <div className="jobDetails flex-row">
                  <div className="jobImage">
                    <img src={image3} alt="" />
                  </div>
                  <div className="jobRole flex-col">
                    <p>Senior Product Designer</p>
                    <p>Udemy , on site</p>
                    <p>Bengaluru, India</p>
                  </div>
                </div>
                <div className="jobSalary flex-col left">
                  <p>₹ 60K - ₹ 75K</p>
                  <p>Per Month</p>
                </div>
                <div className="jobButton flex-row">
                  <button className="selected">Selected</button>
                </div>
              </div>
            </div>
          </div>
          <div className="mainPartTwo">
            <div className="suggestionImage">
              <img src={Suggest} alt="" />
              <img src={Threedot} alt="" />
            </div>
            <div className="suggestHeader flex-row">
              <p>Suggested Sessions</p>
              <p>See all</p>
            </div>
            <div className="suggestInformation flex-col">
              <div className="SuggestInfo flex-row">
                <div className="suggestName flex-col">
                  <p>Mock Interview</p>
                  <p>24th August , 2022</p>
                  <p>(9:00 AM - 11:00 AM)</p>
                </div>
                <div className="suggestButton">
                  <button>Enroll Now</button>
                </div>
              </div>
              <hr />
              <div className="SuggestInfo flex-row">
                <div className="suggestName flex-col">
                  <p>Portfolio Presentation</p>
                  <p>10th Sept , 2022</p>
                  <p>(12:00 AM - 2:00 PM)</p>
                </div>
                <div className="suggestButton">
                  <button>Enroll Now</button>
                </div>
              </div>
              <hr />
              <div className="SuggestInfo flex-row">
                <div className="suggestName flex-col">
                  <p>Technical Round</p>
                  <p>10th Sept , 2022</p>
                  <p>(12:00 AM - 2:00 PM)</p>
                </div>
                <div className="suggestButton">
                  <button>Enroll Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="jobs flex-row">
          <div className="recommendation">
            <div className="title flex-row space-btween">
              <p>Jobs Recommendations for You</p>
              <img src={Threedot} alt="" />
            </div>
            <div className="details flex-row space-btween">
              <div className="name flex-row">
                <div className="div1  flex-row div4">
                  <img src={Dot} alt="" />
                  <p>UX Designer</p>
                </div>
                <div className="div2 flex-row div4">
                  <img src={Dot} alt="" />
                  <p>50K - 75K</p>
                </div>
                <div className="div3 flex-row div4">
                  <img src={Dot} alt="" />
                  <p>Mumbai , Bengaluru , pune</p>
                </div>
              </div>
              <p className="text">See all</p>
            </div>
            <div className="outerBox">
              <div className="recomBox flex-row space-btween">
                <div className="combine flex-row">
                  <div className="recommImage">
                    <img src={Avalon} alt="" />
                  </div>
                  <div className="recomDetails flex-col">
                    <p>UX Designer</p>
                    <p>Avalon Meta ,Mumbai</p>
                    <p className="flex-row ">
                      3 Weeks ago{" "}
                      <div className="divApp flex-row">
                        <img src={RedDot} alt="" />
                        <span className="red">100 Applicants</span>
                      </div>
                    </p>
                  </div>
                </div>
                <div className="recommButton flex-row">
                  <button>Apply Now</button>
                  <img src={saved} alt="" />
                </div>
              </div>
              <hr className="jobsHr" />
              <div className="recomBox flex-row space-btween">
                <div className="combine flex-row">
                  <div className="recommImage">
                    <img src={Cred} alt="" />
                  </div>
                  <div className="recomDetails flex-col">
                    <p>UX Designer</p>
                    <p>CRED ,Bengaluru</p>
                    <p className="flex-row">
                      1 Weeks ago
                      <div className="divApp flex-row">
                        <img src={GreenDot} alt="" />
                        <span className="green">12 Applicants</span>
                      </div>
                    </p>
                  </div>
                </div>
                <div className="recommButton flex-row">
                  <button>Apply Now</button>
                  <img src={saved} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="eventsUp">
            <div className="titleUpcoming flex-row space-btween">
              <p>Upcoming Events</p>
              <img src={Threedot} alt="" />
            </div>
            <div className="outerEventBox">
              <div className="dateContainer flex-row ">
                <p>August , 2022</p>
                <img src={DownArrow} alt="" />
              </div>
              <div className="upcominMain flex-col">
                <div className="upcomingInnerBox flex-row space-btween">
                  <div className="upImage">
                    <img src={Pesto} alt="" />
                    <p>Pesto</p>
                  </div>
                  <div className="upDetails port">
                    <p className="first">Portfolio Presentation</p>
                    <p className="tom">Tommorrow</p>
                    <p className="time">9:00 AM - 11:00 AM</p>
                  </div>
                </div>
                <div className="upcomingInnerBox flex-row space-btween">
                  <div className="ver">
                    <img src={Verna1} alt="" />
                    <p>Vernacular.Ai</p>
                  </div>
                  <div className="upDetails group">
                    <p className="first">Group Discussion</p>
                    <p className="second">25th August , 2022</p>
                    <p className="time">9:00 AM - 10:00 AM</p>
                  </div>
                </div>
                <div className="upcomingInnerBox flex-row space-btween">
                  <div className="upImage">
                    <img src={Grow1} alt="" />
                    <p>Groww</p>
                  </div>
                  <div className="upDetails">
                    <p className="first">Mock Interview Session 1</p>
                    <p className="second">29th August , 2022</p>
                    <p className="time">2:00 PM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
