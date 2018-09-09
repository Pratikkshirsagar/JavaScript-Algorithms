function isValidTime(time) {
    let timeArray = time.split(':');
    console.log(timeArray)
    if(timeArray[0] > 23) {
        return false
    }else if (Number(timeArray[1]) > 59 ) {
        return false;
    }

    return true ;
}

console.log(isValidTime('24:00'))
console.log(isValidTime('23:00'))