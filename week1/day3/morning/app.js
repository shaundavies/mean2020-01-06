console.log("hello from node")
// console.log("changez")
const data = require("./data.json")

// console.log(data)

console.log(data.name)
console.log(data.mass)

const something = require("./duane")

// console.log(something.greet())
something.add(2, 5)
