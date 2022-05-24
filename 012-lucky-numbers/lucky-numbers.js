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
  const valueArr = String(value).split('')
  const valueArrReversed = [...valueArr].reverse()

  return valueArr.join('') === valueArrReversed.join('')
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
function errorMessage(input) {
  if (!Boolean(input)) {
    return 'Required field'
  } else if (!Number(input)) {
    return 'Must be a number besides 0'
  } else {
    return ''
  }
}

// ==================
// console.log(twoSum([1, 2, 3], [0, 7]))
// ==================
// console.log(luckyNumber(1441))
// console.log(luckyNumber(123))
// ==================
// console.log(errorMessage('123'))
// console.log(errorMessage(''))
// console.log(errorMessage('abc'))
// console.log(errorMessage(null))
// console.log(errorMessage(undefined))
// ==================
