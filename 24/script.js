// Write a function that takes in an array of numbers and a position number; this position
// is represents the desired position in the array, starting from the smallest number (ie
// 3 in the position slot means we want the 3rd smallest number). Return the array member
// at the specified position
// NOTES: Array length is at least 3; the array's numbers could be a mixture of positives, 
// negatives and zeros; array repetition may occur, so don't remove duplicates.
// Examples:
// Input: [3,1,2], 2
// Output: 2
// Input: [15,20,7,10,4,3], 3
// Output: 7
// Input: [-5,-1,-6,-18], 4
// Output: -1
// Input: [-102,-16,-1,-2,-367,-9], 5
// Output: -2
// Input: [2,169,13,-5,0,2,-1], 4
// Output: 2

function arrTwo(arr, k) {

    let sortedArr = arr.sort((a, b) => a - b);

    return sortedArr[k-1];
    
}

console.log(arrTwo([3,1,2], 2));
console.log(arrTwo([15,20,7,10,4,3], 3));
console.log(arrTwo([-5,-1,-6,-18], 4));
console.log(arrTwo([-102,-16,-1,-2,-367,-9], 5));
console.log(arrTwo([2,169,13,-5,0,2,-1], 4));
