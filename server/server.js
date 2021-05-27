const express = require("express");
const cors = require("cors");
const db = require("./firebase.js");
const app = express();
app.use(cors());
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Bookshelf Server Active");
});

app.listen(PORT, () => {
  console.log("Bookshelf Server Running on port " + PORT);
});
