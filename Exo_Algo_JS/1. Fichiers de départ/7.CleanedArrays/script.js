
// Avec filter()

// function removeDuplicates(arr) {

//   return arr.filter((item, index) => arr.indexOf(item) === index)

// }

// ↓ Fonction flèchée
// const removeDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) === index)


// Avec reduce()

// const removeDuplicates = arr => arr.reduce((acc, cur) => acc.indexOf(cur) < 0 ? [...acc, cur] : acc, []);


// Avec new Set() → permet de créer des ensembles de valeurs uniques dans un objet spécial

const removeDuplicates = arr => [...new Set(arr)];

console.log([...new Set([1,2,2,2,2,3])]); // → retourne [1, 2, 3]
console.log(new Set("1222223")); // → retourne {'1', '2', '3'}

/* ÉNONCÉ 📚 */


/* Créez un algorithme qui retourne un tableau sans les valeurs doublon de celui qui est passé en argument. */


/* Tests à passer 🧪 */

console.log(removeDuplicates([5,5,4,6,3,5]));               // [5, 4, 6, 3]
console.log(removeDuplicates(["a","b","z","z","e","a"]));   // ["a", "b", "z", "e"]




