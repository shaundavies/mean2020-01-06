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
var varName = "someString";
var someNum = 0;
var someNums = [0];
var someNumss = [0];
// @ts-ignore
var someVar = true;
var linda = {
    name: "Linda",
    favoriteColor: "Yellow",
    intake: 1,
    hobbies: ["Sleeping", "coding", "Surviving"],
    drink: function (amount) {
        return this.intake + amount;
    }
};
console.log(linda.drink(2));
