const mongoose = require("mongoose");
//
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

  imgId:String,
  title: String,
  description: String,
  userId: String,

  upvoteUsers: {
    type:Object,
    default:{}
  },

  downvoteUsers: {
    type:Object,
    default:{}
  }


});

module.exports = mongoose.model("Marker", markerSchema, "markers");
