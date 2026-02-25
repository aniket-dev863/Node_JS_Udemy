const EventEmitter = require("events");
class eventEmitter extends EventEmitter {
  sendMessage() {
    this.emit("event", "Aniket Vyavahare");
  }
}
const chat = new eventEmitter();
chat.on("event", (username) => {
  console.log(`Person ${username} is a very good person `);
});
chat.sendMessage();
