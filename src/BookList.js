import { Button, ListGroup } from "react-bootstrap";
import { useState } from "react";
import { addToLibrary, removeFromLibrary, arrayToString } from "./utils";
import InfoPane from "./InfoPane";
import EditPane from "./EditPane";
import { PlusLg, InfoLg, XLg, Pencil } from "react-bootstrap-icons";

function BookList({ bookData, view, forceUpdate }) {
  const [showInfo, setShowInfo] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
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
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt="Cover"
                  style={{
                    objectFit: "contain",
                    maxHeight: "5em",
                  }}
                />
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
                  <InfoLg />
                </Button>

                {view === "search" && (
                  <Button onClick={() => addToLibrary(book.id)}>
                    <PlusLg />
                  </Button>
                )}

                {view === "library" && (
                  <>
                    <Button
                      onClick={() => {
                        setSelectedBook(book);
                        setShowEdit(true);
                      }}
                    >
                      <Pencil />
                    </Button>
                    <Button
                      onClick={() =>
                        removeFromLibrary(book.id).then(forceUpdate(true))
                      }
                    >
                      <XLg />
                    </Button>
                  </>
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
