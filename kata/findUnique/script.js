function findUniq(arr) {
    //return arr.filter((item, i, ar) => ar.indexOf(item) === i) // this works great to find distinct numbers but not exactly what I am after!
    
    // let sArr = arr.slice().sort()
    // console.log(sArr);
    
    // let res = 0;
    // for (let i=0; i<sArr.length; i++) {
    //     if (sArr[i]===sArr[i+1]) {
    //         res = (sArr[i])
            
    //     } 
    // }
    // return res;
    
    //! my solution:
    return parseFloat(arr.filter(value => arr.indexOf(value) === arr.lastIndexOf(value))) 
    //! codewars best voted solution that doesn't work!:
    // arr.sort((a,b)=>a-b);
    // return arr[0]==arr[1]?arr.pop():arr[0]

  }

  console.log(findUniq([0, 0, 1, 2, 2]));
  console.log(findUniq([1, 1, 1, 2, 1, 1]));
  console.log(findUniq([2,2,3, 10, 10, 12, 3, 3, 3]));
 console.log(findUniq([2, 3, 10, 3, 3, 3, 2, 2]));
 console.log(findUniq([2, 3, 3, 3, 3, 2, 2, 0.55]));
 console.log(findUniq([2, 3, 3, 3, 3, 2, 2, 0.7766188879625344]));
  