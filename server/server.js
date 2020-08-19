if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require("express");
const passport = require("passport");
const flash = require('express-flash')
const session = require('express-session')

const { getUsers, getUser, handleSignup,handleLogin } = require("./handlers");

const PORT = process.env.PORT || 5678;

const app = express();
app.use(express.urlencoded({extended:false}))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized:false,
}))
app.use(passport.initialize())
app.use(passport.session())

// users CRUD
app.get("/api/users", getUsers);
app.get("/api/users/:userId", getUser);

app.post("/signup", handleSignup)
app.post("/login", handleLogin)
app.get("*", (req, res) => {
  res
    .status(404)
    .json({
      status: 404,
      message: "Sorry we couldn't find what you were looking for...",
    });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
