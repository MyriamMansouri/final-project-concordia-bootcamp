const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const passport = require("passport");
const User = require("./models/user");

const getUsers = () => {};

const getUser = (req, res) => {
  console.log(req.session.passport);
  res.send(req.user);
};

const handleSignup = async (req, res) => {
  const { password, name, email } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({
      status: 201,
      user: {
        name,
        email,
      },
      message: "success",
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      user: {
        name,
        email,
      },
      message: "Cannot process the request",
    });
  }
};

const handleLogin = async (req, res) => {
  passport.authenticate("local", function (err, user, message) {
    if (err) {
      return res
        .status(500)
        .json({ status: 500, message: "internal server error" });
    }

    if (!user) {
      return res.status(401).json({ status: 401, message });
    }

    req.login(user, (err) => {
      if (!err) {
        res.status(200).json({
          status: 200,
          user,
          message: "success",
        });
      } else {
        return res
          .status(500)
          .json({ status: 500, message: "internal server error" });
      }
    });
  })(req, res);
};

const handleLogout = (req, res) => {
  req.logout();
  res.status(200).json({ status: 200, message: "success" });
};

module.exports = { getUsers, getUser, handleSignup, handleLogin, handleLogout };
