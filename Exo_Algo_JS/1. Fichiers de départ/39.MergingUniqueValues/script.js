function merging() {

}


/* ÉNONCÉ 📚 */

/*
  Codez un algorithme qui fusionne les tableaux qu'il reçoit en argument en un seul tableau contenant seulement des valeurs uniques, tout en respectant l'ordre initial des éléments, et qui retourne ce tableau.
*/

/* Tests à passer 🧪 */

console.log(merging([1,2,3],[4,5,6],[7,8,9]));      // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(merging(["z","a","z"],["a","z","z"]));  // [ 'z', 'a' ]  
console.log(merging([65,45,78,95],[65,45,78,95]));  // [ 65, 45, 78, 95 ]