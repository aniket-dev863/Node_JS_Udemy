const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("Error", (err) => {
  console.error(`Error :${err.message}`);
});

eventEmitter.emit("Error", new Error(`(404)  page not found `));
