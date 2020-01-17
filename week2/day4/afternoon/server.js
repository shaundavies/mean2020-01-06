const express = require("express")
const app = express()
const path = require("path")
const fs = require("fs")

app.use(express.json()) // enables json to be received
// app.use((req, res, next) => {
//   // TODO reproduce express.static()

//   // req.path is the path that comes after localhost:3000
//   const filePath = path.join(__dirname, "client", "static", req.path)

//   // readFile's first arg is the path
//   // second arg is a callback that will be executed if error
//   // third arg is callback that will be executed if file is found
//   fs.readFile(
//     filePath,
//     () => next(),
//     file => {
//       // response part of req / res cycle
//       // this req / res cycle is complete when there is a response
//       res.sendFile(filePath)
//     }
//   )
// })

require("./server/config/mongoose")
require("./server/config/routes")(app)

app.listen(3000, () => console.log("listening on port 3000"))
