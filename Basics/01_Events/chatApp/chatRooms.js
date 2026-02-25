const EventEmitter = require("node:events");
class ChatRooms extends EventEmitter {
  constructor() {
    super();
    this.users = new Set();
  }
  join(user) {
    this.users.add(user);
    this.emit("join", user);
  }
  sendMessage(user, message) {
    if (this.users.has(user)) {
      this.emit("sendMessage", user, message);
    } else {
      console.log(`${user} is not in the cat`);
    }
  }
  leave(user) {
    if (this.users.has(user)) {
      this.users.delete(user);
      this.emit("userLeft", user);
    } else {
      console.log(`${user} is not the part of the chat`);
    }
  }
}
module.exports = ChatRooms;
