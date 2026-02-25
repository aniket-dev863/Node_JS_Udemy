const http = require("node:http");
const fs = require("node:fs");
const server = http.createServer((req, res) => {
  const method = req.method;
  const path = req.url;
  const log = `\n[${Date.now()}]:${method} ${path}`;
  fs.appendFileSync("log.txt", log, "utf-8");
  switch (method) {
    case "GET":
      switch (path) {
        case "/":
          res.writeHead(200).end(`Welcome to the server`);
          break;
        case "/contact-us":
          res
            .writeHead(200)
            .end(`Contact us at aniketvyavahare89301@gmail.com`);
          break;

        case "/tweet":
          res.writeHead(200).end(`{
                            tweet:1,
                            tweet:2,
                            tweet:3
                        }`);
          break;

        default:
          res
            .writeHead(404)
            .end(`Error Page not found , you typed a wrong url here.`);
          break;
      }

      break;

    case "POST":
      switch (path) {
        case "/tweet":
          res.writeHead(201).end(`Tweet Succesfull here .`);
          break;

        default:
          res.writeHead(404).end(`Page Does't exist. Wrong URL`);
          break;
      }
      break;
    default:
      res.writeHead(404).end(`Your're lost`);
      break;
  }
});
server.listen(8000, () => {
  console.log(`Listening to port 8000 on the server .`);
});
