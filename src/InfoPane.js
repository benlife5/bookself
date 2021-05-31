import { Modal } from "react-bootstrap";
import { arrayToString } from "./utils";

function InfoPane(props) {
  const book = props.book.volumeInfo;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Book Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span style={{ fontWeight: "bold" }}>Title: </span>
        {book.title} <br />
        <span style={{ fontWeight: "bold" }}>Authors: </span>
        {arrayToString(book.authors)} <br />
        <span style={{ fontWeight: "bold" }}>Date Published: </span>
        {book.publishedDate} <br />
        <span style={{ fontWeight: "bold" }}>Pages: </span>
        {book.pageCount} <br />
        <span style={{ fontWeight: "bold" }}>Type: </span>
        {book.categories} <br />
        <span style={{ fontWeight: "bold" }}>Average Rating: </span>
        {book.averageRating} <br />
        <span style={{ fontWeight: "bold" }}>ISBN-13: </span>
        {book.industryIdentifiers.map((id) => {
          if (id.type === "ISBN_13") return id.identifier;
          return null;
        })}
        <br />
        <span style={{ fontWeight: "bold" }}>Description: </span>
        <div
          style={{
            overflowY: "scroll",
            height: "10em",
          }}
        >
          {<span dangerouslySetInnerHTML={{ __html: book.description }}></span>}
          <br />
        </div>
        <br /> <br />
      </Modal.Body>
    </Modal>
  );
}

export default InfoPane;
