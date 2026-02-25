// about the routes in the node js
const express = require("express");
const app = express();

//home route
app.get("/", (req, res) => {
  res.send("Welcome to our new Website ");
});

// get products
app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      label: "Hair Oil",
    },
    {
      id: 2,
      label: "Body Soap",
    },
    {
      id: 3,
      label: "Shower Jel ",
    },
  ];
  res.json(products);
});

// Dynamic route
app.get("/product/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const products = [
    {
      id: 1,
      label: "Hair Oil",
    },
    {
      id: 2,
      label: "Body Soap",
    },
    {
      id: 3,
      label: "Shower Jel ",
    },
  ];

  const getSingleProduct = products.find((product) => product.id === productId);

  if (getSingleProduct) {
    res.json(getSingleProduct);
  } else {
    res.status(404).send("You have entered incorrect product Id here");
  }
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
