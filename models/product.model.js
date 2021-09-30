const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    productId: Number,
    productName: String,
    qtyPerUnit: Number,
    unitPrice: Number,
    unitInStock: Number,
    discontinued: Boolean,
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  },
  { collection: "products" }
);

module.exports = mongoose.model("Product", ProductSchema);
