const { response, request } = require("express");
const Discount = require("../models/discounts");

const discountsGet = async (req, res = response) => {
  const body = req.body;
  const discount = new Discount(body);
  await discount.save();
  res.json({
    discount,
  });
};

module.exports = discountsGet;

