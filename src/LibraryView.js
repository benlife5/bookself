import { Card, ListGroup } from "react-bootstrap";
import { useContext, useEffect } from "react";
import BookList from "./BookList";
import { LibraryContext } from "./LibraryContext";
import { getLibrary } from "./utils";

function LibraryView() {
  const { library, setLibrary } = useContext(LibraryContext);
  useEffect(() => {
    console.log("here");
    // getLibrary().then((library) => {
    //   console.log(library);
    //   setLibrary(library);
    // });
  }, []);
  // console.log(getLibrary());

  return (
    <Card style={{ width: "40rem", margin: "auto" }}>
      <Card.Body>
        <Card.Title>Library</Card.Title>
      </Card.Body>
      <ListGroup />
      {library && library.length > 0 && (
        <BookList bookData={library} view="library" />
      )}
      {library && library.length === 0 && (
        <Card.Body>Add books to get started!</Card.Body>
      )}
    </Card>
  );
}

export default LibraryView;
