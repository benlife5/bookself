import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import {
  stringToArray,
  arrayToString,
  getISBN13,
  setISBN13,
  editBook,
} from "./utils";
import SaveIcon from "@material-ui/icons/Save";
import CloseIcon from "@material-ui/icons/Close";

function InfoPane(props) {
  const book = props.book.volumeInfo;

  const [title, setTitle] = useState(book.title);
  const [authors, setAuthors] = useState(book.authors);
  const [publishedDate, setPublishedDate] = useState(book.publishedDate);
  const [pageCount, setPageCount] = useState(book.pageCount);
  const [categories, setCategories] = useState(book.categories);
  const [averageRating, setAverageRating] = useState(book.averageRating);
  const [industryIdentifiers, setIndustryIdentifiers] = useState(
    book.industryIdentifiers
  );
  const [description, setDescription] = useState(book.description);

  const save = () => {
    const newInfo = {
      volumeInfo: {
        title,
        authors,
        publishedDate,
        pageCount,
        categories,
        averageRating,
        industryIdentifiers,
        description,
      },
    };
    editBook(props.book.id, newInfo).then(props.onHide);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Book Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <span style={{ fontWeight: "bold" }}>Title: </span>
          <Form.Control
            value={title}
            onChange={({ target: { value } }) => setTitle(value)}
          ></Form.Control>
          <br />
          <span style={{ fontWeight: "bold" }}>Authors: </span>
          <Form.Control
            value={arrayToString(authors)}
            onChange={({ target: { value } }) =>
              setAuthors(stringToArray(value))
            }
          ></Form.Control>{" "}
          <br />
          <span style={{ fontWeight: "bold" }}>Date Published: </span>
          <Form.Control
            value={publishedDate}
            onChange={({ target: { value } }) => setPublishedDate(value)}
          ></Form.Control>
          <br />
          <span style={{ fontWeight: "bold" }}>Pages: </span>
          <Form.Control
            value={pageCount}
            onChange={({ target: { value } }) => setPageCount(value)}
          ></Form.Control>
          <br />
          <span style={{ fontWeight: "bold" }}>Type: </span>
          <Form.Control
            value={categories}
            onChange={({ target: { value } }) => setCategories(value)}
          ></Form.Control>
          <br />
          <span style={{ fontWeight: "bold" }}>Average Rating: </span>
          <Form.Control
            value={averageRating}
            onChange={({ target: { value } }) => setAverageRating(value)}
          ></Form.Control>
          <br />
          <span style={{ fontWeight: "bold" }}>ISBN: </span>
          <Form.Control
            value={getISBN13(industryIdentifiers)}
            onChange={({ target: { value } }) =>
              setIndustryIdentifiers(setISBN13(industryIdentifiers, value))
            }
          ></Form.Control>
          <br />
          <span style={{ fontWeight: "bold" }}>Description: </span>
          <div
            style={{
              overflowY: "scroll",
              height: "10em",
            }}
          >
            {
              <Form.Control
                value={description}
                as="textarea"
                rows={5}
                onChange={({ target: { value } }) => setDescription(value)}
              ></Form.Control>
            }
            <br />
          </div>
          <br /> <br />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="danger">
          <CloseIcon />
        </Button>
        <Button onClick={save} variant="success">
          <SaveIcon />
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default InfoPane;
