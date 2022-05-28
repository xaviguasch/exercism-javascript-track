// @ts-check

class ArgumentError extends Error {
  constructor() {
    super(`The sensor is broken`)
  }
}

class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`)
    this.temperature = temperature
  }
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage > 70) {
    throw new Error('Humidity level is too high')
  }
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
function reportOverheating(temperature) {
  if (temperature === null) {
    throw new ArgumentError()
  } else if (temperature > 500) {
    throw new OverheatingError(temperature)
  }
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
function monitorTheMachine(actions) {
  throw new Error('Implement the monitorTheMachine function')
}

// ==================
// 1 -

// console.log(checkHumidityLevel(60))
// console.log(checkHumidityLevel(100))

// ==================
// 2 -

// console.log(reportOverheating(null))
// console.log(reportOverheating(800))
// console.log(reportOverheating(300))

// ==================
// 3 -

// ==================
