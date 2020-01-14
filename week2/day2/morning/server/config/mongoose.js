const mongoose = require("mongoose")
// file system
// const fs = require("fs")
// const path = require("path")

mongoose.connect("mongodb://localhost/mongoose_demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// require a single model
require("../models/food")
// require("../models/user")
// require("../models/shoppingCard")

// const modelsPath = path.join(__dirname, "../models")

// programmatically require all .js files that are in models folder
// sync rather than async
// fs.readdirSync(modelsPath).forEach(file => {
//   if (file.includes(".js")) {
//     require(path.join(modelsPath, file))
//   }
// })
