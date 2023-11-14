function isValidHour(str){

  const regex = /^(2[0-3]|1[0-9]|0[0-9]):([0-5][0-9]):([0-5][0-9])$/

  return regex.test(str);
}
// "11:35:30"
/* ÉNONCÉ 📚 */


/*
  Créez un algorithme qui détecte si la chaîne de caractères qu'on lui passe est une date au format hh:mm:ss ou pas.
  Retourne true si c'est vrai et false si c'est faux.
*/


/* Tests à passer 🧪 */

console.log(isValidHour("11:35:30")); // true
console.log(isValidHour("90:90:90")); // false
console.log(isValidHour("qsdljqslkdjqslkjdqsklj")); // false










