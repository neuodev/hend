const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("*", function (req, res) {
  res.redirect("/");
});

const PORT = 80;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
