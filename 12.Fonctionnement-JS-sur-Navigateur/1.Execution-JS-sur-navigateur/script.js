/* Visualisons maintenant ces contextes d'exécutions en pratique */

/* 1. Le hissage(hoisting) ou la mise en mémoire. */

foo() // J'ai accès à ma fonction avant que sa ligne ne soit exécutée
function foo(){
  console.log("Foo")
}

console.log(age) // Le hissage d'une var ne prend pas en compte sa valeur lors de la phase de création, ce qui veut dire qu'on y a accès pendant la phase d'exécution, mais que sa valeur est undefined jusqu'à que le moteur JS atteigne sa ligne et l'initialise.
var age = 15

// console.log(color) // let et const se font aussi hissées, mais un mécanisme du moteur JS nous empêche de pouvoir les lire avant qu'elles ne soient initialisées.
// Cela prévient beaucoup de potentiels bugs.
let color = "purple"
console.log(color)

/* Le hissage a aussi lieu avec les contextes d'exécution de fonction !  */

var fruit = "🍏";
function logger() {
    console.log(fruit); // ? undefined !
    // Comme pour un contexte global, on tente de lire une var avant son initialisation.
    // Elle a été mise en mémoire, certes, mais sa valeur n'a toujours pas été affectée.
    var fruit = "🍎";
}
logger();


/* 2. Le mot clé this */

/* Le mot-clé this a beaucoup de fonctionnements possibles suivant son utilisation dans le code, mais un de ses principaux fonctionnements est en rapport avec les EC. */

function wiz(){
  console.log(this)
}
wiz() // ? window

/* 
  Une propriété this est créée et mise en place dans un environnement record lors de la phase de création de la fonction wiz.

  Cette propriété pointe vers l'objet qui contient cette fonction ou vers l'objet global dans le cas de l'environnement global.

  Ici, c'est l'objet global window qui appelle wiz, c'est comme si on avait écrit window.wiz() 

  Tout ce qui est appelé sans un autre préfixe que window est considéré comme venant de l'objet window.
*/

const obj = {
  faz: function(){
    console.log(this)
  }
}
obj.faz() // obj


/*
    Attention, les EC des fonctions fléchées ne créent pas de propriété this, ni d'objet argument.

    L'utilisation de this dans une FF se résout donc en regardant le contexte d'exécution parent, qui est soit une autre fonction (fléchée ou classique), soit le contexte global.
*/

const maz = () => console.log(this)

maz() // window, car maz est une propriété(cachée) de window


const container = {
   far: function(){
    const piz = () => {
      console.log(this)
    }
    piz() // container, car elle lit le this de far(), qui est une fonction classique ayant un this pointant vers container.
  }
}
container.far()