// Write a function that takes in a number and returns the corresponding day of the week.
// Examples:
// Input: 0 
//    OR
// Input: 7
// Output: 'Sunday'
// Input: 1
// Output: 'Monday'
// Input: 5
// Output: 'Friday'
// Input: 8
// Output: undefined

const whichDay = (val) => {
    switch(val) {
        case 0:
        case 7:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return undefined;
    }
}

console.log(whichDay(0));
console.log(whichDay(7));
console.log(whichDay(1));
console.log(whichDay(5));
console.log(whichDay(8));
