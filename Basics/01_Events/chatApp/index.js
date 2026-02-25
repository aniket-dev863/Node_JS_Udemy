const ChatRoom = require("./chatRooms.js");

const chat = new ChatRoom();

chat.on("join", (user) => {
  console.log(`${user} has joined the chat . `);
});

chat.on("userLeft", (user) => {
  console.log(`${user} has left the chat`);
});
chat.on("sendMessage", (user, message) => {
  console.log(`${user} : ${message}`);
});

// Simulating the event here for now .
chat.sendMessage("Alice", "Alice is Sending the message");
chat.join("Alice");
chat.sendMessage("Alice", "Now Alice has joined the chatRoom");
chat.leave("Alice");
