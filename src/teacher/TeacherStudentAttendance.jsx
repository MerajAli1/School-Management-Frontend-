import React, { useEffect, useState } from "react";
import { baseURL } from "../api/api";
import axios from "axios";
import { TextField } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loader/Loader";

const TeacherStudentAttendance = () => {
  const [students, setStudents] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle change in radio button
  const handleChange = (index, event) => {
    const newStatuses = [...statuses];
    newStatuses[index] = {
      ...newStatuses[index],
      name: students[index].studentName,
      id: students[index]._id,
      status: event.target.value,
    };
    setStatuses(newStatuses);
  };

  const token = JSON.parse(localStorage.getItem("token"));
  console.log("token: ", token);

  const getAllStudents = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${baseURL}/api/v1/teacher/showStudents`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data.data.students);
      setStudents(res.data.data.students);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const studentAttendance = async (event) => {
    event.preventDefault();
    console.log(statuses);

    // Validation: Ensure attendance is selected for all students
    const allStatusesSelected = students.every(
      (student, index) => statuses[index]?.status
    );
    if (!allStatusesSelected) {
      toast.error("Attendance status must be selected for all students");
      return;
    }
    try {
      const res = await axios.post(
        `${baseURL}/api/v1/teacher/studentAttendence`,
        {
          attendance: statuses,
          date: date,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      toast.success("Attendance submitted successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to submit attendance");
    }
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  return (
    <>
      {/* // Loader component */}
      {loading ? <Loader /> : null}
      <form onSubmit={studentAttendance}>
        <div>
          <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3 col-12">
              <h1>Teacher Attendance</h1>
            </div>
          </div>
          {students.map((e, i) => {
            return (
              <div key={i} className="shadow rounded p-5 mt-3">
                <h1>
                  <b>Name:</b> {e.studentName}
                </h1>
                <h1>
                  <b>Roll No:</b> {e.rollNo}
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
              </div>
            );
          })}
            <h4 className="d-inline-block me-4 mt-3 fw-bold mt-3">Select Date</h4>
            <TextField
            className="mt-3"
              onChange={(e) => setDate(e.target.value)}
              type="date"
              id="date"
              name="date"
            />
          {/* // Submit button */}
          <div className="d-flex justify-content-center align-items-center mt-4">
            <button className="btn btn-success fs-1" type="submit">
              Submit Attendance
            </button>
          </div>
        </div>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default TeacherStudentAttendance;
