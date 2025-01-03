import * as React from "react";
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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultTheme = createTheme();

export default function CreateNotice() {
  //STATES FOR NOTICE
  const [date, setDate] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [noticeDetails, setNoticeDetails] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  //NOTICE SUBMIT FUNCTION
  const noticeSubmit = async (event) => {
    event.preventDefault();

    //ERROR VALIDATION
    if (title === "" || noticeDetails === "" || date === "") {
      toast.error("Please fill all the fields"); //TOASTIFY ERROR MESSAGE
      return;
    }
    setLoading(true);
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

      if (res.data.msg === "success") {
        toast.success("Notice Created Successfully"); //TOASTIFY SUCCESS MESSAGE
        // Reset all fields
        setTitle("");
        setNoticeDetails("");
        setDate("");
      } else {
        toast.error("Error creating notice. Please try again.");
      }
      console.log(res.data, "NOTICE DATA");
    } catch (error) {
      toast.error("Error creating notice. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
                value={title}
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
                value={noticeDetails}
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
                  value={date}
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
                disabled={loading}
              >
                {loading ? "Loading..." : "Create Notice"}
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
