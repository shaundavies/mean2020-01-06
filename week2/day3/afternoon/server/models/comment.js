const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    comment: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = CommentSchema
// create an object that contains methods for mongoose to interface with MongoDB
mongoose.model("Comment", CommentSchema)
