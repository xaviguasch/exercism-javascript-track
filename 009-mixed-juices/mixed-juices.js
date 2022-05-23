// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5
      break
    case 'Energizer':
    case 'Green Garden':
      return 1.5
      break
    case 'Tropical Island':
      return 3
      break
    case 'All or Nothing':
      return 5
      break
    default:
      return 2.5
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
function limesToCut(wedgesNeeded, limes) {
  const wedges = {
    small: 6,
    medium: 8,
    large: 10,
  }

  let wedgesCut = 0
  let i = 0

  while (wedgesCut < wedgesNeeded) {
    if (limes[i]) {
      wedgesCut += wedges[limes[i]]
    } else {
      return i
    }

    i++
  }

  return i
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
function remainingOrders(timeLeft, orders) {
  const ordersLeft = [...orders]
  let timeBeforeEnd = timeLeft
  let i = 0

  while (timeBeforeEnd > 0) {
    const juicingTime = timeToMixJuice(orders[i])

    timeBeforeEnd -= juicingTime

    i++
  }

  return ordersLeft.slice(i)

  // Very clever alternative solution
  // while (timeLeft > 0) {
  //   timeLeft -= timeToMixJuice(orders.shift());
  // }
  // return orders;
}

// ==================
// console.log(timeToMixJuice('Tropical Island'))
// console.log(timeToMixJuice('Berries & Lime'))
// ==================
// console.log(limesToCut(25, ['small', 'small', 'large', 'medium', 'small']))
// console.log(limesToCut(10, []))
// console.log(limesToCut(4, ['medium', 'small']))
// ==================
// console.log(remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']))
// ==================
