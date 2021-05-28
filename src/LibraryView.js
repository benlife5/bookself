import { Card, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getLibrary } from "./utils";
import BookList from "./BookList";

function LibraryView() {
  const [books, setBooks] = useState([]);
  const [update, forceUpdate] = useState(false);

  useEffect(() => {
    getLibrary().then((data) => setBooks(data));
    forceUpdate(false);
  }, [update]);

  return (
    <Card style={{ width: "40rem", margin: "auto" }}>
      <Card.Body>
        <Card.Title>Library</Card.Title>
      </Card.Body>
      <ListGroup />
      {books.length > 0 && (
        <BookList bookData={books} view="library" forceUpdate={forceUpdate} />
      )}
      {books.length === 0 && <Card.Body>Add books to get started!</Card.Body>}
    </Card>
  );
}

export default LibraryView;
