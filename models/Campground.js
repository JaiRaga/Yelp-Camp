const mongoose = require("mongoose");
const { Schema } = mongoose;

const campgroundSchema = Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      required: true
    }
  ]
});

const Campground = mongoose.model("campground", campgroundSchema);

module.exports = Campground;
