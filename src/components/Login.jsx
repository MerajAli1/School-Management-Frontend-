import axios from "axios";
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { baseURL } from "../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, CircularProgress } from "@mui/material";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [respose, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const role = location?.state?.role;
  console.log(role, "ROLE");

  // Toastify Error Notification
  const notifyError = () =>
    toast.error("Fill all the fields!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  // Toastify Success Notification
  const notifySuccess = () =>
    toast.success("Signed In Successfully", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const errorHandling = () => {
    if (email === "" && password === "") {
      notifyError();
    } else if (!email.trim()) {
      toast.error("Email is Required!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (!password.trim()) {
      toast.error("Password is Required!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (
      respose === "failed" ||
      respose === "eamil or apssword is incorrect"
    ) {
      setLoading(true);
      toast.error("Wrong Credentials", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoading(false);
    }
  };
  const Adminlogin = async (e) => {
    e.preventDefault();
    // FOR ADMIN LOGIN
    if (role === "Admin") {
      try {
        const res = await axios.post(`${baseURL}/adminLogin`, {
          email,
          password,
        });
        // Setting token in local storage
        const token = localStorage.setItem(
          "token",
          JSON.stringify(res.data.token)
        );
        // ERROR HANDLING
        errorHandling();
        //Setting response msg for validation in errorHandling function
        setResponse(res.data.msg);
        console.log(res.data);
        // Condition for redirecting to adminHome page
        if (res.data.token) {
          setLoading(true); //Loading Spinner
          notifySuccess(); //Toastify Success Notification
          setTimeout(() => navigate("/dashboard/adminHome"), 5000);
        }
      } catch (error) {
        console.log("error", error);
      }
      // FOR STUDENT LOGIN
    } else if (role === "Student") {
      const res = await axios.post(`${baseURL}/studentLogin`, {
        email,
        password,
      });
      const token = localStorage.setItem(
        "token",
        JSON.stringify(res.data.token)
      );
      console.log(res.data.token);
      if (res.data.token) {
        navigate("/dashboard/adminHome");
      }
    }
    // FOR TEACHER LOGIN
    else if (role === "Teacher") {
      const res = await axios.post(`${baseURL}/teacherLogin`, {
        email,
        password,
      });
      const token = localStorage.setItem(
        "token",
        JSON.stringify(res.data.token)
      );
      console.log(res.data.token);
      if (res.data.token) {
        navigate("/dashboard/adminHome");
      }
    } else {
      navigate("/");
    }
  };

  return (
    <>
      {/* <!-- Section: Design Block --> */}

      <section className="">
        {/* <!-- Jumbotron --> */}
        <div
          className="px-4 py-5 px-md-5 text-center text-lg-start"
          style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
        >
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-3 fw-bold ls-tight">
                  Welcome to the
                  <br />
                  <span className="text-primary">School Management System</span>
                </h1>
                <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                  Streamline school management, class organization, and add
                  students and faculty. Seamlessly track attendance, assess
                  performance, and provide feedback. Access records, view marks,
                  and communicate effortlessly.
                </p>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                  <div className="card-body py-5 px-md-5">
                    <p className="text-center my-5 display-5 fw-bold ls-tight">
                      {role} Login
                    </p>
                    <form>
                      {/* <!-- Email input --> */}
                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email Address"
                          type="email"
                          id="form3Example3"
                          className="form-control"
                        />
                      </div>

                      {/* <!-- Password input --> */}
                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                          type="password"
                          id="form3Example4"
                          className="form-control"
                        />
                        {/* <label className="form-label" htmlFor="form3Example4">
                          Password
                        </label> */}
                      </div>

                      {/* <!-- Submit button --> */}
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={loading}
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-primary btn-block mb-4"
                        onClick={Adminlogin}
                      >
                        {loading ? <CircularProgress /> : "Sign in"}
                      </Button>

                      <div className="text-center">
                        {role === "Admin" ? (
                          <p className="text-center">
                            Don't have an account?{" "}
                            <NavLink
                              style={{ textDecoration: "none" }}
                              to={"/signup"}
                            >
                              Sign up
                            </NavLink>
                          </p>
                        ) : null}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Jumbotron --> */}
      </section>
      {/* <!-- Section: Design Block --> */}
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

export default Login;
