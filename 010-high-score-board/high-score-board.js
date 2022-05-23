/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} new score board
 */
function createScoreBoard(key, value) {
  const newObj = {
    'The Best Ever': 1000000,
  }

  return newObj
}

/**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} updated score board
 */
function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score

  return scoreBoard
}

/**
 * Removes a player from a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @returns {Record<string, number>} updated score board
 */
function removePlayer(scoreBoard, player) {
  delete scoreBoard[player]

  return scoreBoard
}

/**
 * Increases a player's score by the given amount.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} updated score board
 */
function updateScore(scoreBoard, player, points) {
  scoreBoard[player] += points

  return scoreBoard
}

/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */
function applyMondayBonus(scoreBoard) {
  throw new Error('Please implement the applyMondayBonus function')
}

/**
 * Normalizes a score with the provided normalization function.
 *
 * @param {Params} params the parameters for performing the normalization
 * @returns {number} normalized score
 */
function normalizeScore(params) {
  throw new Error('Please implement the normalizeScore function')
}

// ==================
// console.log(createScoreBoard())
// ==================
// console.log(addPlayer({ 'Dave Thomas': 0 }, 'José Valim', 486373))
// ==================
// console.log(removePlayer({ 'Dave Thomas': 0 }, 'Dave Thomas'))
// console.log(removePlayer({ 'Dave Thomas': 0 }, 'Rose Fanaras'))
// ==================

console.log(updateScore({ 'Freyja Ćirić': 12771008 }, 'Freyja Ćirić', 73))
// ==================
