function maxChar(str){
  const charMap = {}
  let max= 0
  let maxChar = ''

  for(let char of str){
    if(charMap[char]){
      charMap[char]++
    }else{
      charMap[char] = 1
    }
    console.log(charMap)
  }

  for(let char in charMap){
    if(charMap[char] > max){
      max = charMap[char]
      maxChar = char 
    }
  }

  return maxChar
}

console.log(maxChar('Hellllleooooooooo'))



// function maxChar2(str){
//   const maxChar = {}
//   let max = 0
//   let maxStr = ""
//   for(let char of str){
//     if(maxChar[char]){
//       maxChar[char]++
//     }else{
//       maxChar[char] = 1
//     }
//   }

//   for(let char in maxChar){
//     if(maxStr[char]> max){
//       max = maxStr[char]
//       maxStr = str
//     }
//   }

// }



// console.log(maxChar2("Helllllloooooo"))