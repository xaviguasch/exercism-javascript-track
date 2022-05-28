// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
function cardTypeCheck(stack, card) {
  let count = 0

  stack.forEach((c) => {
    if (c === card) {
      count++
    }
  })

  return count
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
function determineOddEvenCards(stack, type) {
  throw new Error('Implement the determineOddEvenCards function')
}

// ==================
// 1 -
const cardType = 3
console.log(cardTypeCheck([1, 2, 3, 4], cardType))

// ==================
// 2 -

// ==================
