const express = require("express")
// console.log(express)

const app = express()
// console.log(app)

app.use(express.static(__dirname + "/static"))

app.set("views", __dirname + "/views")

app.set("view engine", "ejs")

app.get("/", (request, response) => {
  // simulate querying DB for users
  var users_array = [
    {
      name: "Michael",
      email: "michael@codingdojo.com",
      interests: ["coding", "debugging"]
    },
    {
      name: "Jay",
      email: "jay@codingdojo.com",
      interests: ["coding", "debugging"]
    },
    {
      name: "Brendan",
      email: "brendan@codingdojo.com",
      interests: ["coding", "debugging"]
    },
    {
      name: "Andrew",
      email: "andrew@codingdojo.com",
      interests: ["coding", "debugging"]
    }
  ]
  response.render("index", { users: users_array })
  // response.render("index", { users_array })
  // response.render("index", { users_array: users_array })
})

app.get("/someStatic", (request, response) => {
  console.log(__dirname)
  response.sendFile("/static/html/index.html", { root: __dirname })
})

app.listen(8000, () => console.log("listening on port 8000"))
