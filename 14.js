function rollDice(numberOfFaces) {
  return Math.floor(Math.random() * numberOfFaces) + 1
}
console.log(rollDice(6))
console.log(rollDice(20))
console.log(rollDice(100))
