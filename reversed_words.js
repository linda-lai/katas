function reverseWordsOriginal(str) {
  const reverseWords = str.split(' ').reverse().join(' ');
  return reverseWords;
}

const reverseWords = str => {
  return str.split(' ').reverse().join(' ');
}

module.exports = reverseWords;