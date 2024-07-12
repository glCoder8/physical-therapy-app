import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaChartBar, FaClock } from "react-icons/fa";

const NavBar = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      style={{ paddingLeft: "30px" }}
    >
      <Navbar.Brand as={Link} to="/">
        Physical Therapy App
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/general-practice-metrics">
            <FaChartBar /> General Practice Metrics
          </Nav.Link>
          <Nav.Link as={Link} to="/time-to-sign-off">
            <FaClock /> Time to Sign Off
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
