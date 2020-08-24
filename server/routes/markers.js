const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Marker = require("../models/marker-model");

router.get("/", async (req, res) => {
  try {
    const markers = await Marker.find().exec()
    res.status(200).json({ status: 200, markers });
  } catch (err) {
    console.log("ERRORERROR::", err.name, err.message);
    return res
      .status(500)
      .json({ status: 500, message: "internal server error" });
  }
});

router.post("/", async (req, res) => {
  const { lat, lng } = req.body;
  try {
    const marker = new Marker({
      _id: new mongoose.Types.ObjectId(),
      lat,
      lng,
    });
    await marker.save();
    res.status(201).json({
      status: 201,
      marker: { lat, lng },
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
