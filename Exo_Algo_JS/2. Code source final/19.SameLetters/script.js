
// const sameLetters = arr => arr[1].split("").every(el => arr[0].includes(el))


/* ÉNONCÉ 📚 */

/*
   Créez un Algorithme qui vérifie si le premier argument contient au moins une fois toutes les lettres du second, si oui, on retourne true, sinon on retourne false.
 */

/* Tests à passer 🧪 */

// console.log(sameLetters(["concupiscence", "sens"]));  // true
// console.log(sameLetters(["chat", "chien"]));          // false
// console.log(sameLetters(["bonjour", "jour"]));        // true



function median(a) {
  a.sort((a, b) => a - b).mid = Math.floor(a.length / 2)
  console.log(a)
	return (a[a.mid] + a[a.mid - ((1 + a.length) % 2)]) / 2
}

console.log(
  median([1,2,3,4,5])
);
// let a = [1,2,3]
// a.test = 5
// console.log(
//   a
// );