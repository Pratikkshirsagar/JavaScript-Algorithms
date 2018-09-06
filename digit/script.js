function isdigit(str) {
    if( typeof str === 'number') {
        return true
    }else {
        return false
    }
}

console.log(isdigit('p'))

function digit2(str) {
    const digitArray = [0,1,2,3,4,5,6,7,8,9]

    return digitArray.includes(str);
}

console.log(digit2(9))