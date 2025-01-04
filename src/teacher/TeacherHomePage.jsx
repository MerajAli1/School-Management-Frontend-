import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../api/api";

const TeacherHomePage = () => {
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
              navigate("/dashboard/teacherStudentAttendance");
            }}
            className="col-md-3 col"
          >
            <div className="text-center p-3 rounded mt-4 shadow border">
              <i
                style={{ fontSize: "100px" }}
                className="fa-solid fa-clipboard-user"
              ></i>
              <br />
              Student Attendance
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
          {/* Third Block */}
          <div
            onClick={() => {
              navigate("/dashboard/attendanceReport");
            }}
            className="col-md-3 col"
          >
            <div className="text-center p-3 rounded mt-4 shadow border">
              <i
                style={{ fontSize: "100px" }}
                className="fa-solid fa-chart-line"
              ></i>
              <br />
              Attendance Report
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherHomePage;
