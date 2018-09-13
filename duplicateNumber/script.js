function duplicate(num) {
    let newList = num.sort((num1, num2) => {
        return num1 - num2
    });

    console.log(newList)

    for (let i = 0 ; i < newList.length; i++) {
        console.log(newList[i])
        if(newList[i] === newList[i+1] ){
            return true
        }
    }
    return false
}


console.log(duplicate([1,2,3,1]))
console.log(duplicate([7,8,9]))