import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card } from 'react-bootstrap';

const AdminHomePage = () => {
  const navigate = useNavigate();
  return (
    <Container fluid className="p-5 bg-light">
      <h1 className="text-center mb-5">Admin Dashboard</h1>
      <Row className="g-4">
        <Col xs={12} md={3}>
          <Card className="text-center shadow-lg" onClick={() => navigate("/dashboard/attendance")}>
            <Card.Body>
              <i className="fa-solid fa-clipboard-user" style={{ fontSize: "100px", color: "#007bff" }}></i>
              <Card.Title className="mt-3">Attendance</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3}>
          <Card className="text-center shadow-lg" onClick={() => navigate("/dashboard/createnotice")}>
            <Card.Body>
              <i className="fa-regular fa-clipboard" style={{ fontSize: "100px", color: "#28a745" }}></i>
              <Card.Title className="mt-3">Notice</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3}>
          <Card className="text-center shadow-lg" onClick={() => navigate("/dashboard/registerstudent")}>
            <Card.Body>
              <i className="fa-solid fa-user-plus" style={{ fontSize: "100px", color: "#ffc107" }}></i>
              <Card.Title className="mt-3">Register Student</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3}>
          <Card className="text-center shadow-lg" onClick={() => navigate("/dashboard/registerteacher")}>
            <Card.Body>
              <i className="fa-solid fa-chalkboard-user" style={{ fontSize: "100px", color: "#dc3545" }}></i>
              <Card.Title className="mt-3">Register Teacher</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="g-4 mt-4">
        <Col xs={12} md={6}>
          <Card className="text-center shadow-lg" onClick={() => navigate("/dashboard/allNotice")}>
            <Card.Body>
              <i className="fa-regular fa-clipboard" style={{ fontSize: "100px", color: "#17a2b8" }}></i>
              <Card.Title className="mt-3">All Notices</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card className="text-center shadow-lg" onClick={() => navigate("/dashboard/allStudents")}>
            <Card.Body>
              <i className="fa-solid fa-id-card" style={{ fontSize: "100px", color: "#6f42c1" }}></i>
              <Card.Title className="mt-3">All Students</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminHomePage;
