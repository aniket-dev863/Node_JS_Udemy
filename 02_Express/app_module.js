const express = require("express");
const app = express();
// applicaation level setting
app.set("view engine", "ejs");
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send(`Something went wrong`);
});

//
app.get("/api/data", (req, res) => {
  req.json({
    Name: "Aniket",
    Data: req.body,
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Sever is listeneing to port ${PORT}`);
});
