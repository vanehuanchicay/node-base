const { Schema, model } = require("mongoose");

const CartSchema = Schema({
  brand: { type: String },
  description: { type: String },
  image: { type: String },
  price: { type: String },
});

module.exports = model("CartItems", CartSchema);
