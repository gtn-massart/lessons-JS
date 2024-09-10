/* 
    Les classes peuvent hériter d'une autre classe, c'est-à-dire d'un autre prototype.

    C'est le même fonctionnement que l'héritage de prototype des fonctions constructeur que nous avons vu précédemment, et c'est la même chose qui se passe sous le capot.
*/

class Human {
    constructor(arm, leg){
        this.arm = arm
        this.leg = leg
    }
    walk(){
        console.log("Walk");  
    }
    think(){
        console.log("think");  
    }
}

const human1 = new Human(2, 2)
console.log(human1);

class Italian extends Human {
    constructor(arm, leg, name){
        super(arm, leg)
        this.name = name
    }
    cookingPasta(){
        console.log("🍝");  
    }
    cookingPizza(){
        console.log("🍕");  
    }
}

const italian1 = new Italian(2, 2, "Gaetano Massaro")
console.log(italian1);
 