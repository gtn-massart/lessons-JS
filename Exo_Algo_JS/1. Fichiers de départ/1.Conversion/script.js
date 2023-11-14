// function conversion(deg) {

//     if(typeof deg === 'number') {
//         return Math.trunc(deg * (9/5) + 32);
//     }
//     else {
//         return "Données en entrée non-correctes";
//     }
// }

// ↓ avec les fonctions flèchées, le RETURN est IMPLICITE SI il n'y a qu'UN SEUL RETURN (pas de let, const, etc...).
const conversion = deg => typeof deg === 'number' ? Math.trunc(deg * (9/5) + 32) : "Données en entrée non-correctes";

// ↓ en incluant le return
// const conversion = deg => {
//     return typeof deg === 'number' ? Math.trunc(deg * (9/5) + 32) : "Données en entrée non-correctes";
// } 



/* ÉNONCÉ 📚 */


/* 
Créez un algorithme qui sert à convertir des degrés Celsius en degrés Fahrenheit.
Le résultat doit être de type nombre, sans chiffre après la virgule.
Si on donne un autre type qu'un nombre en argument, vous devez retourner "Données en entrée non-correctes."

Formule pour convertir les degrés Celsius en degrés Fahrenheit : (degCel * (9/5) + 32);
*/


/* Tests à passer 🧪 */

console.log(conversion(-37));       // -34
console.log(conversion(14));        // 57
console.log(conversion(0));         // 32
console.log(conversion("abc"));     // Données en entrée non-correctes.


