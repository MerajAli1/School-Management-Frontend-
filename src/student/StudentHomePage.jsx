import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const StudentHomePage = () => {
  const navigate = useNavigate();
  return (
    <Container fluid className="p-5 bg-light">
      <h1 className="text-center mb-5">Student Dashboard</h1>
      <Row className="g-4">
        <Col xs={12} md={6}>
          <Card className="text-center shadow-lg" onClick={() => navigate("/dashboard/studentAttendanceReport")}>
            <Card.Body>
              <i className="fa-solid fa-clipboard-user" style={{ fontSize: "100px", color: "#007bff" }}></i>
              <Card.Title className="mt-3">Attendance</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card className="text-center shadow-lg" onClick={() => navigate("/dashboard/allNotices")}>
            <Card.Body>
              <i className="fa-regular fa-clipboard" style={{ fontSize: "100px", color: "#28a745" }}></i>
              <Card.Title className="mt-3">Notice</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default StudentHomePage;