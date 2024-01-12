module.exports.home = (req, res) => {
  return res.render("home", { title: "Lazyvibe" });
};
module.exports.user = (req, res) => {
  return res.send("<h1>user</h1>");
};
