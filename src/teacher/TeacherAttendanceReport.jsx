import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../api/api";
import Loader from "../Loader/Loader";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const TeacherAttendanceReport = () => {
  const [allAttendance, setAllAttendance] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = JSON.parse(localStorage.getItem("token"));
  const attendanceReport = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${baseURL}/api/v1/teacher/attendanceReport`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data.data);
      setAllAttendance(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };
  useEffect(() => {
    attendanceReport();
  }, []);

  const totalClasses = allAttendance.length;
  const attendedClasses = allAttendance
    .map((attendance) =>
      attendance.attendance.filter((record) => record.status === "Present")
    )
    .flat().length;
  const attendancePercentage = (attendedClasses / totalClasses) * 100;

  console.log("attendedClasses:", attendedClasses);
  console.log("totalClasses:", totalClasses);
  console.log("attendancePercentage:", attendancePercentage);

  return (
    <>
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
              {allAttendance?.map((attendance, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>
                      {new Date(attendance.date).toISOString().split("T")[0]}
                    </TableCell>
                    {attendance.attendance.map((record, i) => {
                      return (
                        <React.Fragment key={i}>
                          <TableCell>{record.name}</TableCell>
                          <TableCell>{record.status}</TableCell>
                          <TableCell>{record.sClass} null</TableCell>
                          <TableCell>{record.section} null</TableCell>
                        </React.Fragment>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="mt-3">
          <p>Total Percentage: {attendancePercentage.toFixed(2)}%</p>
        </div>
      </div>
    </>
  );
};

export default TeacherAttendanceReport;
