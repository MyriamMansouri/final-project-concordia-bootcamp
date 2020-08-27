const mongoose = require("mongoose");

const markerSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  lat: {
    type: Number,
    required: true,
  },
  lng: {
    type: Number,
    required: true,
  },
  url:String,
  title: String,
  description: String,
  userId: String,
});

module.exports = mongoose.model("Marker", markerSchema, "markers");