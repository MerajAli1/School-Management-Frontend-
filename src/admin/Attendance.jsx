import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../api/api.js";
import { TextField } from "@mui/material";
const Attendance = () => {
  const [attendance, setAttendance] = useState([]);
  const [date, setDate] = useState("");

  // Step 1: Initialize state
  //STATE FOR RADIO BUTTONS
  const [statuses, setStatuses] = useState([]);

  // Step 2: Handle change in radio button
  const handleChange = (index, event) => {
    const newStatuses = [...statuses];
    newStatuses[index] = {
      ...newStatuses[index],
      name: attendance[index].name,
      id: attendance[index]._id,
      status: event.target.value,
    };
    setStatuses(newStatuses);
  };

  // Get Attendance
  const getAttendance = async () => {
    //ACCESS TOKEN FROM LOCAL STORAGE
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token, "TOKEN");
    //GETTING ALL THE TEACHERS
    try {
      const res = await axios.get(`${baseURL}/api/v1/admin/teachers`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data.data, "ATTENDANCE DATA");
      //SETTING THE TEACHERS
      setAttendance(res.data.data);
    } catch (error) {
      console.log(error, "ERROR");
    }
  };

  // Submit Attendance
  const submitAttendance = async (event) => {
    // Prevent default form submission
    event.preventDefault();
    //ACCESS TOKEN FROM LOCAL STORAGE
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token, "TOKEN");
    //GETTING ALL THE INPUT FIELDS
    console.log("Selected Values:", statuses);
    console.log("date", date);
    try {
      const res = await axios.post(
        `${baseURL}/api/v1/admin/teacherAttendance`,
        {
          attendance: statuses,
          date,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data, "ATTENDANCE Submitted");
      alert("Attendance Submitted");
    } catch (error) {
      console.log(error, "ERROR");
    }
  };

  useEffect(() => {
    getAttendance();
  }, []);
  return (
    <>
      <div className="">
        <form onSubmit={submitAttendance}>
          <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3 col-12">
              <h1>Teacher Attendance</h1>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 col-12">
              <h4 className="d-inline-block me-4 mt-3 fw-bold">Select Date </h4>
              <TextField
                onChange={(e) => setDate(e.target.value)}
                type="date"
                id="date"
                name="date"
              />
            </div>
          </div>

          {attendance.map((e, i) => (
            <div className="row">
              <div className="col-sm-12 col-md-8 col-lg-8 col-12">
                <div className="shadow rounded p-5 mt-3" key={i}>
                  <h1>
                    <b>NAME: </b>
                    {e.name}
                  </h1>
                  <input
                    onChange={(event) => handleChange(i, event)}
                    type="radio"
                    name={`status-${i}`}
                    id={`Present-${i}`}
                    value="Present"
                  />
                  <label
                    className="fs-4 text-success ps-3"
                    htmlFor={`Present-${i}`}
                  >
                    Present
                  </label>
                  <br />
                  <input
                    onChange={(event) => handleChange(i, event)}
                    type="radio"
                    name={`status-${i}`}
                    id={`Absent-${i}`}
                    value="Absent"
                  />
                  <label
                    className="fs-4 text-danger ps-3"
                    htmlFor={`Absent-${i}`}
                  >
                    Absent
                  </label>
                  <br />
                  <input
                    onChange={(event) => handleChange(i, event)}
                    type="radio"
                    name={`status-${i}`}
                    id={`LateIn-${i}`}
                    value="LateIn"
                  />
                  <label
                    className="fs-4 text-secondary ps-3"
                    htmlFor={`LateIn-${i}`}
                  >
                    Late In
                  </label>
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-center align-items-center mt-4">
            <button className="btn btn-success fs-1">Submit Attendance</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Attendance;
