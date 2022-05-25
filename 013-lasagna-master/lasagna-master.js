/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

function cookingStatus(remainingTime) {
  if (remainingTime === undefined) {
    return 'You forgot to set the timer.'
  } else if (remainingTime === 0) {
    return 'Lasagna is done.'
  } else {
    return 'Not done, please wait.'
  }
}

function preparationTime(layers, avgTime = 2) {
  return layers.length * avgTime
}

// ==================
// console.log(cookingStatus(12))
// console.log(cookingStatus())
// ==================
const layers = ['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles']
console.log(preparationTime(layers, 3))
console.log(preparationTime(layers))
