// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
function translate2d(dx, dy) {
  return function (x, y) {
    return [x + dx, y + dy]
  }
}

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
function scale2d(sx, sy) {
  return function (x, y) {
    return [x * sx, y * sy]
  }
}

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {function} f the first function to apply
 * @param {function} g the second function to apply
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
function composeTransformation(f, g) {
  return function (x, y) {
    const firstFuncCallResultArr = f(x, y)
    return g(...firstFuncCallResultArr)
  }

  // alternate solution
  // return function (x, y) {
  //   const fResult = f(x, y)
  //   return g(fResult[0], fResult[1])
  // }
}

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {function} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */
function memoizeTransform(f) {
  let lastX = undefined
  let lastY = undefined
  let lastResult = undefined

  return function (x, y) {
    if (x === lastX && y === lastY) {
      console.log('second call!')
      return lastResult
    }

    lastX = x
    lastY = y
    lastResult = f(x, y)
    console.log('first call!')
    return lastResult
  }
}

// ==================
// const moveCoordinatesRight2Px = translate2d(2, 0)
// const result = moveCoordinatesRight2Px(4, 8)
// console.log(result)

// ==================
// const doubleScale = scale2d(2, 2)
// const result = doubleScale(6, -3)
// console.log(result)
// const tripleScale = scale2d(3, 3)
// const result2 = tripleScale(6, -3)
// console.log(result2)
// ==================
// const moveCoordinatesRight2Px = translate2d(2, 0)
// const doubleCoordinates = scale2d(2, 2)
// const composedTransformations = composeTransformation(
//   moveCoordinatesRight2Px,
//   doubleCoordinates
// )
// const result = composedTransformations(0, 1)
// console.log(result)
// ==================
// const tripleScale = scale2d(3, 3)
// const memoizedScale = memoizeTransform(tripleScale)

// console.log(memoizedScale(4, 3))
// console.log(memoizedScale(4, 3))
// ==================
