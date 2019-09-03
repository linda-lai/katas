var isSquareV1 = function(number) { // eslint-disable-line no-unused-vars
  const isSquare = number % Math.sqrt(number) === 0;
  if (isSquare || number === 0) {
    return true;
  } else {
    return false;
  }
};

function isSquareV2(n) { // eslint-disable-line no-unused-vars
  return Math.sqrt(n) % 1 === 0;
}

const isSquare = number => {
  const calculateSquare = number % Math.sqrt(number) === 0;
  return calculateSquare || number === 0 ? true : false;
};

module.exports = isSquare;