function reverseString (str) {
   let result=  str.split('')
   return result.reverse().join('')
}

console.log(reverseString('Pratik'))

function reverseString2 (str) {
    let reversWord = ''

    for(let i = str.length - 1; i >= 0; i-- ){
        reversWord = reversWord + str[i]
    }

    return reversWord;
}

console.log(reverseString2('Akash'))