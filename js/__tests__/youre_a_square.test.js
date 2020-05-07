const isSquare = require('../youre_a_square');

describe('returns true or false if number is a perfect square', () => {
  it('should return false if a negative number', () => {
    expect(isSquare(-1)).toBe(false);
  });
  it('should return true if number is 0', () => {
    expect(isSquare(0)).toBe(true);
  });
  it('should return false if number is 3', () => {
    expect(isSquare(4)).toBe(true);
  });
  it('should return true if number is 25', () => {
    expect(isSquare(25)).toBe(true);
  });
  it('should return false if the number is 26', () => {
    expect(isSquare(26)).toBe(false);
  });
})