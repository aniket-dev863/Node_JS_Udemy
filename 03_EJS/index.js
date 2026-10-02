const express = require("express");
const path = require("path");
const { title } = require("process");
const app = express();

// set the view engine
app.set("view engine", "ejs");

//set the directory for the views
app.set("views", path.join(__dirname, "views"));

const products = [
  {
    id: 1,
    title: "Body Oil",
  },
  {
    id: 2,
    title: "Hair Oil",
  },
  {
    id: 3,
    title: "Shower jel",
  },
  {
    id: 4,
    title: "Chewing Gum",
  },
];

app.get("/", (req, res) => {
  res.render("home", { title: "home", products: "products" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port 3000`);
});
