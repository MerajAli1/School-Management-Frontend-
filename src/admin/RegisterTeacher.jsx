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
import { useEffect, useState } from "react";
import ModalForTeacherRegister from "./ModalForTeacherRegister";
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  // State for Add Button
  const [add, setAdd] = useState(false);
  //States for input fields
  const [name, setName] = useState("");
  const [classes, setClasses] = useState("");
  const [gender, setGender] = useState("");
  const [sectionVal, setSectionVal] = useState("");
  const [qualification, setQualification] = useState("");
  const [salary, setSalary] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
            Create Teacher Account
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              {/* Name Input Field */}
              <Grid item xs={12} sm={12}>
                <TextField
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
                <select required className="form-select">
                  <option selected disabled>
                    Class*
                  </option>
                  <option value="one">One</option>
                  <option value="two">Two</option>
                  <option value="three">Three</option>
                  <option value="four">Four</option>
                  <option value="five">Five</option>
                  <option value="six">Six</option>
                  <option value="seven">Seven</option>
                  <option value="eight">Eight</option>
                  <option value="nine">Nine</option>
                  <option value="ten">Ten</option>
                </select>
              </Grid>
              {/* Gender Select Field */}
              <Grid item xs={12} sm={6}>
                <select className="form-select">
                  <option selected disabled>
                    Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </Grid>

              {/* Section Select Field */}
              <Grid item xs={12} sm={6}>
                <select required className="form-select">
                  <option selected disabled>
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
            <ModalForTeacherRegister/>
            {/* Register Teacher Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
