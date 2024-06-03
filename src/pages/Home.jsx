import React from "react";
import image from "../assets/HomePagePicture.jpg";
import { Box, Button, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box className="container">
        <Box className="row mt-5">
          <Box className="col-md-6">
            <Box>
              <img width={"100%"} src={image} alt="" />
            </Box>
          </Box>
          <Box className="col-md-6">
          <h1 className="my-5 display-5 fw-bold ls-tight">
                Welcome to the<br />
                  <span className="text-primary">School Management System</span>
                </h1>
            <p className="fs-5 mt-4 mb-4">
              Streamline school management, class organization, and add students
              and faculty. Seamlessly track attendance, assess performance, and
              provide feedback. Access records, view marks, and communicate
              effortlessly.
            </p>
            <Button
              onClick={() => {
                navigate("/choose");
              }}
              className="w-100"
              variant="contained"
            >
              Login
            </Button>
            {/* <p className="text-center">
              Don't have an account?{" "}
              <NavLink style={{ textDecoration: "none" }} to={"/signup"}>
                Sign up
              </NavLink>
            </p> */}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
