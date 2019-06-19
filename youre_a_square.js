var isSquareOriginal = function(number) {
  const isSquare = number % Math.sqrt(number) === 0;
  if (isSquare || number === 0) {
    return true
  } else {
    return false
  }
}

const isSquare = number => {
  const calculateSquare = number % Math.sqrt(number) === 0;
  return calculateSquare || number === 0 ? true : false;
}

// function isSquare(n) {
//   return Math.sqrt(n) % 1 === 0;
// }

module.exports = isSquare;