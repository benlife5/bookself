import { Card, Button, Container, Col, Row } from "react-bootstrap";

function BookList({ bookData }) {
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
              <Button>Add to Library</Button>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
}

export default BookList;
