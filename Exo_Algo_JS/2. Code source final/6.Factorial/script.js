function factorial(num) {
  if(num === 0 || num === 1) return 1;

  for(let i = num - 1; i >= 1; i--) {
    // num = num * i;
    num *= i;
  }
  return num;
}

/* ÉNONCÉ 📚 */

/*
 Créez un algorithme qui va calculer la factorielle d'un nombre qu'on lui passe en argument.
 Par exemple, la factorielle de 5 est égale à :  1 * 2 * 3 * 4 * 5 = 120.
 C'est le produit de tous les entiers qui précèdent ou qui sont égaux à N.
 La factorielle de 0 et de 1 est égale à 1.
*/


/* Tests à passer 🧪 */


console.log(factorial(5));  // 120
console.log(factorial(7));  // 5040
console.log(factorial(9));  // 362880


