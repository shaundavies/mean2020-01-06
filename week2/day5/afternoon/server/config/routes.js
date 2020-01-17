const tasksController = require("../controllers/tasks")

// [x] GET: Retrieve all Tasks
// [x] GET: Retrieve a Task by ID
// [x] POST: Create a Task
// [x] PUT: Update a Task by ID
// [x] DELETE: Delete a Task by ID

module.exports = function(app) {
  app.get("/tasks", tasksController.index)
  app.get("/tasks/:id", tasksController.taskById)
  app.post("/tasks", tasksController.create)
  app.put("/tasks/:id", tasksController.update)
  app.delete("/tasks/:id", tasksController.delete)
}
