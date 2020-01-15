// function greeter(person: any): any {
//   if (typeof person === "string") {
//     console.log("Hello, " + person)
//   }
//   if (typeof person === "number") {
//     console.log("We got a number instead of a string")
//   }
// }

// let user = "dfdfdf"
// greeter("Linda")
// greeter(0)

let varName: string = "someString"
let someNum: number = 0
let someNums: number[] = [0]
let someNumss: Array<number> = [0]

// @ts-ignore
// let someVar: number | string = true

// someNum = 'Linda'

interface IPersonObject {
  name: string
  favoriteColor: string
  hobbies: string[]
  intake: number
  // drink?(amount: number): number
  drink(amount: number): number
}

const linda: IPersonObject = {
  name: "Linda",
  favoriteColor: "Yellow",
  intake: 1,
  hobbies: ["Sleeping", "coding", "Surviving"],
  drink(amount) {
    return this.intake + amount
  }
}

console.log(linda.drink(2))
