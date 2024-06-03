import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";

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

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // State For Add to input fields on clicking on add button
  const [section, setSection] = useState(false);

  // State for Add Button
  const [add, setAdd] = useState(false);

  //States for input fields
  const [name, setName] = useState("");
  const [classes, setClasses] = useState("");
  const [gender, setGender] = useState("");
  const [sectionVal, setSectionVal] = useState("");
  const [qualification, setQualification] = useState("");
  const [salary, setSalary] = useState("");
  const [teachSubject, setTeachSubject] = useState("");
  const [teachClassSection, setTeachClassSection] = useState("");
  const [teachClass, setTeachClass] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [middleArray, setMiddleArray] = useState([]);
  const Add = () => {
    const array = [];
    const classesArray = {
      teachClass: teachClass,
      teachClassSection: teachClassSection,
    };
    setMiddleArray([...middleArray, classesArray]);
    array.push({ teacherSubject: teachSubject, middleArray });
    console.log(array);
  };
  useEffect(()=>{
    console.log(middleArray)
  },[middleArray])
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

              {/* Teacher Subject Input Field */}
              <Grid item xs={6}>
                <TextField
                  onChange={(e) => setTeachSubject(e.target.value)}
                  required
                  fullWidth
                  id="teacherSubject"
                  label="Teacher Subject"
                  name="teacherSubject"
                />
              </Grid>
              <Grid item xs={6}>
                {section === false ? (
                  <Button
                    onClick={() => setSection(true)}
                    className="py-3"
                    variant="contained"
                  >
                    Add Class
                  </Button>
                ) : null}
              </Grid>

              {section === true ? (
                <>
                  {/* Teach Class input field */}

                  <Grid item xs={6}>
                    <TextField
                      onChange={(e) => setTeachClass(e.target.value)}
                      required
                      fullWidth
                      id="teachClass"
                      label="Teach Class"
                      name="teachClass"
                    />
                  </Grid>

                  {/* Teach Class Section input field */}

                  <Grid item xs={6}>
                    <TextField
                      onChange={(e) => setTeachClassSection(e.target.value)}
                      required
                      fullWidth
                      id="teachClassSection"
                      label="Teach Class Section"
                      name="teachClassSection"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Box></Box>
                  </Grid>

                  <Grid item xs={12}>
                    <Button onClick={Add} className="px-5" variant="contained">
                      ADD
                    </Button>
                  </Grid>
                </>
              ) : null}

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
