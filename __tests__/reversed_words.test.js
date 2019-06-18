const reverseWords = require('../reversed_words');

describe('function to reverse words', () => {
  test('should work with two words', () => {
    expect(reverseWords('hello world')).toEqual('world hello');
  });
  test('should work for a given phrase', () => {
    expect(reverseWords('yoda doesn\'t speak like this')).toEqual('this like speak doesn\'t yoda');
  });
  test('should work with only one word', () => {
    expect(reverseWords('foobar')).toEqual('foobar');
  });
  it('should work with another two word example', () => {
    expect(reverseWords('kata editor')).toEqual('editor kata');
  });
  it('should work with row row row your boat', () => {
    expect(reverseWords('row row row your boat')).toEqual('boat your row row row');
  });
});