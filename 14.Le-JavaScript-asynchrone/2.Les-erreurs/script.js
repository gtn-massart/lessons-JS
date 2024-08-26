/*
  Plusieurs types d'erreurs existent de base en JavaScript.
  Lorsqu'elles ont lieu, elles bloquent l'exécution totale du script et retournent une erreur.

  On peut envoyer des erreurs de différentes manières
  
  throw *expression* 
  
  throw Error(*expression*) // fonction déclenchant une erreur et retournant un objet contenant l'expression plus une information sur l'origine de l'erreur

  throw new Error(*expression*) // Similaire à throw Error() mais étant appelée sous la form d'un constructeur
*/

function foo() {
  console.log("FOO");
  // throw "Abc"
  // throw Error("Abc")
  // throw new Error("Abc");  
}
foo()

console.log("Après foo");
console.log("Après foo");
console.log("Après foo");


/*
    Il existe une série d'instructions permettant de tester du code et de gérer les erreurs si elles ont lieu.
    C'est le try...catch...finally
    Si une erreur a lieu dans le bloc try{}, elle déclenchera l'exécution du bloc catch{} et n'annulera pas l'exécution du reste du script.

    On pourra également récupérer les données de l'erreur.
 */

try {
  let a =555
  if (typeof a !== 'string') {
    // throw "Erreur: Ce n'est pas un chaîne de charactère"
    throw Error("Erreur: Ce n'est pas un chaîne de charactère") 
    // throw new Error("Erreur: Ce n'est pas un chaîne de charactère")
  }
}
catch(e) {
  console.log(e);
  console.dir(e)
}
finally{
  console.log("Je suis 'finally' et je suis exécuté quoi qu'il arrive")  
}

// Les instructions try catch permettent de ne pas bloquer l'exécution du reste du code s'il y a une erreur.

console.log("After try catch")
// console.log("After try catch")
// console.log("After try catch")
// console.log("After try catch")