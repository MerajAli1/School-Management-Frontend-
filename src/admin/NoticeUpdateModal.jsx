import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Container from "@mui/material/Container";
import {
  createTheme,
  CssBaseline,
  TextField,
  ThemeProvider,
} from "@mui/material";
import axios from "axios";
import { baseURL } from "../api/api";
const defaultTheme = createTheme();

export default function BasicModal({ id, titles, detail, dates }) {
  //id, titles, detail, dates  are props passed from AllNotices.jsx

  //STATES FOR NOTICE
  const [date, setDate] = React.useState(dates || "");
  const [title, setTitle] = React.useState(titles || "");
  const [noticeDetails, setNoticeDetails] = React.useState(detail || "");
  const [open, setOpen] = React.useState(false);
  //HANDLE OPEN AND CLOSE MODAL
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Update Notice
  const updateNotice = async (event) => {
    event.preventDefault();
    try {
      //Getting Token from Local Storage
      const token = JSON.parse(localStorage.getItem("token"));
      //id is passed as props from AllNotices.jsx
      const res = await axios.patch(
        `${baseURL}/api/v1/admin/notice/${id}`,
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
      console.log(res.data, "UPDATED NOTICE");
    } catch (error) {
      console.log("error ", error);
    }
  };
  return (
    <>
      <Button className="me-3" variant="contained" onClick={handleOpen}>
        Update
      </Button>
      <Modal open={open} onClose={handleClose}>
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
                UPDATE NOTICE
              </Typography>
              {/* //Form to update notice */}
              <Box
                onSubmit={updateNotice}
                component="form"
                noValidate
                sx={{ mt: 1 }}
              >
                {/* //TextField for title */}
                <TextField
                  onChange={(e) => setTitle(e.target.value)}
                  margin="normal"
                  required
                  value={title}
                  fullWidth
                  id="title"
                  sx={{ backgroundColor: "white" }}
                  variant="filled"
                  label="Notice Title"
                  name="title"
                  autoComplete="title"
                  autoFocus
                />
                {/* //Textarea for notice details */}
                <textarea
                  onChange={(e) => setNoticeDetails(e.target.value)}
                  className="rounded p-2"
                  style={{ borderColor: "lightgrey" }}
                  rows="4"
                  value={noticeDetails}
                  placeholder="  Notice Details*"
                  cols="50"
                  name="noticeDetails"
                  id=""
                ></textarea>
                {/* //TextField for date */}
                <div>
                  <TextField
                    onChange={(e) => setDate(e.target.value)}
                    type="date"
                    id="date"
                    value={date}
                    name="date"
                    sx={{ backgroundColor: "white" }}
                    variant="filled"
                    fullWidth
                  />
                </div>
                {/* //Button to submit the form */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Update Notice
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </Modal>
    </>
  );
}
