const util = require("util")

class Node {
  constructor(val) {
    this.val = val
    this.folder = val
    this.meta = val
    this.user = val
    this.prev = val
    this.next = null
  }
}
class SList {
  constructor(head = null) {
    this.head = head
    this.tail = tail
  }
  reverse() {
    console.log("starting reverse")
    console.log("checking if there is a head and a next")
    if (!this.head || !this.head.next) return this
    console.log("marking a current, probably should call it first")
    let current = this.head
    console.log("current: ", current)
    while (current.next) {
      console.log("current.next: ", current.next)
      const newHead = current.next
      console.log("newHead: ", newHead)
      // cut the newHead out from where it currently is
      current.next = current.next.next
      newHead.next = this.head
      this.head = newHead
    }
    return this
  }
}

console.log("Creating a list")
const duanesList = new SList()
console.log("Creating a node")
const duane = new Node("Duane")
console.log(duane)
console.log("Adding a node to the head of the list")
duanesList.head = duane
console.log(duanesList)
// {
//   head: {
//     val: 'Duane',
//     next: null
//   }
// }
const arslan = new Node("Arslan")
// duanesList.head.next = arslan
duane.next = arslan
console.log(duanesList)

// {
//   head: {
//     val: 'Duane',
//     next: {
//       val: 'Arslan',
//       next: null
//     }
//   }
// }

// {
//   head: {
//     val: 'Duane',
//     next: {
//       val: 'Arslan',
//       next: null
//     }
//   }
// }

const daesung = new Node("Daesung")
arslan.next = daesung
console.log(duanesList.head.next.next.next)

const shaun = new Node("Shaun")
daesung.next = shaun
const juan = new Node("Juan")
shaun.next = juan
const michelle = new Node("Michelle")
juan.next = michelle
const rolando = new Node("Rolando")
michelle.next = rolando
const bruno = new Node("Bruno")
rolando.next = bruno
// console.log(duanesList)

duanesList.reverse()
console.log(
  "Duane's List",
  util.inspect(duanesList, { showHidden: false, depth: null })
)
