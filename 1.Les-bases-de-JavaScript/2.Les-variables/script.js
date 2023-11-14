/* 
    Une variable est le nom d'un emplacement dans la mémoire de votre ordinateur permettant de stocker des valeurs et de les utiliser dans le code. 
*/

/* ⚠️ Le signe = est là pour ASSIGNER une valeur à la variable et non pour démontrer un égalité  */
/* ⚠️  Le nom d'une variable doit être EXPLICITE, COMPRÉHENSIBLE et EN ANGLAIS pour une meilleure maintenabilité */

/* *** let *** */
/* let permet de réassigner une valeur de n'importe quel type (string, num, bool, ...) à la variable */
let mainCharacter = "Gaëtan";
console.log(mainCharacter);

mainCharacter = 12345;
console.log(mainCharacter);

mainCharacter = true;
console.log(mainCharacter);

/* ⚠️Impossible d'utiliser let et const avant de les déclarer */


/* ⚠️Impossible de redéclarer une let ou const avec le même nom */


/* *** const *** */
/* const ne permet pas de modifier la valeur ni le type de la variable */
const userName = "David";
console.log(userName);

/* ↓ Envoie une erreur dans la console (script.js:31 Uncaught TypeError: Assignment to constant variable.) */
// userName = "Gaëtan"; 

/* ⚠️ Attention, on ne peut pas déclarer de constante sans les initialiser, contrairement aux var et let. */
let dogName; // → valeur Undifined par défaut. 
dogName = "Jim";
console.log(dogName);

/* ↓ Envoie une erreur dans la console (Uncaught SyntaxError: Missing initializer in const declaration (at script.js:44:7)) */
//const catName;
//catName = "Chachatte"


/* *** var *** */
/* var va fonctionner comme un let, la grosse différence vient du scope */
/* ⚠️ var va permettre de déclarer 2 variables du même nom */
/* On évite var au maximum sauf pour de rares exceptions */
var test = "test"
console.log(test);

test = 123;
console.log(test);

