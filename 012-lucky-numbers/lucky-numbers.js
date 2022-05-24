// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
function twoSum(array1, array2) {
  const sum1 = array1.map((num) => String(num)).reduce((acc, currV) => acc + currV)
  const sum2 = array2.map((num) => String(num)).reduce((acc, currV) => acc + currV)

  return Number(sum1) + Number(sum2)
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
function luckyNumber(value) {
  throw new Error('Implement the luckyNumber function')
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
function errorMessage(input) {
  throw new Error('Implement the errorMessage function')
}

// ==================
console.log(twoSum([1, 2, 3], [0, 7]))
// ==================
// ==================
