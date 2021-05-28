import { Button, Container, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { addToLibrary, removeFromLibrary } from "./utils";
import InfoPane from "./InfoPane";

function BookList({ bookData, view, forceUpdate }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <Container style={{ padding: "2%" }}>
      {showInfo && (
        <InfoPane show={showInfo} onHide={() => setShowInfo(false)} />
      )}
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
            <Col>
              <h4>{book.volumeInfo.title}</h4>
              <h6>{book.volumeInfo.authors}</h6>
            </Col>
            <Col style={{ textAlign: "right" }}>
              <Button onClick={() => setShowInfo(book)}>Info</Button>
              {view === "search" && (
                <Button onClick={() => addToLibrary(book.id)}>Add</Button>
              )}
              {view === "library" && (
                <>
                  <Button>Edit</Button>
                  <Button
                    onClick={() => {
                      removeFromLibrary(book.id).then(forceUpdate(true));
                    }}
                    style={{ marginLeft: "2%" }}
                  >
                    Remove
                  </Button>
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
