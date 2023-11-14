/* 
    1. Spread operator

    La syntaxe de décomposition permet de copier les valeurs d'un élément itérable, comme un tableau, une chaîne ou un objet.
    C'est très pratique pour effectuer une copie superficielle ou afficher une liste.
*/



// si une propriété est rajoutée alors qu'elle provient d'un objet copié, elle sera remplacée.


// Fonctionne également avec les chaînes de caractères


/* 
    2. Destructuring.
  
    L'affectation par décomposition consiste à créer des variables à partir des propriétés d'un objet ou des éléments d'un tableau.

*/

/* A. Affecter les propriétés d'un objet. */

const userObj = {
  userName: "Karl",
  age: 44,
  country: "Germany"
}



// Donner un nom différent aux constantes


// Donner des valeurs par défaut, au cas où les props n'existent pas.


// Combiner un nom différent et des valeurs par défaut.

// Affecter les props d'un objet attendu en paramètre

const numbers = {
  num1: 50,
  num2: 100
}



/* B. Affecter les valeurs d'un tableau. */

const animals = ["cat","dog","mouse","lion"];


// valeur par défaut et ignorer des valeurs
const fruits = ["strawberry","grapes","banana","apple"];


// affecter le reste d'un tableau
const [student, ...marks] = ["Adrien", 10,10,12,14,15,17];
