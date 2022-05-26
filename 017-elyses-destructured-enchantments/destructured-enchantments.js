/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
function getFirstCard(deck) {
  const [firstCard, ...restOfDeck] = deck

  return firstCard
}

/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */
function getSecondCard(deck) {
  const [first, second, ...restDeck] = deck

  return second
}

/**
 * Switch the position of the first two cards in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck with reordered cards
 */
function swapTopTwoCards(deck) {
  const [firstCard, secondCard, ...restDeck] = deck

  return [secondCard, firstCard, ...restDeck]
}

/**
 * Put the top card of the given deck into a separate discard pile
 *
 * @param {Card[]} deck
 *
 * @returns {[Card, Card[]]} the top card of the given
 * deck and a new deck containing all the other cards
 */
function discardTopCard(deck) {
  throw new Error('Implement the discardTopCard function')
}

/** @type Card[] **/
const FACE_CARDS = ['jack', 'queen', 'king']

/**
 * Insert face cards into the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck where the second,
 * third, and fourth cards are the face cards
 */
function insertFaceCards(deck) {
  throw new Error('Implement the insertFaceCards function')
}

// ==================
// const deck = [5, 9, 7, 1, 8]
// console.log(getFirstCard(deck))
// ==================
// const deck = [3, 2, 10, 6, 7]
// console.log(getSecondCard(deck))
// ==================
// const deck = [10, 7, 3, 8, 5]
// console.log(swapTopTwoCards(deck))
// ==================
