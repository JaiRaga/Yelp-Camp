const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = Schema({
  text: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
