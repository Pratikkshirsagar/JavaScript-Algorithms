function firstToUpperCase (str) {
    let titleCaseSentenced = str.split(' ')

    titleCaseSentenced = titleCaseSentenced.map((word)=> {
        console.log(word)
        const first = word.charAt(0).toUpperCase()
        word = first.concat(word.slice(1, word.length))

       return word
    })
    titleCaseSentenced= titleCaseSentenced.join(' ')
    return titleCaseSentenced;

}


console.log(firstToUpperCase('I am a Coding god'))