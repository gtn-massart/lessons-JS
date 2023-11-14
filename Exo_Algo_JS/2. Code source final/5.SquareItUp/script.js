// function squareDigits(num){
//     return Number(('' + num).split("").map(val => val * val).join(""))
// }

// const squareDigits = num => Number(('' + num).split("").map(val => val * val).join(""))

const squareDigits = num => +num.toString().split("").map(val => val * val).join("")




/* ÉNONCÉ 📚 */


/*
  Retournez chaque chiffre que contient le nombre passé en argument au carré et concaténez-les. 
  Retournez le nombre concaténé final.
*/


/* Tests à passer 🧪 */

console.log(squareDigits(5225));    // 254425
console.log(squareDigits(5555));    // 2525252525
console.log(squareDigits(1111));    // 1111