const express = require("express")
const app = express()
const mongoose = require("mongoose")

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
// req.body will be undefined without this
app.use(express.urlencoded({ extended: true }))

mongoose.connect("mongodb://localhost/mongoose_demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

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
const Food = mongoose.model("Food", FoodSchema)

app.get("/", (req, res) => {
  Food.find()
    .sort({ _id: -1 })
    .then(foods => {
      console.log(foods)
      res.render("index", { foods })
    })
    .catch(err => {
      console.log(err)
      res.render("index", { foods: [] })
    })
})

app.post("/food", (req, res) => {
  // create food
  // console.log(req.body)

  Food.create(req.body)
    // .then(() => res.redirect("/"))
    .catch(err => {
      console.log(err)
      // res.redirect("/")
    })
    .finally(() => res.redirect("/"))
})

app.listen(3000, () => console.log("listening on port 3000"))
