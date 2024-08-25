/* 
    Quelques fonctionnalités syntaxiques ont été rajoutées aux objets à partir de 2015.
*/

//  Rajouter une fonction classique

const obj = {
  oldVersion: function(){

  },
  newVersion() {

  },
  arrow: () => {

  }
}


// Rajouter des propriétés facilement.

const userName = "Lucie";
const age = 24;

// création de propriété
const user = {
  // userName: userName,
  // age: age
  userName,
  age
}
console.log(user);



// Utiliser une expression pour créer une prop

let category = "industry";
const plant = {
  id: 547,
  [category]: "Microship"
}

console.log(plant);
