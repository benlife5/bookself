const express = require("express");
const cors = require("cors");
const db = require("./firebase.js");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Bookshelf Server Active");
});

app.get("/library", async (req, res) => {
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
    console.log(results.data);
    res.send(results.data);
  } catch (e) {
    res.send(e);
  }
});

app.post("/add", (req, res) => {
  
})

app.listen(PORT, () => {
  console.log("Bookshelf Server Running on port " + PORT);
});
