const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
  {
    categoryId: Number,
    categoryName: String,
  },
  { collection: "categories" }
);

module.exports = mongoose.model("Category", CategorySchema);
