module.exports = {
  greet: function() {
    console.log("we are now using a module!")
    console.log("from inside greet function")
    return true
  },
  add: function(num1, num2) {
    console.log("num1: ", num1)
    console.log("num2: ", num2)
    console.log("the sum is:", num1 + num2)
  }
}

// function greet() {
//   console.log("we are now using a module!")
// }
