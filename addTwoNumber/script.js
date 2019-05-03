function addTwoNumbers (num1,num2) {
    return num1 + num2;
}


function add(...num) {
    let result = 0;
    num.forEach(el => {
        result += el
    })
    return result
} 

console.log(add(1,2,3,4,5))
console.log( addTwoNumbers(5,6))
console.log( addTwoNumbers(3,11))