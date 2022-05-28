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

// class ProgramWindow {
//   constructor() {
//     this.screenSize = new Size(800, 600)
//     this.size = new Size()
//     this.position = new Position()
//   }
// }

// TASK 4

// class ProgramWindow {
//   constructor() {
//     this.screenSize = new Size(800, 600)
//     this.size = new Size()
//     this.position = new Position()
//   }

//   resize(newSize) {
//     const targetWidth = newSize.width > 1 ? newSize.width : 1
//     const maxWidth = this.screenSize.width - this.position.x
//     const newWidth = maxWidth > targetWidth ? targetWidth : maxWidth

//     const targetHeight = newSize.height > 1 ? newSize.height : 1
//     const maxHeight = this.screenSize.height - this.position.y
//     const newHeight = maxHeight > targetHeight ? targetHeight : maxHeight

//     this.size.resize(newWidth, newHeight)
//   }
// }

// TASK 5

// class ProgramWindow {
//   constructor() {
//     this.screenSize = new Size(800, 600)
//     this.size = new Size()
//     this.position = new Position()
//   }

//   resize(newSize) {
//     const targetWidth = newSize.width > 1 ? newSize.width : 1
//     const maxWidth = this.screenSize.width - this.position.x
//     const newWidth = maxWidth > targetWidth ? targetWidth : maxWidth

//     const targetHeight = newSize.height > 1 ? newSize.height : 1
//     const maxHeight = this.screenSize.height - this.position.y
//     const newHeight = maxHeight > targetHeight ? targetHeight : maxHeight

//     this.size.resize(newWidth, newHeight)
//   }

//   move(newPosition) {
//     const targetPosX = newPosition.x >= 0 ? newPosition.x : 0
//     const maxPosX = this.screenSize.width - this.size.width
//     const newPosX = targetPosX < maxPosX ? targetPosX : maxPosX

//     const targetPosY = newPosition.y >= 0 ? newPosition.y : 0
//     const maxPosY = this.screenSize.height - this.size.height
//     const newPosY = targetPosY < maxPosY ? targetPosY : maxPosY

//     this.position.move(newPosX, newPosY)
//   }
// }

// TASK 6

class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600)
    this.size = new Size()
    this.position = new Position()
  }

  resize(newSize) {
    const targetWidth = newSize.width > 1 ? newSize.width : 1
    const maxWidth = this.screenSize.width - this.position.x
    const newWidth = maxWidth > targetWidth ? targetWidth : maxWidth

    const targetHeight = newSize.height > 1 ? newSize.height : 1
    const maxHeight = this.screenSize.height - this.position.y
    const newHeight = maxHeight > targetHeight ? targetHeight : maxHeight

    this.size.resize(newWidth, newHeight)
  }

  move(newPosition) {
    const targetPosX = newPosition.x >= 0 ? newPosition.x : 0
    const maxPosX = this.screenSize.width - this.size.width
    const newPosX = targetPosX < maxPosX ? targetPosX : maxPosX

    const targetPosY = newPosition.y >= 0 ? newPosition.y : 0
    const maxPosY = this.screenSize.height - this.size.height
    const newPosY = targetPosY < maxPosY ? targetPosY : maxPosY

    this.position.move(newPosX, newPosY)
  }
}

function changeWindow(programWindow) {
  const newSize = new Size(400, 300)
  const newPosition = new Position(100, 150)

  programWindow.resize(newSize)
  programWindow.move(newPosition)

  return programWindow
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

// const programWindow = new ProgramWindow()
// console.log(programWindow.screenSize.width)
// console.log(programWindow.screenSize.height)
// console.log(programWindow.size)
// console.log(programWindow.position)

// ==================
// 4 -

// const programWindow = new ProgramWindow()

// const newSize = new Size(600, 400)
// programWindow.resize(newSize)
// console.log(programWindow.size.width)
// console.log(programWindow.size.height)

// ==================
// 5 -
// const programWindow = new ProgramWindow()

// console.log(programWindow)

// const newPosition = new Position(50, 100)
// programWindow.move(newPosition)

// console.log(programWindow.position.x)
// console.log(programWindow.position.y)

// ==================
// 6 -

const programWindow = new ProgramWindow()
changeWindow(programWindow)

console.log(programWindow.size.width)
console.log(programWindow.size.height)
console.log(programWindow.position.x)
console.log(programWindow.position.y)
// ==================
