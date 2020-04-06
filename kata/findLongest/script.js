function findLongest( arr ){
  
    const toStr = arr.map(val => String(val));
    const longs = toStr.reduce((a,b) => {
        return b.length > a.length ? b : a;
    })
  return Number(longs)
} 

  console.log(findLongest([1, 10, 100])); //100
  console.log(findLongest([9000, 8, 800])); //9000
  console.log(findLongest([8, 900, 500])); //900
  