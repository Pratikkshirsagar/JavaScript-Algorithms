function almostIncreasingSequence(sequence){
  console.log(sequence)
  let num = 1;
  for(let i= 0; i < sequence.length; i++) {
    if(sequence[i] < sequence[i + 1]) {
      num++
    }else{
      num--
    }
  }

  return num >= 0

}


console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 