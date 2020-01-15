const mongoose = require("mongoose")
const CommentSchema = require("./comment")

const MessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    comments: [CommentSchema]
  },
  { timestamps: true }
)
// create an object that contains methods for mongoose to interface with MongoDB
mongoose.model("Message", MessageSchema)
