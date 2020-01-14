const mongoose = require("mongoose")
const FoodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    cuisine: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)
// create an object that contains methods for mongoose to interface with MongoDB
mongoose.model("Food", FoodSchema)
