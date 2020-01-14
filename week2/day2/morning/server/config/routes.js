const foodsController = require("../controllers/foods")

module.exports = function(app) {
  app.get("/", foodsController.index)
  app.post("/food", foodsController.food)
}
