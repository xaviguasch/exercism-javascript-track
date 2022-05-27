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

// TASK 2

function Position(x = 0, y = 0) {
  this.x = x
  this.y = y
}

Position.prototype.move = function (newX, newY) {
  this.x = newX
  this.y = newY
}

// TASK 3

class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600)
    this.size = new Size()
    this.position = new Position()
  }
}

// ==================
// 1 -

// const size = new Size(1080, 764)
// console.log(size.width)
// console.log(size.height)

// size.resize(1920, 1080)
// console.log(size.width)
// console.log(size.height)

// ==================
// 2 -

// const point = new Position()
// console.log(point.x)
// console.log(point.y)

// point.move(100, 200)
// console.log(point.x)
// console.log(point.y)

// ==================
// 3 -

const programWindow = new ProgramWindow()
console.log(programWindow.screenSize.width)
console.log(programWindow.screenSize.height)
console.log(programWindow.size)
console.log(programWindow.position)

// ==================
// 4 -
// ==================
// 5 -
// ==================
// 6 -
// ==================
