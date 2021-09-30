const EventEmitter = require("events");
const myEmitter = new EventEmitter({ captureRejections: true });

myEmitter.on("event1", (a, b) => {
  console.log(a, b);

  if (a === undefined || b === undefined) {
    throw new Error("undefined args provided to event 1");
  }
});

myEmitter.on("event2", (a1, b1) => {
  if (!isNaN(a1) || !isNaN(b1)) {
    throw "Invalid args passed to event2";
  }

  console.log(a1 + b1);
});

myEmitter.on("error", console.error);

module.exports = myEmitter;
