const express = require("express");
const port = 8000;
const db = require("./config/mongoose");
const User = require("./models/user");

const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
//! use express router
app.use("/", require("./routes/index"));
app.use(express.urlencoded({ extended: true }));

app.listen(port, (err) => {
  if (err) {
    console.log("Error on running the server!", err);
    return;
  }
  console.log(`Server is running on port: ${port}`);
});
