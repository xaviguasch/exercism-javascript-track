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

function quantities(layersArr) {
  let noodlesGs = 0
  let sauceLs = 0

  for (const layer of layersArr) {
    if (layer === 'sauce') {
      sauceLs += 0.2
    } else if (layer === 'noodles') {
      noodlesGs += 50
    }
  }

  return {
    noodles: noodlesGs,
    sauce: sauceLs,
  }
}

function addSecretIngredient(fList, personalList) {
  personalList.push(fList[fList.length - 1])
}

function scaleRecipe(recipe, portions = 2) {
  const newRecipe = {}

  for (const key in recipe) {
    newRecipe[key] = recipe[key] * (portions / 2)
  }

  return newRecipe
}

// ==================
// console.log(cookingStatus(12))
// console.log(cookingStatus())
// ==================
// const layers = ['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles']
// console.log(preparationTime(layers, 3))
// console.log(preparationTime(layers))
// ==================
// console.log(quantities(['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles']))
// ==================
// const friendsList = ['noodles', 'sauce', 'mozzarella', 'kampot pepper']
// const myList = ['noodles', 'meat', 'sauce', 'mozzarella']

// console.log(addSecretIngredient(friendsList, myList))
// console.log(myList)
// ==================
const recipe = {
  noodles: 200,
  sauce: 0.5,
  mozzarella: 1,
  meat: 100,
}

console.log(scaleRecipe(recipe, 4))
console.log(scaleRecipe(recipe))
