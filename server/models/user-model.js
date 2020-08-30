const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: String,
  name: String,
  password: { type: String, select: false },
  avatarUrl: String,
  createdMarkers: { type: Object, default: {} },
  upvotedMarkers: { type: Object, default: {} },
  downvotedMarkers: { type: Object, default: {} },
});

module.exports = mongoose.model("User", userSchema, "users");
