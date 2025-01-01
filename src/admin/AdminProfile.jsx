import { jwtDecode } from "jwt-decode";
import React from "react";

const AdminProfile = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const decoded = jwtDecode(token);
  console.log("decoded: ", decoded);
  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      fontSize: "24px",
      marginBottom: "10px",
    },
    paragraph: {
      margin: "5px 0",
    },
    strong: {
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Admin Profile</h1>
      <p style={styles.paragraph}>
        <span style={styles.strong}>School Name:</span> {decoded.schoolName}
      </p>
      <p style={styles.paragraph}>
        <span style={styles.strong}>Issued At:</span>{" "}
        {new Date(decoded.iat * 1000).toLocaleString()}
      </p>
      <p style={styles.paragraph}>
        <span style={styles.strong}>Expires At:</span>{" "}
        {new Date(decoded.exp * 1000).toLocaleString()}
      </p>
    </div>
  );
};

export default AdminProfile;
