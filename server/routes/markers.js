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
    //tranform markers into an object. Easier to handle in the reducer
    const markersObj = {};
    markers.forEach((marker) => (markersObj[marker._id] = marker));
    res.status(200).json({ status: 200, markers: markersObj });
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
  const { votes } = req.body;

  try {
    const marker = await Marker.findById(_id);
    marker.votes = marker.votes + votes;

    await marker.save();
    res.status(200).json({
      status: 200,
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

module.exports = router;
