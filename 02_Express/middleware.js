const express = require("express");
const app = express();
const myFirstMiddleWare = (req, res, next) => {
  console.log(`This middleware will run first on every request`);
  next();
};

app.use(myFirstMiddleWare);

app.get("/", (req, res) => {
  res.send("Welcome to my webpage");
});

app.get("/about-us", (req, res) => {
  res.send(
    "Im a Upcomming node js developer working at the VIT Vellore Libarary .",
  );
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is listeneing at the port ${3000}`);
});
