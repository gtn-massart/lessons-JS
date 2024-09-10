/* 
  Par défaut, tous les objets héritent du prototype du constructeur Object.

  C'est-à-dire que la chaîne de prototypes se terminera toujours par le prototype Object.

  Mais on peut rajouter autant de maillons qu'on veut à cette chaîne.
  
  Le but de cette approche est de faire hériter plusieurs ensembles de méthodes et de propriétés pratiques.

  Par exemple, lorsqu'on construit un tableau, on hérite à la fois du prototype du constructeur Array, mais aussi du constructeur Object.

*/

const arr = ['a', 'b', 'c']
console.log(arr);


/*
    On peut créer une chaîne de prototypes soi-même.
*/

function Human(arm, leg){
  this.arm = arm
  this.leg = leg
}
Human.prototype.walk = function(){
  console.log("Walk");  
}
Human.prototype.think = function(){
  console.log("think");  
}
const human1 = new Human(2, 2)
console.log(human1);


function Italian(name) {
  Human.call(this, arm, leg)
  this.name = name
}

Object.setPrototypeOf(Italian.prototype, Human.prototype)

Italian.prototype.lang = "Italian"
Italian.prototype.cookingPasta = function(){
  console.log("🍝");  
}
Italian.prototype.cookingPizza = function(){
  console.log("🍕");  
}
const italian1 = new Italian("Giovanni Madazzo")
console.log(italian1);


console.dir(document.querySelector("h1"));
