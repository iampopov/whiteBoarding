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

    for (let i = 0; i<arr.length; i++) {

        if (arr[i+1] - arr[i] == 1) {
           //console.log("null");
           
        } else {
            if (arr[i+1] == null) {
                return null;
                
            } else {

                return arr[i+1];
            }
             
        }
        
    }
    
}

console.log(nonCons([3, 4, 5, 6, 9]));
// Output 9
console.log(nonCons([-5, -4, -3, -2, 0]));
// Output 0
console.log(nonCons([191, 192, 194, 195]));
// Output 194
console.log(nonCons([1017, 1018, 1019, 1020, 1021]));
Output: null