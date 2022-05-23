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

  // ALTERNATIVE MORE ADVANCED SOLUTION
  // return totalBirdCount(birdsPerDay.slice(week*7-7, week*7));
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      birdsPerDay[i] += 1
    }
  }

  return birdsPerDay

  // ALTERNATIVE MORE ADVANCED SOLUTION
  // for (let i = 0; i < birdsPerDay.length; i += 2) {
  //   birdsPerDay[i]++;
  // }
  // return birdsPerDay;
}

// ==================
// const birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]
// console.log(totalBirdCount(birdsPerDay))
// ==================
// const birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]
// console.log(birdsInWeek(birdsPerDay, 2))
// ==================
const birdsPerDay = [2, 0, 1, 4, 1, 3, 0]
console.log(fixBirdCountLog(birdsPerDay))
// ==================
