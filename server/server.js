const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const morgan = require("morgan");
const cors = require("cors");
const flash = require("connect-flash");
const session = require("express-session");
require("dotenv").config();
const initializePassport = require("./passport-config");

const {
  getUsers,
  getUser,
  handleSignup,
  handleLogin,
  handleLogout,
} = require("./handlers");

const PORT = process.env.PORT || 5678;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

initializePassport(passport);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("tiny"));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

function loggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/login");
  }
}

// users CRUD
app.get("/api/users", getUsers);
app.get("/api/users/:userId", loggedIn, getUser);

app.post("/signup", handleSignup);
app.post("/login", handleLogin);
app.get("/logout", handleLogout);

app.get("/user", (req, res) => {
  if (req.user) {
    res.status(200).json({
      status: 200,
      user: { name: req.user.name, email: req.user.email },
    });
  } else {
    res.status(204)
  }
});

app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "Sorry we couldn't find what you were looking for...",
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
