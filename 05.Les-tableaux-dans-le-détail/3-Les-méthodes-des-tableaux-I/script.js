/* 
    1. Les méthodes des tableaux.

    Les méthodes associées à tous les tableaux via leur prototype font partie des raisons de leur existence.
    
    Elles sont très pratiques et il est très important de les connaître.
    On peut les apercevoir dans le prototype des tableaux, en affichant un tableau dans la console.

    Ce prototype est attaché à chaque fois qu'on instancie un tableau.

    Ex : const arr = [1,2,3]

    Découvrons les principales méthodes des tableaux.
*/

/* 
    1. Array.prototype.forEach(callback(element, index, array))

    Définition: Exécute une fonction callback sur chaque élément d'un tableau.
    
    La callback est TOUJOURS appelée avec TOUS les paramètres.
    C'est au dev de choisir celui ou ceux qu'il veut utiliser.

    Valeur de retour : undefined

*/

const numbers = [1,2,3,4,5,6]

// ↓ j'ai besoins de l'index donc même si je n'ai pas besoins de el je dois le mettre quand-même (el, index, array)
numbers.forEach((el, index) => numbers[index] = numbers[index] * 2);

console.log(numbers);


/* 
    2. Array.prototype.map(callback(element, index, array))
    
    Définition: Permet de retourner un nouveau tableau contenant les résultats du retour d'une fonction callback appelée sur chaque élément d'un tableau.

    Valeur de retour : un NOUVEAU TABLEAU contenant le retour de chaque appel de la fonction callback.

*/

const people = [
  {
    name: "Pedro",
    age: 25
  },
  {
    name: "Sara",
    age: 26
  },
  {
    name: "Maria",
    age: 27
  }
]

const names = people.map(people => people.name);

console.log(names);



/* 
    3. Array.prototype.filter(callback(el, index, array))

    Valeur de retour : Un tableau contenant les éléments ayant passés le test de retour de la fonction callback.
    Si la fonction retourne true, on garde l'élément dans le tableau retourné, sinon on l'ignore.

    Permet de filtrer les éléments d'un tableau.
*/

const heights = [170,185,198,162,187,155,178,207,201,189]

const above180 = heights.filter(height => height > 180);
const above190 = heights.filter(height => height > 190);

console.log(above180);
console.log(above190);