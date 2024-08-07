import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../api/api";
import { Button } from "@mui/material";

const AllStudents = () => {
  // State to store all students
  const [allStudents, setAllStudents] = useState([]);

  // State to store selected student id
  const [selectedStudentId, setSelectedStudentId] = useState({});

  const handleDeleteClick = (studentId) => {
    setSelectedStudentId(studentId);
  };
  // Get all students from the database
  const getAllStudents = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios.get(`${baseURL}/api/v1/admin/students`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAllStudents(res.data);
      console.log(allStudents, "STUDENTS");
      console.log(res.data, "STUDENTS");
    } catch (error) {
      console.log("error ", error);
    }
  };

  //Delete student from the database
  const deleteStudent = async (event, id) => {
    event.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const res = await axios.delete(`${baseURL}/api/v1/admin/student/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
    } catch (error) {
      console.log("error ", error);
    }
  };
  // UseEffect to get all students
  useEffect(() => {
    getAllStudents();
  }, []);
  return (
    <>
      <h1 className="mb-5">All Students</h1>

      <table className="table table-bordered border-primary text-center">
        <thead>
          <tr>
            <th>Sno.</th>
            <th>Name</th>
            <th>Rollno.</th>
            <th>Class</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* // Map through all students and display them in a table */}
          {allStudents.map((e, i) => {
            return (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{e.studentName}</td>
                <td>{e.rollNo}</td>
                <td>{e.sClass}</td>
                <td>
                  <Button
                    variant="contained"
                    className="ms-3 mt-3"
                  >
                    Update
                  </Button>
                  {/* <!-- Button trigger modal --> */}
                  <Button
                    variant="contained"
                    color="error"
                    type="button"
                    className=" ms-3 mt-3"
                    data-bs-toggle="modal"
                    data-bs-target="#customModal"
                    onClick={() => handleDeleteClick(e._id)}
                  >
                    Delete
                  </Button>

                  {/* <!-- Modal For Delete Button--> */}
                  <div
                    style={{ backgroundColor: "lightblue" }}
                    className="modal fade mt-5 w-100"
                    id="customModal"
                    tabIndex="-1"
                    aria-labelledby="customModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5 text-danger"
                            id="customModalLabel"
                          >
                            WARNING!!!
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          Are you sure you want to delete this student?
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-danger"
                            
                            onClick={(event) => deleteStudent(event, selectedStudentId)}
                          >
                            YES
                          </button>
                          <button type="button" data-bs-dismiss="modal" className="btn btn-secondary">
                            NO
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default AllStudents;
