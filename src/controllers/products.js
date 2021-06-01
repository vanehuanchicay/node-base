const { response, request } = require('express');
const Products = require('../models/products');



const productGet = async (req=request, res = response) => {
  const products = await Products.find();
  console.log(products)
  res.json({
    products
  });
};

module.exports = productGet;
