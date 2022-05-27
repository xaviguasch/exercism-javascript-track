// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
function seeingDouble(deck) {
  return deck.map((card) => card * 2)
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
function threeOfEachThree(deck) {
  return deck
    .map((card) => {
      if (card === 3) {
        const newArr = [card, card, card]
        return newArr
      } else {
        return card
      }
    })
    .flat()
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
function middleTwo(deck) {
  return deck.filter((card) => card === deck[4] || card === deck[5])
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

function sandwichTrick(deck) {
  const firstCard = deck.shift()
  const lastCard = deck.pop()

  deck.splice(deck.length / 2, 0, lastCard, firstCard)

  return deck
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
function twoIsSpecial(deck) {
  return deck.filter((card) => card === 2)
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
function perfectlyOrdered(deck) {
  return deck.sort((a, b) => a - b)
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
function reorder(deck) {
  throw new Error('Implement the reorder function')
}

// ==================
// const deck = [1, 2, 3, 4, 10]
// console.log(seeingDouble(deck))
// ==================
// const deck = [1, 3, 9, 3, 7]
// console.log(threeOfEachThree(deck))
// ==================
// const deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(middleTwo(deck))
// ==================
// const deck = [1, 2, 3, 5, 6, 10]
// console.log(sandwichTrick(deck))
// ==================
// const deck = [1, 2, 3, 4, 10, 2]
// console.log(twoIsSpecial(deck))
// ==================
// const deck = [10, 1, 5, 3, 2, 8, 7]
// console.log(perfectlyOrdered(deck))
// ==================
