/*
Given the triangle of consecutive odd numbers:
            1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8
*/
const rowSumOddNumbers = (number) => {
  //var nn = number.toString().split()
 // console.log(nn, number);
  nthOdd = (number - 1) * number + 1 //(2 * number - 1)
  //console.log(nthOdd);
  let odd = []
  for (let i = 0; i < number; i++) {
    odd.push(nthOdd)
    //console.log(nthOdd);
    nthOdd = nthOdd + 2
        
  }

    return odd.reduce((a,b) => a+b);

}

  console.log(rowSumOddNumbers(1)); //1
  console.log(rowSumOddNumbers(2)); //8
  console.log(rowSumOddNumbers(3)); //27
  console.log(rowSumOddNumbers(42)); //74088
  