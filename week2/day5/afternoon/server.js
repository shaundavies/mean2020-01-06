const express = require("express")
const app = express()
const path = require("path")

app.use(express.json()) // enables json to be received

app.use(express.static(path.join(__dirname, "public/dist/public")))

require("./server/config/mongoose")
require("./server/config/routes")(app)

app.listen(3000, () => console.log("listening on port 3000"))
