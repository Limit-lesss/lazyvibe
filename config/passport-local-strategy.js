const passport = require("passport");
const User = require("../models/user");
const LocalStrategy = require("passport-local").Strategy;

//! authentication using passport
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    (email, password, done) => {
      //! find the user and establish the identity
      User.findOne({ email: email })
        .then((user) => {
          if (!user || password !== user.password) {
            console.log("Invalid Username or Password");
            return done(null, false);
          }
          return done(null, user);
        })
        .catch((err) => {
          console.log("Error in finding user --> Passport ");
          return done(err);
        });
    }
  )
);

//! serializing the user to decide which key is to be kept in the cookie
passport.serializeUser((user, done) => {
  return done(null, user.id);
});

//! deserializing the user from the key in the cookies
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      return done(null, user);
    })
    .catch((err) => {
      console.log("Error in finding user --> Passport ");
      return done(err);
    });
});
//! check if user is authenticated or not
passport.checkAuthentication = (req, res, next) => {
  // if the user is signed in , then pass on the request to the next fn (controller)
  if (req.isAuthenticated()) {
    return next();
  }
  // if user is not sign in
  return res.redirect("/users/sign-in");
};

passport.setAuthenticatedUser = (req, res, next) => {
  if (req.isAuthenticated()) {
    // req.user contains the current signed in user from the session cookie
    // we the just sending this to locals for the views
    res.locals.user = req.user;
  }
  next();
};

module.exports = passport;
