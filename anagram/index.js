// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(strA, strB){
  return cleanStr(strA) === cleanStr(strB)
}

function cleanStr(str){
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

console.log(anagrams('rail safety', 'fairy tales'))



// Solution 2

function anagram(stringA, stringB){
    const aCharMap = buildCharMap(stringA)
    const bCharMap = buildCharMap(stringB)

    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
      return false
    }

    for(let char in  aCharMap){
      if(aCharMap[char] !== bCharMap[char]){
        return false
      }
    }
    return true
  }




function buildCharMap(str){
  const charmap = {}

  for(let char of str){
    if(charmap[char]){
      charmap[char]++
    }else{
      charmap[char] = 1
    }
  }
  return charmap
}

console.log(anagram('rail safety', 'fairy tales'))