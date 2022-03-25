const solution = (word) => {
  const split = word.split("");
  let reversed;
  // console.log(split);
  for (let i = split.length; i >= 0; i--) {
    reversed += split[i];
  }
  console.log(reversed);
};

solution("dlrow");
