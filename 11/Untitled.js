// using .indexOf() array method
const removeArrayDups = (arr) => {
    const outputArr = [];

    arr.forEach(function(item) {
        // only push to outputArr if index of item is -1 (in other words, if item is
        // NOT in outputArr already...)
        if (outputArr.indexOf(item) === -1) {
            outputArr.push(item);
        }        
    });

    return outputArr;
}

// using .includes() array method
const removeArrayDups = (arr) => {
    const outputArr = [];

    for (const num of arr) {
        // only push to outputArr if item isn't already included
        if (!outputArr.includes(num)) {
            outputArr.push(num);
        }
    }

    return outputArr;
}

// using an ES6 Set + the spread operator!
const removeArrayDups = arr => [...new Set(arr)];


console.log(removeArrayDups([1,2,2,3])); // [1,2,3]
console.log(removeArrayDups([4,5,4,4,7,5])); // [4,5,7]
console.log(removeArrayDups([1,2,3,5])); // [1,2,3,5]