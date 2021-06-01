const { Schema, model } = require("mongoose");

const ProductSchema = Schema({
  brand: { type: String },
  description: { type: String },
  image: { type: String },
  price: { type: String },
});

module.exports = model("Products", ProductSchema);
