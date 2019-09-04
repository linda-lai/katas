const sumArray = require('../sum_array');

describe('it should take an array of numbers and return the sum of numbers', () => {
  it('should take an empty array and return 0', () => {
    expect(sumArray([])).toEqual(0)
  })
  it('should take an array of numbers and return the total', () => {
    expect(sumArray([1, 5.2, 4, 0, -1])).toEqual(9.2)
  })
})