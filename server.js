const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "menu-tbk.jpg"));
});

app.listen(port, () => {
  console.log("Server started on port 3000");
});
