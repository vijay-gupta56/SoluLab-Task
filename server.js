require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Require Products routes
require("./routes/product.route.js")(app);

// Configure bodyparser to handle post requests
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// Configuring the database
const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}.`);
});
