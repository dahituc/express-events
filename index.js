const express = require("express");
const app = express();
const port = 3000;

const EventEmitter = require("./events");

app.get("/", (req, res) => {
  res.send("Hello World!");

  EventEmitter.emit("event1", "mono", "pono");
  EventEmitter.emit("event2", "alpha", "22");
});

app.get("/event1", (req, res) => {
  res.send("Event1");

  EventEmitter.emit("event1", "alpha");
});

app.get("/event2", (req, res) => {
  res.json({ data: "test json", success: true });
  EventEmitter.emit("event1", "alpha", 1234);
  EventEmitter.emit("event2", "alpha", 5, "gama");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
