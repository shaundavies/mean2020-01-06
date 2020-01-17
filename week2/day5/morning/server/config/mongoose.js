const mongoose = require("mongoose")

// restful_tasks_demo is hardcoded
// in a bigger project you will use environmental variables
mongoose.connect("mongodb://localhost/restful_tasks_demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// require a single model
require("../models/task")
