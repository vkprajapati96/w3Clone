import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import { Button } from "react-bootstrap";

function NavBar() {
  return (
    <section className="container-fluid bg-white p-0">
      <Navbar expand="lg" className="bg-body-tertiary py-2">
        <Container>
          {/* Logo */}
          <Navbar.Brand href="/">
            <img
              className="w3-logo"
              src="https://www.w3villa.com/production/assets/logo-1-0cf06f8aef88f5778904cc40290b18da01c6cf5bff74594cb3b2fc4d0a353acf.webp"
              alt="W3villa Logo"
              width="150"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center gap-lg-3">
              <Nav.Link className="fs-6 fw-semibold" href="#ai">Artificial Intelligence</Nav.Link>
              <Nav.Link className="fs-6 fw-semibold" href="#services">Services</Nav.Link>
              <Nav.Link className="fs-6 fw-semibold" href="#technologies">Technologies</Nav.Link>
              <Nav.Link className="fs-6 fw-semibold" href="#solutions">Solutions</Nav.Link>
              <Nav.Link className="fs-6 fw-semibold" href="#company">Company</Nav.Link>
              <Nav.Link className="fs-6 fw-semibold" href="#career">Career</Nav.Link>
              <Nav.Link className="fs-6 fw-semibold" href="#blog">Blog</Nav.Link>

              <Button className="btn btn-primary fw-semibold px-3 py-2 mt-2 mt-lg-0">
                ENQUIRY
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default NavBar;
