const messagesController = require("../controllers/messages")

module.exports = function(app) {
  app.get("/", messagesController.index)
  app.post("/messages", messagesController.create)
  app.post("/messages/:commentId/comment", messagesController.createComment)
}
