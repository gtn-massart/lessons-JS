/* 
    Une expression est une unité de code valide qui est résolue en une valeur(number, string, boolean, object, etc...) par l'ordinateur.
    Une expression peut être un calcul, une comparaison ou un simple morceau de code "abc".

    80 + 60       // Calcul évalué à 140 
    50 === 50     // cette comparaison(expression) retourne true
    "abc"         // Code évalué par votre machine en "abc"(chaîne de caractères)

    Si on peut le console.log(), c'est une expression.
    Si ça retourne une erreur, c'est une instruction.
*/

console.log(100 > 50);
console.log(80 + 60 === 140);
console.log(45 + 10 + 40);

function foo(){
    return 10 * 10;
}
console.log(foo());




/* 
Une instruction (statement), est une action que doit réaliser la machine qui exécute le code en question. 

Il existe différents types d'instructions.

Les instructions de contrôle de flux :
if...else, switch, try...catch

Les déclarations :
var, let, const

Les fonctions et les classes :
function, class, return, async function

Les itérations : 
for, do...while, while, for...in/of
*/

// Instruction if
if(50 > 10) {
    console.log("50 est supérieur à 10");
}

// Déclaration de function 
function foo2() {
    return 5 * 5;
}
console.log(foo2());

// Déclaration d'une constante
const userName = "Gaëtan";
console.log(userName);
