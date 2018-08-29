function fizBuzz(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return 'FizzBuzz'
    }else if (num % 3 == 0) {
        return 'Fizz'
    }else if (num % 5 == 0) {
        return 'buzz'
    } 
        console.log(' ')
    
}
console.log(fizBuzz(3))
console.log(fizBuzz(5))
console.log(fizBuzz(4))
console.log(fizBuzz(15))