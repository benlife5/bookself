import { Button, Container, Col, Row } from "react-bootstrap";
import { addToLibrary } from "./utils";

function BookList({ bookData, view }) {
  return (
    <Container style={{ padding: "2%" }}>
      {bookData.map((book) => {
        return (
          <Row key={book.id} style={{ marginBottom: "1%" }}>
            <Col md="auto">
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt="Cover"
                style={{
                  objectFit: "contain",
                  width: "5rem",
                  maxHeight: "5rem",
                }}
              />
            </Col>
            <Col md="auto">
              <h4>{book.volumeInfo.title}</h4>
              <h6>{book.volumeInfo.authors}</h6>
            </Col>
            <Col style={{ textAlign: "right" }}>
              {view === "search" && (
                <Button onClick={() => addToLibrary(book.id)}>Add</Button>
              )}
              {view === "library" && (
                <>
                  <Button>Edit</Button>
                  <Button>Remove</Button>
                </>
              )}
            </Col>
          </Row>
        );
      })}
    </Container>
  );
}

export default BookList;
