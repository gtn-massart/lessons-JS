// function differences(arr1, arr2) {

//   const result = []

//   const check = (first, second) => {
//     for(let i = 0; i < first.length; i++) {
//       if(second.indexOf(first[i]) === -1) {
//         result.push(first[i])
//       }
//     }
//   }

//   check(arr1, arr2)
//   check(arr2, arr1)

//   return result;
// }

const differences = (arr1, arr2) => arr1.filter(el => !arr2.includes(el)).concat(arr2.filter(el =>  !arr1.includes(el)))


/* ÉNONCÉ 📚 */

/*
Codez un algorithme qui retourne les différences entre les deux tableaux qu'il reçoit en argument.
Retournez ces différences dans un nouveau tableau.
*/


/* Tests à passer 🧪 */

console.log(differences([1, 2, 3, 5], [1, 2, 3, 4, 5]));     //  [ 4 ]
console.log(differences(["x", "a", "c"], ["m","k","l"]));    //  [ 'x', 'a', 'c', 'm', 'k', 'l' ]
console.log(differences([999,777], [777,444,111]));          //  [ 999, 444, 111 ]
  