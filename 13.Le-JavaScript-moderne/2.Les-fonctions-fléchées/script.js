/* 
    Redécouvrons ensemble les fonctions fléchées et leurs différences avec les fonctions classiques.
*/

/* 
    1. Syntaxe.
    La syntaxe est moins chargée, pouvant ainsi être plus facilement utilisée en tant qu'argument.
*/

    // Notez le return implicite quand on n'utilise pas de parenthèse !
    // const logger = a =>[RETURN] console.log(a)
    // const logger = a => console.log(a)

    // Si vous voulez retourner un objet avec un return implicite, il faut utiliser les parenthèses comme ceci 

    // const returnObj = a => ({a})
    
    // Si vous n'avez qu'un paramètre, pas besoin de parenthèses
    // const foo = a => a
    // const add = (a,b) => a + b

    // const arr = ["🍓","🍍","🥭","🍊"]

    // avec FF
    // arr.forEach(fruit => console.log(fruit))
    
    // fonction classique
    // arr.forEach(function(fruit){console.log(fruit)})
    
    // impossible de déclarer une fonction fléchée nommée, on doit l'affecter à une variable sous la forme d'une expression de fonction

    // ff() => console.log("Je suis une FF") // erreur
    // const ff = () => console.log("Je suis une FF !")


/* 
    2. Le mot clé this avec les fonctions.

    this est créé au moment de l'exécution des fonctions classiques, lors de la création d'un contexte d'exécution de fonction, FEC(function execution context).

    Une propriété du contexte est créée et elle pointe vers l'objet qui a appelé cette fonction ou vers l'objet global si elle n'est pas explicitement appelée par un objet.  

    Quant aux fonctions fléchées, le contexte d'exécution créé lors de leur exécution ne crée tout simplement pas de this.
    Elles vont donc soit utiliser le this d'une fonction fléchée parent, soit utiliser le this global, c'est-à-dire l'objet window.
*/

// const obj = {
//   game: "StarCraft 2",
//   foo: function(){
//     console.log(this) // obj
//     console.log(this.game) // "StarCraft 2"

//     const arrowInClassicFunction = () => {
//       console.log(this) // obj (n'ayant pas de "this", elle essaye de le trouver dans l'environnement parent pour résoudre l'identifiant)
//       console.log(this.game) // "StarCraft 2"
//     }
//     arrowInClassicFunction()
//   },
//   bar: () => {
//     console.log(this) // window
//     console.log(this.game) // undefined
//   }
// }

// obj.foo()


/* 
    4. arguments

    Comme pour this, une propriété 'arguments' est disponible avec les fonctions classiques.
    
    Elle représente les arguments passés à la fonction.

    Et comme this, les FF ne créent pas ce genre de propriété dans l'ER de leur contexte d'execution.
*/

// function faz(){
//   console.log(arguments); // liste des arguments
// }
// const foz = () => {
//   console.log(arguments); // Erreur
// }
// faz(5,true,[1,2,3])
// foz("abc","zzz","be")