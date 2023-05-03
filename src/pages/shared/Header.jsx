import React from "react";
// import logo from "../../../assets/logo.png";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
    // const { user, logout } = useContext(AuthContext);
    // const handleLogOut = () => {
    //   logout()
    //     .then()
    //     .catch((error) => console.log(error));
    // };
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link>
                <h1>Master Chef</h1>
              </Nav.Link>
            </Nav>
            <Nav className="mx-auto">
              <Link to="/">Home</Link>
              <Link to="/categories">Food Categories</Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>

            <Nav>
              <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
            </Nav>
            {/*<Nav>
              {user && (
                <FaUserCircle
                  style={{ fontSize: "2em", color: "white" }}
                ></FaUserCircle>
              )}

              {user ? (
                <Button /*onClick={handleLogOut} variant="secondary">
                  LogOut
                </Button>
              ) : (
                <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
              )}
            </Nav>*/}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
