import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Container, Nav, Navbar } from 'react-bootstrap';
import { BsCart2 } from 'react-icons/bs';
import logo from '../images/logo.png';
import { useCartContext } from '../context/cartContext';
const Header = () => {
  const { total_item } = useCartContext();
  return (
    <Navbar className="navbar-wrapper" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand>
          <Link className="  " to="/">
            <Image src={logo} alt="logo" className="logo-img" />
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
              <BsCart2 />
              {total_item ? (
                <>
                  <span className="cart-count">{total_item}</span>
                </>
              ) : (
                ''
              )}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
