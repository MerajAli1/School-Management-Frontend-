import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { baseURL } from "../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CircularProgress } from "@mui/material";

const defaultTheme = createTheme();

export default function SignUp() {
  //STATE VARIABLES
  const [stdName, setStdName] = React.useState("");
  const [fatherName, setFatherName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [section, setSection] = React.useState("");
  const [sClass, setSClass] = React.useState("");
  const [rollNo, setRollNo] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  //Error Handling Function
  const errorHandling = () => {
    if (
      stdName === "" ||
      fatherName === "" ||
      gender === "" ||
      section === "" ||
      sClass === "" ||
      rollNo === "" ||
      password === ""
    ) {
      //Toastify Error Notification
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
    }
  };

  //Register Student Function
  const registerStudent = async (event) => {
    event.preventDefault();
    try {
      //Getting Token from Local Storage
      const token = JSON.parse(localStorage.getItem("token"));
      // console.log(token, "Token");

      //Axios Post Request
      const res = await axios.post(
        `${baseURL}/api/v1/admin/studentReg`,
        {
          studentName: stdName,
          fatherName: fatherName,
          gender: gender,
          section: section,
          sClass: sClass,
          rollNo: rollNo,
          password: password,
          role: "Student",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      //Checking Response msg to Display Toast
      if (res.data.msg === "Student Registered Successfully") {
        setLoading(true);
        toast.success("Student Registered Successfully"); //Toastify Success Notification
        console.log(res, "Student Registered Successfully");
      }
      //Error Handling
      if (res.data.status === "failed") {
        errorHandling();
        console.log(res, "Error in Registering Student");
      }
    } catch (error) {
      console.log(error, "Error in Registering Student");
    } finally {
      //Setting Loading to false after 3 seconds
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      //Clearing all the fields after registration
      setFatherName("")
      setGender("");
      setSection("");
      setSClass("");
      setRollNo("");
      setPassword("");
      setStdName("");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Student Account
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={registerStudent}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              {/* Std Name Field*/}
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setStdName(e.target.value)}
                  required
                  fullWidth
                  id="studentName"
                  label="Student Name"
                  name="studentName"
                  autoComplete="studentName"
                />
              </Grid>
              {/* Father Name Field*/}
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setFatherName(e.target.value)}
                  required
                  fullWidth
                  id="fatherName"
                  label="Father Name"
                  name="fatherName"
                  autoComplete="fatherName"
                />
              </Grid>
              {/* Gender Select Field */}
              <Grid item xs={12} sm={6}>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="form-select"
                >
                  <option value="" disabled>
                    Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </Grid>
              {/* Section Select Field */}
              <Grid item xs={12} sm={6}>
                <select
                  value={section}
                  onChange={(e) => setSection(e.target.value)}
                  required
                  className="form-select"
                >
                  <option value="" disabled>
                    Section*
                  </option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                </select>
              </Grid>
              {/* sClass Select Field */}
              <Grid item xs={12} sm={12}>
                <select
                  value={sClass}
                  onChange={(e) => setSClass(e.target.value)}
                  required
                  className="form-select"
                >
                  <option value="" disabled>
                    Class*
                  </option>
                  <option value="One">One</option>
                  <option value="Two">Two</option>
                  <option value="Three">Three</option>
                  <option value="Four">Four</option>
                  <option value="Five">Five</option>
                  <option value="Six">Six</option>
                  <option value="Seven">Seven</option>
                  <option value="Eight">Eight</option>
                  <option value="Nine">Nine</option>
                  <option value="Ten">Ten</option>
                </select>
              </Grid>
              {/* Roll No Field */}
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setRollNo(e.target.value)}
                  required
                  fullWidth
                  type="number"
                  id="rollno"
                  label="Roll Number"
                  name="rollno"
                  autoComplete="rollno"
                />
              </Grid>
              {/* Password Field */}
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              disabled={loading}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {loading ? <CircularProgress /> : "Register"}
            </Button>
          </Box>
        </Box>
      </Container>
      {/* //Toastify Container */}
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
    </ThemeProvider>
  );
}
