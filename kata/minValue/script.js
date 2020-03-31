// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:

// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

// Input >> Output Examples

// minValue ({1, 3, 1})  ==> return (13)

let minValue = (values) => {

    let string = [...new Set(values)] //.toString().replace(/,/g, "");
    string.sort((a, b) => a-b);
    return parseInt(string.join(''))
}

console.log(minValue([1, 3, 1])); //13
console.log(minValue([4, 7, 5, 7])); //457
console.log(minValue([4, 8, 1, 4])); //148
console.log(minValue([5, 7, 9, 5, 7])); //579
console.log(minValue([6, 7, 8, 7, 6, 6])); //678
  