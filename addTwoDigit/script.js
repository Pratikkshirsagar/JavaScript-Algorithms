function addTwoDigit(num) {
    let numArray = num.toString();
    numArray = numArray.split('');
    numArray = numArray.reduce((num1,num2) => parseInt(num1) + parseInt(num2))
    return numArray;
}

console.log(addTwoDigit(29))
console.log(addTwoDigit(58))
