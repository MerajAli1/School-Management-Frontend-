import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { baseURL } from "../api/api";
const defaultTheme = createTheme();
export default function Notice() {
  //STATES FOR NOTICE
  const [date, setDate] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [noticeDetails, setNoticeDetails] = React.useState("");
  const [allNotice, setAllNotice] = React.useState([]);

  //GET ALL NOTICES FUNCTION
  const getAllNotices = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios.get(`${baseURL}/api/v1/admin/notice`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data, "NOTICES");
      setAllNotice(res.data);
    } catch (error) {
      console.log("error ", error);
    }
  };

  //NOTICE SUBMIT FUNCTION
  const noticeSubmit = async (event) => {
    event.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token, "TOKEN");
    try {
      const res = await axios.post(
        `${baseURL}/api/v1/admin/notice`,
        {
          title,
          details: noticeDetails,
          date,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data, "NOTICE DATA");
    } catch (error) {
      console.log(error);
    }
  };

  //USEEFFECT TO GET ALL NOTICES
  React.useEffect(() => {
    getAllNotices();
  }, []);
  return (
    <>
      <div>
        <p>
          <Button
            variant="contained"
            fullWidth
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            All Notices <ExpandMoreIcon />
          </Button>
        </p>
        <div className="collapse" id="collapseExample">
          {allNotice?.map((e,i)=>(
            <div key={i} className="card card-body">
                <h3><b>{e.title}</b></h3>
                <p>{e.details}</p>
                <p>Date: {e.date}</p>
              </div>
          )
          )}
        </div>
      </div>

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
            <i
              style={{ fontSize: "100px" }}
              className="fa-regular fa-clipboard"
            ></i>
            <Typography component="h1" variant="h5">
              CREATE NOTICE
            </Typography>
            <Box
              component="form"
              onSubmit={noticeSubmit}
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
    </>
  );
}
