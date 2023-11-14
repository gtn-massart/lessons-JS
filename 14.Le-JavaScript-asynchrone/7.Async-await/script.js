/*
    Les mots clés async/await vont changer le comportement d'une fonction.
*/

/*
   Lorsqu'on rajoute async devant une fonction, celle-ci va toujours retourner une promesse, comme une méthode .then().
   Cela va nous permettre de potentiellement enchaîner des .then() à cette dernière.
*/

// async function foo(){
//   return "Hello World"
// }
// console.log(foo()) // promesse fulfiffed
// // équivalent à 
// function foo(){
//   return new Promise((resolve) => resolve("Hello world"))
// }
// console.log(foo())

// // On peut donc enchaîner des .then à l'exécution de foo()
// foo().then(val => console.log(val))


/*
    Mais la fonctionnalité la plus intéressante se situe au niveau du mot clé await.
    Lorsqu'on rajoute async devant une fonction, cela nous donne accès au mot clé await à l'intérieur de cette dernière.
    'await' permet de mettre en pause l'exécution de cette fonction en attendant le résultat d'une promesse, tout en laissant le script global s'exécuter.

    La valeur de await devient la valeur de résolution ou de rejet de la promesse.
*/





