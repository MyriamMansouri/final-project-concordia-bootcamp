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

const validatePassword = (password) => {
  const regex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*+?])(?=.{8,32})"
  );

  return password.match(regex);
};

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

    // validate password
    if (!validatePassword(password)) {
      return res.status(400).json({
        status: 400,
        message:
          "Your password must be between 8 and 32 characters. It requires at least one uppercase, one lowercase and one digit. Special characters are ! @ # $ % ^ & * + ?",
      });
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

    req.login(user, (err) => {
      if (!err) {
        res.status(201).json({
          status: 201,
          user,
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
      return res.status(404).json({ status: 404, ...message });
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

// get current logged in user
router.get("/user", (req, res) => {
  if (req.user) {
    res.status(200).json({
      status: 200,
      user: req.user,
    });
  } else {
    res.status(204).send();
  }
});

// get any user
router.get("/:_id", async (req, res) => {
  console.log('ici')
  const { _id } = req.params;
  try {
    const user = await User.findById(_id);
    res.status(200).json({
      status: 200,
      user,
      message: "success",
    });
  } catch (err) {
    res.status(404).json({
      status: 404,
      message: "User not found.",
    });
  }
});

router.put("/:_id", async (req, res) => {
  const { _id } = req.params;
  const { action, markerId } = req.body;

  try {
    let user = null;
    if (action === 'create') {
      user = await User.findByIdAndUpdate(
        _id,
        { $set: { [`createdMarkers.${markerId}`]: true } },
        { new: true }

      );
    }
    if (action === "upvote") {
      user = await User.findByIdAndUpdate(
        _id,
        {
          $unset: { [`downvotedMarkers.${markerId}`]: true },
          $set: { [`upvotedMarkers.${markerId}`]: true },
        },
        { multi: true, new: true }
      );
    } else if (action === "downvote") {
      // user already upvoted pin ?
      user = await User.findByIdAndUpdate(
        _id,
        {
          $unset: { [`upvotedMarkers.${markerId}`]: true },
          $set: { [`downvotedMarkers.${markerId}`]: true },
        },
        { multi: true, new: true }
      );
    }

    res.status(200).json({
      status: 200,
      user,
      message: "success",
    });
  } catch (err) {
    res.status(404).json({
      status: 404,
      message: "User not found.",
    });
  }
});

module.exports = router;
