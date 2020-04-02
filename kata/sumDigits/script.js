const sumDigits = (number) => {

    // const toNum = n => parseInt(n);

    // let result = (""+number).replace(/[^0-9]/g, '').split("").reduce((a, b) => toNum(a) + toNum(b));

    // return parseInt(result)

  
    return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);

}

  console.log(sumDigits(10)); //1
  console.log(sumDigits(99)); //18
  console.log(sumDigits(-32)); //5
  console.log(sumDigits(000)); //0
  console.log(sumDigits(11)); //2
  