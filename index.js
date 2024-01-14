const express = require("express");
const cookieParser = require("cookie-parser");
const port = 8000;
const db = require("./config/mongoose");
const User = require("./models/user");
//! used for session cookie
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");
const MongoStore = require("connect-mongo");
const app = express();

app.use(cookieParser());
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));

//! mongo store is used to store the session cookie in the db
app.use(
  session({
    name: "lazyvibe",
    //! change the secret before deployment in the production mode
    secret: "iamgenius",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost/auth_db",
      autoRemove: "disabled",
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

//! use express router
app.use("/", require("./routes/index"));

app.listen(port, (err) => {
  if (err) {
    console.log("Error on running the server!", err);
    return;
  }
  console.log(`Server is running on port: ${port}`);
});
