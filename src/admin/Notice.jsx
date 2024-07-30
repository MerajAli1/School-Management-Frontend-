import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { baseURL } from "../api/api";
const defaultTheme = createTheme();
export default function Notice() {
  //STATES
  const [date, setDate] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [schoolName, setSchoolName] = React.useState("");
  const [noticeDetails, setNoticeDetails] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token, "TOKEN");
    try {
      const res = await axios.post(
        `${baseURL}/api/v1/admin/notice`,
        {
          title,
          details:noticeDetails,
          date,
        },
        {
          headers:{
            Authorization: `Bearer ${token}`,
          }
        }
      );
      console.log(res.data, "NOTICE DATA");
    } catch (error) {
      console.log(error);
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
            CREATE NOTICE
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              onChange={(e) => setTitle(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="title"
              label="Notice Title"
              name="title"
              autoComplete="title"
              autoFocus
            />
           
            <textarea
              onChange={(e) => setNoticeDetails(e.target.value)}
              className="rounded p-2"
              style={{ borderColor: "lightgrey" }}
              rows="4"
              placeholder="  Notice Details*"
              cols="50"
              name=""
              id=""
            ></textarea>
            <div>
              <TextField
                onChange={(e) => setDate(e.target.value)}
                type="date"
                id="date"
                name="date"
                fullWidth
              />
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Notice
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
