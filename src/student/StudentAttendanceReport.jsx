import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../api/api";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import Loader from "../Loader/Loader";

const StudentAttendanceReport = () => {
  const [attendanceReport, setAttendanceReport] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = JSON.parse(localStorage.getItem("token"));

  const getStudentAttendance = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${baseURL}/api/v1/student/attendanceReport`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data.data);
      setAttendanceReport(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };
  console.log("attendanceReport", attendanceReport);

  useEffect(() => {
    getStudentAttendance();
  }, []);
  return (
    <div className="container-fluid">
      {loading ? <Loader /> : null}
      <Typography variant="h4" gutterBottom>
        Student Attendance Report
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Section</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceReport?.map((attendance, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    {new Date(attendance.date).toISOString().split("T")[0]}
                  </TableCell>
                  {attendance.attendance.map((record, i) => {
                    return (
                      <>
                        <TableCell>{record.name}</TableCell>
                        <TableCell>{record.status}</TableCell>
                        <TableCell>{record.sClass} null</TableCell>
                        <TableCell>{record.section} null</TableCell>
                      </>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StudentAttendanceReport;

