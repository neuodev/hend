const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("*", function (req, res) {
  res.redirect("/");
});

const PORT = 9000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
