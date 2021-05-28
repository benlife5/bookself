import { Button, ListGroup } from "react-bootstrap";
import { useState } from "react";
import { addToLibrary, removeFromLibrary } from "./utils";
import InfoPane from "./InfoPane";

function BookList({ bookData, view, forceUpdate }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="bookList">
      {showInfo && (
        <InfoPane show={showInfo} onHide={() => setShowInfo(false)} />
      )}
      {bookData.map((book) => {
        return (
          <ListGroup>
            <ListGroup.Item key={book.id} className="bookListRow">
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
                <h6>{book.volumeInfo.authors}</h6>
              </div>

              {/* Buttons */}
              <div
                style={{
                  textAlign: "right",
                  marginLeft: "2%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Button onClick={() => setShowInfo(book)}>Info</Button>

                {view === "search" && (
                  <Button onClick={() => addToLibrary(book.id)}>Add</Button>
                )}

                {view === "library" && (
                  <>
                    <Button>Edit</Button>
                    <Button
                      onClick={() =>
                        removeFromLibrary(book.id).then(forceUpdate(true))
                      }
                    >
                      Remove
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
