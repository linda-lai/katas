// Write a function at(arr, i) that returns the element at index i. It should return null if given an index not in the array.

const elementAccess = (arr, i) => {
  const arrayLength = arr.length;

  if (arr[i] !== undefined) {
    return arr[i];
  } else if (arrayLength === 0 || arrayLength - 1 < i || arrayLength - 1 > i) {
    return null;
  } else {
    return undefined;
  }
}

// let arr1 = [];
// console.log(arr1[0]); // undefined
// let arr2 = [undefined];
// console.log(arr2[0]); // undefined
// let arr3 = [0, 0, 0]; 
// console.log(arr3[4]); // undefined

module.exports = elementAccess;
