function missing(numArr) {
    const numberArray = numArr.sort((num1, num2) => {
        return num1- num2
    })

    for(let i = 0; i< numberArray.length; i++){
        if(i !== numberArray[i]) {
            return i;
        }
    }

    return numberArray
}
 

console.log(missing([0,3,5,6,4,8,1,9,7]))