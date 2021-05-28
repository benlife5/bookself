import { Modal, Button } from "react-bootstrap";
const parser = new DOMParser();

function InfoPane(props) {
  const book = props.show;
  console.log(
    parser.parseFromString(book.volumeInfo.description, "text/html").body
  );
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
        {book.volumeInfo.title} <br />
        <span style={{ fontWeight: "bold" }}>Authors: </span>
        {book.volumeInfo.authors} <br />
        <span style={{ fontWeight: "bold" }}>Date Published: </span>
        {book.volumeInfo.publishedDate} <br />
        <span style={{ fontWeight: "bold" }}>Pages: </span>
        {book.volumeInfo.pageCount} <br />
        <span style={{ fontWeight: "bold" }}>Type: </span>
        {book.volumeInfo.categories} <br />
        <span style={{ fontWeight: "bold" }}>Average Rating: </span>
        {book.volumeInfo.averageRating} <br />
        <span style={{ fontWeight: "bold" }}>ISBN: </span>
        {book.volumeInfo.industryIdentifiers.map(
          (id) => id.type + ": " + id.identifier + " "
        )}{" "}
        <br />
        <span style={{ fontWeight: "bold" }}>Description: </span>
        <div
          style={{
            overflowY: "scroll",
            height: "10em",
          }}
        >
          {
            <span
              dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }}
            ></span>
          }
          <br />
        </div>
        <br /> <br />
        {/* <p>{JSON.stringify(book.volumeInfo)}</p> */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default InfoPane;
