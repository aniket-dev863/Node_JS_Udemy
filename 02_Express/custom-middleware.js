// this is a custom middleware
const express = require("express");
const app = express();

const requestTimeStampLogger = (req, res, next) => {
  const timeStamp = new Date().toISOString();
  console.log(
    `Time Stamp :${timeStamp} Request Method :${req.method} Request URL :${req.url}`,
  );
  next();
};
app.use(requestTimeStampLogger);

app.get("/", (req, res) => {
  res.send(`This is our Home page `);
});

app.get("/about-us", (req, res) => {
  res.send(`Im a Upcomming node js devloper from Pune Maharashtra . `);
});

app.get("/api/details", (req, res) => {
  const devDetails = [
    {
      Name: "Aniket Vyavahare",
      YOE: 3.5,
    },
    {
      Name: "Ankit Khaja",
      YOE: 4,
    },
    {
      Name: "Anish Jainamore",
      YOE: 5,
    },
    {
      Name: "Api Kashyap",
      YOE: 4,
    },
  ];
  res.json(devDetails);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(
    `This is a Server with custom MiddleWare running on Port : ${PORT}`,
  );
});
