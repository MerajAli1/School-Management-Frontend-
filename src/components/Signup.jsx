import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { baseURL } from "../api/api";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const adminRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${baseURL}/adminRegister`,
        {
          email,
          password,
          name,
          schoolName,
        }
      );
      console.log(res, "RES");
      if (res.status === 200) {
        const token = res.data.token;
        const loginToken = localStorage.setItem("token", JSON.stringify(token));
        console.log(token, "LOGIN TOKEN");
        navigate("/dashboard/adminHome");
      } else {
        navigate("/signup");
      }
      // console.log(res.data.err.message, "ERROR MESSAGE");
    } catch (error) {
      console.log(error, "ERROR OCCURED");
    }
  };
  return (
    <>
      {/* <!-- Section: Design Block --> */}
      <section className="text-center">
        {/* <!-- Background image --> */}
        <div
          className="p-5 bg-image"
          style={{
            backgroundImage:
              " url('https://mdbootstrap.com/img/new/textures/full/171.jpg')",
            height: "300px",
          }}
        ></div>
        {/* <!-- Background image --> */}

        <div
          className="card mx-4 mx-md-5 shadow-5-strong bg-body-tertiary"
          style={{ marginTop: "-100px", backdropFilter: "blur(30px)" }}
        >
          <div className="card-body py-5 px-md-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h1 className="fw-bold mb-5">Sign up </h1>
                <p>Register your account</p>
                <form>
                  {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div data-mdb-input-init className="form-outline">
                        <input
                          type="text"
                          name="schoolName"
                          id="form3Example1"
                          className="form-control"
                          onChange={(e) => setSchoolName(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Example1">
                          School Name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div data-mdb-input-init className="form-outline">
                        <input
                          type="text"
                          name="name"
                          id="form3Example2"
                          className="form-control"
                          onChange={(e) => setName(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Example2">
                          Name
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Email input --> */}
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                  </div>

                  {/* <!-- Password input --> */}
                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      name="password"
                      className="form-control"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>

                  {/* <!-- Checkbox --> */}
                  <div className="form-check d-flex justify-content-center mb-4"></div>

                  {/* <!-- Submit button --> */}
                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-primary btn-block mb-4"
                    onClick={adminRegister}
                  >
                    Sign up
                  </button>

                  {/* <!-- Register buttons --> */}
                  <div className="text-center"></div>
                  <p className="text-center">
                    Alread have an account?{" "}
                    <NavLink style={{ textDecoration: "none" }} to={"/login"}>
                      Log in
                    </NavLink>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Section: Design Block --> */}
    </>
  );
};

export default Signup;
