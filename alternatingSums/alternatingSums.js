function alternatingSums(a) {
 let even = 0;
 let odd = 0;

 a.forEach((el,index) => {
   if(index %2 === 0){
     even += el
   }else {
     odd += el
   }
 })
 return [even,odd]
}

console.log(alternatingSums([50, 60, 60, 45, 70]))