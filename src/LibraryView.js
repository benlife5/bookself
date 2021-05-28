import { Card, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getLibrary } from "./utils";
import BookList from "./BookList";

function LibraryView() {
  const [books, setBooks] = useState();

  useEffect(() => {
    console.log("here");
    getLibrary("a").then((data) => setBooks(data));
  }, []);

  return (
    <Card style={{ width: "40rem", margin: "auto" }}>
      <Card.Body>
        <Card.Title>Library</Card.Title>
      </Card.Body>
      {books && <ListGroup />}
      {books && <BookList bookData={books} view="library" />}
    </Card>
  );
}

export default LibraryView;
