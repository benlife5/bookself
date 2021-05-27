import { Card, Form, Button, ListGroup } from "react-bootstrap";
import { useState } from "react";
import { bookSearch } from "./utils";
import BookList from "./BookList";

function BookSearch() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState();

  const search = (e) => {
    e.preventDefault();
    bookSearch(query).then((data) => setBooks(data));
  };

  return (
    <Card style={{ width: "40rem", margin: "auto" }}>
      <Card.Body>
        <Card.Title>Book Search</Card.Title>
        <Form>
          <Form.Group>
            <Form.Control
              placeholder="Keywords"
              value={query}
              onChange={({ target: { value } }) => setQuery(value)}
            ></Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={search}>
            Search
          </Button>
        </Form>
      </Card.Body>
      {books && <ListGroup />}
      {books && <BookList bookData={books} />}
    </Card>
  );
}

export default BookSearch;
