require('dotenv').config()
const { log } = require("console");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = 4000;
// app.use(bodyParser.urlencoded());

app.get("/", (req, res) => {
  //   res.send("<h1>Hello World!</h1>");
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/api/v1/login", (req, res) => {
  res.send("Done");
  console.log(req.body);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listing on port ${port}`);
});
