// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Get the position (index) of the card in the given stack
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} position of the card in the stack
 */
function getCardPosition(stack, card) {
  return stack.findIndex((c) => c === card)

  // Alternate solution using indexOC
  // return stack.indexOf(card)
}

/**
 * Determine if the stack contains the card
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {boolean} true if card is in the stack, false otherwise
 */
function doesStackIncludeCard(stack, card) {
  return stack.includes(card)
}

/**
 * Determine if each card is even
 *
 * @param {number[]} stack
 *
 * @returns {boolean} true if all cards are even, false otherwise
 */
function isEachCardEven(stack) {
  return stack.every((card) => card % 2 === 0)
}

/**
 * Check if stack contains odd-value card
 *
 * @param {number[]} stack
 *
 * @returns {boolean} true if the array contains odd card, false otherwise
 */
function doesStackIncludeOddCard(stack) {
  throw new Error('Implement the doesStackIncludesOddCard function')
}

/**
 * Get the first odd card from the stack
 *
 * @param {number[]} stack
 *
 * @returns {number} the first odd value
 */
function getFirstOddCard(stack) {
  throw new Error('Implement the getFirstOddCard function')
}

/**
 * Determine the position of the first card that is even
 *
 * @param {number[]} stack
 *
 * @returns {number} position of the first card that is even
 */
function getFirstEvenCardPosition(stack) {
  throw new Error('Implement the getFirstEvenCardPosition function')
}

// ==================
// const card = 2
// console.log(getCardPosition([9, 7, 3, 2], card))
// ==================
// const card = 3
// console.log(doesStackIncludeCard([2, 3, 4, 5], card))
// ==================
console.log(isEachCardEven([2, 4, 6, 7]))
