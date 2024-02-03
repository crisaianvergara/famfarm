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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Blog</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/" className="me-5">
              Contact
            </Nav.Link>
            <Nav.Link href="/" className="ms-5 text-decoration-underline">
              Login
            </Nav.Link>
            <Nav.Link href="/">
              <Cart4 size={25} className="cart" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
