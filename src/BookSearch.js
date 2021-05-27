import { Card, Form, Button, ListGroup } from "react-bootstrap";
import { useState } from "react";
import { bookSearch } from "./utils";

function BookSearch() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const search = (e) => {
    e.preventDefault();
    bookSearch(query).then((data) => setBooks(data));
  };

  return (
    <Card style={{ width: "18rem" }}>
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
      <ListGroup />
      <Card.Body>
        {books.map((book) => (
          <Button onClick={console.log(book)}>{book.volumeInfo.title}</Button>
        ))}
      </Card.Body>
    </Card>
  );
}

export default BookSearch;
