
const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});


// Default route
app.use((req, res) => {
  res.status(404).send("I'm not created");
});

app.listen(3000, () => {
  console.log("Listening on port 3000 🚀");
});
