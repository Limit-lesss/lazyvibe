const User = require("../models/user");

module.exports.home = (req, res) => {
  User.find({}).then((auth_list) => {
    return res.render("home", {
      title: "Home Page",
    });
  });
};
module.exports.user = (req, res) => {
  return res.send("<h1>user</h1>");
};
