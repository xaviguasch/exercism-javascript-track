//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const decodedValue = (colorsArr) => {
  const COLORS = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  }

  const [color1, color2] = colorsArr

  return COLORS[color1].toString() + COLORS[color2].toString()
}

// ==================
console.log(decodedValue(['brown', 'black']))
console.log(decodedValue(['blue', 'grey']))
