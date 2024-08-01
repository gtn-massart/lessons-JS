/* 
    1. En JavaScript, certaines valeurs vont être converties en valeurs d'un autre type lorsqu'on les utilise dans des opérations ou des conditions, c'est la coercition de type. (type coercion).
*/

const nb1 = 150;
const nb2 = "150";

// ↓ si nb1 est égale en valeur à nb2 → nb2 a été converti en nombre
if(nb1 == nb2) {
    console.log("Instruction exécutée");
}

// ↓ si nb1 est égale en type et valeur à nb2
if(nb1 === nb2) {
    console.log("Instruction non exécutée");
}


// ↓ additionner un number avec une string va concaténer les deux valeurs, le number sera converti en string
console.log( 1 + "10" );    //"110"

// ↓ dans tous les autres cas la string sera convertie en nombre
console.log(12 / "6");      //2  
console.log(2 * "3");       //6
console.log( 10 - "6");     //4