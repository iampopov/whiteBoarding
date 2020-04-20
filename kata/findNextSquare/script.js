function findNextSquare( sq ){
    // if (Number.isInteger(Math.sqrt(sq))) {
    //   return Math.pow((Math.sqrt(sq) + 1), 2)
    // } else {
    //   return -1
    // }
    return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
    
} 

  console.log(findNextSquare(121));
  console.log(findNextSquare(625));
  console.log(findNextSquare(114));
  