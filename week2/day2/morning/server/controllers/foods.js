const Food = require("mongoose").model("Food")

module.exports = {
  index(_req, res) {
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
  },
  food(req, res) {
    Food.create(req.body)
      // .then(() => res.redirect("/"))
      .catch(err => {
        console.log(err)
        // res.redirect("/")
      })
      .finally(() => res.redirect("/"))
  }
}
