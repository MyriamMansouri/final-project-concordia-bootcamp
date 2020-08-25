const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const morgan = require("morgan");
const flash = require("connect-flash");
const session = require("express-session");
const initializePassport = require("./passport-config");
const users = require('./routes/users')
const markers = require('./routes/markers')
require("dotenv").config();

const PORT = process.env.PORT || 5678;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch( err => console.log(err));

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
app.use('/api/users', users);
app.use('/api/markers', markers);

//404
app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "Sorry we couldn't find what you were looking for...",
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
