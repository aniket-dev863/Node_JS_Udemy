const EventEmitter = require("node:events");
// this module is responsible for importing events .
const eventEmitter = new EventEmitter();
eventEmitter.on("greet", (username) => {
  console.log(`Hello and welcome  ${username} to  events in node js `);
});

eventEmitter.on("greet", (username) => {
  console.log(`Hey There Im also listening to greet like the earlier one `);
});
eventEmitter.emit("greet", "Aniket Vyavahare");
// here emit has the super power to automatically consider second thing as parameter to our callback function .
eventEmitter.once("pushnotify", () => {
  console.log(`This event will emit only once `);
});
// eventEmitter.emit("greet", "Aniket");
// eventEmitter.emit("greet", "Aniket");
// eventEmitter.emit("pushnotify");
// eventEmitter.emit("pushnotify");

const myListener = () => {
  console.log(`This is a test listener `);
};
eventEmitter.on("Test", myListener);
eventEmitter.emit("Test");

eventEmitter.removeListener("Test", myListener);
// Sometimes we want  to remove the listener from the event [ ];

// Testing if the event is removed or not .
eventEmitter.emit("Test");
// event listener removed successfully .

console.log(eventEmitter.listeners("greet"));
// list of all the listeners listening to the event [ ];
