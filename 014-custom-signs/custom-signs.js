// @ts-check

// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Build a sign that includes both of the parameters.
 *
 * @param {string} occasion
 * @param {string} name
 *
 * @returns {string} template string combining both parameters
 */

function buildSign(occasion, name) {
  return `Happy ${occasion} ${name}!`
}

/**
 * Build a birthday sign that conditionally formats the return string.
 *
 * @param {number} age
 *
 * @returns {string} template string based on age
 */

function buildBirthdaySign(age) {
  throw new Error('Implement the buildBirthdaySign function')
}

/**
 * Build a graduation sign that includes multiple lines.
 *
 * @param {string} name
 * @param {number} year
 *
 * @returns {string} multi-line template string
 */

function graduationFor(name, year) {
  throw new Error('Implement the graduationForm function')
}

/**
 * Determine cost based on each character of sign parameter that builds
 * the template string that includes the currency parameter.
 *
 * @param {string} sign
 * @param {string} currency
 *
 * @returns {string} cost to create the sign
 */

function costOf(sign, currency) {
  throw new Error('Implement the costOf function')
}

// ==================
console.log(buildSign('Birthday', 'Rob'))
// ==================
