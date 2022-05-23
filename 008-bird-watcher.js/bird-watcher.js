// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
function totalBirdCount(birdsPerDay) {
  let count = 0
  for (let i = 0; i < birdsPerDay.length; i++) {
    count += birdsPerDay[i]
  }

  return count
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
function birdsInWeek(birdsPerDay, week) {
  const arrStart = week * 7 - 7
  const arrEnding = arrStart + 6

  let count = 0

  for (let i = arrStart; i <= arrEnding; i++) {
    count += birdsPerDay[i]
  }

  return count
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
function fixBirdCountLog(birdsPerDay) {
  throw new Error('Please implement the fixBirdCountLog function')
}

// ==================
// const birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]
// console.log(totalBirdCount(birdsPerDay))
// ==================
const birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]
console.log(birdsInWeek(birdsPerDay, 2))
// ==================
