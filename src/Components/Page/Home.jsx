import React from "react";
import navstyle from "../style/nav.module.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LiaGripLinesVerticalSolid } from "react-icons/lia";
import{ Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Navbar className={navstyle.head} data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="data:image/png;base64,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"
              alt="" height="80px" 
            />
          </Navbar.Brand>
          <Nav className={navstyle}>
           <Link to={'/premium'}> <Nav.Link href="#home" style={{ color: "white" }}>
              Premium
            </Nav.Link></Link>
            <Link to={'/support'}> <Nav.Link href="#features" style={{ color: "white" }}>
              Support
            </Nav.Link></Link>
           <Link to={'/download'}> <Nav.Link href="#pricing" style={{ color: "white" }}>
              Download
            </Nav.Link></Link>
            <LiaGripLinesVerticalSolid style={{ marginTop: "12px" }} />
            <Link to={'/signup'}><Nav.Link href="#features" style={{ color: "white" }}>
              Sign Up
            </Nav.Link></Link>
            <Link to={'/login'}><Nav.Link href="#pricing" style={{ color: "white" }}>
              Log In
            </Nav.Link></Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Home;
