//create a server with api return hello world
//import express
const express = require("express");
//create an express app
const app = express();
//create a route
app.get("/", (req, res) => {
  res.send("Hello World");
});
//listen on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
