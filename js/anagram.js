const anagram = (word1, word2) => {
  let anagram

  const formatString = word => word.toLowerCase().split("").sort().join("")

  check1 = formatString(word1)
  check2 = formatString(word2)
  check1 === check2 ? anagram = true : anagram = false

  return anagram
}

// uppercase or lowercase
// different length words

module.exports = anagram;