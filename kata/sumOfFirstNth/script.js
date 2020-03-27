function SeriesSum(n)
{
  arr = n.split("+")

  total = 0

  for (let i = 0; i<arr.length; i++) {
    let num = eval(arr[i].trim())
    total += num;    
  }
  return total.toFixed(2)
}

  console.log(SeriesSum("1"));
  console.log(SeriesSum("1 + 1/4"));
  console.log(SeriesSum("1 + 1/4+ 1/7 + 1/10 + 1/13"));
  