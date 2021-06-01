const { response, request } = require("express");
const CartItems = require("../models/cartItems");

const cartItemsGet = (req, res = response) => {
  res.json({
    msg: "get cart api controlador",
  });
};

const cartItemsPost = async (req, res = response) => {
  const body = req.body;
  const cartItems = new CartItems(body);
  await cartItems.save();

  res.json({
    msg: "post cart api controlador",
    cartItems,
  });
};

const cartItemsPut = (req, res = response) => {
  res.json({
    msg: "put cart api controlador",
  });
};

module.exports = {
  cartItemsGet,
  cartItemsPost,
  cartItemsPut,
};
