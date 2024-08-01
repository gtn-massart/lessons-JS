/*  
    1. Les fonctions callback.

    Une fonction peut recevoir une autre fonction en argument, on appelle ces fonctions des "fonctions callback".

*/

const database = [
  {
    name: "Ana",
    age: 26
  },
  {
    name: "Paul",
    age: 19
  },
  {
    name: "Pablo",
    age: 38
  }
];

// Coder une fonction qui vérifie l'âge d'un ensemble d'objets dans un tableau.
// Elle retournera false au premier membre qui a moins de 18 ans.

function areLegal(arr, callback){

  for(let i = 0; i < arr.length; i++) {
    if(!callback(arr[i].age)){
      return false;
    }
  }

  return true;
}

// on peut tester toute sorte d'age.
console.log(areLegal(database, age => age >= 18));
console.log(areLegal(database, age => age >= 21));
console.log(areLegal(database, age => age >= 30));