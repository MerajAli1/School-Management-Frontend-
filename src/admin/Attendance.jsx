import axios from "axios";
import React, { useEffect } from "react";
import { baseURL } from "../api/api.js";
const Attendance = () => {
  const getAttendance = async () => {
    // const token = localStorage.JSON.stringify("token");
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token, "TOKEN");
    // {
    //   headers: {
    //     Authorization: 'Bearer "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjViYjAxMzllMWI4OGJjMjc2ZDBlOTMiLCJzY2hvb2xOYW1lIjoiR2Fycmlzb24gR3JhbW1hciBTY2hvb2wiLCJpYXQiOjE3MTcyODgzODUsImV4cCI6MTcxOTg4MDM4NX0.nX8NaK3WXceoA9O1IqP_c0ZPaszBdRoeol_X76larR0"'      
    //   }
    // }

    try {
      const res = await axios.post(`${baseURL}/api/v1/admin/teachers`, {
        headers: {
          Authorization: `Bearer "${token}"`,
        },
      });
      console.log(res.data, "ATTENDANCE DATA");
    } catch (error) {
      console.log(error, "ERROR");
    }
  };
  useEffect(() => {
    getAttendance();
  }, []);
  return <div>Attendance</div>;
};

export default Attendance;
