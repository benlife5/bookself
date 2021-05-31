const express = require("express");
const cors = require("cors");
const db = require("./firebase.js");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8080;
let numRequests = 0;
const QUOTA = 50;

const printError = (error) => {
  console.log();
  console.log("=====ERROR=====");
  console.log(error);
};

const getLimits = () => {
  numRequests++;
  if (numRequests >= QUOTA) {
    throw Error("QUOTA EXCEEDED");
  }
};

app.get("/", (req, res) => {
  res.send("Bookshelf Server Active");
});

app.get("/library", async (req, res) => {
  getLimits();
  const { user } = req.query;
  const libraryRef = db.collection("users").doc(user).collection("library");
  const library = await libraryRef.get();
  let result = {};
  library.forEach((doc) => {
    result[doc.id] = doc.data();
  });
  res.send(result);
});

app.get("/search", async (req, res) => {
  const { q } = req.query;
  try {
    const results = await axios.get(
      "https://www.googleapis.com/books/v1/volumes",
      {
        params: {
          q: q,
          maxResults: 5,
          key: process.env.GOOGLE_BOOKS_KEY,
        },
      }
    );
    res.send(results.data);
  } catch (e) {
    printError(e);
    res.send(e);
  }
});

app.post("/add", async (req, res) => {
  const { userId, bookId } = req.body;

  const dbLocation = db
    .collection("users")
    .doc(userId)
    .collection("library")
    .doc(bookId);

  try {
    const currentDoc = await dbLocation.get();
    if (currentDoc.exists) {
      res.send({ success: false, message: "Book already in library" });
    } else {
      const book = await axios.get(
        "https://www.googleapis.com/books/v1/volumes/" + bookId
      );
      await dbLocation.set(book.data);

      res.send({ success: true, message: "Successfully added to library" });
    }
  } catch (e) {
    printError(e);
    res.send({
      success: false,
      message: "Error adding to library",
      error: JSON.stringify(e),
    });
  }
});

app.delete("/remove", async (req, res) => {
  const { userId, bookId } = req.body;

  const dbLocation = db
    .collection("users")
    .doc(userId)
    .collection("library")
    .doc(bookId);

  try {
    const currentDoc = await dbLocation.get();
    if (!currentDoc.exists) {
      res.send({ success: false, message: "Book is not library" });
    } else {
      await dbLocation.delete();
      res.send({ success: true, message: "Successfully deleted from library" });
    }
  } catch (e) {
    printError(e);
    res.send({
      success: false,
      message: "Error removing from library",
      error: JSON.stringify(e),
    });
  }
});

app.put("/edit", async (req, res) => {
  const { userId, bookId, bookData } = req.body;

  const dbLocation = db
    .collection("users")
    .doc(userId)
    .collection("library")
    .doc(bookId);

  try {
    const currentDoc = await dbLocation.get();
    if (!currentDoc.exists) {
      res.send({ success: false, message: "Book is not library" });
    } else {
      await dbLocation.set(bookData, { merge: true });
      res.send({ success: true, message: "Successfully updated" });
    }
  } catch (e) {
    printError(e);
    res.send({
      success: false,
      message: "Error updating",
      error: JSON.stringify(e),
    });
  }
});

app.listen(PORT, () => {
  console.log("Bookshelf Server Running on port " + PORT);
  console.log();
});
