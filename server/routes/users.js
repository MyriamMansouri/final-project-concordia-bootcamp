const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const passport = require("passport");

const User = require("../models/user-model");

function loggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/login");
  }
}

//router.get("/", getUsers);
//router.get("/:userId", loggedIn, getUser);

router.post("/signup", async (req, res) => {
  const { password, name, email } = req.body;

  try {
    //check if existing user
    const existingUser = await User.findOne({ email }).exec();
    if (existingUser) {
      return res
        .status(400)
        .json({ status: 400, message: "User already exists" });
    }
    //create new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
    //auto loggin new user
    req.login(user, (err) => {
      if (!err) {
        res.status(201).json({
          status: 201,
          user: { name, email },
          message: "success",
        });
      } else {
        return res
          .status(500)
          .json({ status: 500, message: "internal server error" });
      }
    });
  } catch (err) {
    console.log("ERRORERROR::", err.name, err.message);
    res.status(500).json({
      status: 500,
      user: {
        name,
        email,
      },
      message: "Cannot process the request",
    });
  }
});

router.post("/login", async (req, res) => {
  passport.authenticate("local", (err, user, message) => {
    if (err) {
      console.log("ERRORERROR::", err.name, err.message);
      return res
        .status(500)
        .json({ status: 500, message: "internal server error" });
    }

    if (!user) {
      return res.status(404).json({ status: 404, message });
    }

    req.login(user, (err) => {
      if (!err) {
        res.status(200).json({
          status: 200,
          user,
          message: "success",
        });
      } else {
        console.log("ERRORERROR::", err.name, err.message);
        return res
          .status(500)
          .json({ status: 500, message: "internal server error" });
      }
    });
  })(req, res);
});

router.get("/logout", async (req, res) => {
  await req.logout();
  res.status(200).json({ status: 200, message: "success" });
});

router.get("/user", (req, res) => {
  if (req.user) {
    res.status(200).json({
      status: 200,
      user: { name: req.user.name, email: req.user.email },
    });
  } else {
    res.status(204);
  }
});

module.exports = router;
