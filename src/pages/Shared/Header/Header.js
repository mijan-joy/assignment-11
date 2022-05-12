import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "./../../../images/logo.png";

const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top" >
        <Container>
          <Navbar.Brand as={Link} to="/" className="me-5">
            <img src={logo} width="170" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link  as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="blog">
                Blog
              </Nav.Link>
              {user && (
                <>
                  <Nav.Link as={Link} to="add-item">
                    Add Car
                  </Nav.Link>
                  <Nav.Link as={Link} to="my-items">
                    My Cars
                  </Nav.Link>
                  <Nav.Link as={Link} to="manageInventories">
                    Manage Cars
                  </Nav.Link>
                </>
              )}
              <Nav.Link as={Link} to="contact">
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
              {user ? (
                <>
                  <button onClick={logout} className="btn btn-warning">
                    Sign out
                  </button>
                </>
              ) : (
                <div className="d-flex gap-2">
                  <Nav.Link
                    className="btn btn-success text-light px-2"
                    as={Link}
                    to="login"
                  >
                    Sign in
                  </Nav.Link>
                  <Nav.Link
                    className="btn btn-dark text-light opacity px-2"
                    as={Link}
                    to="register"
                  >
                    Sign up
                  </Nav.Link>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
