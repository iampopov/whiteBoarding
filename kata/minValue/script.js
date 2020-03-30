function minValue(values){
    //your code here
    arr = [...new Set(values)]
    let results = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {

            results.push(`${arr[i]}${arr[j]}`)
        }
        
    }
    return results;
}

console.log(minValue([1, 3, 1])); //13
console.log(minValue([4, 7, 5, 7])); //457
console.log(minValue([4, 8, 1, 4])); //148
console.log(minValue([5, 7, 9, 5, 7])); //579
console.log(minValue([6, 7, 8, 7, 6, 6])); //678
  