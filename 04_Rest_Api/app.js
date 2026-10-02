const express = require("express");
const app = express();

app.use(express.json());

let books = [
  {
    id: 1,
    title: "3 mistake of my life ",
  },
  {
    id: 2,
    title: "Deep Work Cal Newport",
  },
  {
    id: 3,
    title: "Designing Data Intensive Applications",
  },
  {},
];
