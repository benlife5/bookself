import { Navbar, Nav, Button } from "react-bootstrap";

function BookshelfNavbar() {
  return (
    <Navbar bg="light" expand="md lg">
      <Navbar.Brand href="#home">Bookshelf</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/library">My Library</Nav.Link>
          <Nav.Link href="/search">Search</Nav.Link>
        </Nav>
        <Button variant="success">Login / Signup</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default BookshelfNavbar;
