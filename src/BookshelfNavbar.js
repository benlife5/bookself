import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function BookshelfNavbar() {
  return (
    <Navbar bg="light" expand="md lg" style={{ marginBottom: "1em" }}>
      <Navbar.Brand>Bookshelf</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link to="/library" as={Link}>
            My Library
          </Nav.Link>
          <Nav.Link to="/search" as={Link}>
            Search
          </Nav.Link>
        </Nav>
        <Button variant="success">Login / Signup</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default BookshelfNavbar;
