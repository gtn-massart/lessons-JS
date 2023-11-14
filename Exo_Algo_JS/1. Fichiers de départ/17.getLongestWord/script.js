// function getLongestWord(str) {

//   const arrFromStr = str.split(" ");
//   let longestLength = 0;

//   for (let i = 0; i < arrFromStr.length; i++) {
    
//     if(arrFromStr[i].length > longestLength) {
//       longestLength = arrFromStr[i].length;
//     }    
//   }
//   return longestLength
// }

// ↓ ONE LINE

const getLongestWord = str => str.split(" ").reduce((acc, cur) => Math.max(acc, cur.length), 0)

/* ÉNONCÉ 📚 */


/* Trouvez la longueur du mot le plus long dans une phrase et retournez-la. */


/* Tests à passer 🧪 */

console.log(getLongestWord("Du sublime au ridicule il n'y a qu'un pas.")); // 8
