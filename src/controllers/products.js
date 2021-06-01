const { response, request } = require("express");
const Products = require("../models/products");

const productGet = async (req, res = response) => {
  const body = req.body;
  const products = new Products(body);
  await products.save();
  res.json({
    products,
  });
};

module.exports = productGet;
