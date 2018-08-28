function  myFunction( str1, str2) {
    return `Hi, my name is ${str1} ${str2}`
}

console.log(myFunction('Pratik', 'Kshirsagar'))

//Second solution

function newFunction(str1, str2) {
    const introduction = 'Hi, my name is '.concat(str1, ' ', str2 )
    return introduction
}


console.log(newFunction('Akash', 'Gangawane'))