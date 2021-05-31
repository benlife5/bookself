import { Button, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import {
  addToLibrary,
  removeFromLibrary,
  arrayToString,
  bookInLibrary,
  getLibrary,
} from "./utils";
import InfoPane from "./InfoPane";
import EditPane from "./EditPane";
import InfoIcon from "@material-ui/icons/Info";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";

function BookList({ bookData, view, forceUpdate }) {
  const [showInfo, setShowInfo] = useState(false);
  const [selectedBook, setSelectedBook] = useState();
  const [showEdit, setShowEdit] = useState(false);
  const [library, setLibrary] = useState();

  useEffect(() => {
    getLibrary().then((data) => setLibrary(data));
  });

  return (
    <div className="bookList">
      {showInfo && (
        <InfoPane
          show={showInfo}
          book={selectedBook}
          onHide={() => setShowInfo(false)}
        />
      )}
      {showEdit && (
        <EditPane
          show={showEdit}
          book={selectedBook}
          onHide={() => {
            setShowEdit(false);
            forceUpdate(true);
          }}
        />
      )}
      {bookData.map((book) => {
        return (
          <ListGroup key={book.id}>
            <ListGroup.Item
              key={book.id}
              style={{ display: "grid", gridTemplateColumns: "15% 60% 25%" }}
            >
              {/* Thumbnail */}
              <div style={{ textAlign: "center" }}>
                {book.volumeInfo.imageLinks !== undefined && (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt="Cover"
                    style={{
                      objectFit: "contain",
                      maxHeight: "5em",
                    }}
                  />
                )}
              </div>

              {/* Title + Author */}
              <div>
                <h4>{book.volumeInfo.title}</h4>
                <h6>{arrayToString(book.volumeInfo.authors)}</h6>
              </div>

              {/* Buttons */}
              <div
                style={{
                  textAlign: "right",
                  marginLeft: "2%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "5%",
                }}
              >
                <Button
                  onClick={() => {
                    setSelectedBook(book);
                    setShowInfo(true);
                  }}
                >
                  <InfoIcon />
                </Button>

                {view === "library" && (
                  <Button
                    onClick={() => {
                      setSelectedBook(book);
                      setShowEdit(true);
                    }}
                  >
                    <EditIcon />
                  </Button>
                )}

                {!bookInLibrary(book.id, library) && (
                  <Button
                    onClick={() => addToLibrary(book.id)}
                    variant="success"
                  >
                    <AddIcon />
                  </Button>
                )}

                {bookInLibrary(book.id, library) && (
                  <Button
                    onClick={() =>
                      removeFromLibrary(book.id).then(forceUpdate(true))
                    }
                    variant="danger"
                  >
                    <CloseIcon />
                  </Button>
                )}
              </div>
            </ListGroup.Item>
          </ListGroup>
        );
      })}
    </div>
  );
}

export default BookList;
