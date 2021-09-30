module.exports = (app) => {
  const category = require("../controllers/category.controller.js");

  // Create a new Category
  app.post("/create", category.create);

  // Retrieve all Categorys
  app.get("/readAll", category.findAll);

  // Retrieve a single Category with categoryId
  app.get("/read/:categoryId", category.findOne);

  // Update a Category with categoryId
  app.put("/update/:categoryId", category.update);

  // Delete a Category with categoryId
  app.delete("/delete/:categoryId", category.delete);
};
