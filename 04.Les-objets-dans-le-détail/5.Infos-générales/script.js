/*
    1. Le mot clé delete.

    On peut supprimer une propriété d'un objet à l'aide du mot clé delete.
*/

const city = {
  name: "Bratislava",
  population: 424000
}
console.log(city);

// ↓ supprime la propriété
delete city.name;
console.log(city);


/* Attention, utiliser delete avec la propriété d'un tableau va remplacer l'élément supprimé par un élément empty */

const arr = [1,2,3];
console.log(arr);

delete arr[0];
console.log(arr);



/* 
    2. Bracket et dot notation.

    On peut sélectionner des propriétés en utilisant deux notations.
   
    A. Le point : obj.prop
    La dot notation, en utilisant directement le nom d'une propriété.
    La dot notation n'est pas disponible avec une chaîne de caractère ou un nombre, dans ce cas il faut utiliser la bracket notation.

    B. Les crochets [] : obj["prop"]
    C'est la bracket notation.
    Si vous utilisez un autre type qu'une chaîne entre les crochets, il sera converti en chaîne. obj[1] donnera obj["1"]

*/

const dog = {
  name: "Riki",
  legs: 4,
  10: 999
}

console.log(dog.name);
console.log(dog[10]);

/* 
    3. Forme raccourcie des méthodes.

    On peut utiliser des fonctions classiques et les fonctions fléchées dans les objets, voyons les différentes syntaxes.
*/

const robot = {
  // fonction classique
  aim: function() {
    console.log("Aiming");
  },

  // fonction raccourcie (2015+)
  shoot() {
    console.log("Bang");
  },

  // fonction flèchée
  run: () => console.log("Runnning")
}



/* 
    4. Les tableaux sont des objets.

    Les tableaux sont des objets spéciaux permettant de manipuler plusieurs valeurs facilement et contenant toute une floppée de méthodes très pratiques.

    Chaque élément est accessible par son index, nous sommes donc en présence d'une propriété - valeur. 

    // Cela ressemble beaucoup à un objet n'est-ce pas ?
    [
      0: "🍓",
      1: "🍌",
      2: "🍇"
    ]

    Ils ont également une propriété length.
    On accède aux propriétés d'un tableau via la bracket notation, avec des nombres (les index).

*/

const fruits = ["🍓","🍌","🍇"]

console.log(fruits);
console.log(typeof fruits);
console.log(fruits[1], fruits["1"]);

fruits.test = "test";
console.log(fruits);


/* 
    5. Les fonctions sont des objets.

    En JavaScript, on dit que les fonctions sont des first-class objets, car elles peuvent être appelées, passées à d'autres fonctions(paramètres-arguments), et qu'elles contiennent aussi des propriétés.
    Les fonctions sont des objets créés à partir du constructeur Function.

*/

function foo() {
  console.log("Hello");
}

console.log(foo);
console.dir(foo);

// ↓ on peut aussi ajouter des propriétés a une fonction.
foo.customProp = "CustomProp";
console.dir(foo);
