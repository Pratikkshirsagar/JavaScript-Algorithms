function allLongestStrings(inputArray) {
  let length = 0
  let result  = []
  for(let i = 0; i < inputArray.length ; i++) {
    length = length < inputArray[i].length ? inputArray[i].length : length
 }

 for(let i = 0; i < inputArray.length ; i++) {
  if(length === inputArray[i].length) {
    result.push(inputArray[i])
  }
}
 return result
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));