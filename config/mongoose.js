const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/auth_db");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => console.log("Successfully connected to database "));
