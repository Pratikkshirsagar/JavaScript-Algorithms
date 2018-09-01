function palindrome(word) {
    let str1 = word.toLowerCase().replace(/[\W]/g, '')
    let str2 = str1.split('').reverse().join('')
    console.log(str1)
    console.log(str2)
    if(str1 === str2){
        return true
    }
}

console.log(palindrome('A man, a plan, a canal. Panama'))



