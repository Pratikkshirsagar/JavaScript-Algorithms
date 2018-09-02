function longest(str) {
   let longestWord = 0
    let strArray = str.split(' ')

    for(let i = 0; i < strArray.length; i++) {
        if(longestWord < strArray[i].length){
            longestWord = strArray[i].length
        }

    }

    return longestWord;
}


console.log(longest('i am a coding god'))

