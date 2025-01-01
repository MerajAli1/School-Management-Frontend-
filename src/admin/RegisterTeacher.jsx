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
import { useState } from "react";
import axios from "axios";
import { baseURL } from "../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultTheme = createTheme();

export default function SignUp() {
  //States for input fields
  const [name, setName] = useState("");
  const [classes, setClasses] = useState("");
  const [gender, setGender] = useState("");
  const [sectionVal, setSectionVal] = useState("");
  const [qualification, setQualification] = useState("");
  const [salary, setSalary] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //Register Teacher Function
  const registerTeacher = async (event) => {
    event.preventDefault();
    if (
      !name ||
      !classes ||
      !gender ||
      !sectionVal ||
      !qualification ||
      !salary ||
      !email ||
      !password
    ) {
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
      return;
    }
    setLoading(true);
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const res = await axios.post(
        `${baseURL}/api/v1/admin/teacherReg`,
        {
          name,
          sClass: classes,
          gender,
          section: sectionVal,
          qualification,
          salary,
          email,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data.msg === "Teacher Registered Successfully") {
        toast.success("Teacher registered successfully!");
        // Reset all fields
        setName("");
        setClasses("");
        setGender("");
        setSectionVal("");
        setQualification("");
        setSalary("");
        setEmail("");
        setPassword("");
      } else {
        toast.error("Error registering teacher. Please try again.");
      }
      console.log(res.data, "RES");
    } catch (error) {
      toast.error("Error registering teacher. Please try again.");
      console.log(error, "Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <ToastContainer />
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
            Create Teacher Account
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={registerTeacher}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              {/* Name Input Field */}
              <Grid item xs={12} sm={12}>
                <TextField
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>

              {/* Class Select Field */}
              <Grid item xs={12} sm={12}>
                <select
                  onChange={(e) => setClasses(e.target.value)}
                  required
                  value={classes}
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
                  value={sectionVal}
                  onChange={(e) => setSectionVal(e.target.value)}
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
              {/* Qualification Input Field */}
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setQualification(e.target.value)}
                  value={qualification}
                  required
                  fullWidth
                  id="qualification"
                  label="Qualification"
                  name="qualification"
                />
              </Grid>

              {/* salary Input Field */}
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setSalary(e.target.value)}
                  value={salary}
                  required
                  fullWidth
                  id="salary"
                  label="Salary"
                  name="salary"
                />
              </Grid>

              {/* Email Input Field */}
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>

              {/* Password Input Field */}
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
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
            {/* <ModalForTeacherRegister /> */}
            {/* Register Teacher Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
