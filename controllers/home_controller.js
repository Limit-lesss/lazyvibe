module.exports.home = (req, res) => {
  return res.render("home");
};
module.exports.user = (req, res) => {
  return res.end("<h1>user</h1>");
};
