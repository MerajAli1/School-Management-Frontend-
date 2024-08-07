import React from "react";
import { useNavigate } from "react-router-dom";

const AdminHomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid">
        <h1>Admin Dashboard</h1>
        {/* First Row */}
        <div className="row">
          {/* First Block */}
          <div
            onClick={() => {
              navigate("/dashboard/attendance");
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
              navigate("/dashboard/notice");
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
              navigate("/dashboard/registerstudent");
            }}
            className="col-md-3 col"
          >
            <div className="text-center p-3 rounded mt-4 shadow border">
              <i
                style={{ fontSize: "100px" }}
                className="fa-solid fa-user-plus"
              ></i>
              <br />
              Register Student
            </div>
          </div>

          {/* Fourth Block */}
          <div
            onClick={() => {
              navigate("/dashboard/registerteacher");
            }}
            className="col-md-3 col"
          >
            <div className="text-center p-3 rounded mt-4 shadow border">
              <i
                style={{ fontSize: "100px" }}
                className="fa-solid fa-chalkboard-user"
              ></i>
              <br />
              Register Teacher
            </div>
          </div>
        </div>
        {/* // Second Row */}
        <div className="row">
          {/* First Block */}
          <div
            onClick={() => {
              navigate("/dashboard/allNotice");
            }}
            className="col-md-3 col"
          >
            <div className="text-center p-3 rounded mt-4 shadow border">
              <i
                style={{ fontSize: "100px" }}
                className="fa-regular fa-clipboard"
              ></i>
              <br />
              All Notices
            </div>
          </div>
          {/* Second Block */}
          <div
            onClick={() => {
              navigate("/dashboard/allStudents");
            }}
            className="col-md-3 col"
          >
            <div className="text-center p-3 rounded mt-4 shadow border">
              <i
                style={{ fontSize: "100px" }}
                className="fa-solid fa-id-card"
              ></i>
              <br />
              All Students
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHomePage;
