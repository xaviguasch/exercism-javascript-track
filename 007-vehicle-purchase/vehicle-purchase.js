// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
function needsLicense(kind) {
  return kind === 'car' || kind === 'truck'
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
function chooseVehicle(option1, option2) {
  if (option1.toLowerCase() < option2.toLowerCase()) {
    return `${option1} is clearly the better choice.`
  } else {
    return `${option2} is clearly the better choice.`
  }
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns expected resell price in the dealership
 */
function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return originalPrice * 0.8
  } else if (age <= 10) {
    return originalPrice * 0.7
  } else {
    return originalPrice * 0.5
  }
}

// ==================
// console.log(needsLicense('car'))
// console.log(needsLicense('bike'))
// ==================
// console.log(chooseVehicle('Wuling Hongguang', 'Toyota Corolla'))
// console.log(chooseVehicle('Volkswagen Beetle', 'Volkswagen Golf'))
// ==================
console.log(calculateResellPrice(1000, 1))
console.log(calculateResellPrice(1000, 5))
console.log(calculateResellPrice(1000, 15))
