const { countingSheep, sheep } = require('../counting_sheep');

describe('countSheep', () => {
  it('should return 17 with a given array of booleans', () => {
    expect(countingSheep(sheep)).toEqual(17);
  });
  it('should return 0 given an empty array', () => {
    expect(countingSheep([])).toEqual(0);
  });
});