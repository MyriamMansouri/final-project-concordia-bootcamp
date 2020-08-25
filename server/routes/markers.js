const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Marker = require("../models/marker-model");

router.get("/", async (req, res) => {
  try {
    const markers = await Marker.find().exec()
    //tranform markers into an object. Easier to handle in the reducer
    const markersObj={};
    markers.forEach(marker => markersObj[marker._id] = marker) 
    res.status(200).json({ status: 200, markers:markersObj });
  } catch (err) {
    console.log("ERRORERROR::", err.name, err.message);
    return res
      .status(500)
      .json({ status: 500, message: "internal server error" });
  }
});

router.post("/", async (req, res) => {
  const { lat, lng, userId } = req.body;
  try {
    const marker = new Marker({
      _id: new mongoose.Types.ObjectId(),
      lat,
      lng,
      userId
    });
    await marker.save();
    res.status(201).json({
      status: 201,
      marker,
      message: "success",
    });
  } catch (err) {
    console.log("ERRORERROR::", err.name, err.message);
    return res
      .status(500)
      .json({ status: 500, message: "internal server error" });
  }
});

module.exports = router;
