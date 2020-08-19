const bcrypt = require("bcrypt");
const passport = require("passport");

const initializePassport = require("./passport-config");

initializePassport(passport, (email) =>
  users.find((user) => user.email === email)
);

const users = [];

const getUsers = () => {};

const getUser = () => {};

const handleSignup = async (req, res) => {
  const { password, name, email } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({
      _id: "id",
      name,
      email,
      password: hashedPassword,
    });
    res.redirect("/login");
  } catch (err) {
    res.redirect("/signup");
  }
  console.log(users);
};

const handleLogin = (req, res) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    })
};

module.exports = { getUsers, getUser, handleSignup, handleLogin };
