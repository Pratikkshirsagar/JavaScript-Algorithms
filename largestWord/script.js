function largesrWord(str) {
    let filteresArray = str.replace(/[\W_]/g, ' ').split(' ')
    let largest = '';
    filteresArray.forEach(word => {
        largest = word.length > largest.length ? word : largest
    });
        return largest

    }

function largesrWord2(str) {
        let largestArray = str.replace(/[W_]/g, ' ')
        let large= ''

        for(let i = 0; i < largestArray.length; i++){
            if(large.length < largestArray[i]) {
                return largestArray
            }
        
        }

        return large
    }

   

console.log(largesrWord2('Ready, steady, go!'))



console.log(largesrWord('Ready, steady, go!'))