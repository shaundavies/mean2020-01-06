// Assignment: Deck of Cards

// [x] Create a Card class. A card should have the following functionality:
// [x] Each Card should have a suit ("Hearts", "Clubs", "Diamonds", "Spades")
// [x] Each Card should have a string value (eg, "Ace", "Two", ...., "Queen", "King")
// [x] Each Card should have a numerical value (1-13)
// [x] Each Card should have a show method (log the card's information to the console)

class Card {
  constructor(suit, name, val) {
    this.suit = suit
    this.name = name
    this.val = val
  }
  show() {
    console.log(this)
  }
}

// const aceOfHearts = new Card("Hearts", "Ace", "1")
// aceOfHearts.show()

// [x] Create a Deck class. A deck should have the following functionality:
// [x] The Deck should contain the 52 standard Cards
// [x] The Deck should be able to shuffle
// [x] The Deck should be able to reset
// [x] The Deck should be able to deal a random Card
// [x] Deal should return the Card that was dealt and remove it from the Deck

class Deck {
  constructor() {
    this.cards = []
    this.reset()
  }

  reset() {
    const suits = ["Hearts", "Diamonds", "Spades", "Clubs"]
    const names = {
      1: "Ace",
      2: "Two",
      3: "Three",
      4: "Four",
      5: "Five",
      6: "Six",
      7: "Seven",
      8: "Eight",
      9: "Nine",
      10: "Ten",
      11: "Jack",
      12: "Queen",
      13: "King"
    }

    for (const suit of suits) {
      console.log("outter loop suit: ", suit)
      for (let i = 1; i <= 13; i++) {
        console.log("inner loop i: ", i)
        const newCard = new Card(suit, names[i], i)
        this.cards.push(newCard)
      }
    }
  }

  shuffle() {
    for (let i = 0; i < this.cards.length; ++i) {
      const randNum = Math.random()
      const randIdx = Math.floor(randNum * this.cards.length)

      const temp = this.cards[i]
      this.cards[i] = this.cards[randIdx]
      this.cards[randIdx] = temp
    }
  }

  deal() {
    const randNum = Math.random()
    const randIdx = Math.floor(randNum * this.cards.length)

    return this.cards.splice(randIdx, 1)
  }
}

// const bike = new Deck()
// bike.shuffle()
// console.log(bike.cards)
// const someCard = bike.deal()

// [x] Now create a Player class. A Player should have the following functionality:
// [x] The Player should have a name
// [x] The Player should have a hand (an array of cards taken from a Deck)
// [x]] The Player should be able to take a Card (use the deck.deal method)
// [x] The Player should be able to discard a Card

class Player {
  constructor(name) {
    this.name = name
    this.hand = []
  }

  take(deck) {
    const grabbedCard = deck.deal()
    this.hand.push(grabbedCard)
  }

  discard(suit, name) {
    for (let i = 0; i < this.hand.length; i++) {
      const card = this.hand[i]
      if (card.name === name && card.suit === suit) {
        return this.hand.splice(i, 1)
      }
    }
  }
}

const bike = new Deck()
bike.shuffle()

const rolando = new Player("lady gaga")

rolando.take(bike)
rolando.take(bike)
rolando.take(bike)
rolando.take(bike)
// console.log(rolando.hand)

const twodArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

const firstItem = twodArray[0]
console.log(firstItem)
const firstItemInFirstArray = firstItem[1]
console.log(firstItemInFirstArray)

console.log(twodArray[0][1])
