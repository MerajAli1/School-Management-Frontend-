import React from "react";
import image from "../assets/HomePagePicture.jpg";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        p: 3,
        '@keyframes fadeIn': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        '@keyframes slideIn': {
          from: { transform: 'translateY(-20px)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 1 },
        },
        '@keyframes bounceIn': {
          '0%, 20%, 40%, 60%, 80%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          borderRadius: 2,
          p: 4,
          maxWidth: "600px",
          animation: "fadeIn 2s",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ animation: "slideIn 1s" }}
        >
          Welcome to the
          <br />
          <span style={{ color: "#1976d2" }}>School Management System</span>
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ animation: "slideIn 1.5s" }}
        >
          Streamline school management, class organization, and add students
          and faculty. Seamlessly track attendance, assess performance, and
          provide feedback. Access records, view marks, and communicate
          effortlessly.
        </Typography>
        <Button
          onClick={() => {
            navigate("/choose");
          }}
          variant="contained"
          color="primary"
          size="large"
          sx={{
            mt: 3,
            backgroundColor: "#1976d2",
            '&:hover': {
              backgroundColor: "#125a9e",
            },
            animation: "bounceIn 2s",
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
