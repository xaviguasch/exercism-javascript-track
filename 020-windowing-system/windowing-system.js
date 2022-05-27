// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

// TASK 1

function Size(width = 80, height = 60) {
  this.width = width
  this.height = height
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth
  this.height = newHeight
}

// ==================
// 1 -
const size = new Size(1080, 764)
console.log(size.width)
console.log(size.height)

size.resize(1920, 1080)
console.log(size.width)
console.log(size.height)

// ==================
// 2 -
// ==================
// 3 -
// ==================
// 4 -
// ==================
// 5 -
// ==================
// 6 -
// ==================
