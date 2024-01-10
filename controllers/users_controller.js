module.exports.profile = (req, res) => {
  return res.end("<h1>User profile</h1>");
};
module.exports.post = (req,res) => {
  return res.end("<h1>User posts</h1>")
}