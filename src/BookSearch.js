import { Card, Form, Button, ListGroup, Col } from "react-bootstrap";
import { useState } from "react";
import { bookSearch } from "./utils";
import BookList from "./BookList";
import SearchIcon from "@material-ui/icons/Search";

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
          <Form.Row>
            <Col>
              <Form.Control
                placeholder="Keywords"
                value={query}
                onChange={({ target: { value } }) => setQuery(value)}
              ></Form.Control>
            </Col>
            <Col md="auto">
              <Button variant="primary" type="submit" onClick={search}>
                <SearchIcon />
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Card.Body>

      {books && <ListGroup />}

      {books && (
        <BookList bookData={books} style={{ marginLeft: "2%" }} view="search" />
      )}
    </Card>
  );
}

export default BookSearch;
