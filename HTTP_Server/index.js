const http = require("node:http");
// req -> All the data that is comming in the request ,methods , all the stuff user is trying to acess.
// res -> response to that request
const server = http.createServer(function (req, res) {
  console.log(`Im getting a incomming request at [${Date.now()}]`);
  switch (req.url) {
    case "/contact-us":
      res.writeHead(200);
      res.end(`Contact me at aniketvyavahare89301@gmail.com . !`);
      break;
    case "/about-me":
      res.writeHead(200);
      res.end(`I'/m a passionate software developer from India .`);
      break;
    default:
      res.writeHead(404);
      res.end(`Your are lost`);
      break;
  }
});
// servers can read our headers .

// by reading the headers we get the request from the server .

// binding this server to a port instance
server.listen(8000, () => {
  console.log(`HTTP server is up and running on port 8000 `);
});
