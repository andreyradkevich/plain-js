var express = require("express");
var path = require("path");

const PORT = 8080;

var app = express();

app.use(express.static(path.join(__dirname)));

app.get("*", (_, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.listen(PORT, () => {
  console.log("server started 8080");
});
