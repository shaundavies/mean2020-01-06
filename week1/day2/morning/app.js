const objectLiteral = {
  key1: "val1",
  key2: "val2",
  method: function() {
    console.log("method on object literal")
  }
}

objectLiteral.key3 = "val3"

// console.log(objectLiteral)

function HumanFactory(firstName, lastName, height) {
  return {
    firstName: firstName,
    lastName: lastName,
    // shorthand: can omit the colon when param name is same as key name
    height,
    fullName: function() {
      const fullName = `${this.firstName} ${this.lastName}`
      console.log(fullName)
      return fullName
    }
  }
}

const shaun = HumanFactory("Shaun", "Of the dead", "6.3")

// shaun.fullName()

function HumanConstructor(firstName, lastName, height) {
  this.firstName = firstName
  this.lastName = lastName
  this.height = height

  // fullName will be copied to every instance (more memory used)
  // this.fullName = function() {
  //   console.log(`${this.firstName} ${this.lastName} FROM INSTANCE`)
  // }
}

HumanConstructor.prototype.fullName = function() {
  console.log(`${this.firstName} ${this.lastName} FROM PROTOTYPE`)
}

// HumanConstructor.prototype.hairColor = "black"

const daesung = new HumanConstructor("Daesung", "Chris", "6")
const adam = new HumanConstructor("Adam", "Hunter", "5.11")

// console.log(daesung)
// console.log(adam)
// console.log(HumanConstructor)

class Human {
  constructor(firstName, lastName, height) {
    this.firstName = firstName
    this.lastName = lastName
    this.height = height
  }

  fullName() {
    console.log(`${this.firstName} ${this.lastName} FROM CLASS`)
  }
}

const juan = new Human("Juan", "One", "5.6")
juan.fullName()
