//First method
function sortingArray(arr) {
  let original = [...arr]; // copy original array
  let sortedArray = [];

  for (let i = 0; i < arr.length; i++) {
    let num = Infinity; // reset num to a very large number each iteration

    // Find smallest element in current original array
    for (let j = 0; j < original.length; j++) {
      if (original[j] < num) {
        num = original[j];
      }
    }

    sortedArray.push(num);

    // Remove all occurrences of num from original array
    let tempArray = [];
    for (let k = 0; k < original.length; k++) {
      if (original[k] !== num) {
        tempArray.push(original[k]);
      }
    }
    original = tempArray; // update original array without min values
  }

  return sortedArray;
}

//Second method
// function sortingArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }

let arr = [10, 15, 25, 16, 8, 6, 10, 25, 8, 50, 27, 69, 33];
let result = sortingArray(arr);
console.log("Sorted array in increasing order: ", result);
