const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/message_board_demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// require a single model
require("../models/message")
require("../models/comment")
