let minValue = (values) => {
    //your code here
    let string = [...new Set(values)].toString().replace(/,/g, "");
    //return string;
    const arr = [];
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < string.length; j++) {
           arr.push(string[i]+string[j])         
        }
        
    }
    return arr;
    // let permutationsArray = [] 
   
    // for (let i = 0; i < string.length; i++){
    //     let char = string[i]

    //     let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

    //     for (let permutation of minValue(remainingChars)){
    //     permutationsArray.push(char + permutation) }
    // }
    
    // return permutationsArray
   
}

console.log(minValue([1, 3, 1])); //13
console.log(minValue([4, 7, 5, 7])); //457
console.log(minValue([4, 8, 1, 4])); //148
console.log(minValue([5, 7, 9, 5, 7])); //579
console.log(minValue([6, 7, 8, 7, 6, 6])); //678
  