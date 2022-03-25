const express = require("express");
const app = express();
const path = require("path");
PORT = process.env.PORT||3040;
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/home.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/register.html"));
});
app.get("/ingresa", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/views/ingresa.html"));
});

app.listen(PORT, () => {
  console.log("running on port 3040");
});
