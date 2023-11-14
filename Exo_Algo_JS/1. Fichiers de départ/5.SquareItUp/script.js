// function squareDigits(num){

//   return Number(num.toString().split("").map(el => el * el).join(""));

// }

// ↓ Fonction flèchée
const squareDigits = num => Number(num.toString().split("").map(el => el * el).join(""));

/* ÉNONCÉ 📚 */


/*
  Retournez chaque chiffre que contient le nombre passé en argument au carré et concaténez-les. 
  Retournez le nombre concaténé final.
*/


/* Tests à passer 🧪 */

console.log(squareDigits(5225));    // 254425
console.log(squareDigits(5555));    // 2525252525
console.log(squareDigits(1111));    // 1111