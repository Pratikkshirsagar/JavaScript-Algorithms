function sumUpNumber(str) {
    let nums = str.match(/\d+/g) || []
    let sum = 0
    nums.forEach(element => {
        sum = sum + Number(element)
        
    });

    return sum
    
}


console.log(sumUpNumber('2 apples, 12 oranges'))
console.log(sumUpNumber('12345'))
// console.log(sumUpNumber('I am a coding God'))