const anagram = require('../anagram');

describe('anagram will check if two words are anagrams', () => {
  it('will return true if an anagram', () => {
    expect(anagram('poodle', 'looped')).toBe(true);
  }); 
  it('will return true if an anagram regardless of capitalisation', () => {
    expect(anagram('pOOdle', 'loOPEd' )).toBe(true);
  });
  it('will return false if not an anagram', () => {
    expect(anagram('poodle', 'loop')).toBe(false);
  });
})