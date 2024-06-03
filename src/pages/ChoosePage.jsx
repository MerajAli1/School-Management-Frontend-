import {
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChoosePage = () => {
  // const [role, setRole] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <Typography className="text-center mt-5" variant="h2">
          Select Your Role
        </Typography>
        <div className="row  text-center p-3">
          {/* First Block */}
          <div onClick={()=>{
            // setRole("admin")
            navigate("/login",{ state: { role: "Admin" } })
          }} className="col-md-12 mt-5">
            <CardActionArea className="shadow bg-primary text-white rounded">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <i style={{fontSize:"95px"}} className="fa-solid fa-user text-white p-3 rounded-pill "></i>
                </Typography>
                <Typography variant="h6" >
                  Login as administrator to access the dashboard to manage app
                </Typography>
              </CardContent>
            </CardActionArea>
          </div>

          {/* Second Block */}
          <div onClick={()=>{
            // setRole("student")
            navigate("/login",{ state: { role: "Student" } })
          }} className="col-md-12 mt-5">
            <CardActionArea className="shadow bg-primary text-white rounded">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <i style={{fontSize:"95px"}} className="fa-solid fa-graduation-cap text-white p-3 rounded-pill"></i>
                </Typography>
                <Typography variant="h6" >
                  Login as a student to explore course materials and
                  assignments.
                </Typography>
              </CardContent>
            </CardActionArea>
          </div>

          {/* Third Block */}
          <div onClick={()=>{
            // setRole("teacher")
            navigate("/login",{ state: { role: "Teacher" } })
          }} className="col-md-12 mt-5">
            <CardActionArea className="shadow bg-primary text-white rounded">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <i style={{fontSize:"95px"}} className="fa-solid fa-person-chalkboard  text-white p-3 rounded-pill"></i>
                </Typography>
                <Typography variant="h6">
                  Login as administrator to access the dashboard to manage app
                </Typography>
              </CardContent>
            </CardActionArea>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChoosePage;
