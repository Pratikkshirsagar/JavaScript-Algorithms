
function myFunction(arr1, arr2) {
    let uniqueArray = [];
    for(let val of arr1) {
        if(arr2.includes(val) === false && uniqueArray.includes(val) === false ) {
            uniqueArray.push(val)
        }
    }

    for(let val of arr2) {
        if(arr1.includes(val) === false && uniqueArray.includes(val) === false ) {
            uniqueArray.push(val)
        }
    }

    return uniqueArray
}


console.log(myFunction([1,2,3,5],[1,2,3,4,5]))
