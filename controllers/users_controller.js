const User = require("../models/user");

module.exports.createUser = (req, res) => {
  if (req.body.confirm_password !== req.body.password) {
    return res.render("user_sign_up", {
      title: "Lazyvibe | Sign Up",
      isPasswordNotMatch: true,
      isEmailExist: false,
    });
  }
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        User.create({
          email: req.body.email,
          password: req.body.password,
          name: req.body.name,
        })
          .then((user) => res.redirect("/users/sign-in"))
          .catch((err) => console.log("error on creating user " + err));
      } else {
        return res.render("user_sign_up", {
          title: "Lazyvibe | Sign Up",
          isPasswordNotMatch: false,
          isEmailExist: true,
        });
      }
    })
    .catch((err) => {
      console.log("error in finding user in signing up", err);
      return;
    });
};
//! render sign up page
module.exports.signUp = (req, res) => {
  return res.render("user_sign_up", {
    title: "Lazyvibe | Sign Up",
    isPasswordNotMatch: false,
    isEmailExist: false,
  });
};
//! render sign in page
module.exports.signIn = (req, res) => {
  return res.render("user_sign_in", {
    title: "Lazyvibe | Sign In",
    isPasswordNotMatch: false,
  });
};

module.exports.profile = (req, res) => {
  if (req.cookies.user_id) {
    User.findById(req.cookies.user_id)
      .then((user) => {
        return res.render("profile", { userName: user.name });
      })
      .catch((err) => console.log("err: ", err));
  } else res.redirect("/users/sign-in");
};
module.exports.post = (req, res) => {
  return res.end("<h1>User posts</h1>");
};

module.exports.createSession = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        if (user.password === req.body.password) {
          res.cookie("user_id", user.id);
          return res.render("profile", { userName: user.name });
        } else {
          return res.render("user_sign_in", {
            title: "Lazyvibe | Sign In",
            isPasswordNotMatch: true,
          });
        }
      } else {
        return res.redirect("back");
      }
    })
    .catch((err) => {
      console.log("error in finding user in signing in", err);
      return;
    });
};
