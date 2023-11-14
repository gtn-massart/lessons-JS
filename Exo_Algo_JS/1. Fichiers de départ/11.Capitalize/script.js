function capitalize(str) {

  const lowerCaseArray = str.toLowerCase().split(" ");

  const results = lowerCaseArray.map( word => {
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase())
  })

  return results.join(" ");
}


/* ÉNONCÉ 📚 */


/* 
Créez un Algorithme qui prend une phrase en argument et qui retourne cette même phrase avec la première lettre de chaque mot en majuscule.
*/


/* Test à passer 🧪 */

console.log(capitalize("Les sanglots longs des violons de l'automne...")); // Les Sanglots Longs Des Violons De L'automne...

