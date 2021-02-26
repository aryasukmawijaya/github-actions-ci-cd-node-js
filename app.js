//app.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/arya", (req, res) => {
  res.status(200).send("hello arya");
});

app.get("/youtube", (req, res) => {
  res.status(200).send("hello youtube");
});

module.exports = app;