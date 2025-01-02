import React from 'react'
import { useNavigate } from 'react-router-dom';

const StudentHomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid">
        <h1>Student Dashboard</h1>
        {/* First Row */}
        <div className="row">
          {/* First Block */}
          <div
            onClick={() => {
              navigate("/dashboard/studentAttendanceReport");
            }}
            className="col-md-3 col"
          >
            <div className="text-center p-3 rounded mt-4 shadow border">
              <i
                style={{ fontSize: "100px" }}
                className="fa-solid fa-clipboard-user"
              ></i>
              <br />
              Attendance
            </div>
          </div>

          {/* Second Block */}
          <div
            onClick={() => {
              navigate("/dashboard/allNotices");
            }}
            className="col-md-3 col"
          >
            <div className="text-center p-3 rounded mt-4 shadow border">
              <i
                style={{ fontSize: "100px" }}
                className="fa-regular fa-clipboard"
              ></i>
              <br />
              Notice
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentHomePage