/* Write a function that takes an array of numbers and returns the sum of the numbers.
These may be integers or decimals, and the numbers can also be negative. If the array does not contain any numbers it should return 0.
You can assume that you are only given numbers. */

const sumArray = numbers => {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
};

module.exports = sumArray;