const elementAccess = require('../element_access');

describe('it should return an element in an array at the given index unless null or undefined', () => {
  it('should return 0 at index 0', () => {
    expect(elementAccess([0, 0, 0], 0)).toEqual(0);
  });
  it('should return 2 at index 2', () => {
    expect(elementAccess([1, 2, 3], 1)).toEqual(2);
  });
  it('should return 0 at index 1', () => {
    expect(elementAccess([1, 2, 3], 0)).toEqual(1);
  });
  it('should return a at index 0', () => {
    expect(elementAccess(['a'], 0)).toEqual('a');
  });
  it('should return null if given index does not exist in array', () => {
    expect(elementAccess([1, 2, 3], 3)).toEqual(null);
  });
  it('should return null if given index does not exist in array', () => {
    expect(elementAccess([1, 2, 3], 5)).toEqual(null);
  });
  it('should return null if array is empty given an index of 0', () => {
    expect(elementAccess([], 0)).toEqual(null);
  });
  it('should return null if array is empty given an index of 1', () => {
    expect(elementAccess([], 1)).toEqual(null);
  });
  it('should return null if given a negative index number', () => {
    expect(elementAccess([1, 2, 3], -1)).toEqual(null);
  });
  it('should return undefined if array contains undefined value', () => {
    expect(elementAccess([undefined], 0)).toEqual(undefined);
  });
})