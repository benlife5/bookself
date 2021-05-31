import { Card, ListGroup } from "react-bootstrap";
import { useContext } from "react";
import BookList from "./BookList";
import { LibraryContext } from "./LibraryContext";

function LibraryView() {
  const { library } = useContext(LibraryContext);

  return (
    <Card style={{ width: "40rem", margin: "auto" }}>
      <Card.Body>
        <Card.Title>Library</Card.Title>
      </Card.Body>
      <ListGroup />
      {library && library.length > 0 && (
        <BookList bookData={library} view="library" />
      )}
      {library && library.length === 0 && (
        <Card.Body>Add books to get started!</Card.Body>
      )}
    </Card>
  );
}

export default LibraryView;
