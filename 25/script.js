// Write a function that takes in an array of numbers and returns the first non-consecutive number;
// if there is no non-consecutive number present, return null
// NOTES: The input array will contain at least two elements, all numbers; assume the array
// is already sorted in ascending order and could contain positive, zero, or negative values
// Examples:
// Input: [3, 4, 5, 6, 9]
// Output: 9
// Input: [-5, -4, -3, -2, 0]
// Output: 0
// Input: [191, 192, 194, 195]
// Output: 194
// Input: [1017, 1018, 1019, 1020, 1021]
// Output: null


function nonCons(arr) {
//my solution:
    // for (let i = 0; i<arr.length; i++) {

    //     if (arr[i+1] - arr[i] == 1) {
           
    //     } else {
    //         if (arr[i+1] == null) {
    //             return null;
                
    //         } else {

    //             return arr[i+1];
    //         }
             
    //     }
        
    // }
    
    ////! Matt's solution
    // for (let i=0; i < arr.length -1; i++) {
    //     //adding one to current array member
    //     const x = arr[i] + 1;
    //     //then checking to see whether the current array member is our first non - consecutive 
    //     if (x !== arr[i+1]) {
    //         return arr[i+1];
    //     }
    // }
    // return null
    
    const val = arr.find((num,i) => num !== arr[0] + i);
    return Number.isInteger(val) ? val : null;
    
}

console.log(nonCons([3, 4, 5, 6, 9]));
// Output 9
console.log(nonCons([-5, -4, -3, -2, 0]));
// Output 0
console.log(nonCons([191, 192, 194, 195]));
// Output 194
console.log(nonCons([1017, 1018, 1019, 1020, 1021]));
Output: null