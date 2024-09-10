/* 
    Un système de classe a été rajouté en 2015 en JavaScript.

    Le but est d'utiliser une syntaxe plus simple et compréhensible que les fonctions constructeur, tout en faisant la même chose sous le capot.

    Le terme "sucre syntaxique" est beaucoup utilisé pour définir ce genre d'ajout. 
*/

class Planet{
    constructor(name, radius, color){
        this.name = name
        this.radius = radius
        this.color= color
    }
    // ↓ le fonction spin() s'ajoute au prototype
    spin(){
        console.log("spinning");        
    }
}

console.log(typeof Planet);
console.dir(Planet)

const mars = new Planet("Mars", 3400, "Red")
console.log(mars);
mars.spin()
