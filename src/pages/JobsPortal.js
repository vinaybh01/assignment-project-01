import React from "react";
import "./JobsPortal.css";
import Eye from "../assests/images/eye.png";
import Write from "../assests/images/edit-2.png";
import Delete from "../assests/images/trash.png";

function JobsPortal() {
  return (
    <div>
      <div className="jobsContainer">
        <div className="jobHeader">
          <div className="jobnames">
            <p>JobsPortal</p>
          </div>
          <p className="login">Login</p>
          <div className="jobButtons">
            <button>Post a job</button>
          </div>
        </div>
        <div className="jobList">
          <p>My Jobs List</p>
        </div>
        <div className="jobType">
          <table>
            <tr>
              <th>Title</th>
              <th>Job Type</th>
              <th>Posted Date</th>
              <th>Application Deadline</th>
              <th>Action</th>
            </tr>

            <tr>
              <td>Laravel Developer</td>
              <td>Full Time</td>
              <td>12/06/2022</td>
              <td>Full Time</td>
              <td>
                <img src={Eye} alt="" />
                <img src={Write} alt="" />
                <img src={Delete} alt="" />
              </td>
            </tr>
            <tr>
              <td>Laravel Developer</td>
              <td>Full Time</td>
              <td>12/06/2022</td>
              <td>Full Time</td>
              <td>
                <img src={Eye} alt="" />
                <img src={Write} alt="" />
                <img src={Delete} alt="" />
              </td>
            </tr>
            <tr>
              <td>Laravel Developer</td>
              <td>Full Time</td>
              <td>12/06/2022</td>
              <td>Full Time</td>
              <td>
                <img src={Eye} alt="" />
                <img src={Write} alt="" />
                <img src={Delete} alt="" />
              </td>
            </tr>
            <tr>
              <td>Laravel Developer</td>
              <td>Full Time</td>
              <td>12/06/2022</td>
              <td>Full Time</td>
              <td>
                <img src={Eye} alt="" />
                <img src={Write} alt="" />
                <img src={Delete} alt="" />
              </td>
            </tr>
            <tr>
              <td>Laravel Developer</td>
              <td>Full Time</td>
              <td>12/06/2022</td>
              <td>Full Time</td>
              <td>
                <img src={Eye} alt="" />
                <img src={Write} alt="" />
                <img src={Delete} alt="" />
              </td>
            </tr>
            <tr>
              <td>Laravel Developer</td>
              <td>Full Time</td>
              <td>12/06/2022</td>
              <td>Full Time</td>
              <td>
                <img src={Eye} alt="" />
                <img src={Write} alt="" />
                <img src={Delete} alt="" />
              </td>
            </tr>
            <tr>
              <td>Laravel Developer</td>
              <td>Full Time</td>
              <td>12/06/2022</td>
              <td>Full Time</td>
              <td>
                <img src={Eye} alt="" />
                <img src={Write} alt="" />
                <img src={Delete} alt="" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default JobsPortal;
