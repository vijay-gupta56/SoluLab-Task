module.exports = (app) => {
  const product = require("../controllers/product.controller.js");

  // Create a new Product
  app.post("/create", product.create);

  // Retrieve all Products
  app.get("/readAll", product.findAll);

  // Retrieve a single Product with productId
  app.get("/read/:productId", product.findOne);

  // Update a Product with productId
  app.put("/update/:productId", product.update);

  // Delete a Product with productId
  app.delete("/delete/:productId", product.delete);
};
