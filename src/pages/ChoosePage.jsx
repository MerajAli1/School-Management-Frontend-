import {
  CardActionArea,
  CardContent,
  Typography,
  Grid,
  Container,
  Box,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ChoosePage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Select Your Role
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <CardActionArea
            onClick={() => navigate("/login", { state: { role: "Admin" } })}
            sx={{
              backgroundColor: "#3f51b5",
              color: "white",
              borderRadius: 2,
              boxShadow: 3,
              "&:hover": {
                backgroundColor: "#303f9f",
              },
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardContent>
              <Box display="flex" justifyContent="center" mb={2}>
                <i
                  style={{ fontSize: "95px" }}
                  className="fa-solid fa-user p-3 rounded-pill"
                ></i>
              </Box>
              <Typography variant="h6" align="center">
                Login as Administrator
              </Typography>
              <Typography variant="body2" align="center">
                Access the dashboard to manage the app.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardActionArea
            onClick={() => navigate("/login", { state: { role: "Student" } })}
            sx={{
              backgroundColor: "#4caf50",
              color: "white",
              borderRadius: 2,
              boxShadow: 3,
              "&:hover": {
                backgroundColor: "#388e3c",
              },
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardContent>
              <Box display="flex" justifyContent="center" mb={2}>
                <i
                  style={{ fontSize: "95px" }}
                  className="fa-solid fa-graduation-cap p-3 rounded-pill"
                ></i>
              </Box>
              <Typography variant="h6" align="center">
                Login as Student
              </Typography>
              <Typography variant="body2" align="center">
                Explore course materials and assignments.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardActionArea
            onClick={() => navigate("/login", { state: { role: "Teacher" } })}
            sx={{
              backgroundColor: "#ff9800",
              color: "white",
              borderRadius: 2,
              boxShadow: 3,
              "&:hover": {
                backgroundColor: "#f57c00",
              },
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardContent>
              <Box display="flex" justifyContent="center" mb={2}>
                <i
                  style={{ fontSize: "95px" }}
                  className="fa-solid fa-person-chalkboard p-3 rounded-pill"
                ></i>
              </Box>
              <Typography variant="h6" align="center">
                Login as Teacher
              </Typography>
              <Typography variant="body2" align="center">
                Manage your classes and students.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChoosePage;
