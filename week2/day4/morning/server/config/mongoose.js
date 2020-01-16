const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/restful_tasks_demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// require a single model
require("../models/task")
