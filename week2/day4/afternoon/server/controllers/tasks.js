const Task = require("mongoose").model("Task")

module.exports = {
  index(req, res) {
    Task.find()
      .then(tasks => {
        res.json({ tasks })
      })
      .catch(err => {
        res.json({ err })
      })
  },
  taskById(req, res) {
    console.log("index function")
    console.log("req.params: ", req.params)
    Task.find({ _id: req.params.someId })
      .then(task => {
        res.json({ task })
      })
      .catch(err => {
        res.json({ err })
      })
  },
  create(req, res) {
    Task.create(req.body)
      .then(task => {
        res.json(task)
      })
      .catch(err => {
        res.json(err)
      })
  },
  update(req, res) {
    Task.findOneAndUpdate(
      {
        _id: req.params.id
      },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          completed: req.body.completed
        }
      }
    )
      .then(task => {
        res.json(task)
      })
      .catch(err => {
        res.json(err)
      })
  },
  delete(req, res) {
    Task.findByIdAndDelete({ _id: req.params.id })
      .then(task => {
        res.json(task)
      })
      .catch(err => {
        res.json(err)
      })
  }
}
