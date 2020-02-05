// Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example, the below should return 17.

const sheep = [
  true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true
];

const countingSheep = (sheep) => {
  let sheepCount = 0;
  for(let i = 0; i < sheep.length; i++) {
    if(sheep[i] === true) {
      sheepCount++;
    }
  }
  return sheepCount;
};

countingSheep(sheep);

module.exports = { countingSheep, sheep };
