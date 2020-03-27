// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// function accum(s) {
  
//   const split = s.toLowerCase().split('')
//   const newArr = [];

//   for (let i = 0; i < split.length; i++) {
    
//     function repeat(item, times) {
//       let result = [];
//       for (let j=0; j<times; j++) {
//         result.push(item)
//       }
//       newArr.push(result.toString().replace(/,/g, '').replace(result.toString().charAt(0), result.toString().charAt(0).toUpperCase()))
       
//     }
//     repeat(split[i], (i+1));    
//   }

//   return newArr.toString().replace(/,/g, '-');
// }

function accum(s) {
  return s.split('').map((x, times) => (x.toUpperCase() + x.toLowerCase().repeat(times))).join('-');
}

  console.log(accum('ZpglnRxqenU')); //Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu
  console.log(accum('NyffsGeyylB')); //N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb
  console.log(accum('MjtkuBovqrU'));
  console.log(accum('EvidjUnokmM'));
  console.log(accum('HbideVbxncC'));
    
  