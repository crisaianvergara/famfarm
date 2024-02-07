import { Link } from "react-router-dom";
import "../styles/Header.scss";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Cart4 } from "react-bootstrap-icons";

const Header = () => {
  return (
    <Navbar expand="md" className="text-lowercase fw-bold">
      <Container>
        <Navbar.Brand href="/">Famfarm</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link className="me-5" as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link
              className="text-decoration-underline ms-5"
              as={Link}
              to="/login"
            >
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/carts">
              <Cart4 size={25} className="btn-carts" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
