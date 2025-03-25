import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import BContainer from "./BContainer";
import BButton from "./BButton";
import { Logo } from "./Icon";

const Header = () => {
  return (
    <header>
      <BContainer>
        <div className="d-flex align-items-center justify-content-between">
          <a href="/">
            <Logo />
          </a>
          <Navbar expand="lg" className="p-0">
            <Navbar.Toggle />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About us</Nav.Link>
                <Nav.Link href="#menu">Menu</Nav.Link>
                <Nav.Link href="#contact">contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <BButton icon={true}>Book a Table</BButton>
        </div>
      </BContainer>
    </header>
  );
};

export default Header;
