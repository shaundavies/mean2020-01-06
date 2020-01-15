const Message = require("mongoose").model("Message")
const Comment = require("mongoose").model("Comment")

module.exports = {
  index(_req, res) {
    Message.find()
      .then(messages => {
        console.log("here are the messages", messages)
        // res.render("index", { messages })
        res.render("index", { messagesForEjs: messages })
      })
      .catch(err => {
        console.log(err)
        res.render("index", { messages: [] })
      })
  },
  create(req, res) {
    console.log("req.body: ", req.body)

    Message.create(req.body)
      .then(message => {
        console.log("here is the message", message)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        res.redirect("/")
      })
  },
  createComment(req, res) {
    console.log("req.params.commentId: ", req.params.commentId)
    // TODO
    // [x] create the comment
    // [x] find the message
    // [ ] push the comment into the comments of the message

    Comment.create(req.body)
      .then(comment => {
        console.log("here is the comment", comment)
        Message.findOneAndUpdate(
          { _id: req.params.commentId },
          { $push: { comments: comment } }
        )
          .then(message => console.log(message))
          .catch(err => console.log(err))
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        res.redirect("/")
      })
  }
}
