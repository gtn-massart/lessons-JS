/* 
    1. Spread operator

    La syntaxe de décomposition permet d'utiliser les valeurs d'un élément itérable, comme un tableau, une chaîne ou un objet.
    C'est très pratique pour effectuer une copie superficielle ou afficher une liste.
*/

const array = [1,2,3];
// console.log(...array);

const shallowArrayCopy = [...array,4,5,6];
// console.log(shallowArrayCopy);

const obj = {
  name: 'Laura',
  age: 26,
  array: [1,2,3]
}

const shallowObjCopy = {...obj, dogName: "Jim"};
// console.log(shallowObjCopy);


// si une propriété est rajoutée alors qu'elle provient d'un objet copié, elle sera remplacée.

// const shallowObjCopy2 = {...obj, name: "Anna", array: [...obj.array]};
// console.log(shallowObjCopy2);
// obj.array.push(4)
// console.log(shallowObjCopy2);


// Fonctionne également avec les chaînes de caractères

// const str = "Bonjour le monde";
// const strCopy = [...str]
// console.log(strCopy);


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

const {userName, age, country} = userObj;
// console.log(userName, age, country);


// ↓ Donner un nom différent aux constantes

// const {userName: mainName, age: exactAge, country: origin} = userObj;
// console.log(mainName, exactAge, origin);

// ↓ Donner des valeurs par défaut, au cas où les props n'existent pas.

// const {coutry, sport = "Football", beverage = "Beer"} = {country: "Germany"};
// console.log(country, sport, beverage);

// ↓ Combiner un nom différent et des valeurs par défaut.

const {userName: mainName = "Hanz"} = {userName: "Anna", height: 180};
console.log(mainName);


// Affecter les props d'un objet attendu en paramètre

const numbers = {
  num1: 50,
  num2: 100
}

function foo({num1, num2}) {
  return num1 + num2;
}

console.log(foo(numbers));



/* B. Affecter les valeurs d'un tableau. */

const animals = ["cat","dog","mouse","lion"];
const [cat, dog] = animals;
console.log(cat, dog);


// valeur par défaut et ignorer des valeurs
const fruits = ["strawberry","grapes","banana","apple"];
const [strawberry = "red", grapes = "violet",,apple] = fruits;
console.log(strawberry, grapes,apple);


// affecter le reste d'un tableau
const [student, ...marks] = ["Adrien", 10,10,12,14,15,17];
console.log(student);
console.log(marks);

