import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Container, Nav, Navbar } from 'react-bootstrap';
import { BsCart2 } from 'react-icons/bs';
const Header = () => {
  return (
    <Navbar className="navbar-wrapper" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand>
          <Link className="  " to="/">
            <Image src="images/logo.png" alt="logo" className="logo-img" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {/* <NavDropdown id="basic-nav-dropdown">
                  <LinkContainer to="/orders">
                    <NavDropdown.Item>orders</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item>Logout</NavDropdown.Item>
                </NavDropdown> */}
            <Link className=" nav-links" to="/about">
              About
            </Link>
            <Link className=" nav-links" to="/products">
              Products
            </Link>
            <Link className=" nav-links" to="/contact">
              Contact
            </Link>
            <Link className=" nav-links" to="/login">
              Login
            </Link>
            <Link className=" nav-links" to="/register">
              Register
            </Link>

            <Link className=" nav-links " to="/cart">
              <BsCart2 /> <span className="cart-count">0</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
