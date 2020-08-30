const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

const Marker = require("../models/marker-model");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/assets");
  },
  filename: function (req, file, cb) {
    const filename =
      file.fieldname + "-" + Date.now() + path.extname(file.originalname);
    cb(null, filename);
  },
});
const upload = multer({ storage });

router.get("/", async (req, res) => {
  try {
    const markers = await Marker.find().exec();

    const markersObj = {};
    if (markers.length > 0) {
      //tranform markers into an object. Easier to handle in the reducer

      markers.forEach((marker) => {
        markersObj[marker._id] = marker;
      });
    }

    res
      .status(200)
      .json({ status: 200, markers: markers.length > 0 ? markersObj : null });
  } catch (err) {
    console.log("ERRORERROR::", err.name, err.message);
    return res
      .status(500)
      .json({ status: 500, message: "internal server error" });
  }
});

router.post("/", upload.single("marker-pic"), async (req, res) => {
  const url = req.protocol + "://" + req.get("host");
  const { lat, lng, title, description, userId } = req.body;

  try {
    const marker = new Marker({
      _id: new mongoose.Types.ObjectId(),
      lat: Number(lat),
      lng: Number(lng),
      title,
      description,
      userId,
      url: url + "/images/" + req.file.filename,
    });
    await marker.save();
    console.log(marker);
    res.status(201).json({
      status: 201,
      marker,
      message: "success",
    });
  } catch (err) {
    console.log("ERRORERROR::", err.name, err.message);
    return res.status(500).json({
      status: 500,
      message: "Oops it didn't work - Please try again.",
    });
  }
});

router.put("/:_id", async (req, res) => {
  const { _id } = req.params;
  const { action, userId } = req.body;

  try {
    // add user according to her new vote and remove her from another vote if any
    // options: { multi: true, new: true } allow multiple xriteria for update and retrieve document with updates
    // vote
    let marker = null;
    
    if (action === "upvote") {
      marker = await Marker.findByIdAndUpdate(
        _id,
        {
          $unset: { [`downvoteUsers.${userId}`]: true },
          $set: { [`upvoteUsers.${userId}`]: true },
        },
        { multi: true, new: true }
      );
    } else if (action === "downvote") {
      // user already upvoted pin ?
      marker = await Marker.findByIdAndUpdate(
        _id,
        {
          $unset: { [`upvoteUsers.${userId}`]: true },
          $set: { [`downvoteUsers.${userId}`]: true },
        },
        { multi: true, new: true }
      );
    }

    res.status(200).json({
      status: 200,
      marker: marker,
      message: "success",
    });
  } catch (err) {
    console.log("ERRORERROR::", err.name, err.message);
    return res.status(500).json({
      status: 500,
      message: "Oops it didn't work - Please try again.",
    });
  }
});

module.exports = router;
