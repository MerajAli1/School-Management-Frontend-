import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../api/api";
import { Container, Row, Col, Card } from 'react-bootstrap';

const TeacherHomePage = () => {
  const navigate = useNavigate();
  return (
    <Container fluid className="p-5 bg-light">
      <h1 className="text-center mb-5">Teacher Dashboard</h1>
      <Row className="g-4">
        <Col xs={12} md={4}>
          <Card className="text-center shadow-lg" onClick={() => navigate("/dashboard/teacherStudentAttendance")}>
            <Card.Body>
              <i className="fa-solid fa-clipboard-user" style={{ fontSize: "100px", color: "#007bff" }}></i>
              <Card.Title className="mt-3">Student Attendance</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="text-center shadow-lg" onClick={() => navigate("/dashboard/allNotices")}>
            <Card.Body>
              <i className="fa-regular fa-clipboard" style={{ fontSize: "100px", color: "#28a745" }}></i>
              <Card.Title className="mt-3">Notice</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="text-center shadow-lg" onClick={() => navigate("/dashboard/attendanceReport")}>
            <Card.Body>
              <i className="fa-solid fa-chart-line" style={{ fontSize: "100px", color: "#dc3545" }}></i>
              <Card.Title className="mt-3">Attendance Report</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TeacherHomePage;
