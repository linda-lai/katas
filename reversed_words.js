function reverseWordsOriginal(str) { // eslint-disable-line no-unused-vars
  const reverseWords = str.split(' ').reverse().join(' ');
  return reverseWords;
}

const reverseWords = str => {
  return str.split(' ').reverse().join(' ');
};

module.exports = reverseWords;