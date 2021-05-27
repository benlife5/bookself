const express = require("express");
const cors = require("cors");
const db = require("./firebase.js");
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

app.listen(PORT, () => {
  console.log("Bookshelf Server Running on port " + PORT);
});
