const mongoose = require("mongoose");

const twitterSchema = mongoose.Schema({
  displayName: String,
  userName: String,
  verified: { type: Boolean, default: false },
  text: String,
  image: String,
  avatar: String,
  likes: { type: String, default: "0" },
});

module.exports = mongoose.model("Posts", twitterSchema);
