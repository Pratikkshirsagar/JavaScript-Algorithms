function areSimilar(a, b) {
  let finalResult = 0
 a.forEach(el => b.forEach(el2 => {
   if(el === el2){
     finalResult++
   }
 }))
 return finalResult === a.length
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));