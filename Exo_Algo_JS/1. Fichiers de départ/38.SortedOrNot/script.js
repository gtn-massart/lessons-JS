function isSorted(arr) {

}

/* ÉNONCÉ 📚 */

/* 
  Créez un algorithme qui détermine l'ordre de tri du tableau passé en argument.
  Si le tableau est dans l'ordre croissant, retournez :   "yes, ascending"
  Si le tableau est dans l'ordre décroissant, retournez : "yes, descending"
  Si le tableau n'est pas trié, retournez "no".
*/

/* Tests à passer 🧪 */

console.log(isSorted([1, 2, 3, 4, 5, 6]));  // "yes, ascending"
console.log(isSorted([6, 5, 4, 3, 2, 1]));  // "yes, descending"
console.log(isSorted([654, 124, 874]));     // "no"
