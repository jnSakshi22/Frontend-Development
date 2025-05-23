// First Method
function sortingArray(arr) {
  let original = [...arr];
  let sortedArray = [];

  for (let i = 0; i < arr.length; i++) {
    let max = -Infinity;

    for (let j = 0; j < original.length; j++) {
      if (original[j] > max) {
        max = original[j];
      }
    }

    let count = 0;
    for (let i = 0; i < original.length; i++) {
      if (original[i] === max) {
        count++;
      }
    }

    // Push max 'count' times into the sorted array
    for (let i = 0; i < count; i++) {
      sortedArray.push(max);
    }

    // Remove all occurrences of num from original array
    let tempArray = [];
    for (let k = 0; k < original.length; k++) {
      if (original[k] !== max) {
        tempArray.push(original[k]);
      }
    }
    original = tempArray; // update original array without min values
  }

  return sortedArray;
}

let arr = [10, 15, 25, 16, 8, 6, 10, 25, 8, 50, 27, 69, 33];
let result = sortingArray(arr);
console.log("Sorted array in decreasing order: ", result);
