const User = require("../models/user");

module.exports.home = (req, res) => {
  console.log(req.cookies);
  res.cookie("genius", 428);
  User.find({}).then((auth_list) => {
    return res.render("home", {
      title: "Lazyvibe",
      auth: auth_list,
    });
  });
};
module.exports.user = (req, res) => {
  return res.send("<h1>user</h1>");
};
