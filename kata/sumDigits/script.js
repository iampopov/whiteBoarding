const sumDigits = (number) => {

    const toNum = n => parseInt(n);

    return (""+number).replace(/[^0-9]/g, '').split("").reduce((a, b) => toNum(a) + toNum(b));
    
}

  console.log(sumDigits(10)); //1
  console.log(sumDigits(99)); //18
  console.log(sumDigits(-32)); //5
  