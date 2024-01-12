const User = require("../models/user");

module.exports.createUser = (req, res) => {
  User.create({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
  })
    .then((user) => res.send("This is an alert message!"))
    .catch((err) => console.log("error on creating user " + err));
};
//! render sign up page
module.exports.signUp = (req, res) => {
  return res.render("user_sign_up", { title: "Lazyvibe | Sign Up" });
};
//! render sign in page
module.exports.signIn = (req, res) => {
  return res.render("user_sign_in", { title: "Lazyvibe | Sign In" });
};

module.exports.profile = (req, res) => {
  return res.end("<h1>User profile</h1>");
};
module.exports.post = (req, res) => {
  return res.end("<h1>User posts</h1>");
};
