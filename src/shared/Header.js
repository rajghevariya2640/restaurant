import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import BContainer from "./BContainer";
import BButton from "./BButton";
import { Logo } from "./Icon";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu)
    setExpanded(true)
  }

  return (
    <header className={`header ${isSticky ? "sticky" : ""} ${toggleMenu ? 'toggle-menu' : ''}`}>
      <BContainer>
        <div className="d-flex align-items-center justify-content-between flex-wrap position-relative pe-lg-0 pe-5 me-lg-0 me-4">
          <a href="/">
            <Logo />
          </a>
          <BButton link to="tel:8490096181" icon={true} className="d-none d-sm-flex order-lg-3">Book a Table</BButton>
          <Navbar expand="lg" expanded={expanded} className="p-0">
            <Navbar.Toggle onClick={handleToggle} />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={() => setExpanded(false)} href="#home">Home</Nav.Link>
                <Nav.Link onClick={() => setExpanded(false)} href="#about">About us</Nav.Link>
                <Nav.Link onClick={() => setExpanded(false)} href="#menu">Menu</Nav.Link>
                <Nav.Link onClick={() => setExpanded(false)} href="#contact">contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </BContainer>
    </header>
  );
};

export default Header;
