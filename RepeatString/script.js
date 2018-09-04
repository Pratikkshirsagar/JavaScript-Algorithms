function numberOfTimes(str, num) {
    let repetedString = ''

    while (num > 0) {
        repetedString = repetedString.concat(str);
        num--;
      }

      return repetedString
    }



console.log(numberOfTimes('Pratik', 2))



function numberOfTimes2(str, num) {
    return str.repeat(num)
}
console.log(numberOfTimes2('Pratik', 2))